import * as React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'default' | 'sm' | 'lg';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', ...props }, ref) => {
    return (
      <button
        className={cn(
          'inline-flex items-center justify-center rounded-md font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 disabled:pointer-events-none disabled:opacity-50',
          {
            'bg-black text-white hover:bg-neutral-800': variant === 'default',
            'border border-neutral-300 text-black hover:bg-neutral-50': variant === 'outline',
            'hover:bg-neutral-100 text-neutral-700': variant === 'ghost',
            'h-10 px-6 py-2 text-sm': size === 'default',
            'h-9 px-4 text-sm': size === 'sm',
            'h-12 px-8 text-base': size === 'lg',
          },
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button };
