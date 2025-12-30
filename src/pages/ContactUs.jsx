import {
    Phone,
    Mail,
    MapPin,
    Instagram,
    Linkedin,
    MessageCircle,
} from "lucide-react";

export default function ContactUs() {
    return (
        <div className="bg-black text-white overflow-x-hidden">

            <section className="px-4 sm:px-6 py-20 max-w-7xl mx-auto">
                <div className="grid md:grid-cols-12 rounded-3xl overflow-hidden
                                border border-white/10 bg-white/5 backdrop-blur-xl">

                    {/* LEFT INFO */}
                    <div className="md:col-span-5 bg-black p-6 sm:p-8 md:p-12 relative">
                        <h2 className="text-[26px] sm:text-[32px] font-semibold mb-3">
                            Contact Information
                        </h2>
                        <p className="text-white/60 mb-8 text-sm">
                            Say something to start a live chat!
                        </p>

                        <div className="space-y-6 text-white/80 text-sm">
                            <div className="flex items-center gap-4">
                                <Phone className="text-emerald-300 shrink-0" />
                                <span>+91 9553650061</span>
                            </div>

                            <div className="flex items-center gap-4 break-all">
                                <Mail className="text-emerald-300 shrink-0" />
                                <span>info.hitl.hyd@gmail.com</span>
                            </div>

                            <div className="flex items-start gap-4">
                                <MapPin className="text-emerald-300 mt-1 shrink-0" />
                                <span className="leading-relaxed">
                                    Hyderabad, Telangana, India
                                </span>
                            </div>
                        </div>

                        {/* SOCIAL */}
                        <div className="flex gap-4 mt-10">
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

                        {/* SAFE GLOW */}
                        <div className="absolute bottom-0 right-0
                                        w-[200px] h-[200px]
                                        bg-emerald-400/15
                                        rounded-full blur-2xl
                                        pointer-events-none"></div>
                    </div>

                    {/* RIGHT FORM */}
                    <div className="md:col-span-7 p-6 sm:p-8 md:p-12
                                    bg-emerald-400/5
                                    backdrop-blur-xl
                                    border-t md:border-t-0 md:border-l border-white/10">
                        <form className="grid sm:grid-cols-2 gap-6 text-white">

                            <Input label="First Name" />
                            <Input label="Last Name" />
                            <Input label="Email" type="email" />
                            <Input label="Phone Number" type="tel" />

                            <div className="sm:col-span-2">
                                <label className="text-sm text-white/60">
                                    Message
                                </label>
                                <textarea
                                    rows="3"
                                    className="w-full bg-transparent border-b border-white/30
                                               outline-none py-2 resize-none text-white
                                               focus:border-emerald-400 transition"
                                    placeholder="Write your message..."
                                />
                            </div>

                            <div className="sm:col-span-2 flex justify-start sm:justify-end mt-4">
                                <button
                                    type="submit"
                                    className="bg-emerald-400 text-black px-8 py-3
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

const Input = ({ label, type = "text" }) => (
    <div>
        <label className="text-sm text-white/60">{label}</label>
        <input
            type={type}
            className="w-full bg-transparent border-b border-white/30
                       outline-none py-2 text-white
                       focus:border-emerald-400 transition"
        />
    </div>
);
