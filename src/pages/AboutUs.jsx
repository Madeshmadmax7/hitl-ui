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
    Wrench
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
        <div className="bg-black text-white font-outfit">
            <section className="px-6 py-24 max-w-6xl mx-auto">
                <p className="uppercase tracking-[0.25em] text-emerald-300 text-xs mb-4">
                    Our Story
                </p>
                <h1 className="text-[42px] md:text-[64px] font-semibold leading-[1.1]">
                    Empowering <span className="text-emerald-300">Future Innovators</span>
                    <br />
                    Through <span className="text-emerald-300">Products, Projects</span>
                    <br />
                    and <span className="text-emerald-300">Practical Training!</span>
                </h1>
                <p className="text-white/60 mt-10 text-[17px] max-w-3xl leading-relaxed">
                    HITL is a leading product-based company and technical training institute
                    specializing in electronic product development, internships, and real-time
                    project training across multiple engineering domains.
                </p>
            </section>

            <section className="px-6 max-w-7xl mx-auto grid md:grid-cols-12 gap-12">
                <div className="md:col-span-6">
                    <img
                        className="rounded-2xl w-full object-cover h-[400px]"
                        src="https://images.unsplash.com/photo-1581092795360-1b231f3873c8?w=900"
                    />
                </div>
                <div className="md:col-span-6 flex flex-col justify-center">
                    <p className="text-white/60 leading-relaxed">
                        HITL specializes in product innovation, PCB design, IoT, robotics,
                        embedded systems, and advanced engineering tools — providing real-world
                        solutions and future-ready training.
                    </p>
                    <div className="flex flex-wrap gap-10 mt-10">
                        <Stat value="10k+" label="Completed Projects" />
                        <Stat value="15k+" label="Satisfied Learners" />
                        <Stat value="10+" label="Years Of Mastery" />
                        <Stat value="45+" label="Awards & Honors" />
                    </div>
                    <div className="flex items-center gap-4 mt-10">
                        <button className="h-12 w-12 flex items-center justify-center rounded-full border border-black border-2 hover:border-white transition">
                            <Play size={18} />
                        </button>
                        <span className="text-white/70 tracking-wide">WATCH INTRO</span>
                    </div>
                </div>
            </section>

            <section className="px-6 py-24 max-w-7xl mx-auto">
                <div className="relative bg-white/5 rounded-3xl border border-white/10 p-12 overflow-hidden">
                    <div className="absolute right-[-150px] top-[-100px] w-[350px] h-[350px] bg-emerald-400/25 rounded-full blur-3xl" />
                    <h2 className="text-[42px] font-semibold mb-8">Introduction of Us</h2>
                    <p className="text-white/70 max-w-4xl leading-relaxed">
                        HITL builds innovative electronic products — from custom PCB boards to
                        industrial embedded systems. Along with product development, we offer
                        internships and hands-on project-based learning to create skilled,
                        industry-ready professionals.
                    </p>
                    <p className="text-white/70 max-w-4xl leading-relaxed mt-6">
                        Our programs include Software Development, IoT, Robotics, Embedded Systems,
                        and specialized engineering tools — making learners technically strong and
                        career-ready.
                    </p>
                </div>
            </section>
            
            <section className="px-6 py-20 max-w-7xl mx-auto">
                <h2 className="text-[38px] font-semibold mb-10">We Are <span className="text-emerald-300">Certified</span></h2>
                <div className="flex flex-wrap gap-16 items-center">
                    <Cert logo="/logos/iso.png" title="ISO Certified" />
                    <Cert logo="/logos/msme.png" title="MSME Registered" />
                    <Cert logo="/logos/mca.png" title="MCA Approved" />
                </div>
            </section>
            <section className="px-6 py-24 max-w-7xl mx-auto">
                <h2 className="text-[42px] font-semibold mb-14 tracking-tight">
                    Why <span className="text-emerald-300">Choose Us?</span>
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((item, i) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={i}
                                className="group bg-white/5 border border-white/10 rounded-3xl p-7
                                flex gap-6 items-center
                                transition-all duration-300 hover:bg-white/10 hover:-translate-y-2
                                backdrop-blur-sm"
                            >
                                <Icon size={28} className="min-w-[50px] min-h-[60px] text-emerald-300" />
                                <p className="text-[17px] font-medium leading-snug flex-1">
                                    {item.text}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </section>
            <section className="px-6 py-20 max-w-6xl mx-auto">
                <h2 className="text-[42px] font-semibold mb-10 tracking-tight">
                    Meet Our <span className="text-emerald-300">Founder</span>
                </h2>
                <div className="relative bg-white/5 border border-white/10 rounded-3xl p-10 md:p-14 
                    flex flex-col md:flex-row items-center gap-10 overflow-hidden">
                    <div className="absolute left-[-120px] top-[-80px] w-[280px] h-[280px] 
                        bg-emerald-400/20 blur-3xl rounded-full"></div>
                    <img
                        src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?w=700"
                        alt="Founder"
                        className="w-[180px] h-[180px] object-cover rounded-2xl border border-white/10 shadow-xl"
                    />
                    <div className="relative">
                        <h3 className="text-[28px] font-semibold">MOHD ABDUL KHAISER</h3>
                        <p className="text-emerald-300 font-medium mt-1">Founder & CEO – HITL Pvt Ltd</p>
                        <p className="text-white/70 mt-5 leading-relaxed max-w-xl text-[15px]">
                            Mohammed Abdul Khaiser is a passionate tech entrepreneur shaping the future of
                            skill-based education. He founded HITL to bridge the gap between academic learning
                            and real-world industry needs through project-driven training, internships, and
                            innovative product development.
                        </p>
                        <p className="text-white/70 mt-4 leading-relaxed max-w-xl text-[15px]">
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
        <p className="text-[32px] font-semibold">{value}</p>
        <p className="text-white/40 text-sm">{label}</p>
    </div>
);

const Cert = ({ logo, title }) => (
    <div className="flex items-center gap-4">
        <img src={logo} className="h-16 opacity-80" />
        <p className="text-white/70">{title}</p>
    </div>
);
