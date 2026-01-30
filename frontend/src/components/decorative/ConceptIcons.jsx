import React from 'react';
import { motion } from 'framer-motion';

export function IconForesight({ className = "" }) {
    return (
        <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
            <motion.path
                d="M10 50C10 50 30 20 50 20C70 20 90 50 90 50C90 50 70 80 50 80C30 80 10 50 10 50Z"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
            />
            <motion.circle
                cx="50"
                cy="50"
                r="12"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
            />
            <motion.line
                x1="50" y1="50" x2="80" y2="20"
                strokeDasharray="4 4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.5 }}
                transition={{ delay: 1, duration: 1 }}
            />
        </svg>
    );
}

export function IconAccess({ className = "" }) {
    return (
        <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
            <motion.rect
                x="30" y="40" width="40" height="40"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 2 }}
            />
            <motion.path
                d="M50 40V25C50 20 45 15 40 15H60C65 15 70 20 70 25V40"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 0.5 }}
            />
            <motion.circle
                cx="50" cy="60" r="4"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 1 }}
            />
            <motion.line
                x1="50" y1="60" x2="50" y2="70"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ delay: 1.2 }}
            />
        </svg>
    );
}

export function IconCuration({ className = "" }) {
    return (
        <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
            <motion.rect x="20" y="20" width="20" height="20" initial={{ opacity: 0.2 }} whileInView={{ opacity: 0.2 }} />
            <motion.rect x="60" y="20" width="20" height="20" initial={{ opacity: 0.2 }} whileInView={{ opacity: 0.2 }} />
            <motion.rect x="20" y="60" width="20" height="20" initial={{ opacity: 0.2 }} whileInView={{ opacity: 0.2 }} />

            {/* The selected one */}
            <motion.rect
                x="55" y="55" width="30" height="30"
                stroke="#8A6E4B"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
            />
            <motion.circle
                cx="90" cy="15" r="10"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 1 }}
            />
        </svg>
    );
}
