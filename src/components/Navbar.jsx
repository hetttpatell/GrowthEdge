import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const menuItems = [
        { label: 'Home', href: '#home' },
        { label: 'Services', href: '#services' },
        { label: 'Awards', href: '#awards' },
        { label: 'Testimonials', href: '#testimonials' },
        { label: 'About', href: '#about' },
        { label: 'Contact', href: '#contact' },
    ];

    const scrollToSection = (e, href) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setMobileMenuOpen(false);
        }
    };

    return (
        <>
            <motion.nav
                className={`fixed top-0 w-full z-40 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md border-b border-slate-200/50 shadow-sm' : 'bg-transparent'
                    }`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="flex items-center justify-between h-16">
                        <a href="#home" onClick={(e) => scrollToSection(e, '#home')} className="flex items-center space-x-2">
                            <img src="/logo.png" alt="Growth Edge" className="h-8 w-8 object-contain" />
                            <span className={`text-xl font-bold font-['Outfit'] tracking-tighter ${scrolled ? 'text-[#0B1F3A]' : 'text-white'
                                }`}>
                                Growth Edge
                            </span>
                        </a>

                        <div className="hidden lg:flex items-center space-x-6">
                            {menuItems.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    onClick={(e) => scrollToSection(e, item.href)}
                                    className={`text-sm transition-colors hover:text-[#E63946] ${scrolled ? 'text-slate-700' : 'text-white'
                                        }`}
                                >
                                    {item.label}
                                </a>
                            ))}
                            <a
                                href="#contact"
                                onClick={(e) => scrollToSection(e, '#contact')}
                                className="px-4 py-2 bg-[#E63946] hover:bg-[#D62839] text-white rounded-full text-sm transition-all"
                            >
                                Get Quote
                            </a>
                        </div>

                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className={`lg:hidden p-2 rounded-lg ${scrolled ? 'text-[#0B1F3A]' : 'text-white'
                                }`}
                        >
                            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {mobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, x: '100%' }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: '100%' }}
                    className="fixed inset-y-0 right-0 z-50 w-64 bg-white shadow-xl lg:hidden"
                >
                    <div className="flex flex-col h-full">
                        <div className="flex items-center justify-between p-4 border-b">
                            <span className="text-lg font-bold text-[#0B1F3A]">Menu</span>
                            <button onClick={() => setMobileMenuOpen(false)} className="p-1">
                                <X size={20} className="text-[#0B1F3A]" />
                            </button>
                        </div>
                        <div className="flex-1 p-4">
                            <div className="flex flex-col space-y-3">
                                {menuItems.map((item) => (
                                    <a
                                        key={item.label}
                                        href={item.href}
                                        onClick={(e) => scrollToSection(e, item.href)}
                                        className="text-base text-slate-700 hover:text-[#E63946] py-1"
                                    >
                                        {item.label}
                                    </a>
                                ))}
                                <a
                                    href="#contact"
                                    onClick={(e) => scrollToSection(e, '#contact')}
                                    className="mt-3 px-4 py-2 bg-[#E63946] text-white rounded-full text-center text-sm"
                                >
                                    Get Quote
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </>
    );
};