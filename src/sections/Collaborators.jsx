import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const logos = [
    // Google
    "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",

    // Microsoft
    "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",

    // Amazon
    "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",

    // Netflix
    "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",

    // Intel
    "https://logos-world.net/wp-content/uploads/2020/11/Nvidia-Logo.png",

    // Adobe (WORKING)
    "https://logos-world.net/wp-content/uploads/2020/06/Adobe-Logo.png",

    // Meta (WORKING)
    "https://logos-world.net/wp-content/uploads/2021/10/Meta-Logo.png",

    // PayPal
    "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg",

    // Spotify
    "https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg",

    // Salesforce
    "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg",
];

export default function Collaborators() {
    const trackRef = useRef(null);

    useEffect(() => {
        const track = trackRef.current;
        const totalWidth = track.scrollWidth / 2;

        gsap.set(track, { x: 0 });

        gsap.to(track, {
            x: -totalWidth,
            duration: 25,
            ease: "none",
            repeat: -1,
        });
    }, []);

    return (
        <section className="bg-black py-16 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                <h2 className="text-[34px] font-semibold mb-10">
                    Our <span className="text-emerald-300">Collaborators</span>
                </h2>

                {/* Marquee Container */}
                <div className="relative w-full overflow-hidden border border-white/10 rounded-2xl bg-black backdrop-blur-sm">

                    {/* Gradient fades (edges) */}
                    <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-black to-transparent z-10" />
                    <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-black to-transparent z-10" />

                    {/* Track */}
                    <div
                        ref={trackRef}
                        className="flex items-center gap-20 py-8 w-max"
                    >
\                        {[...logos, ...logos].map((logo, i) => (
                            <div
                                key={i}
                                className="flex items-center justify-center min-w-[160px]"
                            >
                                <img
                                    src={logo}
                                    alt="Collaborator"
                                    className="h-10 opacity-85 hover:opacity-100 transition duration-300"
                                />
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
