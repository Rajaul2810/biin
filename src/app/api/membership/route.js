import { NextResponse } from "next/server";

const VALID_CATEGORIES = [
  "Donor Member",
  "General Member",
  "Institutional Member",
  "Youth Member",
];

const VALID_INTERESTS = [
  "AI & Data Science",
  "Policy & Advocacy",
  "Startup Incubation",
  "Research",
  "Mentorship",
  "Skills Training",
];

const VALID_DIVISIONS = [
  "Barishal",
  "Chattogram",
  "Dhaka",
  "Khulna",
  "Mymensingh",
  "Rajshahi",
  "Rangpur",
  "Sylhet",
];

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePhone(phone) {
  const cleaned = phone.replace(/[\s\-()]/g, "");
  return /^(\+?880)?0?1[3-9]\d{8}$/.test(cleaned);
}

export async function POST(request) {
  try {
    const body = await request.json();
    const membershipCategory = body.membershipCategory?.trim();
    const name = body.name?.trim();
    const idNumber = body.idNumber?.trim();
    const email = body.email?.trim();
    const phone = body.phone?.trim();
    const division = body.division?.trim();
    const areaOfInterest = body.areaOfInterest?.trim() || "";

    if (!membershipCategory || !VALID_CATEGORIES.includes(membershipCategory)) {
      return NextResponse.json(
        { error: "Please select a valid membership category." },
        { status: 400 }
      );
    }

    if (!name) {
      return NextResponse.json({ error: "Name is required." }, { status: 400 });
    }

    if (!idNumber) {
      return NextResponse.json(
        { error: "Student ID / NID / Passport number is required." },
        { status: 400 }
      );
    }

    if (!email || !validateEmail(email)) {
      return NextResponse.json(
        { error: "A valid email address is required." },
        { status: 400 }
      );
    }

    if (!phone || !validatePhone(phone)) {
      return NextResponse.json(
        { error: "A valid Bangladesh phone number is required." },
        { status: 400 }
      );
    }

    if (!division || !VALID_DIVISIONS.includes(division)) {
      return NextResponse.json(
        { error: "Please select a valid division." },
        { status: 400 }
      );
    }

    if (areaOfInterest && !VALID_INTERESTS.includes(areaOfInterest)) {
      return NextResponse.json(
        { error: "Please select a valid area of interest." },
        { status: 400 }
      );
    }

    const scriptUrl = "https://script.google.com/macros/s/AKfycbzWcAA4Zhcun1i1WDJfnn6VnInfKYumJA8LO1-WVF7B-kpeJMwf6r404XfmY6IP9wSYIQ/exec";
    if (!scriptUrl) {
      console.error("GOOGLE_APPS_SCRIPT_URL is not configured.");
      return NextResponse.json(
        { error: "Registration service is temporarily unavailable." },
        { status: 503 }
      );
    }

    const payload = {
      membershipCategory,
      name,
      idNumber,
      email,
      phone,
      division,
      areaOfInterest,
      submittedAt: new Date().toLocaleString("en-BD", {
        timeZone: "Asia/Dhaka",
      }),
    };

    if ("biin-registration-form") {
      payload.secret ="biin-registration-form";
    }

    const response = await fetch(scriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      redirect: "follow",
    });

    const text = await response.text();
    let result = {};

    try {
      result = JSON.parse(text);
    } catch {
      console.error("Invalid Apps Script response:", text);
      return NextResponse.json(
        { error: "Failed to submit registration. Please try again." },
        { status: 500 }
      );
    }

    if (!response.ok || result.error) {
      return NextResponse.json(
        { error: result.error || "Failed to submit registration." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Membership submission error:", error);
    return NextResponse.json(
      { error: "Failed to submit registration. Please try again." },
      { status: 500 }
    );
  }
}
