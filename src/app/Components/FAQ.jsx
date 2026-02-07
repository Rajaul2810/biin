"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuestionCircle, FaChevronDown, FaSearch } from "react-icons/fa";
import { 
  HiUserGroup, 
  HiGlobeAlt, 
  HiCreditCard, 
  HiAcademicCap, 
  HiVideoCamera, 
  HiOfficeBuilding, 
  HiBriefcase, 
  HiLightBulb, 
  HiShieldCheck, 
  HiLockClosed, 
  HiCash, 
  HiIdentification, 
  HiRefresh, 
  HiPhone, 
  HiUserAdd 
} from "react-icons/hi";

// FAQ Data with categories
const faqData = [
  {
    id: 1,
    category: "General",
    icon: <HiUserGroup className="text-emerald-400" size={24} />,
    question: "What is BIIN, and who can join?",
    answer: "BIIN (Bangladesh ICT & Innovation Network) is a registered non-profit trust dedicated to ICT skill development and youth empowerment. Anyone from a student to a corporate leader can join under our various membership categories."
  },
  {
    id: 2,
    category: "General",
    icon: <HiGlobeAlt className="text-blue-400" size={24} />,
    question: "Can I join BIIN if I am not a resident of Dhaka?",
    answer: "Absolutely! BIIN is a national network. We have active chapters across Bangladesh and offer remote learning platforms for students outside Dhaka."
  },
  {
    id: 3,
    category: "Membership",
    icon: <HiCreditCard className="text-purple-400" size={24} />,
    question: "How do I pay my membership fee?",
    answer: "You can pay via our official payment gateway bKash or via Bank Transfer. Details are provided at the end of each membership application form."
  },
  {
    id: 4,
    category: "Certification",
    icon: <HiAcademicCap className="text-yellow-400" size={24} />,
    question: "Are the certificates provided by BIIN internationally recognized?",
    answer: "Yes, our specialized masterclasses and seminars come with certificates verified by BIIN&apos;s board of trustees and industry experts, which add significant value to your professional portfolio."
  },
  {
    id: 5,
    category: "Events",
    icon: <HiVideoCamera className="text-pink-400" size={24} />,
    question: "I missed a physical event. Can I access the materials?",
    answer: "Members have exclusive access to our recorded sessions, presentation slides, and training resources."
  },
  {
    id: 6,
    category: "Partnership",
    icon: <HiOfficeBuilding className="text-indigo-400" size={24} />,
    question: "How can my university club partner with BIIN for an event?",
    answer: "University clubs&apos; representative can contact us directly at info@biin.org.bd to host joint Workshops, Hackathons, Tech Talks, or Job Fairs."
  },
  {
    id: 7,
    category: "Career",
    icon: <HiBriefcase className="text-orange-400" size={24} />,
    question: "Does BIIN guarantee job placements?",
    answer: "While we don&apos;t guarantee jobs, we provide an ICT Job Fair & Expo and direct recommendations for our top-performing members to our 50+ partner organizations."
  },
  {
    id: 8,
    category: "Startup",
    icon: <HiLightBulb className="text-amber-400" size={24} />,
    question: "How does BIIN support startups?",
    answer: "We offer startup bootcamps, incubation support, and mentorship. Most importantly, we bridge the gap between young innovators and potential investors."
  },
  {
    id: 9,
    category: "General",
    icon: <HiShieldCheck className="text-teal-400" size={24} />,
    question: "Is BIIN a government organization?",
    answer: "No, BIIN is a registered non-profit Trust. However, we work closely with the international ICT goals to support our youths and startups."
  },
  {
    id: 10,
    category: "Privacy",
    icon: <HiLockClosed className="text-red-400" size={24} />,
    question: "Is my personal data safe with BIIN?",
    answer: "Yes. We follow a strict Privacy Policy. Your NID and personal details provided during registration are encrypted and used only for membership verification."
  },
  {
    id: 11,
    category: "General",
    icon: <HiCash className="text-green-400" size={24} />,
    question: "How is BIIN funded?",
    answer: "We are funded through membership fees, donor contributions, and corporate sponsorships. As a registered Trust, our finances are transparent and audited."
  },
  {
    id: 12,
    category: "Membership",
    icon: <HiIdentification className="text-cyan-400" size={24} />,
    question: "How can I get a membership ID card?",
    answer: "Once your application is verified (usually within 48-72 hours), a digital ID will be sent to your email. Physical ID cards can be collected from our Gulshan office."
  },
  {
    id: 13,
    category: "Membership",
    icon: <HiRefresh className="text-violet-400" size={24} />,
    question: "Can I cancel or refund my membership?",
    answer: "Membership fees are generally non-refundable as they contribute to our youth development programs. However, you can choose not to renew your annual membership."
  },
  {
    id: 14,
    category: "Contact",
    icon: <HiPhone className="text-rose-400" size={24} />,
    question: "How can I reach the BIIN team for an urgent query?",
    answer: "You can visit our office at SimpleTree Attalika (Level 19), 134 Gulshan Avenue, Dhaka 1212, or contact us at info@biin.org.bd, or message us on our official Facebook page."
  },
  {
    id: 15,
    category: "General",
    icon: <HiUserAdd className="text-sky-400" size={24} />,
    question: "Can I volunteer for BIIN if I am already a member of another organization?",
    answer: "Yes! BIIN believes in collaboration, not competition. Many of our members are also active in university clubs or NGOs."
  }
];

