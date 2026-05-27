import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '../utils/cn';

interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'success' | 'warning' | 'error' | 'info' | 'neutral';
}

export const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant = 'neutral', children, ...props }, ref) => {
    const variants = {
      success: 'bg-[#DCFCE7] text-[#166534] border-[#22C55E]/20',
      warning: 'bg-[#FEF9C3] text-[#854D0E] border-[#FACC15]/20',
      error: 'bg-[#FEE2E2] text-[#991B1B] border-[#EF4444]/20',
      info: 'bg-[#DBEAFE] text-[#1E40AF] border-[#4F8CFF]/20',
      neutral: 'bg-[#F1F5F9] text-[#475569] border-[#CBD5E1]/20'
    };

    return (
      <div
        ref={ref}
        className={cn(
          'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border',
          variants[variant],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Badge.displayName = 'Badge';
