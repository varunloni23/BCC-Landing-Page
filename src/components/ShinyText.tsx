'use client';

import React from 'react';

interface ShinyTextProps {
  text: string;
  disabled?: boolean;
  speed?: number;
  className?: string;
}

const ShinyText: React.FC<ShinyTextProps> = ({ 
  text, 
  disabled = false, 
  speed = 3, 
  className = '' 
}) => {
  const animationDuration = `${speed}s`;

  if (disabled) {
    return <span className={className}>{text}</span>;
  }

  return (
    <span 
      className={`inline-block relative ${className}`}
      style={{
        background: 'linear-gradient(110deg, transparent 40%, rgba(255, 255, 255, 0.8) 50%, transparent 60%)',
        backgroundSize: '200% 100%',
        animation: `shimmer ${animationDuration} infinite`,
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundImage: 'linear-gradient(110deg, currentColor 40%, rgba(255, 255, 255, 0.8) 50%, currentColor 60%)',
      }}
    >
      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
      `}</style>
      {text}
    </span>
  );
};

export default ShinyText;