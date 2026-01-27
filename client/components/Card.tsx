import React from 'react';

export default function Card({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`card-elevated ${className}`}>
      {children}
    </div>
  );
}
