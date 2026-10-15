import { NextResponse } from "next/server";

const VALID_CATEGORIES = [
  "Youth Member",
  "General Member",
  "Institutional Member",
  "Donor Member",
];

const VALID_INTERESTS = [
  "AI & Data Science",
  "Policy & Advocacy",
  "Startup Incubation",
  "Research",
  "Mentorship",
  "Skills Training",
  "Industry-Academia Networking",
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
    const email = body.email?.trim();
    const membershipCategory = body.membershipCategory?.trim();
    const name = body.name?.trim();
    const organization = body.organization?.trim() || "";
    const address = body.address?.trim() || "";
    const idNumber = body.idNumber?.trim();
    const contactEmail = body.contactEmail?.trim();
    const phone = body.phone?.trim();
    const division = body.division?.trim();
    const areaOfInterest = body.areaOfInterest?.trim();
    const idFile = body.idFile || null;

    if (!email || !validateEmail(email)) {
      return NextResponse.json(
        { error: "A valid email address is required." },
        { status: 400 }
      );
    }

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

    if (!contactEmail || !validateEmail(contactEmail)) {
      return NextResponse.json(
        { error: "A valid contact email is required." },
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

    if (!areaOfInterest || !VALID_INTERESTS.includes(areaOfInterest)) {
      return NextResponse.json(
        { error: "Please select a valid area of interest." },
        { status: 400 }
      );
    }

    if (idFile) {
      if (!idFile.name || !idFile.data) {
        return NextResponse.json(
          { error: "Invalid ID file upload." },
          { status: 400 }
        );
      }
      const approxBytes = Math.ceil((idFile.data.length * 3) / 4);
      if (approxBytes > 1024 * 1024) {
        return NextResponse.json(
          { error: "Uploaded file must be 1 MB or smaller." },
          { status: 400 }
        );
      }
    }

    const scriptUrl =
      process.env.GOOGLE_APPS_SCRIPT_URL ||
      "https://script.google.com/macros/s/AKfycbzT8S1bhFNxrv_arjOLqw8bVtrv7j27QJ80ozGKyIe2EEDDXuvwtRJ8f1xhp91OnVzJ/exec";

    if (!scriptUrl) {
      return NextResponse.json(
        { error: "Registration service is temporarily unavailable." },
        { status: 503 }
      );
    }

    const payload = {
      email,
      membershipCategory,
      name,
      organization,
      address,
      idNumber,
      contactEmail,
      phone,
      division,
      areaOfInterest,
      idFile,
      submittedAt: new Date().toLocaleString("en-BD", {
        timeZone: "Asia/Dhaka",
      }),
      secret:
        process.env.GOOGLE_APPS_SCRIPT_SECRET || "biin-registration-form",
    };

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
