import React, {
    Children,
    cloneElement,
    forwardRef,
    isValidElement,
    useEffect,
    useMemo,
    useRef
} from "react";
import gsap from "gsap";
import "../styles/CardSwap.css";

export const Card = forwardRef(({ customClass, ...rest }, ref) => (
    <div
        ref={ref}
        {...rest}
        className={`card ${customClass ?? ""} ${rest.className ?? ""}`.trim()}
    />
));
Card.displayName = "Card";

const makeSlot = (i, dx, dy, total) => ({
    x: i * dx,
    y: -i * dy,
    z: -i * dx * 1.5,
    zIndex: total - i
});

const placeNow = (el, slot, skew) =>
    gsap.set(el, {
        x: slot.x,
        y: slot.y,
        z: slot.z,
        xPercent: -50,
        yPercent: -50,
        skewY: skew,
        transformOrigin: "center center",
        zIndex: slot.zIndex,
        force3D: true
    });

const CardSwap = ({
    width = 260,
    height = 360,
    cardDistance = 35,
    verticalDistance = 45,
    delay = 4000,
    skewAmount = 6,
    easing = "elastic",
    children
}) => {
    const config =
        easing === "elastic"
            ? {
                ease: "elastic.out(0.6,0.9)",
                durDrop: 1.6,
                durMove: 1.6,
                durReturn: 1.6,
                promoteOverlap: 0.9,
                returnDelay: 0.05
            }
            : {
                ease: "power1.inOut",
                durDrop: 0.8,
                durMove: 0.8,
                durReturn: 0.8,
                promoteOverlap: 0.45,
                returnDelay: 0.2
            };

    const childArr = useMemo(() => Children.toArray(children), [children]);
    const refs = useMemo(
        () => childArr.map(() => React.createRef()),
        [childArr.length]
    );

    const order = useRef(childArr.map((_, i) => i));
    const intervalRef = useRef(null);

    useEffect(() => {
        const total = refs.length;

        refs.forEach((r, i) =>
            placeNow(r.current, makeSlot(i, cardDistance, verticalDistance, total), skewAmount)
        );

        const swap = () => {
            if (order.current.length < 2) return;

            const [front, ...rest] = order.current;
            const elFront = refs[front].current;
            const tl = gsap.timeline();

            tl.to(elFront, {
                y: "+=500",
                duration: config.durDrop,
                ease: config.ease
            });

            tl.addLabel("promote", `-=${config.durDrop * config.promoteOverlap}`);

            rest.forEach((idx, i) => {
                const el = refs[idx].current;
                const slot = makeSlot(i, cardDistance, verticalDistance, refs.length);
                tl.set(el, { zIndex: slot.zIndex }, "promote");
                tl.to(
                    el,
                    {
                        x: slot.x,
                        y: slot.y,
                        z: slot.z,
                        duration: config.durMove,
                        ease: config.ease
                    },
                    `promote+=${i * 0.15}`
                );
            });

            const backSlot = makeSlot(refs.length - 1, cardDistance, verticalDistance, refs.length);
            tl.addLabel("return", `promote+=${config.durMove * config.returnDelay}`);
            tl.set(elFront, { zIndex: backSlot.zIndex }, "return");
            tl.to(elFront, {
                x: backSlot.x,
                y: backSlot.y,
                z: backSlot.z,
                duration: config.durReturn,
                ease: config.ease
            });

            tl.call(() => {
                order.current = [...rest, front];
            });
        };

        swap();
        intervalRef.current = setInterval(swap, delay);

        return () => clearInterval(intervalRef.current);
    }, [cardDistance, verticalDistance, delay, skewAmount, easing, refs]);

    const rendered = childArr.map((child, i) =>
        isValidElement(child)
            ? cloneElement(child, {
                ref: refs[i],
                style: { width, height }
            })
            : child
    );

    return <div className="card-swap-container">{rendered}</div>;
};

export default CardSwap;
