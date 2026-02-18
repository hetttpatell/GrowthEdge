import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Shield, Heart, Home, Car, Users, Briefcase } from 'lucide-react';

export const AnimatedLoader = ({ onComplete }) => {
    const [show, setShow] = useState(true);
    const [fadingOut, setFadingOut] = useState(false);

    const insuranceIcons = [
        { Icon: Home, delay: 0.3 },
        { Icon: Car, delay: 0.5 },
        { Icon: Heart, delay: 0.7 }
    ];

    useEffect(() => {
        const timer = setTimeout(() => {
            setFadingOut(true);
            // Dispatch event to notify navbar that loader is starting to exit
            window.dispatchEvent(new CustomEvent('loaderExiting'));
            setTimeout(() => {
                setShow(false);
                setTimeout(() => onComplete(), 800);
            }, 1500);
        }, 3000);

        return () => {
            clearTimeout(timer);
        };
    }, [onComplete]);

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    data-testid="animated-loader"
                    className="fixed inset-0 z-50 bg-gradient-to-br from-blue-900 via-slate-800 to-blue-950 flex flex-col items-center justify-center text-white overflow-hidden"
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                >
                    {/* Animated background elements */}
                    <div className="absolute inset-0">
                        {[...Array(15)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-1 h-1 bg-blue-300 rounded-full"
                                initial={{
                                    x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                                    y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
                                    opacity: 0
                                }}
                                animate={{
                                    y: [null, -Math.random() * 400],
                                    opacity: [0, 0.6, 0],
                                    scale: [0, 1, 0]
                                }}
                                transition={{
                                    duration: Math.random() * 4 + 3,
                                    repeat: Infinity,
                                    delay: Math.random() * 3,
                                    ease: 'easeOut'
                                }}
                            />
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                        className="flex flex-col items-center relative z-10"
                    >
                        {/* Insurance logo with enhanced visibility */}
                        <div className="w-48 h-48 mb-8 relative flex items-center justify-center">
                            {/* Strong semi-transparent background for logo visibility */}
                            <motion.div
                                className="absolute inset-0 bg-white/15 backdrop-blur-md rounded-2xl border border-white/30 shadow-2xl"
                                animate={{
                                    boxShadow: '0 0 60px rgba(255, 255, 255, 0.4), 0 0 120px rgba(59, 130, 246, 0.6)'
                                }}
                                initial={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                            />

                            {/* Additional glow ring for maximum visibility */}
                            <motion.div
                                className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/30 via-cyan-400/30 to-blue-400/30 blur-xl"
                                animate={{
                                    scale: [1, 1.3, 1],
                                    opacity: [0.4, 0.7, 0.4],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: 'easeInOut'
                                }}
                            />

                            {/* Sophisticated radial gradient glow */}
                            <motion.div
                                className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 via-cyan-400/20 to-blue-400/20 blur-2xl"
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.3, 0.5, 0.3],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: 'easeInOut'
                                }}
                            />

                            {/* Subtle ring that represents protection/shield */}
                            <motion.div
                                className="absolute inset-0 rounded-full border border-blue-400/30"
                                animate={{
                                    scale: [1, 1.15, 1],
                                    opacity: [0.2, 0.4, 0.2],
                                    rotate: [0, 180, 360]
                                }}
                                transition={{
                                    duration: 8,
                                    repeat: Infinity,
                                    ease: 'linear'
                                }}
                            />

                            {/* Second ring for depth - represents trust */}
                            <motion.div
                                className="absolute inset-0 rounded-full border border-cyan-400/20"
                                animate={{
                                    scale: [1.1, 1.25, 1.1],
                                    opacity: [0.1, 0.3, 0.1],
                                }}
                                transition={{
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                    delay: 1
                                }}
                            />

                            {/* Logo container with maximum visibility enhancement */}
                            <motion.div
                                className="relative z-20"
                                animate={{
                                    scale: fadingOut ? [1, 1.1, 0.8] : 1,
                                    opacity: fadingOut ? [1, 0.9, 0] : 1,
                                }}
                                transition={{
                                    duration: 1.5,
                                    ease: 'easeInOut'
                                }}
                            >
                                <img
                                    src='/logo.png'
                                    onError={(e) => {
                                        e.target.src = './assets/logo.png';
                                        e.target.onerror = () => {
                                            e.target.style.display = 'none';
                                            e.target.parentElement.innerHTML = '<div class="text-4xl font-bold text-white">GEI</div>';
                                        };
                                    }}
                                    alt="Growth Edge Insurance"
                                    className="w-56 h-56 object-contain drop-shadow-2xl"
                                    style={{
                                        filter: 'drop-shadow(0 0 30px rgba(255, 255, 255, 0.8)) drop-shadow(0 0 60px rgba(59, 130, 246, 0.8)) brightness(1.1) contrast(1.1)'
                                    }}
                                />
                            </motion.div>

                            {/* Person emerging from logo */}
                            <AnimatePresence>
                                {fadingOut && (
                                    <motion.div
                                        initial={{
                                            scale: 0,
                                            opacity: 0,
                                            y: 50
                                        }}
                                        animate={{
                                            scale: [0, 0.8, 1.1, 1],
                                            opacity: [0, 0.5, 1],
                                            y: [50, 0, -20, 0]
                                        }}
                                        exit={{
                                            scale: 1.2,
                                            opacity: 0,
                                            y: -100
                                        }}
                                        transition={{
                                            duration: 1.5,
                                            ease: [0.23, 1, 0.32, 1],
                                            delay: 0.2
                                        }}
                                        className="absolute inset-0 flex items-center justify-center z-10"
                                    >
                                        <div className="relative">
                                            {/* Person silhouette/illustration */}
                                            <motion.div
                                                className="w-32 h-40 bg-gradient-to-b from-blue-400/90 to-blue-600/90 rounded-t-full rounded-b-3xl relative"
                                                animate={{
                                                    boxShadow: fadingOut ? [
                                                        '0 0 0 rgba(59, 130, 246, 0)',
                                                        '0 0 30px rgba(59, 130, 246, 0.6)',
                                                        '0 0 50px rgba(59, 130, 246, 0.3)'
                                                    ] : '0 0 0 rgba(59, 130, 246, 0)'
                                                }}
                                                transition={{
                                                    duration: 1.5,
                                                    delay: 0.3
                                                }}
                                            >
                                                {/* Head */}
                                                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-blue-300/90 to-blue-500/90 rounded-full" />
                                                {/* Body */}
                                                <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-gradient-to-br from-blue-400/90 to-blue-600/90 rounded-2xl" />
                                                {/* Arms gesture - welcoming */}
                                                <motion.div
                                                    className="absolute top-20 left-1/2 transform -translate-x-1/2 w-32 h-2 bg-blue-400/90 rounded-full"
                                                    animate={{
                                                        rotate: [-20, 20, -20]
                                                    }}
                                                    transition={{
                                                        duration: 2,
                                                        repeat: 2,
                                                        ease: 'easeInOut'
                                                    }}
                                                />
                                            </motion.div>

                                            {/* Glow effect */}
                                            <motion.div
                                                className="absolute inset-0 bg-blue-400 rounded-full blur-xl opacity-30"
                                                animate={{
                                                    scale: [1, 1.5, 1],
                                                    opacity: [0.2, 0.4, 0.2]
                                                }}
                                                transition={{
                                                    duration: 1.5,
                                                    repeat: 2
                                                }}
                                            />
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Insurance title with professional gradient */}
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent mb-4 tracking-tight"
                        >
                            Growth Edge
                        </motion.h1>

                        {/* Insurance-specific subtitle */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.6, ease: 'easeOut' }}
                            className="text-lg md:text-xl text-gray-300 font-light tracking-wide mb-6"
                        >
                            Your Trusted Insurance Partner
                        </motion.div>

                        {/* Insurance service icons */}
                        <div className="flex gap-4 mb-8">
                            {insuranceIcons.map(({ Icon, delay }, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay, duration: 0.5 }}
                                    className="relative"
                                >
                                    <motion.div
                                        animate={{
                                            y: [0, -5, 0],
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            delay: delay,
                                            ease: 'easeInOut'
                                        }}
                                    >
                                        <Icon
                                            size={24}
                                            className="text-blue-300 opacity-80 hover:opacity-100 transition-opacity"
                                        />
                                    </motion.div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Elegant loading dots animation */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8, duration: 0.4 }}
                            className="flex gap-2 mb-8"
                        >
                            {[...Array(3)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"
                                    animate={{
                                        scale: [1, 1.5, 1],
                                        opacity: [0.5, 1, 0.5]
                                    }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                        delay: i * 0.2,
                                        ease: 'easeInOut'
                                    }}
                                />
                            ))}
                        </motion.div>

                        {/* Loading status */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1, duration: 0.4 }}
                            className="text-sm text-gray-400 font-light"
                        >
                            Securing your coverage...
                        </motion.div>
                    </motion.div>

                    {/* Insurance trust indicators */}
                    <div className="absolute bottom-8 left-8 right-8 flex justify-between text-xs text-gray-400">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.2, duration: 0.4 }}
                            className="flex items-center gap-2"
                        >
                            <Shield size={16} />
                            <span>Fully Licensed</span>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.4, duration: 0.4 }}
                            className="flex items-center gap-2"
                        >
                            <Heart size={16} />
                            <span>Trusted by Thousands</span>
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};