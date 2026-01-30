import React from 'react';
import { motion } from 'framer-motion';

export default function AbstractShape({
    variant = "circle",
    className = "",
    delay = 0,
    duration = 3
}) {
    const shapes = {
        circle: (
            <motion.circle
                cx="100"
                cy="100"
                r="80"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 0.03 }}
                viewport={{ once: true, margin: "-200px" }}
                transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
            />
        ),
        ring: (
            <motion.circle
                cx="100"
                cy="100"
                r="70"
                strokeWidth="1"
                fill="none"
                initial={{ scale: 0, opacity: 0, rotate: -45 }}
                whileInView={{ scale: 1, opacity: 0.04, rotate: 0 }}
                viewport={{ once: true, margin: "-200px" }}
                transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
            />
        ),
        square: (
            <motion.rect
                x="20"
                y="20"
                width="160"
                height="160"
                initial={{ scale: 0, opacity: 0, rotate: 0 }}
                whileInView={{ scale: 1, opacity: 0.02, rotate: 45 }}
                viewport={{ once: true, margin: "-200px" }}
                transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
            />
        ),
        triangle: (
            <motion.path
                d="M 100 20 L 180 180 L 20 180 Z"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 0.03 }}
                viewport={{ once: true, margin: "-200px" }}
                transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
            />
        ),
        line: (
            <motion.line
                x1="0"
                y1="100"
                x2="200"
                y2="100"
                strokeWidth="1"
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 0.05 }}
                viewport={{ once: true, margin: "-200px" }}
                transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
                style={{ transformOrigin: "0% 50%" }}
            />
        )
    };

    return (
        <svg
            viewBox="0 0 200 200"
            className={`absolute pointer-events-none ${className}`}
            stroke="currentColor"
            fill="currentColor"
        >
            {shapes[variant]}
        </svg>
    );
}