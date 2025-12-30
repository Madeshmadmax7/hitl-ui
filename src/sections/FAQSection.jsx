import React, { useState } from "react";

export default function FAQSection() {
    const [openFaq, setOpenFaq] = useState(0);

    const faqs = [
        {
            question: "How do I report mistakes in videos?",
            answer:
                "Corrections are not visible in full-screen mode. Please watch the videos in small-screen mode first, so you can see if corrections have already been made. If there is a correction, take notes in small-screen mode first so that you can consult your notes if you watch in full-screen mode later. In a class setting, you can then stop the video at the appropriate moment and explain it.",
        },
        {
            question:
                "Why did I get the problem wrong when entering the correct math expression?",
            answer:
                "Sometimes formatting matters in mathematical expressions. Make sure you're using the correct notation and syntax as demonstrated in the examples.",
        },
        {
            question:
                "Why am I getting the problem wrong when entering the correct answer?",
            answer:
                "Double-check your input format and ensure you're following the specified guidelines for the answer format.",
        },
        {
            question:
                "How do I report a mistake or issue with an exercise?",
            answer:
                "You can report issues through our support system or contact our technical team directly with details about the exercise.",
        },
        {
            question: "How can I check the status of my application?",
            answer:
                "Log into your account dashboard where you can view the current status of all your applications and submissions.",
        },
        {
            question:
                "What happens to my Mastery and Energy points when I start an activity over?",
            answer:
                "Your progress is saved, and you can continue building on your existing points even if you restart an activity.",
        },
    ];

    return (
        <section className="py-16 sm:py-24 px-4 sm:px-6 bg-black text-white">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-12">

                    {/* FAQs Column */}
                    <div>
                        <h2 className="text-[28px] sm:text-[40px] lg:text-5xl font-bold mb-8 sm:mb-10">
                            FAQs.
                        </h2>

                        <div className="space-y-2">
                            {faqs.map((faq, index) => (
                                <button
                                    key={index}
                                    onClick={() => setOpenFaq(index)}
                                    className={`w-full text-left px-4 sm:px-6 py-3 sm:py-4 rounded-lg
                                    transition-all duration-200 text-[14px] sm:text-[15px]
                                    ${
                                        openFaq === index
                                            ? "bg-emerald-500 text-black font-semibold"
                                            : "bg-transparent text-white hover:bg-gray-900"
                                    }`}
                                >
                                    {faq.question}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Answer Column */}
                    <div>
                        <h2 className="text-[28px] sm:text-[40px] lg:text-5xl font-bold mb-6 sm:mb-10">
                            Ans.
                        </h2>

                        <div className="min-h-[unset] lg:min-h-[400px]">
                            <p className="text-gray-300 leading-relaxed text-[14px] sm:text-[15px]">
                                {faqs[openFaq].answer}
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
