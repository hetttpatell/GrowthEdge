import { motion } from 'framer-motion';
import { Star, Quote, MapPin, Briefcase, Users, Heart, Sparkles, TrendingUp, Shield, Award, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

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
            text: 'Growth Edge transformed our business insurance strategy. Their comprehensive coverage options and exceptional customer service have given us complete peace of mind. The claims process is seamless and their team truly understands our industry needs.',
            category: 'business',
            years: '5+ years',
            highlight: 'Saved 40% on premiums',
            metrics: { claims: '24/7 Support', coverage: '₹5Cr+', satisfaction: '98%' }
        },
        {
            name: 'Priya Nair',
            role: 'Family Head, Bangalore',
            location: 'Karnataka',
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
            rating: 5,
            text: 'As a mother of two, securing my family\'s future was my top priority. Growth Edge provided the perfect term insurance plan with affordable premiums. The wellness benefits and investment options have exceeded our expectations.',
            category: 'family',
            years: '3+ years',
            highlight: 'Comprehensive family coverage',
            metrics: { claims: 'Quick Settlement', coverage: '₹1Cr', satisfaction: '99%' }
        },
        {
            name: 'Dr. Amit Kumar',
            role: 'Healthcare Professional, Delhi',
            location: 'NCR',
            image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
            rating: 5,
            text: 'Being in the medical field, I understand the importance of good health insurance. Growth Edge\'s health coverage is comprehensive with cashless facilities across 500+ hospitals. Their preventive care programs are outstanding.',
            category: 'health',
            years: '7+ years',
            highlight: '500+ network hospitals',
            metrics: { claims: 'Cashless', coverage: '₹50L', satisfaction: '97%' }
        },
        {
            name: 'Ananya Reddy',
            role: 'IT Professional, Hyderabad',
            location: 'Telangana',
            image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
            rating: 5,
            text: 'I needed a reliable investment-cum-insurance plan for my retirement goals. Growth Edge offered excellent ULIP plans with good returns. The digital platform makes tracking investments effortless and transparent.',
            category: 'investment',
            years: '4+ years',
            highlight: '12% annual returns',
            metrics: { claims: 'Digital Access', coverage: '₹2Cr', satisfaction: '96%' }
        },
        {
            name: 'Vikram Singh',
            role: 'Manufacturing Unit Owner, Pune',
            location: 'Maharashtra',
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
            rating: 5,
            text: 'Running a manufacturing business comes with unique risks. Growth Edge provided tailored industrial insurance covering equipment and liability. Their risk assessment team helped us identify and mitigate potential threats effectively.',
            category: 'business',
            years: '10+ years',
            highlight: 'Custom risk solutions',
            metrics: { claims: 'Expert Team', coverage: '₹10Cr', satisfaction: '99%' }
        },
        {
            name: 'Meera Patel',
            role: 'Senior Citizen, Ahmedabad',
            location: 'Gujarat',
            image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400',
            rating: 5,
            text: 'At 65, finding comprehensive health insurance was challenging. Growth Edge offered senior citizen-friendly plans with excellent wellness programs. No waiting periods for existing conditions and quick claim settlements.',
            category: 'health',
            years: '2+ years',
            highlight: 'No waiting period',
            metrics: { claims: 'Senior Care', coverage: '₹25L', satisfaction: '98%' }
        },
    ];

    useEffect(() => {
        if (!isPaused) {
            const interval = setInterval(() => {
                setActiveIndex((prev) => (prev + 1) % testimonials.length);
            }, 5000);
            return () => clearInterval(interval);
        }
    }, [testimonials.length, isPaused]);

    const getCategoryIcon = (category) => {
        switch (category) {
            case 'business':
                return <TrendingUp className="w-5 h-5" />;
            case 'family':
                return <Heart className="w-5 h-5" />;
            case 'health':
                return <Shield className="w-5 h-5" />;
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
        <section id="testimonials" className="py-16 bg-gradient-to-br from-white via-slate-50/30 to-blue-50/20 relative overflow-hidden">
            {/* Static background elements matching website theme */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-100/10 to-cyan-100/10 rounded-full blur-3xl opacity-20" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-[#E63946]/10 to-red-100/10 rounded-full blur-3xl opacity-20" />
                <div className="absolute top-1/2 left-1/2 w-1/3 h-1/3 bg-indigo-50/30 rounded-full blur-2xl opacity-10" />
            </div>

            <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                        className="inline-flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-[#E63946]/10 to-red-50 border border-[#E63946]/20 rounded-full mb-6 shadow-sm"
                    >
                        <Quote className="w-5 h-5 text-[#E63946]" />
                        <p className="text-sm font-bold tracking-widest uppercase text-[#0B1F3A]">Client Stories</p>
                        <Quote className="w-5 h-5 text-[#E63946]" />
                    </motion.div>

                    <motion.h2
                        className="text-4xl md:text-5xl font-bold font-['Outfit'] text-[#0B1F3A] mb-4"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        What Our <span className="text-[#E63946]">Clients Say</span>
                    </motion.h2>

                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "4rem" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="h-1 bg-gradient-to-r from-[#E63946] to-red-500 mx-auto rounded-full"
                    />
                </motion.div>

                {/* Main Testimonial Display */}
                <div className="relative max-w-5xl mx-auto mb-12">
                    <motion.div
                        className="relative"
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                    >
                        {/* Featured Testimonial Card */}
                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden"
                        >
                            <div className="flex flex-col lg:flex-row gap-8 p-8 lg:p-12">
                                {/* Left - Image and Info */}
                                <div className="flex-shrink-0 text-center lg:text-left">
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.4, delay: 0.1 }}
                                        className="relative inline-block"
                                    >
                                        <img
                                            src={testimonials[activeIndex].image}
                                            alt={testimonials[activeIndex].name}
                                            className="w-32 h-32 lg:w-40 lg:h-40 rounded-2xl object-cover border-4 border-white shadow-lg"
                                        />
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.3, delay: 0.2 }}
                                            className="absolute -bottom-2 -right-2 bg-gradient-to-r from-[#E63946] to-red-500 text-white text-xs px-3 py-1 rounded-full font-bold shadow-lg"
                                        >
                                            {testimonials[activeIndex].years}
                                        </motion.div>
                                    </motion.div>

                                    <div className="mt-4 space-y-2">
                                        <motion.h3
                                            className="text-xl font-bold text-[#0B1F3A] font-['Outfit'] mb-1"
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.4, delay: 0.3 }}
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

                                        {/* Highlight Badge */}
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.3, delay: 0.5 }}
                                            className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-[#E63946]/10 to-red-50 border border-[#E63946]/20 rounded-full"
                                        >
                                            <Award className="w-4 h-4 text-[#E63946]" />
                                            <span className="text-xs font-bold text-[#E63946]">{testimonials[activeIndex].highlight}</span>
                                        </motion.div>

                                        {/* Metrics */}
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.4, delay: 0.6 }}
                                            className="mt-4 grid grid-cols-3 gap-2 text-center"
                                        >
                                            {Object.entries(testimonials[activeIndex].metrics).map(([key, value], i) => (
                                                <motion.div
                                                    key={key}
                                                    initial={{ opacity: 0, scale: 0.9 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    transition={{ duration: 0.3, delay: 0.7 + (i * 0.1) }}
                                                    className="bg-slate-50 rounded-lg p-2"
                                                >
                                                    <p className="text-xs font-bold text-[#0B1F3A] capitalize">{key}</p>
                                                    <p className="text-sm font-bold text-[#E63946]">{value}</p>
                                                </motion.div>
                                            ))}
                                        </motion.div>
                                    </div>
                                </div>

                                {/* Right - Content */}
                                <div className="flex-1">
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4, delay: 0.2 }}
                                    >
                                        <Quote className="w-10 h-10 text-[#E63946]/20 mb-4" />
                                    </motion.div>

                                    <motion.p
                                        className="text-lg md:text-xl text-slate-700 leading-relaxed mb-6 italic"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.5, delay: 0.3 }}
                                    >
                                        "{testimonials[activeIndex].text}"
                                    </motion.p>

                                    {/* Rating and Category */}
                                    <motion.div
                                        className="flex items-center justify-between mb-4"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4, delay: 0.5 }}
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="flex gap-1">
                                                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                                                    <motion.div
                                                        key={i}
                                                        initial={{ scale: 0, rotate: -45 }}
                                                        animate={{ scale: 1, rotate: 0 }}
                                                        transition={{ delay: 0.6 + (i * 0.1), duration: 0.3 }}
                                                        whileHover={{ scale: 1.2, rotate: 180 }}
                                                    >
                                                        <Star size={20} className="fill-[#E63946] text-[#E63946]" />
                                                    </motion.div>
                                                ))}
                                            </div>
                                            <span className="text-sm font-medium text-slate-500">Verified Customer</span>
                                        </div>

                                        <motion.div
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${getCategoryColor(testimonials[activeIndex].category)}`}
                                        >
                                            {getCategoryIcon(testimonials[activeIndex].category)}
                                            <span className="capitalize">{testimonials[activeIndex].category}</span>
                                        </motion.div>
                                    </motion.div>

                                    {/* Action Buttons */}
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.4, delay: 0.8 }}
                                        className="flex gap-3"
                                    >
                                        <motion.button
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="px-6 py-2 bg-gradient-to-r from-[#E63946] to-red-500 text-white rounded-full font-medium text-sm shadow-lg hover:shadow-xl transition-all duration-200"
                                        >
                                            Read Full Story
                                        </motion.button>
                                        <motion.button
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="px-6 py-2 border-2 border-[#0B1F3A] text-[#0B1F3A] rounded-full font-medium text-sm hover:bg-[#0B1F3A] hover:text-white transition-all duration-200"
                                        >
                                            Similar Cases
                                        </motion.button>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Navigation Controls */}
                    <div className="flex items-center justify-between mt-8">
                        <motion.button
                            onClick={() => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-3 bg-white rounded-full shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-200"
                        >
                            <ChevronLeft className="w-5 h-5 text-[#0B1F3A]" />
                        </motion.button>

                        <div className="flex items-center gap-2">
                            {testimonials.map((_, index) => (
                                <motion.button
                                    key={index}
                                    onClick={() => setActiveIndex(index)}
                                    className={`h-2 rounded-full transition-all duration-300 ${activeIndex === index
                                        ? 'w-8 bg-[#E63946]'
                                        : 'w-2 bg-slate-300 hover:bg-slate-400'
                                        }`}
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.8 }}
                                />
                            ))}
                        </div>

                        <motion.button
                            onClick={() => setActiveIndex((prev) => (prev + 1) % testimonials.length)}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-3 bg-white rounded-full shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-200"
                        >
                            <ChevronRight className="w-5 h-5 text-[#0B1F3A]" />
                        </motion.button>
                    </div>

                    {/* Play/Pause Control */}
                    <motion.div
                        className="flex justify-center mt-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4, delay: 1 }}
                    >
                        <motion.button
                            onClick={() => setIsPaused(!isPaused)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-md border border-slate-200 hover:shadow-lg transition-all duration-200"
                        >
                            {isPaused ? (
                                <>
                                    <Play className="w-4 h-4 text-[#0B1F3A]" />
                                    <span className="text-sm font-medium text-[#0B1F3A]">Auto Play</span>
                                </>
                            ) : (
                                <>
                                    <Pause className="w-4 h-4 text-[#0B1F3A]" />
                                    <span className="text-sm font-medium text-[#0B1F3A]">Pause</span>
                                </>
                            )}
                        </motion.button>
                    </motion.div>

                    {/* Stats Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
                    >
                        {[
                            { number: '10,000+', label: 'Happy Clients', icon: Users },
                            { number: '98%', label: 'Satisfaction Rate', icon: Heart },
                            { number: '500+', label: 'Network Hospitals', icon: Shield },
                            { number: '24/7', label: 'Customer Support', icon: TrendingUp },
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.3 + (index * 0.1) }}
                                whileHover={{ scale: 1.05, y: -2 }}
                                className="text-center p-6 bg-white rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300"
                            >
                                <motion.div
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.6 }}
                                    className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#E63946]/10 to-red-50 rounded-full mb-3"
                                >
                                    <stat.icon className="w-6 h-6 text-[#E63946]" />
                                </motion.div>
                                <h3 className="text-2xl font-bold text-[#0B1F3A] mb-1">{stat.number}</h3>
                                <p className="text-sm text-slate-600">{stat.label}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
