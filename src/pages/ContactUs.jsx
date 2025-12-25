import {
    Phone,
    Mail,
    MapPin,
    Instagram,
    Linkedin,
    MessageCircle
} from "lucide-react";

export default function ContactUs() {
    return (
        <div className="bg-black text-white font-outfit">

            <section className="px-6 py-24 max-w-7xl mx-auto">
                <div className="grid md:grid-cols-12 rounded-3xl overflow-hidden 
                                border border-white/10 bg-white/5 backdrop-blur-xl">
                    <div className="md:col-span-5 bg-black p-10 md:p-12 relative">
                        <h2 className="text-[32px] font-semibold mb-3">
                            Contact Information
                        </h2>
                        <p className="text-white/60 mb-10">
                            Say something to start a live chat!
                        </p>

                        <div className="space-y-6 text-white/80">
                            <div className="flex items-center gap-4">
                                <Phone className="text-emerald-300" />
                                <span>+91 9553650061</span>
                            </div>

                            <div className="flex items-center gap-4">
                                <Mail className="text-emerald-300" />
                                <span>info.hitl.hyd@gmail.com</span>
                            </div>

                            <div className="flex items-start gap-4">
                                <MapPin className="text-emerald-300 mt-1" />
                                <span className="leading-relaxed">
                                    Hyderabad, Telangana, India
                                </span>
                            </div>
                        </div>

                        {/* Social Icons */}
                        <div className="flex gap-5 mt-12">
                            <a className="p-2 rounded-full bg-white/10 hover:bg-emerald-400/20 transition">
                                <Instagram size={18} />
                            </a>
                            <a className="p-2 rounded-full bg-white/10 hover:bg-emerald-400/20 transition">
                                <Linkedin size={18} />
                            </a>
                            <a className="p-2 rounded-full bg-white/10 hover:bg-emerald-400/20 transition">
                                <MessageCircle size={18} />
                            </a>
                        </div>

                        {/* Decorative Glow */}
                        <div className="absolute bottom-[-80px] right-[-80px]
                                        w-[220px] h-[220p] 
                                        bg-emerald-400/15
                                        rounded-full blur-2xl"></div>
                    </div>

                    {/* RIGHT FORM (DARK / EMERALD THEME) */}
                    <div className="md:col-span-7 p-10 md:p-12
                                    bg-emerald-400/5
                                    backdrop-blur-xl
                                    border-l border-white/10">
                        <form className="grid md:grid-cols-2 gap-8 text-white">

                            <div>
                                <label className="text-sm text-white/60">First Name</label>
                                <input
                                    type="text"
                                    className="w-full bg-transparent border-b border-white/30 
                                            outline-none py-2 text-white 
                                            focus:border-emerald-400 transition"
                                />
                            </div>

                            <div>
                                <label className="text-sm text-white/60">Last Name</label>
                                <input
                                    type="text"
                                    className="w-full bg-transparent border-b border-white/30 
                                               outline-none py-2 text-white 
                                               focus:border-emerald-400 transition"
                                />
                            </div>

                            <div>
                                <label className="text-sm text-white/60">Email</label>
                                <input
                                    type="email"
                                    className="w-full bg-transparent border-b border-white/30 
                                               outline-none py-2 text-white 
                                               focus:border-emerald-400 transition"
                                />
                            </div>

                            <div>
                                <label className="text-sm text-white/60">Phone Number</label>
                                <input
                                    type="tel"
                                    className="w-full bg-transparent border-b border-white/30 
                                               outline-none py-2 text-white 
                                               focus:border-emerald-400 transition"
                                />
                            </div>

                            <div className="md:col-span-2">
                                <label className="text-sm text-white/60">Message</label>
                                <textarea
                                    rows="3"
                                    className="w-full bg-transparent border-b border-white/30 
                                               outline-none py-2 resize-none text-white 
                                               placeholder-white/40
                                               focus:border-emerald-400 transition"
                                    placeholder="Write your message..."
                                ></textarea>
                            </div>

                            <div className="md:col-span-2 flex justify-end mt-6">
                                <button
                                    type="submit"
                                    className="bg-emerald-400 text-black px-10 py-3 
                                               rounded-xl hover:bg-emerald-300 transition font-medium"
                                >
                                    Send Message
                                </button>
                            </div>

                        </form>
                    </div>

                </div>
            </section>
        </div>
    );
}
