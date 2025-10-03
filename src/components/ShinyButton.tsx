'use client';

import React from 'react';

interface ShinyButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  speed?: number;
  className?: string;
}

const ShinyButton: React.FC<ShinyButtonProps> = ({ 
  children, 
  onClick,
  disabled = false, 
  speed = 3, 
  className = '' 
}) => {
  const animationDuration = `${speed}s`;

  return (
    <button 
      onClick={onClick}
      disabled={disabled}
      className={`relative overflow-hidden rounded-full px-8 py-4 text-lg font-medium transition-all duration-300 hover:scale-105 ${className}`}
      style={{
        background: 'linear-gradient(110deg, #ffffff 40%, rgba(255, 255, 255, 0.8) 50%, #ffffff 60%)',
        backgroundSize: '200% 100%',
        animation: disabled ? 'none' : `shimmer ${animationDuration} infinite`,
        color: '#000000',
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
      {children}
    </button>
  );
};

export default ShinyButton;