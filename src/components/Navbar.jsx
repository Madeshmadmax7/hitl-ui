import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const linksRef = useRef(null);

    useEffect(() => {
        gsap.set(linksRef.current, {
            x: 60,
            opacity: 0,
            pointerEvents: "none",
        });
    }, []);

    const toggleMenu = () => {
        if (!open) {
            gsap.to(linksRef.current, {
                x: 0,
                opacity: 1,
                duration: 0.5,
                ease: "power3.out",
                pointerEvents: "auto",
            });
        } else {
            gsap.to(linksRef.current, {
                x: 60,
                opacity: 0,
                duration: 0.4,
                ease: "power3.in",
                pointerEvents: "none",
            });
        }
        setOpen(!open);
    };

    return (
        <nav className="relative flex items-center justify-between px-10 py-6 bg-black text-white">
            <h1 className="text-lg font-semibold tracking-widest whitespace-nowrap">
                HITL <span className="text-gray-400 tracking-tighter">INFOTECH</span>
            </h1>

            <div className="flex items-center gap-8">
                <div
                    ref={linksRef}
                    className="flex items-center gap-8 text-sm tracking-widest uppercase"
                >
                    <Link to="/" onClick={toggleMenu} className="text-white/80 hover:text-white transition">Home</Link>
                    <Link to="/about" onClick={toggleMenu} className="text-white/80 hover:text-white transition">About</Link>
                    <Link to="/programs" onClick={toggleMenu} className="text-white/80 hover:text-white transition">Programs</Link>
                    <Link to="/research" onClick={toggleMenu} className="text-white/80 hover:text-white transition">Research</Link>
                    <Link to="/contact" onClick={toggleMenu} className="text-white/80 hover:text-white transition">Contact</Link>
                </div>

                <button
                    onClick={toggleMenu}
                    className="border border-gray-500 rounded-full p-2 hover:border-white transition"
                >
                    {open ? <X size={18} /> : <Menu size={18} />}
                </button>
            </div>
        </nav>
    );
}
