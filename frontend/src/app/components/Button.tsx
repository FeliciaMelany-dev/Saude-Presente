import { ButtonHTMLAttributes, forwardRef } from 'react';
import { motion } from 'motion/react';
import { cn } from '../utils/cn';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'lg', fullWidth, children, disabled, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center gap-2 rounded-2xl font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

    const variants = {
      primary: 'bg-[#4F8CFF] text-white hover:bg-[#3D7AED] active:scale-[0.98] focus:ring-[#4F8CFF]',
      secondary: 'bg-[#22C55E] text-white hover:bg-[#16A34A] active:scale-[0.98] focus:ring-[#22C55E]',
      outline: 'border-2 border-[#4F8CFF] text-[#4F8CFF] hover:bg-[#EFF6FF] active:scale-[0.98] focus:ring-[#4F8CFF]',
      ghost: 'text-[#64748B] hover:bg-[#F1F5F9] active:scale-[0.98]',
      destructive: 'bg-[#EF4444] text-white hover:bg-[#DC2626] active:scale-[0.98] focus:ring-[#EF4444]'
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg min-h-[56px]'
    };

    return (
      <motion.button
        ref={ref}
        whileTap={disabled ? {} : { scale: 0.98 }}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          fullWidth && 'w-full',
          className
        )}
        disabled={disabled}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';
