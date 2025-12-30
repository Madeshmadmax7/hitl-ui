import React from "react";
import { ArrowRight } from "lucide-react";

export default function FeaturesSection() {
    return (
        <section className="min-h-screen bg-black text-white px-4 sm:px-6 py-16 sm:py-24 flex items-center overflow-x-hidden">
            <div className="max-w-7xl mx-auto w-full flex flex-col justify-center gap-12">

                <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 items-center">

                    {/* LEFT CONTENT */}
                    <div className="space-y-8 sm:space-y-10">
                        <h2 className="text-[36px] sm:text-[56px] lg:text-[90px] font-semibold">
                            Features
                        </h2>

                        {[
                            {
                                num: "01",
                                title: "PERSONALIZED LEARNING",
                                desc: "Students practice at their own pace, filling gaps before accelerating learning.",
                            },
                            {
                                num: "02",
                                title: "TRUSTED CONTENT",
                                desc: "Expert-created content covering technology and real-world skills.",
                            },
                            {
                                num: "03",
                                title: "TOOLS TO EMPOWER TEACHERS",
                                desc: "Identify gaps, personalize instruction, and support every learner.",
                            },
                        ].map((item) => (
                            <div key={item.num} className="flex gap-4 sm:gap-5 items-start">
                                <div className="text-[42px] sm:text-[56px] lg:text-[75px]
                                                leading-none font-semibold text-emerald-400 select-none">
                                    {item.num}
                                </div>
                                <div className="pt-1">
                                    <h3 className="text-xs sm:text-sm font-semibold tracking-wider uppercase mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm sm:text-md text-white/60 leading-relaxed max-w-sm">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* RIGHT IMAGES */}
                    <div className="relative w-full flex justify-center items-start">
                        <div className="w-full relative grid grid-rows-3 gap-4 sm:gap-6">
                            <div className="flex justify-start">
                                <img
                                    src="https://picsum.photos/400?random=1"
                                    alt="img1"
                                    className="w-[260px] sm:w-[320px] h-[120px] sm:h-40 object-cover rounded-xl"
                                />
                            </div>
                            <div className="flex justify-end">
                                <img
                                    src="https://picsum.photos/400?random=2"
                                    alt="img2"
                                    className="w-[260px] sm:w-[320px] h-[120px] sm:h-40 object-cover rounded-xl"
                                />
                            </div>
                            <div className="flex justify-start">
                                <img
                                    src="https://picsum.photos/400?random=3"
                                    alt="img3"
                                    className="w-[260px] sm:w-[320px] h-[120px] sm:h-40 object-cover rounded-xl"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="flex justify-center pt-4">
                    <button className="px-8 py-3 bg-emerald-400 text-black text-sm font-medium rounded-full hover:bg-emerald-300 transition flex items-center gap-2">
                        Learn More
                        <ArrowRight size={16} strokeWidth={2} />
                    </button>
                </div>

            </div>
        </section>
    );
}
