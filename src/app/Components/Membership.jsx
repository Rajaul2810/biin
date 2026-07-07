"use client";

import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { BsArrowRight, BsX } from "react-icons/bs";
import logo from "../../../public/BIIN Logo-1.png";
// import { BsOrganization } from "react-icons/bs";

const membershipCategories = [
  {
    id: 2,
    title: "Youth Member",
    subtitle: "For Young Innovators, Entrepreneurs & Change-Makers (Age 21–42)",
    description:
      "•\tCareer Guidance.\n•\tIndustry Certifications\n•\tExclusive Learning Resources.",
    requirements:
      "National ID, profile photo, contact info, occupation/startup details.",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
  },
  {
    id: 1,
    title: "Institutional Member",
    subtitle: "For Organizations Committed to Digital Development",
    description:
      "•\tBrand Exposure.\n•\tTop-Tier Recruitment.\n•\tStrategic Partnership.",
    requirements:
      "Company/NGO registration, logo, authorized representative info.",
    color: "from-purple-500 to-indigo-500",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
  },
  {
    id: 3,
    title: "General Member",
    subtitle: "For Citizens Committed to ICT Development & Social Change",
    description:
      "•\tBe an Advisor.\n•\tProfessional Influence\n•\tRecognition.",
    requirements: "Full name, contact details, occupation, national ID, photo.",
    color: "from-amber-500 to-orange-500",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-200",
  },
];

const formCategories = [
  "Donor Member",
  "General Member",
  "Institutional Member",
  "Youth Member",
];

const areasOfInterest = [
  "AI & Data Science",
  "Policy & Advocacy",
  "Startup Incubation",
  "Research",
  "Mentorship",
  "Skills Training",
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
  membershipCategory: "",
  name: "",
  idNumber: "",
  email: "",
  phone: "",
  division: "",
  areaOfInterest: "",
};

