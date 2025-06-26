
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
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-12',
    xl: 'h-16'
  };

  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
    xl: 'text-3xl'
  };

  const logoSizes = {
    sm: { width: 32, height: 32, fontSize: 18 },
    md: { width: 40, height: 40, fontSize: 24 },
    lg: { width: 48, height: 48, fontSize: 28 },
    xl: { width: 64, height: 64, fontSize: 36 }
  };

  const currentSize = logoSizes[size];

  return (
    <div className={cn("flex items-center gap-3", className)}>
      {/* Shield SVG Logo */}
      <svg 
        width={currentSize.width} 
        height={currentSize.height} 
        viewBox="0 0 100 120" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        {/* Shield Shape */}
        <path 
          d="M50 10C50 10 20 20 20 20V60C20 85 50 110 50 110C50 110 80 85 80 60V20C80 20 50 10 50 10Z" 
          fill="currentColor" 
          className="text-cyber-light-blue"
        />
        
        {/* Lock Body */}
        <rect 
          x="35" 
          y="55" 
          width="30" 
          height="25" 
          rx="3" 
          fill="white"
        />
        
        {/* Lock Shackle */}
        <path 
          d="M42 55V48C42 43.5817 45.5817 40 50 40C54.4183 40 58 43.5817 58 48V55" 
          stroke="white" 
          strokeWidth="4" 
          fill="none"
        />
        
        {/* Keyhole */}
        <circle 
          cx="50" 
          cy="65" 
          r="3" 
          fill="currentColor"
          className="text-cyber-light-blue"
        />
        <rect 
          x="49" 
          y="68" 
          width="2" 
          height="6" 
          fill="currentColor"
          className="text-cyber-light-blue"
        />
      </svg>

      {showText && (
        <div className={cn("font-bold text-white flex items-center", textSizeClasses[size])}>
          <span style={{ fontSize: currentSize.fontSize, letterSpacing: '0.05em' }}>
            SECUTURE
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
