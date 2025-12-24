import React, { useRef, useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { gsap } from "gsap";

const reviews = [
    {
        quote: "I've tried so many learning platforms, but this is the first one where the lessons actually feel personal.",
        name: "Ally Masi",
        role: "B.Tech Student, CSE",
        img: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
        quote: "The quality of the content is unreal. I improved faster in 2 weeks here than in 2 months of coaching classes.",
        name: "Dr. Pete",
        role: "IT Professional",
        img: "https://randomuser.me/api/portraits/men/52.jpg",
    },
    {
        quote: "Online learning was never this engaging. Visual examples make everything click instantly.",
        name: "Laura Grey",
        role: "Design Student",
        img: "https://randomuser.me/api/portraits/women/22.jpg",
    },
    {
        quote: "Amazing UI, great teachers, and insanely good breakdown of hard concepts.",
        name: "Henry Walsh",
        role: "Engineering Aspirant",
        img: "https://randomuser.me/api/portraits/men/41.jpg",
    },
];

export default function Reviews() {
    const [index, setIndex] = useState(1);
    const [isAnimating, setIsAnimating] = useState(false);

    const stripRef = useRef(null);
    const cardRefs = useRef([]);

    const total = reviews.length;
    const safeGet = (i) => (i >= 0 && i < total ? reviews[i] : null);

    const baseStates = [
        { opacity: 0.3, scale: 0.9 },
        { opacity: 0.5, scale: 0.95 },
        { opacity: 1, scale: 1 },
        { opacity: 0.5, scale: 0.95 },
        { opacity: 0.3, scale: 0.9 },
    ];

    const applyDepth = () => {
        baseStates.forEach((state, i) => {
            if (cardRefs.current[i]) gsap.set(cardRefs.current[i], state);
        });
    };

    useEffect(() => {
        applyDepth();
    }, []);

    const animateDepth = (dir) => {
        let target;

        if (dir === "next") {
            target = [
                baseStates[1],
                baseStates[2],
                baseStates[3],
                baseStates[4],
                baseStates[0],
            ];
        } else {
            target = [
                baseStates[4],
                baseStates[0],
                baseStates[1],
                baseStates[2],
                baseStates[3],
            ];
        }

        gsap.to(cardRefs.current, {
            opacity: (i) => target[i].opacity,
            scale: (i) => target[i].scale,
            duration: 1,
            ease: "power3.out",
        });
    };

    const slide = (dir) => {
    if (isAnimating) return;
    if (dir === "prev" && index <= 0) return;
    if (dir === "next" && index >= total - 1) return;

    setIsAnimating(true);

    const distance = 700;
    const move = dir === "next" ? -distance : distance;

    const tl = gsap.timeline({
        onComplete: () => {
            setIndex(prev => dir === "next" ? prev + 1 : prev - 1);
            gsap.set(stripRef.current, { x: 0 });
            setTimeout(applyDepth, 10);
            setIsAnimating(false);
        }
    });

    // SLIDE + SCALE IN SAME TIMELINE
    tl.to(stripRef.current, {
        x: move,
        duration: 1,
        ease: "power3.out"
    }, 0);

    const target =
        dir === "next"
            ? [baseStates[1], baseStates[2], baseStates[3], baseStates[4], baseStates[0]]
            : [baseStates[4], baseStates[0], baseStates[1], baseStates[2], baseStates[3]];

    tl.to(cardRefs.current, {
        opacity: (i) => target[i].opacity,
        scale: (i) => target[i].scale,
        duration: 1,
        ease: "power3.out"
    }, 0);
};


    return (
        <section className="bg-black text-white px-6 py-20">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-16">
                    <h2 className="text-[60px] font-semibold">What people say about us!</h2>

                    <div className="flex gap-4">
                        <button
                            onClick={() => slide("prev")}
                            disabled={index <= 0 || isAnimating}
                            className="p-2 rounded-full border border-white/40 disabled:opacity-30"
                        >
                            <ArrowLeft size={22} />
                        </button>

                        <button
                            onClick={() => slide("next")}
                            disabled={index >= total - 1 || isAnimating}
                            className="p-2 rounded-full border border-white/40 disabled:opacity-30"
                        >
                            <ArrowRight size={22} />
                        </button>
                    </div>
                </div>

                <div className="relative w-full overflow-hidden h-[350px]">
                    <div className="absolute left-1/2 -translate-x-1/2">
                        <div
                            ref={stripRef}
                            className="flex items-center justify-center gap-10"
                        >
                            <ReviewCard data={safeGet(index - 2)} ref={(el) => (cardRefs.current[0] = el)} />
                            <ReviewCard data={safeGet(index - 1)} ref={(el) => (cardRefs.current[1] = el)} />
                            <ReviewCard data={safeGet(index)} ref={(el) => (cardRefs.current[2] = el)} />
                            <ReviewCard data={safeGet(index + 1)} ref={(el) => (cardRefs.current[3] = el)} />
                            <ReviewCard data={safeGet(index + 2)} ref={(el) => (cardRefs.current[4] = el)} />
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

const ReviewCard = React.forwardRef(({ data }, ref) => {
    if (!data) return <div ref={ref} className="w-[600px] opacity-0 scale-90"></div>;

    return (
        <div
            ref={ref}
            className="w-[600px] bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-10"
        >
            <p className="text-lg leading-relaxed mb-8">{data.quote}</p>

            <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                    <img src={data.img} className="w-14 h-14 rounded-full object-cover" />
                    <div>
                        <h4 className="font-medium">{data.name}</h4>
                        <p className="text-white/60 text-sm">{data.role}</p>
                    </div>
                </div>

                <button className="flex items-center gap-2 text-white/70 hover:text-white transition">
                    View Profile <ArrowRight size={18} />
                </button>
            </div>
        </div>
    );
});
