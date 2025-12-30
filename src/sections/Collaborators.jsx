import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const logos = [
    "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    "https://logos-world.net/wp-content/uploads/2020/11/Nvidia-Logo.png",
    "https://logos-world.net/wp-content/uploads/2020/06/Adobe-Logo.png",
    "https://logos-world.net/wp-content/uploads/2021/10/Meta-Logo.png",
    "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg",
    "https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg",
    "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg",
];

export default function Collaborators() {
    const trackRef = useRef(null);
    const tweenRef = useRef(null);

    useEffect(() => {
        const track = trackRef.current;

        const animate = () => {
            if (tweenRef.current) tweenRef.current.kill();

            const totalWidth = track.scrollWidth / 2;

            gsap.set(track, { x: 0 });

            tweenRef.current = gsap.to(track, {
                x: -totalWidth,
                duration: 25,
                ease: "none",
                repeat: -1,
            });
        };

        animate();
        window.addEventListener("resize", animate);

        return () => {
            window.removeEventListener("resize", animate);
            tweenRef.current?.kill();
        };
    }, []);

    return (
        <section className="bg-black py-12 sm:py-16 overflow-x-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">

                <h2 className="text-[26px] sm:text-[34px] font-semibold mb-8 sm:mb-10">
                    Our <span className="text-emerald-300">Collaborators</span>
                </h2>

                {/* Marquee Container */}
                <div className="relative w-full overflow-hidden border border-white/10 rounded-2xl bg-black">

                    {/* Gradient fades */}
                    <div className="pointer-events-none absolute left-0 top-0 h-full w-16 sm:w-24 bg-gradient-to-r from-black to-transparent z-10" />
                    <div className="pointer-events-none absolute right-0 top-0 h-full w-16 sm:w-24 bg-gradient-to-l from-black to-transparent z-10" />

                    {/* Track */}
                    <div
                        ref={trackRef}
                        className="flex items-center gap-12 sm:gap-20 py-6 sm:py-8 w-max"
                    >
                        {[...logos, ...logos].map((logo, i) => (
                            <div
                                key={i}
                                className="flex items-center justify-center min-w-[120px] sm:min-w-[160px]"
                            >
                                <img
                                    src={logo}
                                    alt="Collaborator"
                                    className="h-8 sm:h-10 opacity-80 hover:opacity-100 transition"
                                />
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
