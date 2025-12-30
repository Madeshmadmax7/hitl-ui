import { ArrowRight, Calendar } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Events() {
    const sectionRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            sectionRef.current.children,
            { opacity: 0, y: 60 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power4.out",
            }
        );
    }, []);

    return (
        <section
            ref={sectionRef}
            className="px-4 sm:px-6 py-16 sm:py-24 lg:py-28 max-w-7xl mx-auto overflow-x-hidden"
        >
            <p className="uppercase tracking-[0.3em] text-emerald-300 text-xs mb-4">
                Programs & Events
            </p>

            <h1 className="text-[28px] sm:text-[40px] md:text-[52px] lg:text-[64px]
                           font-semibold leading-tight mb-10 sm:mb-16">
                Build Skills. Gain Experience.
                <br />
                <span className="text-emerald-300">Shape Your Future.</span>
            </h1>

            <div className="grid md:grid-cols-2 gap-6 sm:gap-10">
                <EventCard
                    title="Free Internship Program on Python"
                    date="Last Date: 15th January 2026"
                    desc="Kickstart your coding journey with Python through hands-on mentorship."
                />

                <EventCard
                    title="Workshop on Data Analytics"
                    date="Last Date: 20th January 2026"
                    desc="Learn data-driven decision making with real-world analytics training."
                />
            </div>
        </section>
    );
}

function EventCard({ title, date, desc }) {
    return (
        <div
            className="group relative bg-white/5 border border-white/10 rounded-3xl
                       p-6 sm:p-8
                       hover:-translate-y-2 transition-all duration-300
                       overflow-hidden"
        >
            {/* SAFE GLOW */}
            <div
                className="absolute top-0 right-0
                           w-40 h-40 sm:w-52 sm:h-52
                           bg-emerald-400/15 rounded-full blur-3xl
                           pointer-events-none"
            />

            <div className="relative z-10">
                <Calendar className="text-emerald-300 mb-4 sm:mb-6" size={26} />

                <h3 className="text-[18px] sm:text-[22px] md:text-[24px] font-semibold mb-3">
                    {title}
                </h3>

                <p className="text-white/60 text-sm sm:text-base mb-4">
                    {desc}
                </p>

                <p className="text-sm text-emerald-300 mb-6">
                    {date}
                </p>

                <button className="flex items-center gap-2 text-sm text-white/80 group-hover:text-white transition">
                    Learn More <ArrowRight size={16} />
                </button>
            </div>
        </div>
    );
}
