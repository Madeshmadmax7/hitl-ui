import { ArrowRight, Instagram, Linkedin, Phone, Mail, MessageCircle } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-black border-t border-white/10 text-white pt-20 pb-10 px-6">
            <div className="max-w-7xl mx-auto">

                {/* ==== Consultation Box ==== */}
                <div className="bg-white/5 border border-white/10 rounded-3xl p-10 flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
                    <div>
                        <h3 className="text-[28px] font-semibold mb-4">Do you need help?</h3>
                        <p className="text-white/60 max-w-xl leading-relaxed">
                            We’ll share detailed information about our services, projects, and programs.
                            Get guidance from our team for the right solution.
                        </p>
                    </div>

                    <button className="mt-6 md:mt-0 bg-emerald-400 text-black px-7 py-3 rounded-full flex items-center gap-2 hover:bg-emerald-300 transition">
                        Get consultation
                        <ArrowRight size={18} />
                    </button>
                </div>

                {/* ==== Footer Columns ==== */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">

                    <div>
                        <h4 className="text-white/60 text-[14px] mb-3 tracking-wide">SERVICES</h4>
                        <ul className="space-y-2 text-[15px]">
                            <li>Projects</li>
                            <li>Internships</li>
                            <li>Courses</li>
                            <li>Workshops</li>
                            <li>R&D</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white/60 text-[14px] mb-3 tracking-wide">SOLUTIONS</h4>
                        <ul className="space-y-2 text-[15px]">
                            <li>Software</li>
                            <li>IoT & Robotics</li>
                            <li>PCB Design</li>
                            <li>Automation</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white/60 text-[14px] mb-3 tracking-wide">COMPANY</h4>
                        <ul className="space-y-2 text-[15px]">
                            <li>About us</li>
                            <li>Our works</li>
                            <li>Contact</li>
                        </ul>
                    </div>

                    <div className="space-y-2 text-[15px]">
                        <h4 className="text-white/60 text-[14px] mb-3 tracking-wide">CONTACT</h4>

                        <p className="flex items-center gap-3">
                            <Phone size={18} className="text-emerald-300" /> 
                            +91 981 981 23 19
                        </p>

                        <p className="flex items-center gap-3">
                            <Mail size={18} className="text-emerald-300" /> 
                            support@hitl.com
                        </p>
                    </div>

                </div>

                {/* ==== Social Row ==== */}
                <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/10 pt-6">

                    {/* Left */}
                    <p className="text-white/40 text-[14px]">© {new Date().getFullYear()} HITL — All Rights Reserved</p>

                    {/* Right Social Icons */}
                    <div className="flex items-center gap-6 mt-4 md:mt-0">

                        <a href="#" className="text-white/70 hover:text-white transition flex items-center gap-2">
                            <Instagram size={20} /> Instagram
                        </a>

                        <a href="#" className="text-white/70 hover:text-white transition flex items-center gap-2">
                            <MessageCircle size={20} /> WhatsApp
                        </a>

                        <a href="#" className="text-white/70 hover:text-white transition flex items-center gap-2">
                            <Linkedin size={20} /> LinkedIn
                        </a>

                    </div>

                </div>
            </div>
        </footer>
    );
}
