import { motion } from 'framer-motion';
import { ArrowRight, Shield, TrendingUp, Award } from 'lucide-react';

export const HeroSection = () => {
    const scrollToSection = (href) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const stats = [
        { icon: Shield, label: 'Trusted Protection', value: '25+ Years' },
        { icon: TrendingUp, label: 'Claim Success', value: '98%' },
        { icon: Award, label: 'Industry Awards', value: '20+' },
    ];

    return (
        <section id="home" className="relative min-h-screen flex items-center overflow-hidden" data-testid="hero-section">
            {/* Background with overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0B1F3A] via-[#15335E] to-[#0B1F3A] opacity-95" />
                <div
                    className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1528256507509-cc4facea43f6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODl8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGZhbWlseSUyMHN1bnNldCUyMHNpbGhvdWV0dGV8ZW58MHx8fHwxNzcwOTgyMzQ0fDA&ixlib=rb-4.1.0&q=85')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
            </div>

            <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10 py-20 md:py-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-white"
                    >
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="text-sm font-medium tracking-widest uppercase text-slate-300 mb-4"
                        >
                            Insurance Excellence Since 1999
                        </motion.p>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="text-5xl md:text-7xl font-bold font-['Outfit'] tracking-tight leading-[1.1] mb-6"
                            data-testid="hero-headline"
                        >
                            Protecting What Matters Most.
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.7 }}
                            className="text-lg md:text-xl leading-relaxed text-slate-200 mb-8"
                            data-testid="hero-subheadline"
                        >
                            Comprehensive insurance solutions tailored for your life, business, and future legacy. Life. Health. Vehicle. Business. We've Got You Covered.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.9 }}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <button
                                onClick={() => scrollToSection('#contact')}
                                className="group px-8 py-4 bg-[#E63946] hover:bg-[#D62839] text-white rounded-full font-semibold text-lg transition-all hover:shadow-[0_0_30px_rgba(230,57,70,0.4)] flex items-center justify-center gap-2"
                                data-testid="hero-cta-primary"
                            >
                                Get a Free Quote
                                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                            </button>
                            <button
                                onClick={() => scrollToSection('#services')}
                                className="px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#0B1F3A] rounded-full font-semibold text-lg transition-all"
                                data-testid="hero-cta-secondary"
                            >
                                Explore Plans
                            </button>
                        </motion.div>
                    </motion.div>

                    {/* Right Content - Floating Stats Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="relative hidden lg:block"
                    >
                        <div className="relative">
                            {/* Main image card */}
                            <div className="rounded-3xl overflow-hidden shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1528256507509-cc4facea43f6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODl8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGZhbWlseSUyMHN1bnNldCUyMHNpbGhvdWV0dGV8ZW58MHx8fHwxNzcwOTgyMzQ0fDA&ixlib=rb-4.1.0&q=85"
                                    alt="Happy family"
                                    className="w-full h-[500px] object-cover"
                                />
                            </div>

                            {/* Floating stats cards */}
                            {stats.map((stat, index) => {
                                const Icon = stat.icon;
                                return (
                                    <motion.div
                                        key={stat.label}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 1 + index * 0.2 }}
                                        className="absolute glass border border-white/20 rounded-2xl p-4 shadow-xl backdrop-blur-md"
                                        style={{
                                            top: `${20 + index * 30}%`,
                                            right: index % 2 === 0 ? '-10%' : 'auto',
                                            left: index % 2 !== 0 ? '-10%' : 'auto',
                                        }}
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 bg-white/20 rounded-lg">
                                                <Icon size={24} className="text-white" />
                                            </div>
                                            <div>
                                                <p className="text-2xl font-bold text-white">{stat.value}</p>
                                                <p className="text-sm text-slate-200">{stat.label}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Decorative shapes */}
            <div className="absolute top-20 left-10 w-32 h-32 bg-[#E63946] rounded-full opacity-10 blur-3xl" />
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#E63946] rounded-full opacity-10 blur-3xl" />
        </section>
    );
};