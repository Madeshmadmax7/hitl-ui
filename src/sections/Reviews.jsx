import React, { useRef, useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const CARD_WIDTH = 600;
const GAP = 40; // gap-10 = 40px

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

const ReviewCard = React.memo(({ data, isActive }) => {
    return (
        <div
            className={`w-[600px] bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-10
            transition-all duration-500 ease-out
            ${isActive ? "opacity-100 scale-100" : "opacity-40 scale-95"}`}
        >
            <p className="text-lg leading-relaxed mb-8">{data.quote}</p>

            <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                    <img src={data.img} alt={data.name} className="w-14 h-14 rounded-full" />
                    <div>
                        <h4 className="font-medium">{data.name}</h4>
                        <p className="text-white/60 text-sm">{data.role}</p>
                    </div>
                </div>

                <button className="flex items-center gap-2 text-white/70 hover:text-white">
                    View Profile <ArrowRight size={18} />
                </button>
            </div>
        </div>
    );
});

export default function Reviews() {
    const carouselRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(1);

    const centerOnIndex = (index, smooth = true) => {
        const el = carouselRef.current;
        if (!el) return;

        const containerCenter = el.clientWidth / 2;
        const cardCenter =
            index * (CARD_WIDTH + GAP) + CARD_WIDTH / 2;

        el.scrollTo({
            left: cardCenter - containerCenter,
            behavior: smooth ? "smooth" : "auto",
        });
    };

    const handleScroll = () => {
        const el = carouselRef.current;
        if (!el) return;

        const center = el.scrollLeft + el.clientWidth / 2;

        let closestIndex = 0;
        let minDistance = Infinity;

        reviews.forEach((_, i) => {
            const cardCenter =
                i * (CARD_WIDTH + GAP) + CARD_WIDTH / 2;

            const distance = Math.abs(center - cardCenter);
            if (distance < minDistance) {
                minDistance = distance;
                closestIndex = i;
            }
        });

        setCurrentIndex(closestIndex);
    };

    const scrollByOne = (dir) => {
        const next =
            dir === "left"
                ? Math.max(0, currentIndex - 1)
                : Math.min(reviews.length - 1, currentIndex + 1);

        centerOnIndex(next);
    };

    // Center middle card on mount
    useEffect(() => {
        requestAnimationFrame(() => {
            centerOnIndex(currentIndex, false);
        });
    }, []);

    return (
        <section className="bg-black text-white px-6 py-20">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-16">
                    <h2 className="text-[60px] font-semibold">
                        What people say about us!
                    </h2>

                    <div className="flex gap-4">
                        <button
                            onClick={() => scrollByOne("left")}
                            className="p-2 rounded-full border border-white/40"
                        >
                            <ArrowLeft size={22} />
                        </button>

                        <button
                            onClick={() => scrollByOne("right")}
                            className="p-2 rounded-full border border-white/40"
                        >
                            <ArrowRight size={22} />
                        </button>
                    </div>
                </div>

                <div className="relative w-full overflow-hidden h-[350px]">
                    <div
                        ref={carouselRef}
                        onScroll={handleScroll}
                        className="flex items-center gap-10 overflow-x-auto scroll-smooth"
                        style={{
                            scrollbarWidth: "none",
                            msOverflowStyle: "none",
                        }}
                    >
                        {reviews.map((review, i) => (
                            <div
                                key={i}
                                className="flex-shrink-0"
                                style={{ width: CARD_WIDTH }}
                            >
                                <ReviewCard
                                    data={review}
                                    isActive={i === currentIndex}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
