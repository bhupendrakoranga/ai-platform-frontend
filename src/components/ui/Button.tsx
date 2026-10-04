import type { ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonVariant = 'primary' | 'dark' | 'secondary'
type ButtonSize = 'md' | 'lg'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  fullWidth?: boolean
  isLoading?: boolean
  loadingLabel?: ReactNode
  size?: ButtonSize
  variant?: ButtonVariant
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-[#8e2363] text-white hover:bg-[#7b1c55] focus:ring-[#bc7aa3] disabled:bg-[#bd8bad]',
  dark: 'bg-zinc-950 text-white hover:bg-zinc-800 focus:ring-zinc-400 disabled:bg-zinc-400',
  secondary:
    'border border-zinc-200 bg-white text-zinc-900 hover:bg-zinc-50 focus:ring-zinc-300 disabled:bg-zinc-100 disabled:text-zinc-400',
}

const sizeClasses: Record<ButtonSize, string> = {
  md: 'h-11 rounded-md px-4 text-sm font-semibold',
  lg: 'h-[44px] rounded-[5px] px-4 text-[16px] font-bold',
}

function Button({
  children,
  className = '',
  disabled,
  fullWidth = false,
  isLoading = false,
  loadingLabel,
  size = 'md',
  type = 'button',
  variant = 'primary',
  ...props
}: ButtonProps) {
  const isDisabled = disabled || isLoading

  return (
    <button
      type={type}
      disabled={isDisabled}
      className={[
        'inline-flex items-center justify-center whitespace-nowrap transition focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed',
        fullWidth ? 'w-full' : '',
        variantClasses[variant],
        sizeClasses[size],
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      {isLoading ? loadingLabel || children : children}
    </button>
  )
}

export default Button
