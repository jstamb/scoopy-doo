import React from 'react';
import { LINKS } from '../constants';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'white';
  className?: string;
  onClick?: () => void;
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick,
  href = LINKS.subscribe 
}) => {
  const baseStyle = "inline-block px-8 py-3 rounded-md font-bold text-lg transition-transform hover:scale-105 active:scale-95 shadow-md";
  
  let variantStyle = "";
  if (variant === 'primary') {
    variantStyle = "bg-action text-white hover:bg-orange-400";
  } else if (variant === 'outline') {
    variantStyle = "border-2 border-action text-action hover:bg-action hover:text-white";
  } else if (variant === 'white') {
    variantStyle = "bg-white text-primary hover:bg-gray-100";
  }

  const Component = href ? 'a' : 'button';
  const props = href ? { href, target: "_blank", rel: "noopener noreferrer" } : { onClick };

  return (
    <Component 
      {...props} 
      className={`${baseStyle} ${variantStyle} ${className}`}
    >
      {children}
    </Component>
  );
};