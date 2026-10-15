"use client";

import React, { useEffect, useMemo, useState, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import {
  HiOutlineArrowLeft,
  HiOutlineCloudArrowUp,
  HiOutlineXMark,
  HiOutlineCheckCircle,
} from "react-icons/hi2";
import logo from "../../../public/BIIN Logo-1.png";

const formCategories = [
  "Youth Member",
  "General Member",
  "Institutional Member",
  "Donor Member",
];

const areasOfInterest = [
  "AI & Data Science",
  "Policy & Advocacy",
  "Startup Incubation",
  "Research",
  "Mentorship",
  "Skills Training",
  "Industry-Academia Networking",
];

const divisions = [
  "Barishal",
  "Chattogram",
  "Dhaka",
  "Khulna",
  "Mymensingh",
  "Rajshahi",
  "Rangpur",
  "Sylhet",
];

const initialFormState = {
  email: "",
  membershipCategory: "",
  name: "",
  organization: "",
  address: "",
  idNumber: "",
  contactEmail: "",
  phone: "",
  division: "",
  areaOfInterest: "",
};

const APPS_SCRIPT_URL =
  process.env.NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_URL ||
  "https://script.google.com/macros/s/AKfycbzT8S1bhFNxrv_arjOLqw8bVtrv7j27QJ80ozGKyIe2EEDDXuvwtRJ8f1xhp91OnVzJ/exec";

const inputClass =
  "w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 text-sm transition";

function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result;
      const base64 = typeof result === "string" ? result.split(",")[1] : "";
      resolve(base64);
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function compressImageFile(file, maxBytes = 700 * 1024) {
  if (!file.type.startsWith("image/")) {
    return Promise.resolve(file);
  }

  return new Promise((resolve) => {
    const img = new window.Image();
    const objectUrl = URL.createObjectURL(file);
    img.onload = () => {
      URL.revokeObjectURL(objectUrl);
      const canvas = document.createElement("canvas");
      let { width, height } = img;
      const maxSide = 1600;
      if (width > maxSide || height > maxSide) {
        const ratio = Math.min(maxSide / width, maxSide / height);
        width = Math.round(width * ratio);
        height = Math.round(height * ratio);
      }
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, width, height);

      let quality = 0.82;
      const tryBlob = () => {
        canvas.toBlob(
          (blob) => {
            if (!blob) {
              resolve(file);
              return;
            }
            if (blob.size > maxBytes && quality > 0.4) {
              quality -= 0.12;
              tryBlob();
              return;
            }
            resolve(
              new File([blob], file.name.replace(/\.\w+$/, ".jpg"), {
                type: "image/jpeg",
              })
            );
          },
          "image/jpeg",
          quality
        );
      };
      tryBlob();
    };
    img.onerror = () => {
      URL.revokeObjectURL(objectUrl);
      resolve(file);
    };
    img.src = objectUrl;
  });
}

function validateForm(form, idFile) {
  const errors = {};

  if (!form.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "Enter a valid email address.";
  }

  if (!form.membershipCategory) {
    errors.membershipCategory = "Please select a membership category.";
  }

  if (!form.name.trim()) {
    errors.name = "Name is required.";
  }

  if (!form.idNumber.trim()) {
    errors.idNumber = "Student ID / NID / Passport number is required.";
  }

  if (!form.contactEmail.trim()) {
    errors.contactEmail = "Contact email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.contactEmail)) {
    errors.contactEmail = "Enter a valid contact email.";
  }

  if (!form.phone.trim()) {
    errors.phone = "Phone number is required.";
  } else {
    const cleaned = form.phone.replace(/[\s\-()]/g, "");
    if (!/^(\+?880)?0?1[3-9]\d{8}$/.test(cleaned)) {
      errors.phone = "Enter a valid Bangladesh phone number.";
    }
  }

  if (!form.division) {
    errors.division = "Please select a division.";
  }

  if (!form.areaOfInterest) {
    errors.areaOfInterest = "Please select an area of interest.";
  }

  if (idFile) {
    if (idFile.size > 1024 * 1024) {
      errors.idFile = "File must be 1 MB or smaller.";
    }
  }

  return errors;
}

