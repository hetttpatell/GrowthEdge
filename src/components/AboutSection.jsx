import { motion, useInView } from 'framer-motion';
import { Users, TrendingUp, Award, CheckCircle, Shield, Heart, Target, Lightbulb, Star, ArrowRight } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';

const AnimatedCounter = ({ end, duration = 2000, suffix = '' }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (!isInView) return;

        let startTime;
        const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = (currentTime - startTime) / duration;

            if (progress < 1) {
                setCount(Math.floor(end * progress));
                requestAnimationFrame(animate);
            } else {
                setCount(end);
            }
        };

        requestAnimationFrame(animate);
    }, [isInView, end, duration]);

    return (
        <span ref={ref} className="counter">
            {count.toLocaleString()}{suffix}
        </span>
    );
};

export const AboutSection = () => {
    const stats = [
        { icon: Users, value: 5000, suffix: '+', label: 'Happy Clients', color: 'from-blue-500 to-cyan-500' },
        { icon: TrendingUp, value: 98, suffix: '%', label: 'Claim Success Rate', color: 'from-green-500 to-emerald-500' },
        { icon: Award, value: 20, suffix: '+', label: 'Industry Awards', color: 'from-purple-500 to-pink-500' },
    ];

    const coreValues = [
        { icon: Shield, title: 'Trust & Security', description: 'Building lasting relationships through transparency and reliability' },
        { icon: Heart, title: 'Customer First', description: 'Your peace of mind is our highest priority' },
        { icon: Target, title: 'Excellence', description: 'Delivering superior service and comprehensive coverage' },
        { icon: Lightbulb, title: 'Innovation', description: 'Modern solutions for evolving insurance needs' },
    ];

    const floatingVariants = {
        initial: { y: 0 },
        animate: {
            y: [-1, 1, -1],
            transition: {
                duration: 15,
                repeat: Infinity,
                ease: "linear"
            }
        }
    };

    return (
        <section id="about" className="py-8 md:py-16 bg-white relative overflow-hidden" data-testid="about-section">
            {/* Performance-optimized static background */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-100/10 to-cyan-100/10 rounded-full blur-3xl opacity-10" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-100/10 to-pink-100/10 rounded-full blur-3xl opacity-10" />

            {/* Zero particles for maximum performance */}
            <div className="absolute bottom-0 left-0 w-1/6 h-1/6 bg-indigo-50/20 rounded-full blur-3xl opacity-3" />

            <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="text-center mb-12"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.99 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-red-50 to-pink-50 border border-red-200 rounded-full mb-4 shadow-md"
                    >
                        <div className="w-2 h-2 bg-gradient-to-r from-[#E63946] to-red-500 rounded-full animate-pulse"></div>
                        <p className="text-sm font-black tracking-widest uppercase text-[#E63946]">About Growth Edge</p>
                        <div className="w-2 h-2 bg-gradient-to-r from-[#E63946] to-red-500 rounded-full animate-pulse"></div>
                    </motion.div>
                    <h2 className="text-3xl md:text-4xl font-bold font-['Outfit'] text-[#0B1F3A] mb-4">
                        Securing Your <span className="text-[#E63946]">Legacy</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-[#E63946] to-red-500 mx-auto rounded-full"></div>
                </motion.div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
                    {/* Left - Enhanced Image Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="relative"
                    >
                        {/* Main Image with enhanced styling */}
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                            <img
                                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600"
                                alt="Professional insurance agent"
                                className="w-full h-[600px] object-cover transform group-hover:scale-100 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/70 via-transparent to-transparent" />

                            {/* Floating badges */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1, duration: 0.3, ease: "easeOut" }}
                                className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/20"
                            >
                                <div className="flex flex-col items-center gap-3">
                                    <div className="flex items-center gap-1 mb-2">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} size={16} className="text-yellow-500 fill-yellow-500 drop-shadow-sm" />
                                        ))}
                                    </div>
                                    <div className="text-center">
                                        <span className="text-xl font-bold text-slate-800 block">4.9</span>
                                        <span className="text-xs font-medium text-slate-600 uppercase tracking-wide">Out of 5</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Enhanced Experience Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 5 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.3, ease: "easeOut" }}
                            className="absolute -bottom-8 -right-8 bg-gradient-to-br from-white to-slate-50 rounded-3xl p-8 shadow-2xl border border-slate-100 hover:shadow-3xl transition-shadow duration-300"
                        >
                            <div className="flex items-center gap-4">
                                <div className="p-4 bg-gradient-to-br from-[#E63946] to-red-600 rounded-2xl shadow-lg">
                                    <Award size={40} className="text-white" />
                                </div>
                                <div>
                                    <p className="text-4xl font-bold text-[#0B1F3A] font-['Outfit']">
                                        <AnimatedCounter end={25} suffix="+" />
                                    </p>
                                    <p className="text-sm text-slate-600 font-medium">Years Excellence</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right - Enhanced Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="space-y-8"
                    >
                        <div className="space-y-6">
                            <p className="text-lg text-slate-600 leading-relaxed">
                                We believe in building lasting relationships founded on trust, transparency, and unwavering commitment to your protection. Our expert team works tirelessly to ensure you have the right coverage for every stage of life.
                            </p>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                From safeguarding your family's future to protecting your business legacy, we're here to provide peace of mind through innovative insurance solutions tailored to your unique needs.
                            </p>
                        </div>

                        {/* Core Values */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {coreValues.map((value, index) => {
                                const Icon = value.icon;
                                return (
                                    <motion.div
                                        key={value.title}
                                        initial={{ opacity: 0, y: 5 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.02 * index, duration: 0.3, ease: "easeOut" }}
                                        className="group bg-white rounded-2xl p-6 shadow-lg border border-slate-100 hover:shadow-xl hover:border-[#E63946]/20 transition-all duration-200 cursor-pointer"
                                    >
                                        <div className="flex items-start gap-4">
                                            <div className="p-3 bg-gradient-to-br from-[#E63946]/10 to-red-100 rounded-xl group-hover:from-[#E63946]/20 group-hover:to-red-200 transition-colors duration-300">
                                                <Icon size={24} className="text-[#E63946]" />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="font-bold text-[#0B1F3A] mb-2 font-['Outfit']">{value.title}</h3>
                                                <p className="text-sm text-slate-600 leading-relaxed">{value.description}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>

                {/* Enhanced Stats Section */}
                <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-3xl p-8 shadow-xl border border-slate-100"
                >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {stats.map((stat, index) => {
                            const Icon = stat.icon;
                            return (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, scale: 0.99 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.05 * index, duration: 0.3, ease: "easeOut" }}
                                    className="text-center group"
                                    data-testid={`stat-${stat.label.toLowerCase().replace(' ', '-')}`}
                                >
                                    <motion.div
                                        className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${stat.color} p-1 mb-4 group-hover:scale-100 transition-transform duration-200`}
                                    >
                                        <div className="w-full h-full bg-white rounded-xl flex items-center justify-center">
                                            <Icon size={36} className="text-[#0B1F3A]" />
                                        </div>
                                    </motion.div>
                                    <p className="text-4xl font-bold text-[#0B1F3A] mb-2 font-['Outfit']">
                                        <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                                    </p>
                                    <p className="text-sm font-medium text-slate-600">{stat.label}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>


            </div>
        </section>
    );
};