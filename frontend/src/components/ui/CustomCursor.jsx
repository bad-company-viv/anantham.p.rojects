import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export default function CustomCursor() {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth physics for the follower
    const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
    const cursorX = useSpring(mouseX, springConfig);
    const cursorY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const moveMouse = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
            if (!isVisible) setIsVisible(true);
        };

        const handleHover = (e) => {
            const target = e.target;
            const isClickable = target.closest('button, a, .cursor-pointer, input, textarea');
            setIsHovering(!!isClickable);
        };

        window.addEventListener('mousemove', moveMouse);
        window.addEventListener('mouseover', handleHover);

        return () => {
            window.removeEventListener('mousemove', moveMouse);
            window.removeEventListener('mouseover', handleHover);
        };
    }, [isVisible, mouseX, mouseY]);

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 pointer-events-none z-[9999] hidden lg:block">
            {/* Main Cursor Dot */}
            <motion.div
                className="absolute w-2 h-2 bg-[#8A6E4B] rounded-full"
                style={{
                    x: mouseX,
                    y: mouseY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
            />

            {/* Follower Ring */}
            <motion.div
                className="absolute w-12 h-12 border border-[#8A6E4B]/30 rounded-full"
                animate={{
                    scale: isHovering ? 2 : 1,
                    backgroundColor: isHovering ? 'rgba(138, 110, 75, 0.1)' : 'rgba(138, 110, 75, 0)',
                    borderColor: isHovering ? 'rgba(138, 110, 75, 0.5)' : 'rgba(138, 110, 75, 0.3)',
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
            />

            {/* Hover Text Indicator */}
            <motion.span
                className="absolute text-[10px] uppercase tracking-widest text-[#8A6E4B] font-bold"
                animate={{
                    opacity: isHovering ? 1 : 0,
                    y: isHovering ? -40 : -20,
                }}
                style={{
                    x: mouseX,
                    y: mouseY,
                    translateX: '-50%',
                }}
            >
                View
            </motion.span>
        </div>
    );
}
