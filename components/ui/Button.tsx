"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface ButtonProps {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  dark?: boolean;
}

export default function Button({
  variant = "primary",
  size = "md",
  href,
  children,
  className = "",
  onClick,
  dark = false,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-body font-semibold rounded-full transition-all duration-300 cursor-pointer select-none";

  const sizeStyles = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-7 py-3 text-sm",
    lg: "px-9 py-3.5 text-base",
  };

  const variantStyles = {
    primary: dark
      ? "bg-cream text-charcoal hover:bg-white"
      : "bg-charcoal text-white hover:bg-dark",
    secondary:
      "bg-olive text-white hover:bg-olive-dark",
    outline: dark
      ? "border-2 border-cream/40 text-cream hover:border-cream hover:bg-cream/10"
      : "border-2 border-charcoal/30 text-stone-800 hover:border-charcoal hover:bg-charcoal/5",
  };

  const classes = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  const motionProps = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
    transition: { type: "spring" as const, stiffness: 400, damping: 17 },
  };

  if (href) {
    const isExternal = href.startsWith("http");
    if (isExternal) {
      return (
        <motion.div {...motionProps} className="inline-block">
          <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
            {children}
          </a>
        </motion.div>
      );
    }
    return (
      <motion.div {...motionProps} className="inline-block">
        <Link href={href} className={classes}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button {...motionProps} className={classes} onClick={onClick}>
      {children}
    </motion.button>
  );
}
