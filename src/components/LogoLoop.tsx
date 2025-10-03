'use client';

import React, { ReactNode } from 'react';
import Image from 'next/image';

interface Logo {
  node?: ReactNode;
  src?: string;
  alt?: string;
  title?: string;
  href?: string;
}

interface LogoLoopProps {
  logos: Logo[];
  speed?: number;
  direction?: 'left' | 'right';
  logoHeight?: number;
  gap?: number;
  pauseOnHover?: boolean;
  scaleOnHover?: boolean;
  fadeOut?: boolean;
  ariaLabel?: string;
}

const LogoLoop: React.FC<LogoLoopProps> = ({
  logos,
  speed = 120,
  direction = 'left',
  logoHeight = 48,
  gap = 40,
  pauseOnHover = false,
  scaleOnHover = false,
  fadeOut = false,
  ariaLabel = 'Logo carousel'
}) => {
  const animationDuration = `${speed}s`;
  const animationDirection = direction === 'left' ? 'normal' : 'reverse';

  const logoStyle = {
    height: `${logoHeight}px`,
    marginRight: `${gap}px`,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: scaleOnHover ? 'transform 0.3s ease' : 'none',
  };

  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    animation: `scroll ${animationDuration} linear infinite ${animationDirection}`,
    ...(pauseOnHover && {
      animationPlayState: 'running',
    }),
  };

  const wrapperStyle = {
    overflow: 'hidden',
    position: 'relative' as const,
    width: '100%',
    height: `${logoHeight + 20}px`,
    ...(fadeOut && {
      maskImage: `linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)`,
      WebkitMaskImage: `linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)`,
    }),
  };

  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <div 
      style={wrapperStyle}
      aria-label={ariaLabel}
      className={pauseOnHover ? 'hover:[&>div]:pause' : ''}
    >
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${100 / 3}%);
          }
        }
        
        .hover\\:[\\&\\>div\\]:pause:hover > div {
          animation-play-state: paused;
        }
        
        ${scaleOnHover ? `
        .logo-item:hover {
          transform: scale(1.1);
        }
        ` : ''}
      `}</style>
      
      <div style={containerStyle}>
        {duplicatedLogos.map((logo, index) => (
          <div
            key={index}
            style={logoStyle}
            className={scaleOnHover ? 'logo-item' : ''}
          >
            {logo.href ? (
              <a
                href={logo.href}
                target="_blank"
                rel="noopener noreferrer"
                title={logo.title || logo.alt}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  textDecoration: 'none',
                  color: 'inherit'
                }}
              >
                {logo.node || (
                  <Image
                    src={logo.src || ''}
                    alt={logo.alt || logo.title || 'Logo'}
                    style={{ height: '100%', objectFit: 'contain' }}
                    width={0}
                    height={logoHeight}
                    unoptimized
                  />
                )}
              </a>
            ) : (
              <>
                {logo.node || (
                  <Image
                    src={logo.src || ''}
                    alt={logo.alt || logo.title || 'Logo'}
                    style={{ height: '100%', objectFit: 'contain' }}
                    width={0}
                    height={logoHeight}
                    unoptimized
                  />
                )}
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoLoop;