"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is Next.js 15?",
    answer:
      "Next.js 15 is a React-based framework that brings server-side rendering, server actions, and a super fast build system called Turbopack.",
  },
  {
    question: "What's the best way to connect MongoDB?",
    answer:
      "Create a helper like `lib/dbConnect.js` and call it with the collection name. This prevents connection leaks.",
  },
  {
    question: "Why is the Add Product button not showing?",
    answer:
      "If you mix client and server components in one file, the button won’t appear. Fetch data on the server and handle UI on the client.",
  },
  {
    question: "How does routing work in Next.js 15?",
    answer:
      "Next.js 15 uses the App Router by default. Folder names under `app/` become routes. Dynamic routes are created using `[id]` folders.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-3xl mx-auto p-6 my-12 bg-gray-100 dark:bg-gray-800 rounded-2xl shadow">
      <h2 className="text-3xl font-bold text-center mb-6">❓ FAQ</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border rounded-lg bg-white dark:bg-gray-900 shadow-sm"
          >
            <button
              className="w-full flex justify-between items-center px-4 py-3 text-left font-medium"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <ChevronDown
                className={`h-5 w-5 transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            {openIndex === index && (
              <div className="px-4 pb-4 text-gray-600 dark:text-gray-300">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
