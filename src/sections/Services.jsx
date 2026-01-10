import React, { useRef, useState, useImperativeHandle } from "react";
import { ArrowUpRight } from "lucide-react";
import { gsap } from "gsap";

import img1 from "../assets/images/img1.png";
import img2 from "../assets/images/img3.png";
import img3 from "../assets/images/img2.png";
import img4 from "../assets/images/img4.png";
import img5 from "../assets/images/img5.png";
import img6 from "../assets/images/img13.jpg";
import img7 from "../assets/images/img7.jpg";
import img8 from "../assets/images/img8.jpg";
import img9 from "../assets/images/img9.jpg";
import img10 from "../assets/images/img10.jpg";

const services = [
    {
        title: "Academic Mini & Major Projects",
        content:
            "We provide complete support for academic mini and major projects across Computer Science, Electronics, Electrical, Mechanical, Civil, and more. Each project is designed to meet academic requirements while offering real-world exposure, proper documentation, and practical implementation.",
        img: img1,
    },
    {
        title: "Internships",
        content:
            "Our certified internship programs offer hands-on experience with real-time projects and industry practices. Participants receive globally recognized certificates and gain skills in software, hardware, IoT, robotics, and more—ensuring career readiness and technical expertise.",
        img: img2,
    },
    {
        title: "Workshops on Emerging Technologies",
        content:
            "We conduct interactive and innovative workshops focused on practical applications of emerging technologies. These workshops help learners stay ahead in the fast-evolving tech world.",
        img: img10,
    },
    {
        title: "Courses",
        content:
            "HITL offers a wide range of certified training programs in Programming, Full Stack Development, Data Analytics, Data Science, Embedded Systems, IoT, Robotics, Power Electronics, and advanced Mechanical & Civil tools. All courses include real-time projects and practical exposure.",
        img: img4,
    },
    {
        title: "Industrial Training",
        content:
            "Our industrial training programs prepare students for professional environments with exposure to industry-standard tools, workflows, and technologies. Guided by experienced mentors, participants gain confidence and practical skills.",
        img: img5,
    },
    {
        title: "Paper Publication Support",
        content:
            "We provide end-to-end guidance for technical paper writing and publication in reputed national and international journals. From topic selection to formatting and final submission, we ensure successful publication.",
        img: img3,
    },
    {
        title: "Research & Development Projects",
        content:
            "HITL undertakes R&D projects that solve real-world challenges in electronics, robotics, renewable energy, AI, and advanced computing. We collaborate with students, researchers, and industries to design innovative solutions.",
        img: img6,
    },
    {
        title: "Software Solutions",
        content:
            "We deliver custom software solutions including web apps, mobile apps, and enterprise software. Our projects are scalable, secure, and built using modern technologies.",
        img: img7,
    },
    {
        title: "DIY & AI Robots",
        content:
            "We design DIY robotics kits for learners as well as AI-powered robotic systems for industries. These projects encourage automation, creativity, and innovation.",
        img: img8,
    },
    {
        title: "Customized PCB Boards and PCB Components Assembling",
        content:
            "We specialize in custom PCB board design and manufacturing for various applications. Each board is optimized for performance, durability, and cost-effectiveness and We provide PCB assembly services with accurate component placement, high-quality soldering, and complete testing—delivering ready-to-use functional boards.",
        img: img9,
    },
];

export default function Services() {
    const [openIndex, setOpenIndex] = useState(null);
    const cardRefs = useRef([]);

    const handleOpen = (index) => {
        const prev = openIndex;
        if (prev === index) {
            closeCard(index);
            setOpenIndex(null);
            return;
        }
        if (prev !== null) closeCard(prev);
        openCard(index);
        setOpenIndex(index);
    };

    const openCard = (index) => {
        const c = cardRefs.current[index];
        if (!c) return;

        const tl = gsap.timeline();

        tl.to([c.title, c.img], { opacity: 0, y: -10, duration: 0.25 });
        tl.to(c.overlay, { scale: 1, duration: 0.55, ease: "power3.out" }, 0);
        tl.fromTo(
            c.content,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.4 },
            "-=0.15"
        );

        tl.to(
            c.arrow,
            {
                x: c.width - 60,
                y: -c.height + 60,
                rotate: -180,
                duration: 0.55,
            },
            0
        );
    };

    const closeCard = (index) => {
        const c = cardRefs.current[index];
        if (!c) return;

        const tl = gsap.timeline();

        tl.to(c.content, { opacity: 0, y: 30, duration: 0.3 });
        tl.to(c.overlay, { scale: 0, duration: 0.45 }, 0);
        tl.to(c.arrow, { x: 0, y: 0, rotate: 0, duration: 0.45 }, 0);
        tl.to([c.title, c.img], { opacity: 1, y: 0, duration: 0.3 }, "-=0.1");
    };

    return (
        <section className="bg-black text-white px-6 py-20">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-[32px] sm:text-[40px] md:text-[52px] font-semibold mb-12">
                    Services
                </h2>

                <div className="grid md:grid-cols-2 gap-12">
                    {services.map((s, i) => (
                        <ServiceCard
                            key={i}
                            data={s}
                            index={i}
                            onClick={handleOpen}
                            ref={(el) => (cardRefs.current[i] = el)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

const ServiceCard = React.forwardRef(({ data, index, onClick }, ref) => {
    const wrapperRef = useRef(null);
    const overlayRef = useRef(null);
    const arrowRef = useRef(null);
    const titleRef = useRef(null);
    const imgRef = useRef(null);
    const contentRef = useRef(null);

    useImperativeHandle(ref, () => ({
        overlay: overlayRef.current,
        arrow: arrowRef.current,
        title: titleRef.current,
        img: imgRef.current,
        content: contentRef.current,
        get width() {
            return wrapperRef.current.offsetWidth;
        },
        get height() {
            return wrapperRef.current.offsetHeight;
        },
    }));

    return (
        <div
            ref={wrapperRef}
            onClick={() => onClick(index)}
                className="relative rounded-3xl border border-white/10 bg-white/5
                        overflow-hidden cursor-pointer
                        p-10 min-h-[280px]"
        >
            <ArrowUpRight
                ref={arrowRef}
                className="absolute bottom-6 left-6 z-30"
                size={22}
            />

            <div
                ref={overlayRef}
                className="absolute inset-0 bg-emerald-400
                           origin-bottom-left scale-0
                           rounded-3xl z-20"
            />

            {/* HEADER */}
            <div className="relative z-30 flex justify-between items-center gap-8 h-full">
                <h3
                    ref={titleRef}
                    className="text-[20px] sm:text-[24px] md:text-[28px]
                                font-semibold max-w-[55%]"
                >
                    {data.title}
                </h3>

                <img
                    ref={imgRef}
                    src={data.img}
                    alt={data.title}
                    className="
                        h-[120px] sm:h-[160px] md:h-[200px]
                        w-auto
                        object-contain
                        opacity-95
                    "
                />
            </div>

            {/* CONTENT */}
            <div
                ref={contentRef}
                className="absolute inset-0 z-30 opacity-0
                            flex items-center p-12
                            text-black text-[16px] sm:text-[18px]
                            leading-relaxed"
            >
                {data.content}
            </div>
        </div>
    );
});
