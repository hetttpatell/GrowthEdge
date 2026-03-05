import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useOptimizedScroll } from '../../hooks/useOptimizedScroll';
import { fadeInDown, slideInRight } from '../../utils/animationVariants';
import { useSmoothNavigation } from '../../hooks/useSmoothNavigation';

export const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isHomePage, setIsHomePage] = useState(true);
    const navigate = useNavigate();
    const location = useLocation();
    const { scrollY, scrolled } = useOptimizedScroll(50);
    const { smoothNavigate } = useSmoothNavigation();


    useEffect(() => {
        let observer = null;
        let animationTimer = null;

        const showNavbar = () => {
            if (animationTimer) clearTimeout(animationTimer);

            // Perfect timing with hero section
            animationTimer = setTimeout(() => {
                setIsLoaded(true);
            }, 100);
        };

        const handleLoaderExiting = () => {
            setIsLoaded(false);
        };

        const handleLoaderComplete = () => {
            showNavbar();
        };

        setIsHomePage(window.location.pathname === '/');

        const loaderElement = document.querySelector('[data-testid="animated-loader"]');

        if (!loaderElement) {
            showNavbar();
        } else {
            window.addEventListener('loaderExiting', handleLoaderExiting);
            setIsLoaded(false);

            observer = new MutationObserver((mutations) => {
                mutations.forEach((mutation) => {
                    if (
                        mutation.type === 'childList' &&
                        !document.querySelector('[data-testid="animated-loader"]')
                    ) {
                        handleLoaderComplete();
                        if (observer) observer.disconnect();
                    }
                });
            });

            observer.observe(document.body, {
                childList: true,
                subtree: true,
            });
        }

        const checkLoaderRemoved = setInterval(() => {
            if (!document.querySelector('[data-testid="animated-loader"]')) {
                handleLoaderComplete();
                clearInterval(checkLoaderRemoved);
            }
        }, 100);

        const cleanupTimer = setTimeout(() => {
            clearInterval(checkLoaderRemoved);
            if (!isLoaded) {
                showNavbar();
            }
        }, 5000);

        return () => {
            if (observer) observer.disconnect();
            if (animationTimer) clearTimeout(animationTimer);
            clearInterval(checkLoaderRemoved);
            clearTimeout(cleanupTimer);
            window.removeEventListener('loaderExiting', handleLoaderExiting);
        };
    }, []);

    const menuItems = [
        { label: 'Home', href: '#home' },
        { label: 'Services', href: '/services' },
        { label: 'Awards', href: '/awards' },
        { label: 'About', href: '/about' },
        { label: 'Contact', href: '/contact' },
    ];

    const handleNavigation = (e, href) => {
        if (href === '/services') {
            smoothNavigate('/services');
            setMobileMenuOpen(false);
        } else if (href === '/awards') {
            smoothNavigate('/awards');
            setMobileMenuOpen(false);
        } else if (href === '/contact') {
            smoothNavigate('/contact');
            setMobileMenuOpen(false);
        } else if (href === '/about') {
            smoothNavigate('/about');
            setMobileMenuOpen(false);
        } else if (href === '#home') {
            smoothNavigate('/');
            setMobileMenuOpen(false);
        } else {
            e.preventDefault();
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
                setMobileMenuOpen(false);
            } else {
                smoothNavigate('/');
                setMobileMenuOpen(false);
            }
        }
    };

    // Optimized spring animation variants for mobile performance
    const navbarVariants = {
        hidden: {
            y: -100,
            opacity: 0,
            transition: {
                duration: 0.3,
                ease: [0.4, 0, 0.2, 1]
            }
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 80,
                damping: 20,
                mass: 1,
                delay: 0.1,
                when: "beforeChildren",
                staggerChildren: 0.05
            }
        }
    };

    const logoVariants = {
        hidden: {
            opacity: 0,
            x: -20,
            scale: 0.95
        },
        visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 18,
                mass: 0.8
            }
        }
    };

    const menuItemVariants = {
        hidden: {
            opacity: 0,
            y: -15,
            scale: 0.98
        },
        visible: (custom) => ({
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 120,
                damping: 22,
                mass: 0.8,
                delay: 0.15 + (custom * 0.03)
            }
        })
    };

    const contactButtonVariants = {
        hidden: {
            opacity: 0,
            scale: 0.85,
            y: -10
        },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 150,
                damping: 20,
                mass: 0.8,
                delay: 0.35
            }
        }
    };

    const mobileButtonVariants = {
        hidden: {
            opacity: 0,
            rotate: -45,
            scale: 0.6
        },
        visible: {
            opacity: 1,
            rotate: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 150,
                damping: 22,
                delay: 0.4
            }
        }
    };

    return (
        <>
            <motion.nav
                className={`fixed top-0 w-full z-40 transition-all duration-500 ease-in-out ${scrolled || !isHomePage
                    ? 'bg-white/90 backdrop-blur-xl border-b border-slate-200/50 shadow-[0_8px_30px_rgb(0,0,0,0.08)] py-1'
                    : 'bg-transparent py-3'
                    }`}
                variants={navbarVariants}
                initial="hidden"
                animate={isLoaded ? "visible" : "hidden"}
                style={{
                    visibility: isLoaded ? 'visible' : 'hidden',
                    pointerEvents: isLoaded ? 'auto' : 'none'
                }}
            >
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="flex items-center justify-between h-20">
                        <motion.button
                            onClick={(e) => handleNavigation(e, '#home')}
                            className="flex items-center space-x-3 group"
                            variants={logoVariants}
                            whileHover={{
                                scale: 1.02,
                                transition: { type: "spring", stiffness: 400, damping: 25 }
                            }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <motion.div
                                className="relative flex items-center justify-center overflow-hidden"
                            >
                                <img
                                    src="/logo.png"
                                    alt="Growth Edge"
                                    className="h-10 w-auto md:h-12 object-contain transition-transform duration-500 group-hover:scale-110 drop-shadow-md"
                                />
                            </motion.div>
                            <motion.span
                                className={`text-2xl font-semibold capitalize transition-all duration-500 ${scrolled || !isHomePage ? 'text-[#0B1F3A]' : 'text-white'
                                    }`}
                                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
                                animate={{
                                    letterSpacing: scrolled ? '0.02em' : '0.05em'
                                }}
                                whileHover={{
                                    letterSpacing: '0.08em',
                                    transition: { duration: 0.4, ease: 'easeOut' }
                                }}
                            >
                                Growth Edge
                            </motion.span>
                        </motion.button>

                        <div className="hidden lg:flex items-center space-x-8">
                            {menuItems.map((item, index) => {
                                const isContact = item.label === 'Contact';
                                return isContact ? (
                                    <motion.button
                                        key={item.label}
                                        onClick={(e) => handleNavigation(e, item.href)}
                                        className="px-6 py-2.5 bg-gradient-to-r from-[#E63946] via-red-500 to-[#E63946] text-white rounded-full shadow-[0_4px_14px_0_rgba(230,57,70,0.39)] hover:shadow-[0_6px_20px_rgba(230,57,70,0.23)] font-semibold relative overflow-hidden group transition-all duration-300"
                                        variants={contactButtonVariants}
                                        whileHover={{
                                            scale: 1.05,
                                            y: -2,
                                            transition: { type: "spring", stiffness: 400, damping: 25 }
                                        }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <span className="relative z-10">{item.label}</span>
                                        <motion.div
                                            className="absolute inset-0 bg-gradient-to-r from-red-600 to-[#E63946]"
                                            initial={{ x: "100%" }}
                                            whileHover={{ x: 0 }}
                                            transition={{ duration: 0.3, ease: "easeOut" }}
                                        />
                                    </motion.button>
                                ) : (
                                    <motion.button
                                        key={item.label}
                                        onClick={(e) => handleNavigation(e, item.href)}
                                        className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-full group ${location.pathname === item.href || (location.pathname === '/' && item.href === '#home')
                                            ? (scrolled || !isHomePage ? 'text-[#E63946]' : 'text-white')
                                            : (scrolled || !isHomePage ? 'text-slate-500 hover:text-[#E63946]' : 'text-white/80 hover:text-white')
                                            }`}
                                        variants={menuItemVariants}
                                        custom={index}
                                        whileHover={{
                                            scale: 1.05,
                                            y: -2,
                                            textShadow: scrolled || !isHomePage ? '0 4px 12px rgba(230,57,70,0.3)' : '0 4px 12px rgba(255,255,255,0.4)',
                                            transition: { type: "spring", stiffness: 400, damping: 15 }
                                        }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <span className="relative z-10">{item.label}</span>
                                        {/* Extremely elegant animated dot-to-line effect */}
                                        <motion.div
                                            className={`absolute -bottom-2 left-1/2 w-1.5 h-1.5 rounded-full opacity-0 ${scrolled || !isHomePage ? 'bg-[#E63946]' : 'bg-white'}`}
                                            initial={{ x: '-50%', scale: 0 }}
                                            whileHover={{
                                                opacity: 1,
                                                scale: [0, 1.5, 1],
                                                width: '60%',
                                                transition: { duration: 0.4, ease: "easeOut" }
                                            }}
                                        />
                                    </motion.button>
                                );
                            })}
                        </div>

                        <motion.button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className={`lg:hidden p-3 rounded-xl transition-all duration-300 ${scrolled || !isHomePage ? 'text-[#0B1F3A] hover:bg-slate-100' : 'text-white hover:bg-white/10'
                                }`}
                            variants={mobileButtonVariants}
                            whileHover={{
                                scale: 1.05,
                                rotate: 2,
                                transition: { type: "spring", stiffness: 300, damping: 25 }
                            }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </motion.button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu with smooth animations */}
            <AnimatePresence mode="wait">
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{
                            type: "spring",
                            stiffness: 200,
                            damping: 25,
                            mass: 0.9
                        }}
                        className="fixed inset-y-0 right-0 z-50 w-72 bg-white/95 backdrop-blur-lg shadow-2xl lg:hidden"
                    >
                        <div className="flex flex-col h-full">
                            <motion.div
                                className="flex items-center justify-between p-6 border-b border-slate-200"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1, duration: 0.3 }}
                            >
                                <motion.span
                                    className="text-xl font-bold text-[#0B1F3A]"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.15, duration: 0.3 }}
                                >
                                    Menu
                                </motion.span>
                                <motion.button
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
                                    whileHover={{
                                        scale: 1.05,
                                        rotate: 45,
                                        transition: { type: "spring", stiffness: 300, damping: 25 }
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <X size={20} className="text-[#0B1F3A]" />
                                </motion.button>
                            </motion.div>
                            <div className="flex-1 p-6">
                                <div className="flex flex-col space-y-4">
                                    {menuItems.map((item, index) => {
                                        const isContact = item.label === 'Contact';
                                        return (
                                            <motion.button
                                                key={item.label}
                                                onClick={(e) => handleNavigation(e, item.href)}
                                                className={`text-lg font-medium transition-all duration-300 ${isContact
                                                    ? 'px-4 py-3 bg-gradient-to-r from-[#E63946] via-red-500 to-[#E63946] text-white rounded-lg shadow-md hover:shadow-lg font-semibold text-center'
                                                    : 'text-slate-700 hover:text-[#E63946] py-2 px-3 rounded-lg hover:bg-slate-50'
                                                    }`}
                                                initial={{ opacity: 0, x: 50 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{
                                                    type: "spring",
                                                    stiffness: 200,
                                                    damping: 25,
                                                    delay: 0.1 + (index * 0.05)
                                                }}
                                                whileHover={{
                                                    x: isContact ? 0 : 3,
                                                    scale: isContact ? 1.01 : 1.02,
                                                    transition: { type: "spring", stiffness: 300, damping: 25 }
                                                }}
                                                whileTap={{ scale: 0.98 }}
                                            >
                                                {item.label}
                                            </motion.button>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
