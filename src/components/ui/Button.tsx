import { ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'
import { Loader2 } from 'lucide-react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
  fullWidth?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    children, 
    variant = 'primary', 
    size = 'md', 
    isLoading = false,
    fullWidth = false,
    disabled,
    ...props 
  }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98]'
    
    // Using direct color codes for Tailwind v4 compatibility
    const variants = {
      primary: 'bg-[#3b82f6] text-white hover:bg-[#2563eb] focus:ring-[#3b82f6] shadow-md',
      secondary: 'bg-[#f1f5f9] text-[#0f172a] hover:bg-[#e2e8f0] focus:ring-[#94a3b8]',
      outline: 'border border-[#cbd5e1] bg-transparent text-[#334155] hover:bg-[#f8fafc] focus:ring-[#94a3b8]',
      ghost: 'bg-transparent text-[#334155] hover:bg-[#f1f5f9] focus:ring-[#94a3b8]',
      danger: 'bg-[#ef4444] text-white hover:bg-[#dc2626] focus:ring-[#ef4444] shadow-md',
    }
    
    const sizes = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2.5 text-base',
      lg: 'px-6 py-3 text-lg',
    }
    
    const widthStyle = fullWidth ? 'w-full' : ''

    return (
      <button
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          widthStyle,
          className
        )}
        ref={ref}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button