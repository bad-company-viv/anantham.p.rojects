import React from 'react';
import { motion } from 'framer-motion';

export default function Curtain({ isOpen, onComplete }) {
    return (
        <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: isOpen ? 0 : 1 }}
            exit={{ scaleY: 0 }}
            transition={{
                duration: 1.2,
                ease: [0.76, 0, 0.24, 1]
            }}
            onAnimationComplete={onComplete}
            className="fixed inset-0 z-[100] bg-[#1C1C1C] origin-top pointer-events-none"
        >
            <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: isOpen ? 0 : 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-[#F6F4F0] font-serif text-4xl tracking-[0.2em]"
                >
                    ANANTHAM
                </motion.div>
            </div>
        </motion.div>
    );
}