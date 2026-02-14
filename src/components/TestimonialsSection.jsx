import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { useState, useEffect } from 'react';

export const TestimonialsSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const testimonials = [
        {
            name: 'Sarah Johnson',
            role: 'Business Owner',
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
            rating: 5,
            text: 'Growth Edge has been instrumental in protecting my business. Their comprehensive coverage and responsive team give me peace of mind to focus on growing my company.',
        },
        {
            name: 'Michael Chen',
            role: 'Family Man',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
            rating: 5,
            text: 'The life insurance policy I got through Growth Edge ensures my family\'s future is secure. The process was smooth, and their advisors were incredibly helpful.',
        },
        {
            name: 'Emily Rodriguez',
            role: 'Healthcare Professional',
            image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
            rating: 5,
            text: 'As a healthcare worker, having comprehensive health insurance is crucial. Growth Edge provided exactly what I needed at a competitive rate. Highly recommended!',
        },
        {
            name: 'David Thompson',
            role: 'Entrepreneur',
            image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
            rating: 5,
            text: 'I\'ve been with Growth Edge for over 10 years. Their customer service is exceptional, and they\'ve always been there when I needed to make a claim.',
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [testimonials.length]);

    return (
        <section id="testimonials" className="py-20 md:py-32 bg-white" data-testid="testimonials-section">
            <div className="container mx-auto px-4 md:px-8 max-w-7xl">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <p className="text-sm font-medium tracking-widest uppercase text-[#E63946] mb-4">Testimonials</p>
                    <h2 className="text-3xl md:text-5xl font-semibold font-['Outfit'] tracking-tight text-[#0B1F3A] mb-4">
                        What Our Clients Say
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Don't just take our word for it. Here's what our satisfied clients have to say about their experience.
                    </p>
                </motion.div>

                {/* Testimonials Carousel */}
                <div className="relative max-w-4xl mx-auto">
                    <div className="relative overflow-hidden rounded-3xl">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={testimonial.name}
                                initial={{ opacity: 0, x: 100 }}
                                animate={{
                                    opacity: activeIndex === index ? 1 : 0,
                                    x: activeIndex === index ? 0 : 100,
                                    display: activeIndex === index ? 'block' : 'none',
                                }}
                                transition={{ duration: 0.5 }}
                                className="glass border border-slate-200 rounded-3xl p-8 md:p-12"
                                data-testid={`testimonial-${index}`}
                            >
                                <div className="flex flex-col md:flex-row gap-8 items-center">
                                    {/* Image */}
                                    <div className="flex-shrink-0">
                                        <img
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-xl"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 text-center md:text-left">
                                        <Quote size={40} className="text-[#E63946] mb-4 mx-auto md:mx-0" />
                                        <p className="text-lg md:text-xl text-slate-700 leading-relaxed mb-6 italic">
                                            "{testimonial.text}"
                                        </p>

                                        {/* Stars */}
                                        <div className="flex gap-1 mb-4 justify-center md:justify-start">
                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                <Star key={i} size={20} className="fill-[#E63946] text-[#E63946]" />
                                            ))}
                                        </div>

                                        {/* Name & Role */}
                                        <h4 className="text-xl font-bold text-[#0B1F3A] font-['Outfit']">
                                            {testimonial.name}
                                        </h4>
                                        <p className="text-slate-600">{testimonial.role}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Dots Navigation */}
                    <div className="flex justify-center gap-2 mt-8">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${activeIndex === index ? 'bg-[#E63946] w-8' : 'bg-slate-300'
                                    }`}
                                data-testid={`testimonial-dot-${index}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
