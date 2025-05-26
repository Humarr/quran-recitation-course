import React from 'react';

interface CTAButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  children: React.ReactNode;
}

const CTAButton: React.FC<CTAButtonProps> = ({ 
  size = 'md', 
  children,
  className,
  ...props 
}) => {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl',
  };
  
  return (
    <button
      className={`
        ${sizeClasses[size]}
        ${className || ''}
        bg-secondary hover:bg-secondary-light text-primary-dark font-bold rounded-lg
        shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300
        focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-opacity-50
      `}
      {...props}
    >
      {children}
    </button>
  );
};

export default CTAButton;