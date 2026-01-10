import {
    Code2,
    Server,
    Globe,
    Layers,
    Cpu,
    BarChart3,
    Bot,
    Wifi,
    Brain,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { api } from "../services/api";

const fake_internships = [
    {
        title: "Frontend Development",
        icon: Code2,
        img: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=900",
    },
    {
        title: "Backend Development",
        icon: Server,
        img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=900",
    },
    {
        title: "Web Development",
        icon: Globe,
        img: "https://images.unsplash.com/photo-1545235617-9465d2a55698?w=900",
    },
    {
        title: "Full Stack Development",
        icon: Layers,
        img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900",
    },
    {
        title: "Embedded Systems",
        icon: Cpu,
        img: "https://images.unsplash.com/photo-1581092795360-1b231f3873c8?w=900",
    },
    {
        title: "Data Analytics",
        icon: BarChart3,
        img: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?w=900",
    },
    {
        title: "Robotics",
        icon: Bot,
        img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=900",
    },
    {
        title: "IoT",
        icon: Wifi,
        img: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?w=900",
    },
    {
        title: "AI & ML",
        icon: Brain,
        img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900",
    },
];

export default function Internships() {
    const gridRef = useRef(null);
    const [internships, setInternships] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchInternships = async () => {
            try {
                const data = await api.getAllInternships();
                setInternships(data);
            } catch (error) {
                console.error("Failed to load internships", error);
            } finally {
                setLoading(false);
            }
        };

        fetchInternships();
    }, []);

    useEffect(() => {
        if (!loading && gridRef.current) {
            gsap.fromTo(
                gridRef.current.children,
                { opacity: 0, y: 80 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    stagger: 0.15,
                    ease: "power4.out",
                }
            );
        }
    }, [loading, internships]);

    if (loading) {
        return <div className="text-white text-center py-20">Loading internships...</div>;
    }

    return (
        <section className="px-4 sm:px-6 py-16 sm:py-24 lg:py-28 max-w-7xl mx-auto overflow-x-hidden">
            <h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-semibold mb-4 sm:mb-6">
                Internship Domains
            </h2>

            <p className="text-white/60 max-w-3xl mb-10 sm:mb-16 text-sm sm:text-base">
                Industry-aligned internships with real-time projects and expert mentorship.
            </p>

            <div
                ref={gridRef}
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            >
                {internships.map((item, i) => {
                    // Default icon if specific mapping isn't available or relevant
                    const Icon = Layers;

                    return (
                        <div
                            key={i}
                            className="group bg-white/5 border border-white/10 rounded-3xl
                            overflow-hidden hover:-translate-y-3 transition-all duration-300"
                        >
                            {/* IMAGE */}
                            <div className="h-[160px] sm:h-[200px] overflow-hidden">
                                {/* Use a placeholder or item.image if available in API response */}
                                <img
                                    src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=900"
                                    alt={item.title}
                                    className="h-full w-full object-cover
                                    group-hover:scale-105 transition duration-500"
                                />
                            </div>

                            {/* CONTENT */}
                            <div className="p-5 sm:p-7">
                                <Icon
                                    size={28}
                                    className="text-emerald-300 mb-3 sm:mb-4"
                                />

                                <h3 className="text-[18px] sm:text-[20px] font-semibold mb-2">
                                    {item.title}
                                </h3>

                                <p className="text-white/60 text-sm mb-4">
                                    {item.description}
                                </p>

                                <div className="text-white/40 text-xs">
                                    Duration: {item.durationInWeeks} weeks | Stipend: ${item.stipend}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
