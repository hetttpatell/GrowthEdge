import { Shield, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export const Footer = () => {
    const scrollToSection = (href) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const footerLinks = {
        Services: [
            { label: 'Life Insurance', href: '#services' },
            { label: 'Health Insurance', href: '#services' },
            { label: 'Vehicle Insurance', href: '#services' },
            { label: 'Home Insurance', href: '#services' },
            { label: 'Travel Insurance', href: '#services' },
            { label: 'Business Insurance', href: '#services' },
        ],
        Company: [
            { label: 'About Us', href: '#about' },
            { label: 'Awards', href: '#awards' },
            { label: 'Testimonials', href: '#testimonials' },
            { label: 'Contact', href: '#contact' },
        ],
        Resources: [
            { label: 'Claims Process', href: '#' },
            { label: 'FAQ', href: '#' },
            { label: 'Blog', href: '#' },
            { label: 'Career', href: '#' },
        ],
    };

    const socialLinks = [
        { icon: Facebook, href: '#', label: 'Facebook' },
        { icon: Twitter, href: '#', label: 'Twitter' },
        { icon: Linkedin, href: '#', label: 'LinkedIn' },
        { icon: Instagram, href: '#', label: 'Instagram' },
    ];

    return (
        <footer className="bg-[#0B1F3A] text-white" data-testid="footer">
            <div className="container mx-auto px-4 md:px-8 max-w-7xl py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-3 mb-4">
                            <img src="/logo.png" alt="Growth Edge" className="h-12 w-12 object-contain" />
                            <span className="text-2xl font-bold font-['Outfit'] tracking-tighter">Growth Edge</span>
                        </div>
                        <p className="text-slate-300 mb-6 leading-relaxed">
                            Securing your legacy and ensuring your future with trusted insurance solutions for over 25 years.
                        </p>
                        <div className="flex gap-4">
                            {socialLinks.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        className="p-2 bg-white/10 rounded-lg hover:bg-[#E63946] transition-colors"
                                        aria-label={social.label}
                                        data-testid={`social-link-${social.label.toLowerCase()}`}
                                    >
                                        <Icon size={20} />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Links */}
                    {Object.entries(footerLinks).map(([title, links]) => (
                        <div key={title}>
                            <h3 className="text-lg font-semibold font-['Outfit'] mb-4">{title}</h3>
                            <ul className="space-y-2">
                                {links.map((link) => (
                                    <li key={link.label}>
                                        <button
                                            onClick={() => scrollToSection(link.href)}
                                            className="text-slate-300 hover:text-white transition-colors text-left"
                                        >
                                            {link.label}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-slate-400 text-sm">
                            © {new Date().getFullYear()} Growth Edge Insurance. All rights reserved.
                        </p>
                        <div className="flex gap-6 text-sm">
                            <a href="#" className="text-slate-400 hover:text-white transition-colors">
                                Privacy Policy
                            </a>
                            <a href="#" className="text-slate-400 hover:text-white transition-colors">
                                Terms of Service
                            </a>
                            <a href="#" className="text-slate-400 hover:text-white transition-colors">
                                Cookie Policy
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};