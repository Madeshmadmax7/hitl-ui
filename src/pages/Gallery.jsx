import { Search, X } from "lucide-react";
import { useState, useEffect } from "react";

const categories = [
    "All",
    "Web Dev",
    "Data Scientist",
    "Hackathon",
    "Live Sessions",
    "Robotics",
    "PCB",
    "IoT",
    "Workshops",
    "Internships",
];

const galleryItems = [
    {
        title: "Full Stack Web Project",
        category: "Web Dev",
        img: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=800",
    },
    {
        title: "React Admin Dashboard",
        category: "Web Dev",
        img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
    },
    {
        title: "E-Commerce Website Development",
        category: "Web Dev",
        img: "https://images.unsplash.com/photo-1545235617-9465d2a55698?w=800",
    },
    {
        title: "Data Analytics Dashboard",
        category: "Data Scientist",
        img: "https://images.unsplash.com/photo-1556155092-8707de31f9c4?w=800",
    },
    {
        title: "Machine Learning Model Training",
        category: "Data Scientist",
        img: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?w=800",
    },
    {
        title: "National Level Hackathon",
        category: "Hackathon",
        img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800",
    },
    {
        title: "Live Coding Session",
        category: "Live Sessions",
        img: "https://images.unsplash.com/photo-1581092919535-7146d98f66d9?w=800",
    },
    {
        title: "Autonomous Robot Build",
        category: "Robotics",
        img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800",
    },
    {
        title: "Custom PCB Design",
        category: "PCB",
        img: "https://images.unsplash.com/photo-1581092795360-1b231f3873c8?w=800",
    },
    {
        title: "IoT Smart Home System",
        category: "IoT",
        img: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?w=800",
    },
    {
        title: "Certified Internship Program",
        category: "Internships",
        img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800",
    },
];

export default function Gallery() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [search, setSearch] = useState("");
    const [selectedItem, setSelectedItem] = useState(null);

    const filteredItems = galleryItems.filter((item) => {
        const matchesCategory =
            activeCategory === "All" || item.category === activeCategory;
        const matchesSearch = item.title
            .toLowerCase()
            .includes(search.toLowerCase());

        return matchesCategory && matchesSearch;
    });

    useEffect(() => {
        const esc = (e) => e.key === "Escape" && setSelectedItem(null);
        window.addEventListener("keydown", esc);
        return () => window.removeEventListener("keydown", esc);
    }, []);

    return (
        <div className="bg-black text-white font-outfit min-h-screen">

            <section className="px-6 pt-6 max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-6 lg:items-center lg:justify-between">
                    <h1 className="text-[36px] font-semibold tracking-tight">
                        Gallery
                    </h1>

                    <div className="relative w-full lg:w-[420px]">
                        <Search
                            size={18}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40"
                        />
                        <input
                            type="text"
                            placeholder="Search projects, events, sessions..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full bg-white/5 border border-white/10 rounded-full
                            py-3 pl-11 pr-4 outline-none text-sm
                            placeholder:text-white/40 focus:border-emerald-400"
                        />
                    </div>
                </div>

                <div className="mt-10 flex gap-4 overflow-x-auto pb-2">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-5 py-2 rounded-full text-sm whitespace-nowrap transition
                            ${
                                activeCategory === cat
                                    ? "bg-emerald-400 text-black"
                                    : "bg-white/5 text-white/70 hover:bg-white/10"
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </section>

            <section className="px-6 py-16 max-w-7xl mx-auto">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {filteredItems.map((item, i) => (
                        <div
                            key={i}
                            onClick={() => setSelectedItem(item)}
                            className="cursor-pointer group rounded-3xl overflow-hidden
                            bg-white/5 border border-white/10
                            hover:-translate-y-2 transition duration-300"
                        >
                            <div className="h-[220px] overflow-hidden">
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="h-full w-full object-cover
                                    group-hover:scale-105 transition duration-500"
                                />
                            </div>

                            <div className="p-6">
                                <p className="text-xs uppercase tracking-widest text-emerald-300 mb-2">
                                    {item.category}
                                </p>
                                <h3 className="text-[18px] font-medium">
                                    {item.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            {selectedItem && (
                <div
                    className="fixed inset-0 z-50 bg-black/80
                    flex items-center justify-center px-4"
                    onClick={() => setSelectedItem(null)}
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="relative max-w-3xl w-full
                        bg-black border border-white/10 rounded-3xl overflow-hidden"
                    >
                        <button
                            onClick={() => setSelectedItem(null)}
                            className="absolute top-4 right-4 z-10
                            p-2 rounded-full bg-white/10 hover:bg-white/20"
                        >
                            <X size={18} />
                        </button>

                        <img
                            src={selectedItem.img}
                            className="w-full h-[420px] object-cover"
                        />

                        <div className="p-8">
                            <p className="text-xs uppercase tracking-widest text-emerald-300 mb-2">
                                {selectedItem.category}
                            </p>
                            <h2 className="text-[26px] font-semibold">
                                {selectedItem.title}
                            </h2>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
