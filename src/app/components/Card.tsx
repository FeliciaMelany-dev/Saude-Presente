import { HTMLAttributes, forwardRef } from 'react';
import { motion } from 'motion/react';
import { cn } from '../utils/cn';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'outlined';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  interactive?: boolean;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', padding = 'lg', interactive, children, ...props }, ref) => {
    const baseStyles = 'rounded-3xl bg-white transition-all duration-200';

    const variants = {
      default: 'shadow-sm',
      elevated: 'shadow-lg shadow-black/5',
      outlined: 'border-2 border-[#E2E8F0]'
    };

    const paddings = {
      none: '',
      sm: 'p-4',
      md: 'p-6',
      lg: 'p-6'
    };

    const Component = interactive ? motion.div : 'div';
    const motionProps = interactive ? {
      whileHover: { scale: 1.02, transition: { duration: 0.2 } },
      whileTap: { scale: 0.98 }
    } : {};

    return (
      <Component
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          paddings[padding],
          interactive && 'cursor-pointer',
          className
        )}
        {...(interactive ? motionProps : {})}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Card.displayName = 'Card';