// Get unique categories
const categories = ["All", ...new Set(faqData.map(item => item.category))];

// FAQ Accordion Item Component
const FAQItem = ({ faq, isOpen, toggleOpen, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="mb-4"
    >
      <button
        onClick={toggleOpen}
        className={`w-full flex items-center justify-between p-5 rounded-xl transition-all duration-300 text-left ${
          isOpen 
            ? "bg-gradient-to-r from-emerald-600 to-teal-600 shadow-lg shadow-emerald-500/20" 
            : "bg-white/10 hover:bg-white/20"
        }`}
      >
        <div className="flex items-center gap-4">
          <span className={`p-2 rounded-lg ${isOpen ? "bg-white/20" : "bg-white/10"}`}>
            {faq.icon}
          </span>
          <span className={`text-lg font-medium ${isOpen ? "text-white" : "text-gray-200"}`}>
            {faq.question}
          </span>
        </div>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className={`flex-shrink-0 ml-4 ${isOpen ? "text-white" : "text-gray-400"}`}
        >
          <FaChevronDown size={18} />
        </motion.span>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="p-5 bg-white/5 rounded-b-xl border-t border-white/10 mt-1">
              <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// Category Filter Button Component
const CategoryButton = ({ category, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
        isActive
          ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/30"
          : "bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white"
      }`}
    >
      {category}
    </button>
  );
};

// Main FAQ Component
const FAQ = () => {
  const [openId, setOpenId] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  // Filter FAQs based on category and search query
  const filteredFAQs = faqData.filter((faq) => {
    const matchesCategory = activeCategory === "All" || faq.category === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="relative py-20 px-4 sm:px-8 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 min-h-screen overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-500 opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-indigo-500 opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 right-1/4 w-72 h-72 bg-teal-500 opacity-10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto pt-20">
        {/* Header Section */}
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center p-3 bg-emerald-500/20 rounded-2xl mb-6">
            <FaQuestionCircle className="text-emerald-400" size={40} />
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Find answers to common questions about BIIN membership, events, partnerships, and more.
          </p>
        </motion.div>

        {/* Search Bar */}
        {/* <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <div className="relative max-w-xl mx-auto">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search for questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
            />
          </div>
        </motion.div> */}

        {/* Category Filter */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {categories.map((category) => (
            <CategoryButton
              key={category}
              category={category}
              isActive={activeCategory === category}
              onClick={() => setActiveCategory(category)}
            />
          ))}
        </motion.div>

        {/* FAQ List */}
        <div className="space-y-2">
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((faq, index) => (
              <FAQItem
                key={faq.id}
                faq={faq}
                isOpen={openId === faq.id}
                toggleOpen={() => toggleFAQ(faq.id)}
                index={index}
              />
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-gray-400 text-lg">No questions found matching your search.</p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("All");
                }}
                className="mt-4 text-emerald-400 hover:text-emerald-300 underline transition-colors"
              >
                Clear filters
              </button>
            </motion.div>
          )}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-3">Still have questions?</h3>
            <p className="text-gray-300 mb-6">
              Can&apos;t find the answer you&apos;re looking for? Our team is here to help!
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-xl hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:scale-105"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
