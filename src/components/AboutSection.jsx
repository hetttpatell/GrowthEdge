import { motion, useInView } from 'framer-motion';
import { Users, TrendingUp, Award, CheckCircle } from 'lucide-react';
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
        { icon: Users, value: 5000, suffix: '+', label: 'Happy Clients' },
        { icon: TrendingUp, value: 98, suffix: '%', label: 'Claim Success Rate' },
        { icon: Award, value: 20, suffix: '+', label: 'Industry Awards' },
    ];

    const values = [
        'Customer-centric approach',
        'Transparent pricing',
        'Fast claim processing',
        'Expert advisory team',
    ];

    return (
        <section id="about" className="py-20 md:py-32 bg-slate-50" data-testid="about-section">
            <div className="container mx-auto px-4 md:px-8 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left - Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600"
                                alt="Professional insurance agent"
                                className="w-full h-[600px] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/50 to-transparent" />
                        </div>

                        {/* Stats overlay */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="absolute -bottom-8 -right-8 bg-white rounded-2xl p-6 shadow-2xl border border-slate-100"
                        >
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-[#E63946] rounded-xl">
                                    <Award size={32} className="text-white" />
                                </div>
                                <div>
                                    <p className="text-3xl font-bold text-[#0B1F3A] font-['Outfit']">
                                        <AnimatedCounter end={25} suffix="+" />
                                    </p>
                                    <p className="text-sm text-slate-600">Years Experience</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="text-sm font-medium tracking-widest uppercase text-[#E63946] mb-4">About Us</p>
                        <h2 className="text-3xl md:text-5xl font-semibold font-['Outfit'] tracking-tight text-[#0B1F3A] mb-6">
                            Securing Your Legacy, Ensuring Your Future
                        </h2>
                        <p className="text-lg text-slate-600 leading-relaxed mb-6">
                            For over 25 years, Growth Edge has been a trusted partner for individuals and businesses seeking comprehensive insurance solutions. Our commitment to excellence and customer satisfaction has made us a leader in the industry.
                        </p>
                        <p className="text-lg text-slate-600 leading-relaxed mb-8">
                            We believe in building lasting relationships with our clients, providing personalized service, and ensuring peace of mind through reliable coverage options tailored to your unique needs.
                        </p>

                        {/* Values List */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                            {values.map((value, index) => (
                                <motion.div
                                    key={value}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 * index }}
                                    className="flex items-center gap-3"
                                >
                                    <CheckCircle size={20} className="text-[#E63946] flex-shrink-0" />
                                    <span className="text-slate-700">{value}</span>
                                </motion.div>
                            ))}
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-6">
                            {stats.map((stat, index) => {
                                const Icon = stat.icon;
                                return (
                                    <motion.div
                                        key={stat.label}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2 * index }}
                                        className="text-center"
                                        data-testid={`stat-${stat.label.toLowerCase().replace(' ', '-')}`}
                                    >
                                        <Icon size={32} className="text-[#0B1F3A] mx-auto mb-2" />
                                        <p className="text-3xl font-bold text-[#0B1F3A] mb-1 font-['Outfit']">
                                            <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                                        </p>
                                        <p className="text-sm text-slate-600">{stat.label}</p>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};