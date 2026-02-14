import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Shield } from 'lucide-react';

export const AnimatedLoader = ({ onComplete }) => {
    const [show, setShow] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(false);
            setTimeout(() => onComplete(), 800);
        }, 3000);

        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    data-testid="animated-loader"
                    className="fixed inset-0 z-50 animated-gradient flex flex-col items-center justify-center text-white"
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        className="flex flex-col items-center"
                    >
                        {/* Fallback icon if logo.png doesn't exist */}
                        <div className="w-48 h-48 mb-6 flex items-center justify-center">
                            <Shield size={120} className="text-white" />
                        </div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="text-2xl md:text-3xl font-bold font-['Outfit'] tracking-tight"
                        >
                            Growth Edge
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8, duration: 0.6 }}
                            className="text-lg md:text-xl mt-4 font-light tracking-wide"
                        >
                            Protecting What Matters Most
                        </motion.p>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};