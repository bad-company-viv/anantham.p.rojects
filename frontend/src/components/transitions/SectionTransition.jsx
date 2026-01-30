import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

export default function SectionTransition({
    children,
    className = "",
    threshold = 0.1,
    delay = 0
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, {
        once: false,
        amount: threshold,
        margin: "-10% 0px -10% 0px"
    });
    const [hasBeenInView, setHasBeenInView] = useState(false);

    useEffect(() => {
        if (isInView && !hasBeenInView) {
            setHasBeenInView(true);
        }
    }, [isInView, hasBeenInView]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={hasBeenInView ? {
                opacity: 1,
                y: 0,
                transition: {
                    duration: 1.2,
                    delay: delay,
                    ease: [0.25, 0.1, 0.25, 1]
                }
            } : { opacity: 0, y: 40 }}
            className={className}
        >
            {children}
        </motion.div>
    );
}