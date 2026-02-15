import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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

        const handleLoaderComplete = () => {
            // Wait for loader exit animation to complete before showing navbar
            setTimeout(() => {
                setIsLoaded(true);
            }, 800); // Match loader's exit animation duration
        };

        const handlePageLoad = (event) => {
            // Wait for any page transition animations
            setTimeout(() => {
                setIsLoaded(true);
                // Check if we're on home page
                const currentPage = event.detail?.page || 'unknown';
                setIsHomePage(currentPage === 'home' || window.location.pathname === '/');
            }, 300); // Small delay for page transition
        };

        // Check current page on mount (no loader case)
        setIsHomePage(window.location.pathname === '/');

        const loaderElement = document.querySelector('[data-testid="animated-loader"]');

        if (!loaderElement) {
            // No loader found, show navbar immediately
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

        window.addEventListener('pageLoaded', handlePageLoad);

        return () => {
            if (observer) observer.disconnect();
            window.removeEventListener('pageLoaded', handlePageLoad);
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
            // Navigate to services page using React Router
            navigate('/services');
            setMobileMenuOpen(false);
            // Scroll to top after navigation
            window.scrollTo(0, 0);
        } else if (href === '/awards') {
            // Navigate to awards page using React Router
            navigate('/awards');
            setMobileMenuOpen(false);
            // Scroll to top after navigation
            window.scrollTo(0, 0);
        } else if (href === '/contact') {
            // Navigate to contact page using React Router
            navigate('/contact');
            setMobileMenuOpen(false);
            // Scroll to top after navigation
            window.scrollTo(0, 0);
        } else if (href === '/about') {
            // Navigate to about page using React Router
            navigate('/about');
            setMobileMenuOpen(false);
            // Scroll to top after navigation
            window.scrollTo(0, 0);
        } else if (href === '#home') {
            // Navigate to home page
            navigate('/');
            setMobileMenuOpen(false);
            // Scroll to top after navigation
            window.scrollTo(0, 0);
        } else {
            // Handle smooth scrolling for other anchor links (only works on home page)
            e.preventDefault();
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
                setMobileMenuOpen(false);
            } else {
                // If element doesn't exist (on services page), navigate to home
                navigate('/');
                setMobileMenuOpen(false);
                // Scroll to top after navigation
                window.scrollTo(0, 0);
            }
        }
    };

    return (
        <>
            <motion.nav
                className={`fixed top-0 w-full z-40 transition-all duration-500 ${scrolled || !isHomePage
                    ? 'bg-white/95 backdrop-blur-lg border-b border-slate-200/60 shadow-lg'
                    : 'bg-transparent'
                    }`}
                initial={{ y: -100 }}
                animate={{ y: isLoaded ? 0 : -100 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
            >
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="flex items-center justify-between h-20">
                        <motion.a
                            href="#home"
                            onClick={(e) => handleNavigation(e, '#home')}
                            className="flex items-center space-x-3 group"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                        >
                            <motion.div
                                initial={{ opacity: 1, scale: 1 }}
                                animate={{ opacity: logoVisible ? 1 : 0, scale: logoVisible ? 1 : 0.8 }}
                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                                className="overflow-hidden"
                            >
                                <img src="/logo.png" alt="Growth Edge" className="h-25 w-25 object-contain" />
                            </motion.div>
                            <motion.span
                                className={`text-2xl font-bold font-['Outfit'] tracking-tight transition-all duration-300 ${scrolled || !isHomePage ? 'text-[#0B1F3A]' : 'text-white'
                                    }`}
                                whileHover={{ letterSpacing: '0.05em' }}
                            >
                                Growth Edge
                            </motion.span>
                        </motion.a>

                        <div className="hidden lg:flex items-center space-x-8">
                            {menuItems.map((item, index) => {
                                const isContact = item.label === 'Contact';
                                return (
                                    <motion.a
                                        key={item.label}
                                        href={item.href}
                                        onClick={(e) => handleNavigation(e, item.href)}
                                        className={`relative text-sm font-medium transition-all duration-300 group ${isContact
                                            ? 'px-4 py-2 bg-gradient-to-r from-[#E63946] via-red-500 to-[#E63946] text-white rounded-full shadow-md hover:shadow-lg hover:scale-105 font-semibold'
                                            : `hover:text-[#E63946] ${scrolled || !isHomePage ? 'text-slate-700' : 'text-white'}`
                                            }`}
                                        initial={{ opacity: 0, y: -20 }}
                                        animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : -20 }}
                                        transition={{ duration: 0.3, delay: isLoaded ? index * 0.1 : 0 }}
                                        whileHover={{ y: isContact ? -2 : -2 }}
                                    >
                                        {item.label}
                                        {!isContact && (
                                            <motion.span
                                                className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#E63946] transition-all duration-300 group-hover:w-full"
                                                initial={{ width: 0 }}
                                                whileHover={{ width: '100%' }}
                                            />
                                        )}
                                    </motion.a>
                                );
                            })}
                        </div>

                        <motion.button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className={`lg:hidden p-3 rounded-xl transition-all duration-300 ${scrolled || !isHomePage ? 'text-[#0B1F3A] hover:bg-slate-100' : 'text-white hover:bg-white/10'
                                }`}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </motion.button>
                    </div>
                </div>
            </motion.nav>

            {mobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, x: '100%' }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: '100%' }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="fixed inset-y-0 right-0 z-50 w-72 bg-white/95 backdrop-blur-lg shadow-2xl lg:hidden"
                >
                    <div className="flex flex-col h-full">
                        <div className="flex items-center justify-between p-6 border-b border-slate-200">
                            <motion.span
                                className="text-xl font-bold text-[#0B1F3A]"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: 0.1 }}
                            >
                                Menu
                            </motion.span>
                            <motion.button
                                onClick={() => setMobileMenuOpen(false)}
                                className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <X size={20} className="text-[#0B1F3A]" />
                            </motion.button>
                        </div>
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
                                            transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                                            whileHover={{ x: isContact ? 0 : 5 }}
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
        </>
    );
};