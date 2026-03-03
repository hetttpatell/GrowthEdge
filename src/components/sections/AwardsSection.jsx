import { motion } from 'framer-motion';
import { Award, Trophy, Star, Medal, Sparkles } from 'lucide-react';

export const AwardsSection = () => {
    const awards = [
        { icon: Trophy, title: 'Best Insurance Provider 2024', organization: 'Forbes Finance', year: '2024' },
        { icon: Award, title: 'Excellence in Customer Service', organization: 'Bloomberg Business', year: '2023' },
        { icon: Star, title: 'Top Rated Insurance Company', organization: 'TechCrunch', year: '2024' },
        { icon: Medal, title: 'InsureTech Innovation Award', organization: 'Insurance Times', year: '2023' },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                duration: 0.8,
                ease: [0.23, 1, 0.32, 1]
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.9 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: [0.23, 1, 0.32, 1]
            },
        },
    };

    const floatingVariants = {
        initial: { y: 0 },
        animate: {
            y: [-4, 4, -4],
            transition: {
                duration: 6,
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
                "0 0 15px rgba(230, 57, 70, 0.2)",
                "0 0 0 rgba(230, 57, 70, 0)"
            ],
            transition: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    return (
        <section id="awards" className="relative py-16 md:py-20 bg-gradient-to-br from-white via-blue-50/30 to-cyan-50/30 overflow-hidden">
            {/* Modern background effects */}
            <div className="absolute inset-0">
                <motion.div
                    variants={floatingVariants}
                    initial="initial"
                    animate="animate"
                    className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-100/20 to-cyan-100/20 rounded-full blur-3xl"
                />
                <motion.div
                    variants={floatingVariants}
                    initial="initial"
                    animate="animate"
                    transition={{ delay: 1 }}
                    className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-[#E63946]/10 to-red-100/20 rounded-full blur-3xl"
                />

                {/* Optimized particles - reduced count for performance */}
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-gradient-to-r from-blue-400/30 to-cyan-400/30 rounded-full"
                        initial={{
                            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                            y: (typeof window !== 'undefined' ? window.innerHeight : 1000) + 50,
                            scale: 0
                        }}
                        animate={{
                            y: -Math.random() * 400 - 150,
                            opacity: [0, 0.4, 0.4, 0],
                            scale: [0, 0.8, 0.8, 0]
                        }}
                        transition={{
                            duration: Math.random() * 4 + 8,
                            repeat: Infinity,
                            delay: Math.random() * 5,
                            ease: "easeInOut"
                        }}
                    />
                ))}
            </div>

            <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
                {/* Enhanced Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-[#E63946]/10 to-red-50 border border-[#E63946]/20 rounded-full mb-4 shadow-sm backdrop-blur-sm"
                        whileHover={{ scale: 1.02, y: -1 }}
                    >
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                            className="w-2 h-2 bg-gradient-to-r from-[#E63946] to-orange-500 rounded-full"
                        />
                        <p className="text-sm font-black tracking-widest uppercase text-[#0B1F3A]">Recognition</p>
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                            className="w-2 h-2 bg-gradient-to-r from-[#E63946] to-orange-500 rounded-full"
                        />
                    </motion.div>

                    <motion.h2
                        className="text-4xl md:text-5xl font-bold font-['Outfit'] text-[#0B1F3A] mb-6"
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <motion.span
                            className="inline-block"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.15 }}
                        >
                            Awards & <span className="text-[#E63946]">Recognition</span>
                        </motion.span>
                    </motion.h2>

                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "5rem" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="h-1 bg-gradient-to-r from-[#E63946] to-orange-500 mx-auto rounded-full"
                    />
                </motion.div>

                {/* Enhanced Awards Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {awards.map((award, index) => {
                        const Icon = award.icon;
                        return (
                            <motion.div
                                key={index}
                                variants={cardVariants}
                                whileHover={{
                                    scale: 1.02,
                                    y: -4,
                                    transition: { duration: 0.2 }
                                }}
                                className="group relative"
                            >
                                {/* Glow effect */}
                                <motion.div
                                    variants={glowVariants}
                                    initial="initial"
                                    animate="animate"
                                    className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-3xl blur-xl"
                                />

                                <div className="relative bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-white/60 h-full">
                                    {/* Floating icon */}
                                    <motion.div
                                        variants={floatingVariants}
                                        initial="initial"
                                        animate="animate"
                                        transition={{ delay: index * 0.3 }}
                                        className="flex justify-center mb-6"
                                    >
                                        <motion.div
                                            whileHover={{ rotate: 180, scale: 1.05 }}
                                            transition={{ duration: 0.4 }}
                                            className="p-4 bg-gradient-to-br from-[#0B1F3A] to-blue-700 rounded-2xl shadow-md group-hover:shadow-lg transition-all duration-300"
                                        >
                                            <Icon size={28} className="text-white" />
                                        </motion.div>
                                    </motion.div>

                                    <div className="text-center">
                                        <motion.h3
                                            className="text-xl font-bold text-[#0B1F3A] mb-3 font-['Outfit'] group-hover:text-blue-800 transition-colors duration-300"
                                            whileHover={{ scale: 1.02 }}
                                        >
                                            {award.title}
                                        </motion.h3>

                                        <p className="text-sm text-slate-500 mb-4 font-medium">{award.organization}</p>

                                        <motion.div
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.98 }}
                                            transition={{ duration: 0.15 }}
                                        >
                                            <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#E63946] to-orange-500 text-white text-sm font-bold rounded-full shadow-sm hover:shadow-md transition-shadow duration-300">
                                                {award.year}
                                            </span>
                                        </motion.div>
                                    </div>

                                    {/* Decorative corner sparkles */}
                                    <motion.div
                                        className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        initial={{ rotate: 0 }}
                                        whileHover={{ rotate: 180 }}
                                        transition={{ duration: 0.4 }}
                                    >
                                        <Sparkles size={16} className="text-[#0B1F3A]" />
                                    </motion.div>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Modern bottom element */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex justify-center mt-16"
                >

                </motion.div>
            </div>
        </section>
    );
};