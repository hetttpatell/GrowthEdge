import { motion } from 'framer-motion';
import { Award, Trophy, Star, Medal } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';

export const AwardsSection = () => {
    const awards = [
        { icon: Trophy, title: 'Best Insurance Provider 2024', organization: 'Forbes Finance', year: '2024' },
        { icon: Award, title: 'Excellence in Customer Service', organization: 'Bloomberg Business', year: '2023' },
        { icon: Star, title: 'Top Rated Insurance Company', organization: 'TechCrunch', year: '2024' },
        { icon: Medal, title: 'InsureTech Innovation Award', organization: 'Insurance Times', year: '2023' },
    ];

    return (
        <section id="awards" className="py-12 bg-slate-100 border-y border-slate-200">
            <div className="container mx-auto px-4 md:px-8 max-w-7xl mb-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <p className="text-sm font-medium tracking-widest uppercase text-[#E63946] mb-2">Recognition</p>
                    <h2 className="text-3xl md:text-5xl font-semibold font-['Outfit'] tracking-tight text-[#0B1F3A]">
                        Awards & Achievements
                    </h2>
                </motion.div>
            </div>

            {/* Simple grid layout instead of marquee */}
            <div className="container mx-auto px-4 md:px-8 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {awards.map((award, index) => {
                        const Icon = award.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-gradient-to-br from-[#0B1F3A] to-[#15335E] rounded-xl">
                                        <Icon size={28} className="text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-bold text-[#0B1F3A] mb-1 font-['Outfit']">
                                            {award.title}
                                        </h3>
                                        <p className="text-sm text-slate-600 mb-2">{award.organization}</p>
                                        <span className="inline-block px-3 py-1 bg-slate-100 text-slate-700 text-xs font-semibold rounded-full">
                                            {award.year}
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};