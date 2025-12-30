import { ArrowRight } from "lucide-react";
import bgImage from "../assets/images/des6.png";

export default function Home() {
    return (
        <div
            className="min-h-screen text-white font-outfit bg-black overflow-x-hidden"
            style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            {/* Dark overlay */}
            <div className="min-h-screen bg-black/40 flex items-center">
                <section className="flex flex-col items-center text-center
                                    px-4 sm:px-6
                                    py-16 sm:py-20
                                    w-full">

                    <span className="mb-4 inline-block px-3 py-2
                                     border border-white/20 rounded-full
                                     text-[8px] sm:text-[9px] md:text-[10px]
                                     tracking-[0.12em] uppercase text-white/50">
                        ISO Certified Technology Company
                    </span>

                    <h1 className="max-w-5xl
                                   text-[26px] sm:text-[34px]
                                   md:text-[54px] lg:text-[62px]
                                   font-semibold leading-[1.1] tracking-tight">
                        Innovative IT Solutions
                        <br />
                        <span className="text-emerald-300 font-light">
                            for a smarter future
                        </span>
                    </h1>

                    <p className="mt-6 sm:mt-8 max-w-2xl
                                  text-[14px] sm:text-[15px] md:text-[17px]
                                  text-white/60 leading-relaxed font-normal">
                        HamzaEdge Innovation Techno Lab Pvt. Ltd. (HITL) is a technology-driven
                        organization empowering students, researchers, and professionals through
                        hands-on learning, real-world projects, and industry-focused innovation.
                    </p>

                    <button className="mt-10 sm:mt-12
                                       flex items-center gap-2
                                       rounded-full bg-emerald-400
                                       px-6 py-3
                                       text-sm md:text-base font-medium
                                       text-black hover:bg-emerald-300 transition">
                        Learn more
                        <ArrowRight size={18} strokeWidth={2} />
                    </button>

                </section>
            </div>
        </div>
    );
}
