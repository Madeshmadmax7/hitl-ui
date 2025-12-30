import React, { useRef, useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
// import './App.css';
/* RESPONSIVE WIDTH USING CSS CLAMP */
const CARD_WIDTH = "clamp(280px, 80vw, 600px)";
const GAP = 40;

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
            style={{ width: CARD_WIDTH }}
            className={`bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl
            p-6 sm:p-8 md:p-10 transition-all duration-500 ease-out
            contain-paint
            ${isActive ? "opacity-100" : "opacity-40"}`}
        >
            <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8">
                {data.quote}
            </p>

            <div className="flex justify-between items-center gap-4">
                <div className="flex items-center gap-4">
                    <img
                        src={data.img}
                        alt={data.name}
                        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full"
                    />
                    <div>
                        <h4 className="font-medium text-sm sm:text-base">
                            {data.name}
                        </h4>
                        <p className="text-white/60 text-xs sm:text-sm">
                            {data.role}
                        </p>
                    </div>
                </div>

                <button className="hidden sm:flex items-center gap-2 text-white/70 hover:text-white text-sm">
                    View Profile <ArrowRight size={16} />
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

        const cards = el.children;
        const card = cards[index];
        if (!card) return;

        const containerCenter = el.clientWidth / 2;
        const cardCenter =
            card.offsetLeft + card.offsetWidth / 2;

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

        Array.from(el.children).forEach((child, i) => {
            const cardCenter =
                child.offsetLeft + child.offsetWidth / 2;
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

    useEffect(() => {
        requestAnimationFrame(() => {
            centerOnIndex(currentIndex, false);
        });
    }, []);

    return (
        <section className="bg-black text-white px-4 sm:px-6 py-16 sm:py-20 overflow-x-hidden">
            <div className="max-w-7xl mx-auto">

                {/* HEADER */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-6 mb-10 sm:mb-16">
                    <h2 className="text-[28px] sm:text-[40px] md:text-[60px] font-semibold">
                        What people say about us!
                    </h2>

                    <div className="flex gap-4">
                        <button
                            onClick={() => scrollByOne("left")}
                            className="p-2 rounded-full border border-white/40"
                        >
                            <ArrowLeft size={20} />
                        </button>

                        <button
                            onClick={() => scrollByOne("right")}
                            className="p-2 rounded-full border border-white/40"
                        >
                            <ArrowRight size={20} />
                        </button>
                    </div>
                </div>

                {/* CAROUSEL */}
                <div className="relative w-full h-[260px] sm:h-[300px] md:h-[350px]">
                    <div
                        ref={carouselRef}
                        onScroll={handleScroll}
                        className="flex items-center gap-10 overflow-x-auto scroll-smooth no-scrollbar will-change-transform"
                    >

                        {reviews.map((review, i) => (
                            <div
                                key={i}
                                className="flex-shrink-0 overflow-hidden"
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