function validateForm(form) {
  const errors = {};

  if (!form.membershipCategory) {
    errors.membershipCategory = "Please select a membership category.";
  }

  if (!form.name.trim()) {
    errors.name = "Name is required.";
  }

  if (!form.idNumber.trim()) {
    errors.idNumber = "Student ID / NID / Passport number is required.";
  }

  if (!form.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "Enter a valid email address.";
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

  return errors;
}

const MembershipModal = ({ isOpen, onClose, preselectedCategory, onSuccess }) => {
  const [form, setForm] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  useEffect(() => {
    if (isOpen) {
      setForm({
        ...initialFormState,
        membershipCategory: preselectedCategory || "",
      });
      setErrors({});
      setSubmitError("");
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen, preselectedCategory]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isOpen && !isSubmitting) onClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, isSubmitting, onClose]);

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
    if (submitError) setSubmitError("");
  };

  const handleClear = () => {
    setForm(initialFormState);
    setErrors({});
    setSubmitError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch("/api/membership", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        setSubmitError(data.error || "Submission failed. Please try again.");
        return;
      }

      onSuccess();
      onClose();
    } catch {
      setSubmitError("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => !isSubmitting && onClose()}
            aria-hidden="true"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="membership-modal-title"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ type: "spring", damping: 28, stiffness: 320 }}
            className="relative w-full sm:max-w-2xl max-h-[95vh] sm:max-h-[90vh] bg-[#f8f5f0] rounded-t-2xl sm:rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            <div className="bg-gradient-to-r from-[#8b7355] to-[#a68b5b] px-5 py-4 sm:px-6 sm:py-5 text-white shrink-0">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <Image
                    src={logo}
                    alt="BIIN"
                    className="h-10 w-auto bg-white/90 rounded-lg p-1 shrink-0"
                    width={48}
                    height={48}
                  />
                  <div className="min-w-0">
                    <h2
                      id="membership-modal-title"
                      className="text-lg sm:text-xl font-bold leading-tight"
                    >
                      BIIN Membership Registration
                    </h2>
                    <p className="text-xs sm:text-sm text-white/85 mt-0.5">
                      +88 09640 123 701-3 · info@biin.org.bd
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  disabled={isSubmitting}
                  className="p-2 rounded-full hover:bg-white/20 transition-colors shrink-0 disabled:opacity-50"
                  aria-label="Close registration form"
                >
                  <BsX size={24} />
                </button>
              </div>
              <p className="text-xs sm:text-sm text-white/90 mt-3 leading-relaxed">
                BIIN is a registered non-profit trust dedicated to transforming
                the future of Bangladesh through ICT skill development and
                innovation.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="flex-1 overflow-y-auto px-5 py-5 sm:px-6 sm:py-6 space-y-5"
              noValidate
            >
              <fieldset>
                <legend className="text-sm font-semibold text-gray-800 mb-2">
                  Membership Category <span className="text-red-500">*</span>
                </legend>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {formCategories.map((category) => (
                    <label
                      key={category}
                      className={`flex items-center gap-2 p-3 rounded-lg border cursor-pointer transition-all text-sm ${
                        form.membershipCategory === category
                          ? "border-[#8b7355] bg-[#8b7355]/10 text-gray-900"
                          : "border-gray-200 bg-white hover:border-gray-300 text-gray-700"
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
                        className="accent-[#8b7355]"
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
                  htmlFor="member-name"
                  className="block text-sm font-semibold text-gray-800 mb-1.5"
                >
                  Name of Person / Contact Person / Organization{" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  id="member-name"
                  type="text"
                  value={form.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  placeholder="Your answer"
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8b7355]/40 focus:border-[#8b7355] text-sm"
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="member-id"
                    className="block text-sm font-semibold text-gray-800 mb-1.5"
                  >
                    Student ID / NID / Passport No.{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="member-id"
                    type="text"
                    value={form.idNumber}
                    onChange={(e) => handleChange("idNumber", e.target.value)}
                    placeholder="Your answer"
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8b7355]/40 focus:border-[#8b7355] text-sm"
                  />
                  {errors.idNumber && (
                    <p className="text-red-500 text-xs mt-1">{errors.idNumber}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="member-division"
                    className="block text-sm font-semibold text-gray-800 mb-1.5"
                  >
                    Division <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="member-division"
                    value={form.division}
                    onChange={(e) => handleChange("division", e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#8b7355]/40 focus:border-[#8b7355] text-sm"
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
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="member-email"
                    className="block text-sm font-semibold text-gray-800 mb-1.5"
                  >
                    Email / Office Mail <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="member-email"
                    type="email"
                    value={form.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    placeholder="your@email.com"
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8b7355]/40 focus:border-[#8b7355] text-sm"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="member-phone"
                    className="block text-sm font-semibold text-gray-800 mb-1.5"
                  >
                    Phone / Contact Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="member-phone"
                    type="tel"
                    value={form.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    placeholder="01XXXXXXXXX"
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8b7355]/40 focus:border-[#8b7355] text-sm"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                  )}
                </div>
              </div>

              <fieldset>
                <legend className="text-sm font-semibold text-gray-800 mb-2">
                  Area of Interest
                </legend>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {areasOfInterest.map((area) => (
                    <label
                      key={area}
                      className={`flex items-center gap-2 p-3 rounded-lg border cursor-pointer transition-all text-sm ${
                        form.areaOfInterest === area
                          ? "border-emerald-500 bg-emerald-50 text-gray-900"
                          : "border-gray-200 bg-white hover:border-gray-300 text-gray-700"
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
                        className="accent-emerald-500"
                      />
                      {area}
                    </label>
                  ))}
                </div>
              </fieldset>

              {submitError && (
                <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm">
                  {submitError}
                </div>
              )}

              <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-3 pt-2 pb-1">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-2.5 bg-[#8b7355] hover:bg-[#756045] text-white font-semibold rounded-lg transition-colors disabled:opacity-60 disabled:cursor-not-allowed text-sm"
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
                <button
                  type="button"
                  onClick={handleClear}
                  disabled={isSubmitting}
                  className="text-sm text-[#8b7355] hover:text-[#5c4a35] font-medium disabled:opacity-50"
                >
                  Clear form
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const Membership = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [preselectedCategory, setPreselectedCategory] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const openModal = useCallback((category = "") => {
    setPreselectedCategory(category);
    setIsModalOpen(true);
    setSuccessMessage("");
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setPreselectedCategory("");
  }, []);

  const handleSuccess = useCallback(() => {
    setSuccessMessage(
      "Registration submitted successfully! We will contact you soon."
    );
    setTimeout(() => setSuccessMessage(""), 6000);
  }, []);

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <AnimatePresence>
          {successMessage && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-center text-sm font-medium"
            >
              {successMessage}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
            BIIN Membership Categories
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join the Bangladesh ICT & Innovation Network (BIIN) and become part
            of a movement that&apos;s digitally transforming Bangladesh through
            youth empowerment, education, innovation, and collaboration.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {membershipCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`${category.bgColor} ${category.borderColor} border-2 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:scale-105`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`p-3 rounded-full bg-gradient-to-r ${category.color}`}
                >
                  <span className="block h-8 w-8" aria-hidden="true" />
                  {/* <BsOrganization size={24} /> */}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">
                    {category.title}
                  </h3>
                  <p className="text-sm text-gray-600">{category.subtitle}</p>
                </div>
              </div>

              <p className="text-gray-700 mb-4 text-sm leading-relaxed whitespace-pre-line">
                {category.description}
              </p>

              <div className="bg-white/50 rounded-lg p-3 mb-4">
                <h4 className="font-semibold text-gray-800 mb-2 text-sm">
                  Requirements:
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {category.requirements}
                </p>
              </div>

              <button
                type="button"
                onClick={() => openModal(category.title)}
                className="w-full bg-gradient-to-r from-emerald-500 to-sky-500 text-white font-semibold py-2 px-4 rounded-lg hover:from-sky-500 hover:to-emerald-500 transition-all duration-200 flex items-center justify-center gap-2"
              >
                Apply Now <BsArrowRight size={16} />
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-emerald-500 to-sky-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Membership Upgrade & Conversion
            </h3>
            <p className="text-lg mb-6">
              Members may upgrade or transition from one category to another
              (e.g., Youth Member to Life Member) with applicable discounts on
              registration or renewal fees.
            </p>
            <button
              type="button"
              onClick={() => openModal()}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-emerald-600 font-semibold rounded-full hover:bg-gray-100 transition-all duration-200"
            >
              Register Now <BsArrowRight size={20} />
            </button>
          </div>
        </motion.div>
      </div>

      <MembershipModal
        isOpen={isModalOpen}
        onClose={closeModal}
        preselectedCategory={preselectedCategory}
        onSuccess={handleSuccess}
      />
    </section>
  );
};

export default Membership;