function MembershipFormInner() {
  const searchParams = useSearchParams();
  const preselected = useMemo(() => {
    const raw = searchParams.get("category") || "";
    return formCategories.includes(raw) ? raw : "";
  }, [searchParams]);

  const [form, setForm] = useState({
    ...initialFormState,
    membershipCategory: preselected,
  });
  const [idFile, setIdFile] = useState(null);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (preselected) {
      setForm((prev) => ({ ...prev, membershipCategory: preselected }));
    }
  }, [preselected]);

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
    if (submitError) setSubmitError("");
  };

  const handleFile = (e) => {
    const file = e.target.files?.[0] || null;
    if (!file) {
      setIdFile(null);
      return;
    }
    if (file.size > 1024 * 1024) {
      setErrors((prev) => ({
        ...prev,
        idFile: "File must be 1 MB or smaller.",
      }));
      setIdFile(null);
      e.target.value = "";
      return;
    }
    setIdFile(file);
    setErrors((prev) => ({ ...prev, idFile: "" }));
  };

  const handleClear = () => {
    setForm({ ...initialFormState, membershipCategory: preselected });
    setIdFile(null);
    setErrors({});
    setSubmitError("");
    setSuccess(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm(form, idFile);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");

    try {
      let idFilePayload = null;
      if (idFile) {
        const readyFile = await compressImageFile(idFile);
        if (readyFile.size > 1024 * 1024) {
          setSubmitError(
            "File is still over 1 MB after compression. Please use a smaller image or PDF."
          );
          setIsSubmitting(false);
          return;
        }
        const base64 = await fileToBase64(readyFile);
        idFilePayload = {
          name: readyFile.name,
          mimeType: readyFile.type || "application/octet-stream",
          data: base64,
        };
      }

      const payload = {
        email: form.email.trim(),
        membershipCategory: form.membershipCategory,
        name: form.name.trim(),
        organization: form.organization.trim(),
        address: form.address.trim(),
        idNumber: form.idNumber.trim(),
        contactEmail: form.contactEmail.trim(),
        phone: form.phone.trim(),
        division: form.division,
        areaOfInterest: form.areaOfInterest,
        idFile: idFilePayload,
        submittedAt: new Date().toLocaleString("en-BD", {
          timeZone: "Asia/Dhaka",
        }),
        secret: "biin-registration-form",
      };

      // Google Apps Script blocks readable CORS responses from browsers.
      // text/plain + no-cors still delivers the POST; response is opaque.
      await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(payload),
      });

      setSuccess(true);
      setForm({ ...initialFormState });
      setIdFile(null);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      console.error("Membership submit error:", err);
      setSubmitError(
        "Could not reach Google Sheets. Check your Apps Script web app URL (Anyone access) and try again without a large file."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (success) {
    return (
      <section className="py-14 sm:py-16 bg-gradient-to-br from-slate-50 to-gray-100 min-h-[70vh]">
        <div className="max-w-xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl bg-white ring-1 ring-emerald-100 shadow-sm p-8 text-center"
          >
            <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
              <HiOutlineCheckCircle size={32} />
            </div>
            <h1 className="text-2xl font-bold text-slate-900 mb-2">
              Registration Submitted
            </h1>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Thank you for joining BIIN. We have received your application and
              will contact you soon.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/get-involved"
                className="inline-flex justify-center rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-5 py-2.5 text-sm transition"
              >
                Back to Membership
              </Link>
              <button
                type="button"
                onClick={handleClear}
                className="inline-flex justify-center rounded-xl border border-slate-200 text-slate-700 font-semibold px-5 py-2.5 text-sm hover:bg-slate-50 transition"
              >
                Submit Another
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-10 sm:py-14 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="max-w-3xl mx-auto px-4">
        <Link
          href="/get-involved"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-emerald-700 mb-6 transition"
        >
          <HiOutlineArrowLeft size={16} /> Back to membership
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="overflow-hidden rounded-2xl bg-white ring-1 ring-slate-100 shadow-sm"
        >
          <div className="bg-slate-900 px-5 sm:px-8 py-6 text-white">
            <div className="flex items-center gap-3 mb-3">
              <Image
                src={logo}
                alt="BIIN"
                width={48}
                height={48}
                className="h-11 w-auto rounded-lg bg-white p-1"
              />
              <div>
                <h1 className="text-xl sm:text-2xl font-bold leading-tight">
                  BIIN Membership Registration
                </h1>
                <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                  +88 09640 123 701-3 · info@biin.org.bd
                </p>
              </div>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              Complete the form below to register. Fields marked with{" "}
              <span className="text-red-400">*</span> are required.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="p-5 sm:p-8 space-y-5"
            noValidate
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-slate-800 mb-1.5"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => handleChange("email", e.target.value)}
                placeholder="you@example.com"
                className={inputClass}
                aria-required="true"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            <fieldset>
              <legend className="text-sm font-semibold text-slate-800 mb-2">
                Membership Category <span className="text-red-500">*</span>
              </legend>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {formCategories.map((category) => (
                  <label
                    key={category}
                    className={`flex items-center gap-2.5 p-3 rounded-xl border cursor-pointer text-sm transition ${
                      form.membershipCategory === category
                        ? "border-emerald-500 bg-emerald-50 text-slate-900"
                        : "border-slate-200 bg-white hover:border-slate-300 text-slate-700"
                    }`}
                  >
                    <input
                      type="radio"
                      name="membershipCategory"
                      value={category}
                      checked={form.membershipCategory === category}
                      onChange={(e) =>
                        handleChange("membershipCategory", e.target.value)
                      }
                      className="accent-emerald-600"
                    />
                    {category}
                  </label>
                ))}
              </div>
              {errors.membershipCategory && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.membershipCategory}
                </p>
              )}
            </fieldset>

            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-slate-800 mb-1.5"
              >
                Name of Person / Contact Person{" "}
                <span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                type="text"
                value={form.name}
                onChange={(e) => handleChange("name", e.target.value)}
                placeholder="Your full name"
                className={inputClass}
                aria-required="true"
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="organization"
                  className="block text-sm font-semibold text-slate-800 mb-1.5"
                >
                  Organization / Entity / Institution
                </label>
                <input
                  id="organization"
                  type="text"
                  value={form.organization}
                  onChange={(e) => handleChange("organization", e.target.value)}
                  placeholder="Optional"
                  className={inputClass}
                />
              </div>
              <div>
                <label
                  htmlFor="address"
                  className="block text-sm font-semibold text-slate-800 mb-1.5"
                >
                  Address
                </label>
                <input
                  id="address"
                  type="text"
                  value={form.address}
                  onChange={(e) => handleChange("address", e.target.value)}
                  placeholder="Optional"
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="idNumber"
                className="block text-sm font-semibold text-slate-800 mb-1.5"
              >
                Student ID / NID No. / Passport No.{" "}
                <span className="text-red-500">*</span>
              </label>
              <input
                id="idNumber"
                type="text"
                value={form.idNumber}
                onChange={(e) => handleChange("idNumber", e.target.value)}
                placeholder="Your ID number"
                className={inputClass}
                aria-required="true"
              />
              {errors.idNumber && (
                <p className="text-red-500 text-xs mt-1">{errors.idNumber}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-800 mb-1.5">
                Upload Student ID / NID / Passport
              </label>
              <p className="text-xs text-slate-500 mb-2">
                Upload 1 supported file. Max 1 MB.
              </p>
              <label className="flex flex-col sm:flex-row sm:items-center gap-3 rounded-xl border border-dashed border-slate-300 bg-slate-50 px-4 py-4 cursor-pointer hover:border-emerald-400 hover:bg-emerald-50/40 transition">
                <span className="inline-flex items-center justify-center gap-2 rounded-lg bg-white border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 shadow-sm">
                  <HiOutlineCloudArrowUp size={18} />
                  Add file
                </span>
                <input
                  type="file"
                  accept="image/*,.pdf"
                  onChange={handleFile}
                  className="sr-only"
                />
                <span className="text-sm text-slate-500">
                  {idFile ? idFile.name : "No file selected"}
                </span>
              </label>
              {idFile && (
                <button
                  type="button"
                  onClick={() => setIdFile(null)}
                  className="mt-2 inline-flex items-center gap-1 text-xs text-red-600 hover:text-red-700"
                >
                  <HiOutlineXMark size={14} /> Remove file
                </button>
              )}
              {errors.idFile && (
                <p className="text-red-500 text-xs mt-1">{errors.idFile}</p>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="contactEmail"
                  className="block text-sm font-semibold text-slate-800 mb-1.5"
                >
                  Email / Office Mail / Contact Person Mail{" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  id="contactEmail"
                  type="email"
                  value={form.contactEmail}
                  onChange={(e) => handleChange("contactEmail", e.target.value)}
                  placeholder="contact@example.com"
                  className={inputClass}
                  aria-required="true"
                />
                {errors.contactEmail && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.contactEmail}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold text-slate-800 mb-1.5"
                >
                  Phone / Contact Person Number{" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={form.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  placeholder="01XXXXXXXXX"
                  className={inputClass}
                  aria-required="true"
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="division"
                className="block text-sm font-semibold text-slate-800 mb-1.5"
              >
                Division <span className="text-red-500">*</span>
              </label>
              <select
                id="division"
                value={form.division}
                onChange={(e) => handleChange("division", e.target.value)}
                className={inputClass}
                aria-required="true"
              >
                <option value="">Select division</option>
                {divisions.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
              {errors.division && (
                <p className="text-red-500 text-xs mt-1">{errors.division}</p>
              )}
            </div>

            <fieldset>
              <legend className="text-sm font-semibold text-slate-800 mb-2">
                Area of Interest <span className="text-red-500">*</span>
              </legend>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {areasOfInterest.map((area) => (
                  <label
                    key={area}
                    className={`flex items-center gap-2.5 p-3 rounded-xl border cursor-pointer text-sm transition ${
                      form.areaOfInterest === area
                        ? "border-indigo-500 bg-indigo-50 text-slate-900"
                        : "border-slate-200 bg-white hover:border-slate-300 text-slate-700"
                    }`}
                  >
                    <input
                      type="radio"
                      name="areaOfInterest"
                      value={area}
                      checked={form.areaOfInterest === area}
                      onChange={(e) =>
                        handleChange("areaOfInterest", e.target.value)
                      }
                      className="accent-indigo-600"
                    />
                    {area}
                  </label>
                ))}
              </div>
              {errors.areaOfInterest && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.areaOfInterest}
                </p>
              )}
            </fieldset>

            {submitError && (
              <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm">
                {submitError}
              </div>
            )}

            <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-3 pt-2 border-t border-slate-100">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-8 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl transition disabled:opacity-60 disabled:cursor-not-allowed text-sm"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
              <button
                type="button"
                onClick={handleClear}
                disabled={isSubmitting}
                className="text-sm text-slate-500 hover:text-slate-800 font-medium disabled:opacity-50"
              >
                Clear form
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export default function MembershipFormPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-[50vh] flex items-center justify-center text-slate-500 text-sm">
          Loading form...
        </div>
      }
    >
      <MembershipFormInner />
    </Suspense>
  );
}
