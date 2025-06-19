
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  isSubmit?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  isSubmit = false,
}) => {
  const baseStyles = 'font-semibold rounded-md transition-colors duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-opacity-50';
  
  let variantStyles = '';
  switch (variant) {
    case 'primary':
      variantStyles = 'bg-au-red hover:bg-au-red-dark text-white focus:ring-au-red';
      break;
    case 'secondary':
      variantStyles = 'bg-au-gray hover:bg-au-black text-white focus:ring-au-gray';
      break;
    case 'outline':
      variantStyles = 'bg-transparent border-2 border-au-red text-au-red hover:bg-au-red hover:text-white focus:ring-au-red';
      break;
  }

  let sizeStyles = '';
  switch (size) {
    case 'sm':
      sizeStyles = 'px-3 py-1.5 text-sm';
      break;
    case 'md':
      sizeStyles = 'px-5 py-2.5 text-base';
      break;
    case 'lg':
      sizeStyles = 'px-7 py-3 text-lg';
      break;
  }

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseStyles} ${variantStyles} ${sizeStyles} ${className} inline-block`}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={isSubmit ? 'submit' : 'button'}
      onClick={onClick}
      className={`${baseStyles} ${variantStyles} ${sizeStyles} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
