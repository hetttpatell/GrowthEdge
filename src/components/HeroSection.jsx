import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Shield, TrendingUp, Award, Heart, Home, Car, Users, CheckCircle, Star, Phone, Mail } from 'lucide-react';
import { useEffect, useState } from 'react';

export const HeroSection = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        let observer = null; // ✅ declare in outer scope

        const handleLoaderComplete = () => {
            // Wait for loader exit animation to complete before showing hero section
            setTimeout(() => {
                setIsLoaded(true);
            }, 800); // Match loader's exit animation duration
        };

        const loaderElement = document.querySelector('[data-testid="animated-loader"]');

        if (!loaderElement) {
            // No loader found, start animation immediately
            handleLoaderComplete();
        } else {
            observer = new MutationObserver((mutations) => {
                mutations.forEach((mutation) => {
                    if (
                        mutation.type === 'childList' &&
                        !document.querySelector('[data-testid="animated-loader"]')
                    ) {
                        handleLoaderComplete();
                        observer.disconnect();
                    }
                });
            });

            observer.observe(document.body, {
                childList: true,
                subtree: true,
            });
        }

        return () => {
            if (observer) observer.disconnect(); // ✅ now safe
        };
    }, []);

    const scrollToSection = (href) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const stats = [
        { icon: Shield, label: 'Years of Trust', value: '25+', color: 'from-blue-500 to-cyan-500' },
        { icon: TrendingUp, label: 'Claims Success', value: '98%', color: 'from-green-500 to-emerald-500' },
        { icon: Award, label: 'Industry Awards', value: '50+', color: 'from-purple-500 to-pink-500' },
    ];

    const features = [
        { icon: Shield, title: 'Comprehensive Coverage', desc: 'Complete protection for your family and assets' },
        { icon: Heart, title: 'Personalized Service', desc: 'Tailored insurance solutions for your unique needs' },
        { icon: TrendingUp, title: 'Competitive Rates', desc: 'Affordable premiums without compromising quality' },
    ];

    return (
        <section id="home" className="relative min-h-screen flex items-center overflow-hidden" data-testid="hero-section">
            {/* Enhanced animated background */}
            <motion.div
                className="absolute inset-0 z-0"
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0, delay: 0 }}
            >
                <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-blue-900 via-slate-800 to-blue-950 opacity-95"
                    initial={{ scale: 1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0, ease: 'easeOut', delay: 0 }}
                />
                <motion.div
                    className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1528256507509-cc4facea43f6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODl8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGZhbWlseSUyMHN1bnNldCUyMHNpbGhvdWV0dGV8ZW58MHx8fHwxNzcwOTgyMzQ0fDA&ixlib=rb-4.1.0&q=85')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 0, opacity: 0.2 }}
                    transition={{ duration: 1, ease: 'easeOut', delay: 0 }}
                />
                {/* Animated floating elements */}
                <div className="absolute inset-0">
                    {[...Array(6)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-2 h-2 bg-blue-400 rounded-full"
                            initial={{
                                x: Math.random() * window.innerWidth,
                                y: window.innerHeight + 50,
                                opacity: 0
                            }}
                            animate={{
                                y: -Math.random() * 400,
                                opacity: [0, 0.8, 0.8, 0],
                            }}
                            transition={{
                                duration: Math.random() * 5 + 8,
                                repeat: Infinity,
                                delay: Math.random() * 5,
                                ease: 'easeInOut'
                            }}
                        />
                    ))}
                </div>
            </motion.div>

            <motion.div
                className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10 py-20 md:py-32"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 50 }}
                transition={{ duration: 1, delay: isLoaded ? 0.6 : 0, ease: 'easeOut' }}
            >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Right Content - Clean Image Display */}
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : 100 }}
                        transition={{ duration: 0.8, delay: isLoaded ? 0.5 : 0 }}
                        className="relative order-1 lg:order-2 mb-8 lg:mb-0"
                    >
                        <div className="relative">
                            {/* Main image with clean styling */}
                            <motion.div
                                className="rounded-3xl overflow-hidden shadow-2xl relative"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.5 }}
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1528256507509-cc4facea43f6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODl8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGZhbWlseSUyMHN1bnNldCUyMHNpbGhvdWV0dGV8ZW58MHx8fHwxNzcwOTgyMzQ0fDA&ixlib=rb-4.1.0&q=85"
                                    alt="Happy family"
                                    className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover"
                                />
                                {/* Subtle overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                            </motion.div>

                            {/* Clean stats cards */}
                            {stats.map((stat, index) => {
                                const Icon = stat.icon;
                                return (
                                    <motion.div
                                        key={stat.label}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
                                        whileHover={{ scale: 1.02 }}
                                        transition={{ delay: isLoaded ? (0.7 + index * 0.2) : 0 }}
                                        className="absolute bg-white/95 backdrop-blur-sm border border-white/20 rounded-2xl p-2 lg:p-4 shadow-lg"
                                        style={{
                                            top: `${12 + index * 25}%`,
                                            right: index % 2 === 0 ? '-4%' : 'auto',
                                            left: index % 2 !== 0 ? '-4%' : 'auto',
                                            transform: 'scale(0.75)',
                                        }}
                                    >
                                        <div className="flex items-center gap-2 lg:gap-3">
                                            <div className="p-1.5 lg:p-2 bg-blue-100 rounded-lg">
                                                <Icon size={14} className="text-blue-600" />
                                            </div>
                                            <div>
                                                <p className="text-base lg:text-xl font-bold text-gray-900">{stat.value}</p>
                                                <p className="text-xs lg:text-sm text-gray-600">{stat.label}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : -100 }}
                        transition={{ duration: 1.2, delay: isLoaded ? 0.8 : 0, ease: [0.23, 1, 0.32, 1] }}
                        className="text-white order-2 lg:order-1"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
                            transition={{ delay: isLoaded ? 1.0 : 0, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                            className="flex items-center gap-3 mb-6"
                        >
                            <motion.div
                                initial={{ rotate: -180, opacity: 0, scale: 0 }}
                                animate={{ rotate: isLoaded ? 0 : -180, opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0 }}
                                transition={{ delay: isLoaded ? 1.1 : 0, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                                className="p-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg shadow-lg"
                            >
                                <Shield className="w-5 h-5 text-white" />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : -20 }}
                                transition={{ delay: isLoaded ? 1.2 : 0, duration: 0.6 }}
                                className="text-sm font-semibold tracking-widest uppercase text-cyan-300"
                            >
                                Trusted Since 1999
                            </motion.div>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 50, scale: 0.9 }}
                            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 50, scale: isLoaded ? 1 : 0.9 }}
                            transition={{ delay: isLoaded ? 1.3 : 0, duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
                            className="text-5xl md:text-7xl font-bold font-['Outfit'] tracking-tight leading-[1.1] mb-8"
                            data-testid="hero-headline"
                        >
                            <motion.span
                                className="block bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent"
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : -50 }}
                                transition={{ delay: isLoaded ? 1.4 : 0, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                            >
                                Protecting Your
                            </motion.span>
                            <motion.span
                                className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent"
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : 50 }}
                                transition={{ delay: isLoaded ? 1.6 : 0, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                            >
                                Future Today
                            </motion.span>
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
                            transition={{ delay: isLoaded ? 1.8 : 0, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                            className="text-lg md:text-xl text-gray-200 leading-relaxed mb-10 max-w-xl"
                            data-testid="hero-subheadline"
                        >
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: isLoaded ? 1 : 0 }}
                                transition={{ delay: isLoaded ? 1.9 : 0, duration: 0.6 }}
                                className="block"
                            >
                                Comprehensive insurance solutions designed to safeguard what matters most.
                            </motion.span>
                            <motion.span
                                className="block text-cyan-300 font-semibold mt-2"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.8 }}
                                transition={{ delay: isLoaded ? 2.1 : 0, duration: 0.6 }}
                            >
                                Life • Health • Home • Auto • Business
                            </motion.span>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 50 }}
                            transition={{ delay: isLoaded ? 2.3 : 0, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <motion.button
                                onClick={() => scrollToSection('#contact')}
                                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/25 flex items-center justify-center gap-2 group"
                                data-testid="hero-cta-primary"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.8 }}
                                transition={{ delay: isLoaded ? 2.4 : 0, duration: 0.6 }}
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Get Free Quote
                                <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
                            </motion.button>
                            <motion.button
                                onClick={() => scrollToSection('#services')}
                                className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white hover:text-blue-900 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-white/25"
                                data-testid="hero-cta-secondary"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.8 }}
                                transition={{ delay: isLoaded ? 2.6 : 0, duration: 0.6 }}
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                View Coverage
                            </motion.button>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>

            {/* Clean decorative elements */}
            <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl" />
        </section>
    );
};
