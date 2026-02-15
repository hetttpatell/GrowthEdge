import { motion } from 'framer-motion';
import { Star, Quote, MapPin, Briefcase, Users, Heart, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';

export const TestimonialsSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const testimonials = [
        {
            name: 'Rajesh Sharma',
            role: 'Business Owner, Mumbai',
            location: 'Maharashtra',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
            rating: 5,
            text: 'Growth Edge understood my business needs perfectly. Their comprehensive coverage options and exceptional customer service have given me complete peace of mind.',
            category: 'business',
            years: '5+ years',
        },
        {
            name: 'Priya Nair',
            role: 'Family Head, Bangalore',
            location: 'Karnataka',
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
            rating: 5,
            text: 'As a mother of two, securing my family\'s future was my top priority. Growth Edge provided the perfect term insurance plan with affordable premiums.',
            category: 'family',
            years: '3+ years',
        },
        {
            name: 'Dr. Amit Kumar',
            role: 'Healthcare Professional, Delhi',
            location: 'NCR',
            image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
            rating: 5,
            text: 'Being in the medical field, I understand the importance of good health insurance. Growth Edge\'s health coverage is comprehensive with cashless facilities.',
            category: 'health',
            years: '7+ years',
        },
        {
            name: 'Ananya Reddy',
            role: 'IT Professional, Hyderabad',
            location: 'Telangana',
            image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
            rating: 5,
            text: 'I needed a reliable investment-cum-insurance plan for my retirement goals. Growth Edge offered excellent ULIP plans with good returns.',
            category: 'investment',
            years: '4+ years',
        },
        {
            name: 'Vikram Singh',
            role: 'Manufacturing Unit Owner, Pune',
            location: 'Maharashtra',
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
            rating: 5,
            text: 'Running a manufacturing business comes with unique risks. Growth Edge provided tailored industrial insurance covering equipment and liability.',
            category: 'business',
            years: '10+ years',
        },
        {
            name: 'Meera Patel',
            role: 'Senior Citizen, Ahmedabad',
            location: 'Gujarat',
            image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400',
            rating: 5,
            text: 'At 65, finding comprehensive health insurance was challenging. Growth Edge offered senior citizen-friendly plans with excellent wellness programs.',
            category: 'health',
            years: '2+ years',
        },
    ];

    useEffect(() => {
        if (!isPaused) {
            const interval = setInterval(() => {
                setActiveIndex((prev) => (prev + 1) % testimonials.length);
            }, 4000);
            return () => clearInterval(interval);
        }
    }, [testimonials.length, isPaused]);

    const floatingVariants = {
        initial: { y: 0 },
        animate: {
            y: [-8, 8, -8],
            transition: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    const glowVariants = {
        initial: { boxShadow: "0 0 0 rgba(230, 57, 70, 0)" },
        animate: {
            boxShadow: [
                "0 0 0 rgba(230, 57, 70, 0)",
                "0 0 20px rgba(230, 57, 70, 0.3)",
                "0 0 0 rgba(230, 57, 70, 0)"
            ],
            transition: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    const getCategoryIcon = (category) => {
        switch (category) {
            case 'business':
                return <Briefcase className="w-5 h-5" />;
            case 'family':
                return <Users className="w-5 h-5" />;
            case 'health':
                return <Heart className="w-5 h-5" />;
            case 'investment':
                return <Star className="w-5 h-5" />;
            default:
                return <Star className="w-5 h-5" />;
        }
    };

    const getCategoryColor = (category) => {
        switch (category) {
            case 'business':
                return 'text-blue-600 bg-blue-50';
            case 'family':
                return 'text-green-600 bg-green-50';
            case 'health':
                return 'text-red-600 bg-red-50';
            case 'investment':
                return 'text-purple-600 bg-purple-50';
            default:
                return 'text-gray-600 bg-gray-50';
        }
    };

    return (
        <section id="testimonials" className="relative py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden">
            {/* Modern background effects matching AwardsSection */}
            <div className="absolute inset-0">
                <motion.div
                    variants={floatingVariants}
                    initial="initial"
                    animate="animate"
                    className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-cyan-200/30 rounded-full blur-3xl"
                />
                <motion.div
                    variants={floatingVariants}
                    initial="initial"
                    animate="animate"
                    transition={{ delay: 1 }}
                    className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-3xl"
                />

                {/* Animated particles */}
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-gradient-to-r from-blue-400/40 to-cyan-400/40 rounded-full"
                        initial={{
                            x: Math.random() * window.innerWidth,
                            y: window.innerHeight + 50,
                            scale: 0
                        }}
                        animate={{
                            y: -Math.random() * 700 - 200,
                            opacity: [0, 0.6, 0.6, 0],
                            scale: [0, 1, 1, 0]
                        }}
                        transition={{
                            duration: Math.random() * 6 + 8,
                            repeat: Infinity,
                            delay: Math.random() * 5,
                            ease: "easeInOut"
                        }}
                    />
                ))}
            </div>

            <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
                {/* Enhanced Header matching AwardsSection style */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-red-50 to-pink-50 border border-red-200 rounded-full mb-4 shadow-md backdrop-blur-sm"
                        whileHover={{ scale: 1.05, y: -2 }}
                    >
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                            className="w-2 h-2 bg-gradient-to-r from-[#E63946] to-red-500 rounded-full"
                        />
                        <p className="text-sm font-black tracking-widest uppercase text-[#E63946]">Testimonials</p>
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                            className="w-2 h-2 bg-gradient-to-r from-[#E63946] to-red-500 rounded-full"
                        />
                    </motion.div>

                    <motion.h2
                        className="text-4xl md:text-5xl font-bold font-['Outfit'] text-[#0B1F3A] mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <motion.span
                            className="inline-block"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                        >
                            Client <span className="text-[#E63946]">Success Stories</span>
                        </motion.span>
                    </motion.h2>

                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "5rem" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="h-1 bg-gradient-to-r from-[#E63946] to-red-500 mx-auto rounded-full"
                    />
                </motion.div>

                {/* Main Testimonial Display */}
                <div className="relative max-w-5xl mx-auto">
                    <motion.div
                        className="relative"
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                    >
                        {/* Featured Testimonial */}
                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: -20 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            whileHover={{
                                scale: 1.02,
                                y: -4,
                                transition: { duration: 0.3 }
                            }}
                            className="group relative"
                        >
                            {/* Glow effect */}
                            <motion.div
                                variants={glowVariants}
                                initial="initial"
                                animate="animate"
                                className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-3xl blur-xl"
                            />

                            <div className="relative bg-white/90 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/50">
                                <div className="flex flex-col lg:flex-row gap-8 items-start">
                                    {/* Left Side - Image and Basic Info */}
                                    <div className="flex-shrink-0 text-center lg:text-left">
                                        <motion.div
                                            variants={floatingVariants}
                                            initial="initial"
                                            animate="animate"
                                            transition={{ delay: activeIndex * 0.1 }}
                                            className="relative inline-block"
                                        >
                                            <img
                                                src={testimonials[activeIndex].image}
                                                alt={testimonials[activeIndex].name}
                                                className="w-32 h-32 lg:w-40 lg:h-40 rounded-2xl object-cover border-4 border-white shadow-xl"
                                            />
                                            <motion.div
                                                whileHover={{ rotate: 360, scale: 1.1 }}
                                                transition={{ duration: 0.6 }}
                                                className="absolute -bottom-2 -right-2 bg-gradient-to-r from-[#E63946] to-red-500 text-white text-xs px-3 py-1 rounded-full font-bold shadow-lg"
                                            >
                                                {testimonials[activeIndex].years}
                                            </motion.div>
                                        </motion.div>

                                        <div className="mt-4 space-y-2">
                                            <motion.h3
                                                className="text-xl font-bold text-[#0B1F3A] font-['Outfit'] group-hover:text-blue-700 transition-colors duration-300"
                                                whileHover={{ scale: 1.05 }}
                                            >
                                                {testimonials[activeIndex].name}
                                            </motion.h3>
                                            <p className="text-sm text-slate-600 font-medium">
                                                {testimonials[activeIndex].role.split(',')[0]}
                                            </p>
                                            <div className="flex items-center gap-1 text-slate-500 justify-center lg:justify-start">
                                                <MapPin className="w-4 h-4" />
                                                <span className="text-xs">{testimonials[activeIndex].location}</span>
                                            </div>

                                            {/* Category Badge */}
                                            <motion.div
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.95 }}
                                                transition={{ duration: 0.2 }}
                                                className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium ${getCategoryColor(testimonials[activeIndex].category)}`}
                                            >
                                                {getCategoryIcon(testimonials[activeIndex].category)}
                                                <span className="capitalize">{testimonials[activeIndex].category}</span>
                                            </motion.div>
                                        </div>
                                    </div>

                                    {/* Right Side - Content */}
                                    <div className="flex-1">
                                        <motion.div
                                            variants={floatingVariants}
                                            initial="initial"
                                            animate="animate"
                                            transition={{ delay: 0.2 }}
                                        >
                                            <Quote className="w-8 h-8 text-[#E63946]/20 mb-4" />
                                        </motion.div>

                                        <motion.p
                                            className="text-lg md:text-xl text-slate-700 leading-relaxed mb-6 italic"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 0.3, duration: 0.6 }}
                                        >
                                            "{testimonials[activeIndex].text}"
                                        </motion.p>

                                        {/* Rating */}
                                        <div className="flex items-center gap-4">
                                            <div className="flex gap-1">
                                                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                                                    <motion.div
                                                        key={i}
                                                        initial={{ scale: 0, rotate: -180 }}
                                                        animate={{ scale: 1, rotate: 0 }}
                                                        transition={{ delay: i * 0.1, duration: 0.3 }}
                                                        whileHover={{ scale: 1.2, rotate: 360 }}
                                                    >
                                                        <Star size={20} className="fill-[#E63946] text-[#E63946]" />
                                                    </motion.div>
                                                ))}
                                            </div>
                                            <motion.span
                                                className="text-sm text-slate-500 font-medium"
                                                whileHover={{ scale: 1.05 }}
                                            >
                                                Verified Customer
                                            </motion.span>
                                        </div>
                                    </div>
                                </div>

                                {/* Decorative corner sparkles */}
                                <motion.div
                                    className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    initial={{ rotate: 0 }}
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <Sparkles size={16} className="text-[#E63946]" />
                                </motion.div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Thumbnail Navigation */}
                    <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                        {testimonials.map((testimonial, index) => (
                            <motion.button
                                key={testimonial.name}
                                onClick={() => setActiveIndex(index)}
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className={`relative p-3 rounded-xl border-2 transition-all duration-300 ${activeIndex === index
                                        ? 'border-[#E63946] bg-gradient-to-br from-red-50 to-pink-50 shadow-lg'
                                        : 'border-white/50 bg-white/80 backdrop-blur-sm hover:border-[#0B1F3A]/30 hover:shadow-md'
                                    }`}
                            >
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-full h-16 object-cover rounded-lg mb-2"
                                />
                                <p className="text-xs font-medium text-[#0B1F3A] truncate">{testimonial.name}</p>
                                <p className="text-xs text-slate-500 truncate">{testimonial.role.split(',')[0]}</p>

                                {activeIndex === index && (
                                    <motion.div
                                        layoutId="activeIndicator"
                                        className="absolute inset-0 rounded-xl border-2 border-[#E63946] pointer-events-none"
                                        initial={false}
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                            </motion.button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
