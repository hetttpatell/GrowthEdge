import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [logoVisible, setLogoVisible] = useState(true);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isHomePage, setIsHomePage] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setScrolled(scrollY > 50);
            setLogoVisible(scrollY <= 100);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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
            navigate('/services');
            setMobileMenuOpen(false);
            window.scrollTo(0, 0);
        } else if (href === '/awards') {
            navigate('/awards');
            setMobileMenuOpen(false);
            window.scrollTo(0, 0);
        } else if (href === '/contact') {
            navigate('/contact');
            setMobileMenuOpen(false);
            window.scrollTo(0, 0);
        } else if (href === '/about') {
            navigate('/about');
            setMobileMenuOpen(false);
            window.scrollTo(0, 0);
        } else if (href === '#home') {
            navigate('/');
            setMobileMenuOpen(false);
            window.scrollTo(0, 0);
        } else {
            e.preventDefault();
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
                setMobileMenuOpen(false);
            } else {
                navigate('/');
                setMobileMenuOpen(false);
                window.scrollTo(0, 0);
            }
        }
    };

    // Smooth spring animation variants
    const navbarVariants = {
        hidden: {
            y: -100,
            opacity: 0,
            transition: {
                duration: 0.4,
                ease: [0.4, 0, 0.2, 1]
            }
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 20,
                mass: 1,
                delay: 0.15,
                when: "beforeChildren",
                staggerChildren: 0.08
            }
        }
    };

    const logoVariants = {
        hidden: {
            opacity: 0,
            x: -30,
            scale: 0.9
        },
        visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 120,
                damping: 15,
                mass: 0.8
            }
        }
    };

    const menuItemVariants = {
        hidden: {
            opacity: 0,
            y: -20,
            scale: 0.95
        },
        visible: (custom) => ({
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 150,
                damping: 20,
                mass: 0.6,
                delay: 0.2 + (custom * 0.05)
            }
        })
    };

    const contactButtonVariants = {
        hidden: {
            opacity: 0,
            scale: 0.8,
            y: -15
        },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 200,
                damping: 18,
                mass: 0.7,
                delay: 0.45
            }
        }
    };

    const mobileButtonVariants = {
        hidden: {
            opacity: 0,
            rotate: -90,
            scale: 0.5
        },
        visible: {
            opacity: 1,
            rotate: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 200,
                damping: 20,
                delay: 0.5
            }
        }
    };

    return (
        <>
            <motion.nav
                className={`fixed top-0 w-full z-40 transition-all duration-300 ${scrolled || !isHomePage
                    ? 'bg-white/95 backdrop-blur-lg border-b border-slate-200/60 shadow-lg'
                    : 'bg-transparent'
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
                        <motion.a
                            href="#home"
                            onClick={(e) => handleNavigation(e, '#home')}
                            className="flex items-center space-x-3 group"
                            variants={logoVariants}
                            whileHover={{
                                scale: 1.05,
                                transition: { type: "spring", stiffness: 400, damping: 25 }
                            }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <motion.div
                                animate={{
                                    opacity: logoVisible ? 1 : 0,
                                    scale: logoVisible ? 1 : 0.8,
                                    x: logoVisible ? 0 : -10
                                }}
                                transition={{
                                    duration: 0.4,
                                    ease: [0.4, 0, 0.2, 1]
                                }}
                                className="overflow-hidden"
                            >
                                <img
                                    src="/logo.png"
                                    alt="Growth Edge"
                                    className="h-25 w-25 object-contain transition-transform duration-300 group-hover:scale-110"
                                />
                            </motion.div>
                            <motion.span
                                className={`text-2xl font-bold font-['Outfit'] tracking-tight transition-all duration-300 ${scrolled || !isHomePage ? 'text-[#0B1F3A]' : 'text-white'
                                    }`}
                                animate={{
                                    letterSpacing: scrolled ? 'normal' : '0.02em'
                                }}
                                whileHover={{
                                    letterSpacing: '0.05em',
                                    transition: { duration: 0.2 }
                                }}
                            >
                                Growth Edge
                            </motion.span>
                        </motion.a>

                        <div className="hidden lg:flex items-center space-x-8">
                            {menuItems.map((item, index) => {
                                const isContact = item.label === 'Contact';
                                return isContact ? (
                                    <motion.a
                                        key={item.label}
                                        href={item.href}
                                        onClick={(e) => handleNavigation(e, item.href)}
                                        className="px-4 py-2 bg-gradient-to-r from-[#E63946] via-red-500 to-[#E63946] text-white rounded-full shadow-md hover:shadow-lg font-semibold relative overflow-hidden group"
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
                                    </motion.a>
                                ) : (
                                    <motion.a
                                        key={item.label}
                                        href={item.href}
                                        onClick={(e) => handleNavigation(e, item.href)}
                                        className={`relative text-sm font-medium transition-all duration-300 group ${scrolled || !isHomePage ? 'text-slate-700' : 'text-white'
                                            }`}
                                        variants={menuItemVariants}
                                        custom={index}
                                        whileHover={{
                                            y: -2,
                                            transition: { type: "spring", stiffness: 400, damping: 25 }
                                        }}
                                    >
                                        {item.label}
                                        <motion.span
                                            className="absolute bottom-0 left-0 h-0.5 bg-[#E63946]"
                                            initial={{ width: 0 }}
                                            whileHover={{ width: "100%" }}
                                            transition={{ duration: 0.3, ease: "easeOut" }}
                                        />
                                    </motion.a>
                                );
                            })}
                        </div>

                        <motion.button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className={`lg:hidden p-3 rounded-xl transition-all duration-300 ${scrolled || !isHomePage ? 'text-[#0B1F3A] hover:bg-slate-100' : 'text-white hover:bg-white/10'
                                }`}
                            variants={mobileButtonVariants}
                            whileHover={{
                                scale: 1.1,
                                rotate: 5,
                                transition: { type: "spring", stiffness: 400, damping: 20 }
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
                            stiffness: 300,
                            damping: 30,
                            mass: 0.8
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
                                        scale: 1.1,
                                        rotate: 90,
                                        transition: { type: "spring", stiffness: 400, damping: 20 }
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
                                            <motion.a
                                                key={item.label}
                                                href={item.href}
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
                                                    x: isContact ? 0 : 5,
                                                    scale: isContact ? 1.02 : 1.05,
                                                    transition: { type: "spring", stiffness: 400, damping: 25 }
                                                }}
                                                whileTap={{ scale: 0.98 }}
                                            >
                                                {item.label}
                                            </motion.a>
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