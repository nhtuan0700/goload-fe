'use client'
import './style.css'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  // Add custom props here
  variant?: 'primary' | 'secondary' | 'danger' // Example: Button variants
  size?: 'sm' | 'md' | 'lg'
}

const buttonVariant = {
  primary: 'bg-primary hover:bg-primary-accent',
  secondary: 'bg-secondary hover:bg-secondary-accent',
  danger: 'bg-red-500 hover:bg-red-200',
}

const buttonSize = {
  sm: 'text-sm px-3 py-2',
  md: 'text-md px-4 py-2',
  lg: '',
}

export const Button = ({
  variant = 'primary',
  className = '',
  size = 'md',
  onClick,
  ...rest
}: ButtonProps) => {
  const onHandleClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (onClick) {
      onClick(e)
    }
    e.currentTarget.classList.add('ripple')
    let ripple = document.createElement('span')

    // Add span to the button
    e.currentTarget.appendChild(ripple)

    // Get position of X
    let x = e.clientX - e.currentTarget.offsetLeft

    // Get position of Y
    let y = e.clientY - e.currentTarget.offsetTop

    // Position the span element
    ripple.style.left = `${x}px`
    ripple.style.top = `${y}px`

    // Remove span after 0.3s
    setTimeout(() => {
      ripple.remove()
    }, 800)
  }

  return (
    <button
      className={`${buttonVariant[variant]} ${buttonSize[size]} text-white transition rounded text-base ${className}`}
      onClick={onHandleClick}
      {...rest}
    >
      {rest.children}
    </button>
  )
}
