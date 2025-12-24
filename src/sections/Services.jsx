import React, { useRef, useState, useImperativeHandle } from "react";
import { ArrowUpRight } from "lucide-react";
import { gsap } from "gsap";

const services = [
    {
        title: "Academic Mini & Major Projects",
        content:
            "We provide complete support for academic mini and major projects across Computer Science, Electronics, Electrical, Mechanical, Civil, and more. Each project is designed to meet academic requirements while offering real-world exposure, proper documentation, and practical implementation.",
        img: "https://images.unsplash.com/photo-1581092795360-1b231f3873c8?w=600",
    },
    {
        title: "Internships",
        content:
            "Our certified internship programs offer hands-on experience with real-time projects and industry practices. Participants receive globally recognized certificates and gain skills in software, hardware, IoT, robotics, and more—ensuring career readiness and technical expertise.",
        img: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600",
    },
    {
        title: "Workshops on Emerging Technologies",
        content:
            "We conduct interactive and innovative workshops focused on practical applications of emerging technologies. These workshops help learners stay ahead in the fast-evolving tech world.",
        img: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=600",
    },
    {
        title: "Courses",
        content:
            "HITL offers a wide range of certified training programs in Programming, Full Stack Development, Data Analytics, Data Science, Embedded Systems, IoT, Robotics, Power Electronics, and advanced Mechanical & Civil tools. All courses include real-time projects and practical exposure.",
        img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600",
    },
    {
        title: "Industrial Training",
        content:
            "Our industrial training programs prepare students for professional environments with exposure to industry-standard tools, workflows, and technologies. Guided by experienced mentors, participants gain confidence and practical skills.",
        img: "https://images.unsplash.com/photo-1581091012184-5c7b5ae3b63c?w=600",
    },
    {
        title: "Paper Publication Support",
        content:
            "We provide end-to-end guidance for technical paper writing and publication in reputed national and international journals. From topic selection to formatting and final submission, we ensure successful publication.",
        img: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=600",
    },
    {
        title: "Research & Development Projects",
        content:
            "HITL undertakes R&D projects that solve real-world challenges in electronics, robotics, renewable energy, AI, and advanced computing. We collaborate with students, researchers, and industries to design innovative solutions.",
        img: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?w=600",
    },
    {
        title: "Software Solutions",
        content:
            "We deliver custom software solutions including web apps, mobile apps, and enterprise software. Our projects are scalable, secure, and built using modern technologies.",
        img: "https://images.unsplash.com/photo-1559027615-8a592a5d5d5a?w=600",
    },
    {
        title: "DIY & AI Robots",
        content:
            "We design DIY robotics kits for learners as well as AI-powered robotic systems for industries. These projects encourage automation, creativity, and innovation.",
        img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600",
    },
    {
        title: "Customized PCB Boards and PCB Components Assembling",
        content:
            "We specialize in custom PCB board design and manufacturing for various applications. Each board is optimized for performance, durability, and cost-effectiveness and We provide PCB assembly services with accurate component placement, high-quality soldering, and complete testing—delivering ready-to-use functional boards.",
        img: "https://images.unsplash.com/photo-1581091870627-3a5e89dd2c9f?w=600",
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

        if (prev !== null) {
            closeCard(prev);
        }

        openCard(index);
        setOpenIndex(index);
    };

    const openCard = (index) => {
        const c = cardRefs.current[index];

        const tl = gsap.timeline();

        tl.to([c.title, c.img], {
            opacity: 0,
            y: -10,
            duration: 0.25,
        });

        tl.to(
            c.overlay,
            {
                scaleX: 1,
                scaleY: 1,
                duration: 0.55,
                ease: "power3.out",
            },
            0
        );

        tl.fromTo(
            c.content,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.35 },
            "-=0.2"
        );

        tl.to(
            c.arrow,
            {
                x: c.width - 60,
                y: -c.height + 60,
                rotate: -180,
                duration: 0.55,
                ease: "power3.out",
            },
            0
        );
    };

    const closeCard = (index) => {
        const c = cardRefs.current[index];

        const tl = gsap.timeline();

        tl.to(c.content, {
            opacity: 0,
            y: 20,
            duration: 0.25,
        });

        tl.to(
            c.overlay,
            {
                scaleX: 0,
                scaleY: 0,
                duration: 0.45,
                ease: "power3.inOut",
            },
            0
        );

        tl.to(
            c.arrow,
            {
                x: 0,
                y: 0,
                rotate: 0,
                duration: 0.45,
                ease: "power3.inOut",
            },
            0
        );

        tl.to(
            [c.title, c.img],
            {
                opacity: 1,
                y: 0,
                duration: 0.3,
            },
            "-=0.1"
        );
    };

    return (
        <section className="bg-black text-white px-6 py-24">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-[48px] font-semibold mb-12">Services</h2>

                <div className="grid md:grid-cols-2 gap-10">
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

    // EXPOSE ALL ELEMENTS TO PARENT USING useImperativeHandle
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
            className="relative rounded-3xl border border-white/10 bg-white/5 overflow-hidden p-7 min-h-[220px] cursor-pointer"
        >

            <ArrowUpRight
                ref={arrowRef}
                className="absolute bottom-5 left-5 text-white z-30"
                size={22}
            />

            <div
                ref={overlayRef}
                className="absolute inset-0 bg-emerald-400 origin-bottom-left scale-0 rounded-3xl z-20"
            />

            <div className="relative z-30 flex justify-between items-center">
                <h3
                    ref={titleRef}
                    className="text-[22px] font-semibold max-w-[55%] leading-snug self-center"
                >
                    {data.title}
                </h3>

                {/* FIXED HEIGHT IMAGE CONTAINER */}
                <div className="flex items-center justify-center h-[120px] max-w-[32%]">
                    <img
                        ref={imgRef}
                        src={data.img}
                        className="h-full w-auto object-contain opacity-90"
                        alt={data.title}
                    />
                </div>
            </div>


            <div
                ref={contentRef}
                className="absolute inset-0 z-30 opacity-0 flex items-center p-8 text-black text-[16px] leading-relaxed"
            >
                {data.content}
            </div>
        </div>
    );
});
