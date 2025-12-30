import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    // Scroll hide / show logic
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 80) {
                setShow(false);
            } else {
                setShow(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <>
            <nav
                className={`fixed top-0 left-0 w-full z-50 bg-black text-white transition-transform duration-300
                ${show ? "translate-y-0" : "-translate-y-full"}`}
            >
                <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 py-5 flex items-center justify-between">

                    {/* LOGO */}
                    <h1 className="text-lg font-semibold tracking-widest whitespace-nowrap">
                        HITL{" "}
                        <span className="text-gray-400 tracking-tighter">
                            INFOTECH
                        </span>
                    </h1>

                    {/* DESKTOP LINKS */}
                    <div className="hidden md:flex items-center gap-8 text-sm tracking-widest uppercase">
                        <Link to="/" className="text-white/80 hover:text-white">Home</Link>
                        <Link to="/about" className="text-white/80 hover:text-white">About</Link>
                        <Link to="/programs" className="text-white/80 hover:text-white">Programs</Link>
                        <Link to="/gallery" className="text-white/80 hover:text-white">Gallery</Link>
                        <Link to="/contact" className="text-white/80 hover:text-white">Contact</Link>
                    </div>

                    {/* MOBILE TOGGLE */}
                    <button
                        onClick={() => setOpen(true)}
                        className="md:hidden border border-white/20 rounded-full p-2 hover:border-white transition"
                    >
                        <Menu size={18} />
                    </button>
                </div>
            </nav>

            {/* MOBILE DRAWER */}
            <div
                className={`fixed top-0 right-0 h-screen w-[85%] max-w-sm bg-black z-50
                transform transition-transform duration-300
                ${open ? "translate-x-0" : "translate-x-full"}`}
            >
                {/* HEADER */}
                <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
                    <span className="tracking-widest text-sm text-white/70">
                        MENU
                    </span>
                    <button onClick={() => setOpen(false)}>
                        <X size={20} />
                    </button>
                </div>

                {/* LINKS */}
                <div className="flex flex-col px-6 py-8">
                    <Link to="/" onClick={() => setOpen(false)} className="mobile-link">Home</Link>
                    <Link to="/about" onClick={() => setOpen(false)} className="mobile-link">About</Link>
                    <Link to="/programs" onClick={() => setOpen(false)} className="mobile-link">Programs</Link>
                    <Link to="/gallery" onClick={() => setOpen(false)} className="mobile-link">Gallery</Link>
                    <Link to="/contact" onClick={() => setOpen(false)} className="mobile-link">Contact</Link>
                </div>

                <div className="absolute bottom-6 left-6 text-[12px] text-white/40">
                    © {new Date().getFullYear()} HITL
                </div>
            </div>

            {/* BACKDROP */}
            {open && (
                <div
                    onClick={() => setOpen(false)}
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
                />
            )}

            {/* spacer for fixed navbar */}
            <div className="h-[20px]"  />

            {/* helper styles */}
            <style>{`
                .mobile-link {
                    padding: 1rem 0;
                    border-bottom: 1px solid rgba(255,255,255,0.1);
                    font-size: 15px;
                    letter-spacing: 0.15em;
                    text-transform: uppercase;
                    color: rgba(255,255,255,0.8);
                    transition: all 0.3s ease;
                }
                .mobile-link:hover {
                    color: #fff;
                    padding-left: 0.5rem;
                }
            `}</style>
        </>
    );
}
