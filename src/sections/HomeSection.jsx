import { ArrowRight } from "lucide-react";

export default function Home() {
    return (
        <div className="min-h-screen bg-black text-white font-outfit">
            <section className="flex flex-col items-center text-center px-6">
                {/* Badge */}
                <span className="mt-16 mb-6 inline-block px-4 py-1.5 border border-white/15 rounded-full text-[11px] tracking-widest uppercase text-white/60">
                    ISO Certified Technology Company
                </span>

                {/* Headline */}
                <h1 className="max-w-4xl text-[42px] md:text-[52px] font-medium leading-[1.15] tracking-[-0.02em]">
                    Innovative IT solutions
                    <br />
                    <span className="text-emerald-300 font-light">
                        for a smarter future
                    </span>
                </h1>

                {/* Description */}
                <p className="mt-6 max-w-xl text-[15px] text-white/60 leading-relaxed font-light">
                    HamzaEdge Innovation Techno Lab Pvt. Ltd. (HITL) is a technology-driven
                    organization empowering students, researchers, and professionals
                    through hands-on learning, real-world projects, and industry-focused
                    innovation.
                </p>

                <button className="mt-10 flex items-center gap-2 rounded-full bg-emerald-400 px-9 py-3 text-sm font-medium text-black hover:bg-emerald-300 transition">
                    Learn more
                    <ArrowRight size={16} strokeWidth={2} />
                </button>
            </section>
        </div>
    );
}
