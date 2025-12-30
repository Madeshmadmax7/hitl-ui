import {
    ArrowRight,
    Instagram,
    Linkedin,
    Phone,
    Mail,
    MessageCircle,
} from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-black border-t border-white/10 text-white overflow-x-hidden">
            {/* SAFE CONTAINER */}
            <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-10 pt-20 pb-10">

                {/* ==== Consultation Box ==== */}
                <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 lg:p-10 flex flex-col lg:flex-row gap-6 lg:gap-10 justify-between items-start lg:items-center mb-16">
                    <div className="max-w-2xl">
                        <h3 className="text-[22px] sm:text-[26px] lg:text-[28px] font-semibold mb-4">
                            Do you need help?
                        </h3>
                        <p className="text-white/60 text-[14px] sm:text-[15px] leading-relaxed">
                            We’ll share detailed information about our services,
                            projects, and programs. Get guidance from our team
                            for the right solution.
                        </p>
                    </div>

                    <button className="bg-emerald-400 text-black px-6 py-3 rounded-full flex items-center gap-2 text-[14px] sm:text-[15px] hover:bg-emerald-300 transition whitespace-nowrap">
                        Get consultation
                        <ArrowRight size={18} />
                    </button>
                </div>

                {/* ==== Footer Columns ==== */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-16">

                    <div>
                        <h4 className="text-white/60 text-[13px] mb-3 tracking-wide">
                            SERVICES
                        </h4>
                        <ul className="space-y-2 text-[14px]">
                            <li>Projects</li>
                            <li>Internships</li>
                            <li>Courses</li>
                            <li>Workshops</li>
                            <li>R&D</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white/60 text-[13px] mb-3 tracking-wide">
                            SOLUTIONS
                        </h4>
                        <ul className="space-y-2 text-[14px]">
                            <li>Software</li>
                            <li>IoT & Robotics</li>
                            <li>PCB Design</li>
                            <li>Automation</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white/60 text-[13px] mb-3 tracking-wide">
                            COMPANY
                        </h4>
                        <ul className="space-y-2 text-[14px]">
                            <li>About us</li>
                            <li>Our works</li>
                            <li>Contact</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white/60 text-[13px] mb-3 tracking-wide">
                            CONTACT
                        </h4>

                        <p className="flex items-center gap-3 text-[14px]">
                            <Phone size={16} className="text-emerald-300 shrink-0" />
                            +91 981 981 23 19
                        </p>

                        <p className="flex items-center gap-3 text-[14px] mt-2 break-all">
                            <Mail size={16} className="text-emerald-300 shrink-0" />
                            support@hitl.com
                        </p>
                    </div>
                </div>

                {/* ==== Bottom Row ==== */}
                <div className="flex flex-col md:flex-row gap-4 justify-between items-center border-t border-white/10 pt-6">

                    <p className="text-white/40 text-[13px] text-center md:text-left">
                        © {new Date().getFullYear()} HITL — All Rights Reserved
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-6 text-[14px]">
                        <a className="flex items-center gap-2 text-white/70 hover:text-white transition">
                            <Instagram size={18} /> Instagram
                        </a>
                        <a className="flex items-center gap-2 text-white/70 hover:text-white transition">
                            <MessageCircle size={18} /> WhatsApp
                        </a>
                        <a className="flex items-center gap-2 text-white/70 hover:text-white transition">
                            <Linkedin size={18} /> LinkedIn
                        </a>
                    </div>

                </div>
            </div>
        </footer>
    );
}
