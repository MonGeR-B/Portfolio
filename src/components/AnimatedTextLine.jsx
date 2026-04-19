import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";


export const AnimatedTextLines = ({ text, className }) => {
    const containerRef = useRef(null);
    const lineRefs = useRef([]);
    const lines = text.split("\n").filter((line) => line.trim() !== "");
    useGSAP(() => {
        if (lineRefs.current.length > 0) {
            gsap.from(lineRefs.current, {
                opacity: 0,
                y: 20,
                stagger: 0.1,
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                }
            });
        }
    }, [text]);
    return (
        <div ref={containerRef} className={className}>
            {lines.map((line, index) => (
                <span
                    key={index}
                    ref={(el) => (lineRefs.current[index] = el)}
                    className="block leading-relaxed tracking-wide text-pretty">{line}</span>
            ))}
        </div>
    );
};