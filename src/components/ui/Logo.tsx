
import React from 'react';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const Logo: React.FC<LogoProps> = ({ 
  className, 
  showText = true, 
  size = 'md' 
}) => {
  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-10 w-10',
    lg: 'h-12 w-12',
    xl: 'h-16 w-16'
  };

  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
    xl: 'text-3xl'
  };

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <img 
        src="/lovable-uploads/55b5519b-857a-4fc7-8e11-c916ce69c721.png" 
        alt="Secuture Logo" 
        className={cn("object-contain", sizeClasses[size])}
      />
      {showText && (
        <div className={cn("font-bold text-white", textSizeClasses[size])}>
          Secu<span className="text-cyber-green">ture</span>
        </div>
      )}
    </div>
  );
};

export default Logo;
