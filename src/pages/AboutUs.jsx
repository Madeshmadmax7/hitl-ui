import { ArrowRight, Play } from "lucide-react";
import {
    GraduationCap,
    Cpu,
    Settings,
    Headphones,
    Award,
    Building2,
    Briefcase,
    Lightbulb,
    Wrench,
} from "lucide-react";

export default function AboutUs() {
    const features = [
        { text: "Industry-Relevant Training", icon: GraduationCap },
        { text: "Hands-On Real-Time Projects", icon: Cpu },
        { text: "Custom Product Development", icon: Settings },
        { text: "24/7 Mentor Guidance", icon: Headphones },
        { text: "Globally Recognized Certificates", icon: Award },
        { text: "Academic–Industry Collaboration", icon: Building2 },
        { text: "Placement Support & Guidance", icon: Briefcase },
        { text: "Innovative Product Solutions", icon: Lightbulb },
        { text: "Practical Skill-Based Learning", icon: Wrench },
    ];

    return (
        <div className="bg-black text-white font-outfit overflow-x-hidden">

            {/* HERO */}
            <section className="px-4 sm:px-6 py-16 sm:py-24 max-w-6xl mx-auto">
                <p className="uppercase tracking-[0.25em] text-emerald-300 text-xs mb-4">
                    Our Story
                </p>
                <h1 className="text-[28px] sm:text-[36px] md:text-[52px] lg:text-[64px] font-semibold leading-[1.15]">
                    Empowering <span className="text-emerald-300">Future Innovators</span>
                    <br />
                    Through <span className="text-emerald-300">Products, Projects</span>
                    <br />
                    and <span className="text-emerald-300">Practical Training!</span>
                </h1>
                <p className="text-white/60 mt-6 sm:mt-10 text-[15px] sm:text-[17px] max-w-3xl leading-relaxed">
                    HITL is a leading product-based company and technical training institute
                    specializing in electronic product development, internships, and real-time
                    project training across multiple engineering domains.
                </p>
            </section>

            {/* IMAGE + CONTENT */}
            <section className="px-4 sm:px-6 max-w-7xl mx-auto grid md:grid-cols-12 gap-8 sm:gap-12">
                <div className="md:col-span-6">
                    <img
                        className="rounded-2xl w-full object-cover h-[240px] sm:h-[320px] md:h-[400px]"
                        src="https://images.unsplash.com/photo-1581092795360-1b231f3873c8?w=900"
                        alt=""
                    />
                </div>

                <div className="md:col-span-6 flex flex-col justify-center">
                    <p className="text-white/60 leading-relaxed">
                        HITL specializes in product innovation, PCB design, IoT, robotics,
                        embedded systems, and advanced engineering tools — providing real-world
                        solutions and future-ready training.
                    </p>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10 mt-8 sm:mt-10">
                        <Stat value="10k+" label="Completed Projects" />
                        <Stat value="15k+" label="Satisfied Learners" />
                        <Stat value="10+" label="Years Of Mastery" />
                        <Stat value="45+" label="Awards & Honors" />
                    </div>

                    <div className="flex items-center gap-4 mt-8 sm:mt-10">
                        <button className="h-12 w-12 flex items-center justify-center rounded-full border border-white/20 hover:border-white transition">
                            <Play size={18} />
                        </button>
                        <span className="text-white/70 tracking-wide text-sm sm:text-base">
                            WATCH INTRO
                        </span>
                    </div>
                </div>
            </section>

            {/* INTRO BOX */}
            <section className="px-4 sm:px-6 py-16 sm:py-24 max-w-7xl mx-auto">
                <div className="relative bg-white/5 rounded-3xl border border-white/10 p-6 sm:p-10 md:p-12 overflow-hidden">
                    <div className="absolute right-0 top-0 w-[220px] h-[220px] bg-emerald-400/25 rounded-full blur-3xl pointer-events-none" />
                    <h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-semibold mb-6 sm:mb-8">
                        Introduction of Us
                    </h2>
                    <p className="text-white/70 max-w-4xl leading-relaxed">
                        HITL builds innovative electronic products — from custom PCB boards to
                        industrial embedded systems. Along with product development, we offer
                        internships and hands-on project-based learning to create skilled,
                        industry-ready professionals.
                    </p>
                    <p className="text-white/70 max-w-4xl leading-relaxed mt-4 sm:mt-6">
                        Our programs include Software Development, IoT, Robotics, Embedded Systems,
                        and specialized engineering tools — making learners technically strong and
                        career-ready.
                    </p>
                </div>
            </section>

            {/* CERTIFICATIONS */}
            <section className="px-4 sm:px-6 py-16 sm:py-20 max-w-7xl mx-auto">
                <h2 className="text-[26px] sm:text-[32px] md:text-[38px] font-semibold mb-8 sm:mb-10">
                    We Are <span className="text-emerald-300">Certified</span>
                </h2>
                <div className="flex flex-wrap gap-10 sm:gap-16 items-center">
                    <Cert logo="/logos/iso.png" title="ISO Certified" />
                    <Cert logo="/logos/msme.png" title="MSME Registered" />
                    <Cert logo="/logos/mca.png" title="MCA Approved" />
                </div>
            </section>

            {/* FEATURES */}
            <section className="px-4 sm:px-6 py-16 sm:py-24 max-w-7xl mx-auto">
                <h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-semibold mb-10 sm:mb-14 tracking-tight">
                    Why <span className="text-emerald-300">Choose Us?</span>
                </h2>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {features.map((item, i) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={i}
                                className="group bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-7
                                flex gap-4 sm:gap-6 items-center
                                transition-all duration-300 hover:bg-white/10 hover:-translate-y-2"
                            >
                                <Icon size={26} className="min-w-[44px] text-emerald-300" />
                                <p className="text-[15px] sm:text-[17px] font-medium leading-snug flex-1">
                                    {item.text}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* FOUNDER */}
            <section className="px-4 sm:px-6 py-16 sm:py-20 max-w-6xl mx-auto">
                <h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-semibold mb-8 sm:mb-10 tracking-tight">
                    Meet Our <span className="text-emerald-300">Founder</span>
                </h2>

                <div className="relative bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-10 md:p-14
                    flex flex-col md:flex-row items-center gap-8 sm:gap-10 overflow-hidden">
                    <div className="absolute left-0 top-0 w-[200px] h-[200px]
                        bg-emerald-400/20 blur-3xl rounded-full pointer-events-none"></div>

                    <img
                        src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?w=700"
                        alt="Founder"
                        className="w-[160px] sm:w-[180px] h-[160px] sm:h-[180px] object-cover rounded-2xl border border-white/10 shadow-xl"
                    />

                    <div className="relative text-center md:text-left">
                        <h3 className="text-[22px] sm:text-[28px] font-semibold">
                            MOHD ABDUL KHAISER
                        </h3>
                        <p className="text-emerald-300 font-medium mt-1">
                            Founder & CEO – HITL Pvt Ltd
                        </p>
                        <p className="text-white/70 mt-4 sm:mt-5 leading-relaxed max-w-xl text-[14px] sm:text-[15px]">
                            Mohammed Abdul Khaiser is a passionate tech entrepreneur shaping the future of
                            skill-based education. He founded HITL to bridge the gap between academic learning
                            and real-world industry needs through project-driven training, internships, and
                            innovative product development.
                        </p>
                        <p className="text-white/70 mt-3 sm:mt-4 leading-relaxed max-w-xl text-[14px] sm:text-[15px]">
                            His vision centers on accessible education, practical exposure, and empowering
                            learners with confidence, creativity, and career-focused technical skills.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}

const Stat = ({ value, label }) => (
    <div>
        <p className="text-[24px] sm:text-[32px] font-semibold">{value}</p>
        <p className="text-white/40 text-xs sm:text-sm">{label}</p>
    </div>
);

const Cert = ({ logo, title }) => (
    <div className="flex items-center gap-4">
        <img src={logo} className="h-14 sm:h-16 opacity-80" />
        <p className="text-white/70 text-sm sm:text-base">{title}</p>
    </div>
);
