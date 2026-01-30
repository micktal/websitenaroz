import React from 'react';

export default function Illustration({ name = 'shield', className = '' }: { name?: string; className?: string }) {
  // Simple inline SVG illustrations for placeholders
  if (name === 'shield') {
    return (
      <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M32 4l18 6v14c0 14-8 26-18 34-10-8-18-20-18-34V10L32 4z" fill="url(#g)" stroke="hsl(var(--border))" />
        <defs>
          <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="hsl(217 91% 20% / 0.15)" />
            <stop offset="1" stopColor="hsl(217 91% 20% / 0.05)" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  if (name === 'fingerprint') {
    return (
      <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g stroke="hsl(var(--primary))" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.3">
          <path d="M32 12c6 0 12 6 12 12v4" />
          <path d="M20 24c0-6 6-12 12-12" />
          <path d="M24 40c2-6 8-10 16-10" />
        </g>
      </svg>
    );
  }

  // default abstract
  return (
    <svg className={className} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="60" height="60" rx="6" fill="hsl(var(--muted))" stroke="hsl(var(--border))" />
    </svg>
  );
}
