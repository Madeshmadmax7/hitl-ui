import React from "react";
import { ArrowRight } from "lucide-react";

export default function FeaturesSection() {
    return (
        <section className="h-screen bg-black text-white px-6 flex items-center">
            <div className="max-w-7xl mx-auto w-full flex flex-col justify-center gap-12">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-10">
                    <h2 className="text-[90px]">Features</h2>
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
                            <div key={item.num} className="flex gap-5 items-start">
                                <div className="text-[75px] leading-none font-semibold text-emerald-400 select-none">
                                    {item.num}
                                </div>
                                <div className="pt-1">
                                    <h3 className="text-sm font-semibold tracking-wider uppercase mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-md text-white/60 leading-relaxed max-w-sm">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="relative h-[520px] w-full flex justify-center items-start">
                        <div className="w-full h-full relative grid grid-rows-3">
                            <div className="flex justify-start">
                                <img
                                    src="https://picsum.photos/400?random=1"
                                    alt="img1"
                                    className="w-100 h-40 object-cover rounded-xl"
                                />
                            </div>
                            <div className="flex justify-end">
                                <img
                                    src="https://picsum.photos/400?random=2"
                                    alt="img2"
                                    className="w-100 h-40 object-cover rounded-xl"
                                />
                            </div>
                            <div className="flex justify-start">
                                <img
                                    src="https://picsum.photos/400?random=3"
                                    alt="img3"
                                    className="w-100 h-40 object-cover rounded-xl"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center">
                    <button className="px-8 py-3 bg-emerald-400 text-black text-sm font-medium rounded-full hover:bg-emerald-300 transition flex items-center gap-2">
                        Learn More
                        <ArrowRight size={16} strokeWidth={2} />
                    </button>
                </div>
            </div>
        </section>
    );
}
