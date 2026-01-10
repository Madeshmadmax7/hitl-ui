import { Search, X } from "lucide-react";
import { useState, useEffect } from "react";

import img1 from "../assets/images/img1.png";
import img2 from "../assets/images/img2.png";
import img3 from "../assets/images/img3.png";
import img4 from "../assets/images/img4.png";
import img5 from "../assets/images/img5.png";
import img6 from "../assets/images/img6.jpg";
import img7 from "../assets/images/img7.jpg";
import img8 from "../assets/images/img8.jpg";
import img9 from "../assets/images/img9.jpg";
import img10 from "../assets/images/img10.jpg";
import img11 from "../assets/images/img11.jpg";
import img12 from "../assets/images/img12.jpg";
import img13 from "../assets/images/img13.jpg";
import img14 from "../assets/images/img14.jpg";
import img15 from "../assets/images/img15.jpg";
import img16 from "../assets/images/img16.jpg";
import img17 from "../assets/images/img17.jpg";
import img18 from "../assets/images/img18.jpg";
import img19 from "../assets/images/img19.jpg";
import img20 from "../assets/images/img20.jpg";
import img21 from "../assets/images/img21.jpg";
import img22 from "../assets/images/img22.jpg";
import img23 from "../assets/images/img23.jpg";
import img24 from "../assets/images/img24.jpg";
import img25 from "../assets/images/img25.jpg";

const categories = [
    "All",
    "Web Dev",
    "Data Scientist",
    "Hackathon",
    "Live Sessions",
    "Robotics",
    "Workshops",
    "Power BI",
    "Training",
    "Events",
];

const galleryItems = [
    { title: "Live Hands On Experience Session on Robotics", category: "Robotics", img: img16 },
    { title: "Hands On Session at CMR College", category: "Workshops", img: img7 },
    { title: "Hackathon at SCIENT College", category: "Hackathon", img: img15 },
    { title: "Web Development Training Session at Malla Reddy Women's College", category: "Web Dev", img: img14 },
    { title: "Skill Development Program at CMR College", category: "Training", img: img13 },
    { title: "Project Explanation to Students", category: "Training", img: img6 },
    { title: "Real Time Projects Execution", category: "Training", img: img8 },
    { title: "Web Development Training at MRWC", category: "Web Dev", img: img8 },
    { title: "Data Analytics at SCIENT", category: "Data Scientist", img: img9 },
    { title: "Live Session on Power BI", category: "Power BI", img: img10 },
    { title: "Live Workshop on Power BI", category: "Power BI", img: img11 },
    { title: "Power BI Workshop at SCIENT College", category: "Power BI", img: img12 },
    { title: "Live Interaction Session", category: "Live Sessions", img: img13 },
    { title: "Hackathon on Power BI", category: "Hackathon", img: img14 },
    { title: "Live Hands On Training Session on Data Analytics", category: "Data Scientist", img: img15 },
    { title: "Skill Development Program at Govt. Junior College", category: "Training", img: img16 },
    { title: "Digital Citizen Summit at T-Hub", category: "Events", img: img17 },
    { title: "Session at T-Hub", category: "Events", img: img18 },
    { title: "Session at T-Hub", category: "Events", img: img19 },
    { title: "Session at T-Hub", category: "Events", img: img20 },
    { title: "With Dr. G. Satheesh Reddy Sir (DRDO Chairman)", category: "Events", img: img21 },
    { title: "Maker Fair at T-Works", category: "Events", img: img22 },
    { title: "Makers Fair Hyderabad at T-Works", category: "Events", img: img23 },
    { title: "Hands On Robotics Training Program", category: "Robotics", img: img24 },
    { title: "Advanced Robotics Workshop", category: "Robotics", img: img25 },
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
        <div className="bg-black text-white font-outfit min-h-screen overflow-x-hidden mt-8 no-scrollbar">

            {/* HEADER */}
            <section className="px-4 sm:px-6 pt-6 max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-6 lg:items-center lg:justify-between">
                    <h1 className="text-[28px] sm:text-[36px] font-semibold tracking-tight">
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

                {/* CATEGORIES */}
                <div className="mt-8 flex gap-3 sm:gap-4 overflow-x-auto pb-2 no-scrollbar">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-4 sm:px-5 py-2 rounded-full text-sm whitespace-nowrap transition
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

            {/* GRID */}
            <section className="px-4 sm:px-6 py-12 sm:py-16 max-w-7xl mx-auto">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
                    {filteredItems.map((item, i) => (
                        <div
                            key={i}
                            onClick={() => setSelectedItem(item)}
                            className="cursor-pointer group rounded-3xl overflow-hidden
                            bg-white/5 border border-white/10
                            hover:-translate-y-2 transition duration-300"
                        >
                            {/* IMAGE (ORIENTATION SAFE) */}
                            <div
                                className="aspect-[4/3] sm:aspect-[16/10]
                                flex items-center justify-center
                                bg-black/20 overflow-hidden"
                            >
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="max-h-full max-w-full
                                    object-contain
                                    group-hover:scale-105
                                    transition duration-500"
                                />
                            </div>

                            {/* TEXT */}
                            <div className="p-5 sm:p-6">
                                <p className="text-xs uppercase tracking-widest text-emerald-300 mb-2">
                                    {item.category}
                                </p>
                                <h3 className="text-[16px] sm:text-[18px] font-medium">
                                    {item.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* MODAL */}
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
                            className="w-full h-[260px] sm:h-[420px]
                            object-contain bg-black"
                        />

                        <div className="p-6 sm:p-8">
                            <p className="text-xs uppercase tracking-widest text-emerald-300 mb-2">
                                {selectedItem.category}
                            </p>
                            <h2 className="text-[22px] sm:text-[26px] font-semibold">
                                {selectedItem.title}
                            </h2>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
