import { ArrowRight } from "lucide-react";

export default function Home() {
    return (
        <div className="min-h-screen bg-black text-white font-outfit">
            <section className="flex flex-col items-center text-center px-6 py-20 md:py-20">
                <span className="mb-4 inline-block px-3 py-2 border border-white/20 rounded-full text-[8px] md:text-[10px] tracking-[0.12em] uppercase text-white/50">
                    ISO Certified Technology Company
                </span>

                <h1 className="max-w-5xl text-[30px] md:text-[54px] lg:text-[62px] font-semibold leading-[1.1] tracking-tight">
                    Innovative IT Solutions
                    <br />
                    <span className="text-emerald-300 font-light">
                        for a smarter future
                    </span>
                </h1>

                <p className="mt-8 max-w-2xl text-[15px] md:text-[17px] text-white/60 leading-relaxed font-normal">
                    HamzaEdge Innovation Techno Lab Pvt. Ltd. (HITL) is a technology-driven
                    organization empowering students, researchers, and professionals through
                    hands-on learning, real-world projects, and industry-focused innovation.
                </p>

                <button className="mt-12 flex items-center gap-2 rounded-full bg-emerald-400 px-6 py-3 text-sm md:text-base font-medium text-black hover:bg-emerald-300 transition">
                    Learn more
                    <ArrowRight size={18} strokeWidth={2} />
                </button>
            </section>
        </div>
    );
}
