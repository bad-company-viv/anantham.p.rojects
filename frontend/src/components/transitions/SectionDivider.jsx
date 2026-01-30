import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function SectionDivider({ variant = "line" }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

    if (variant === "line") {
        return (
            <motion.div
                ref={ref}
                style={{ opacity }}
                className="relative h-px overflow-hidden"
            >
                <motion.div
                    style={{ scaleX: scrollYProgress }}
                    className="h-full w-full bg-gradient-to-r from-transparent via-[#8A6E4B] to-transparent origin-center"
                />
            </motion.div>
        );
    }

    if (variant === "dot") {
        return (
            <motion.div
                ref={ref}
                style={{ opacity, scale }}
                className="flex justify-center py-16"
            >
                <div className="w-1.5 h-1.5 rounded-full bg-[#8A6E4B]" />
            </motion.div>
        );
    }

    if (variant === "space") {
        return (
            <motion.div
                ref={ref}
                style={{ opacity }}
                className="h-24 md:h-32"
            />
        );
    }

    return null;
}