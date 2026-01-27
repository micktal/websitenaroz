import React from 'react';

export default function Separator({ className = '' }: { className?: string }) {
  return (
    <div className={`my-8 h-0.5 bg-gradient-to-r from-[rgba(62,232,166,0.06)] via-transparent to-[rgba(255,255,255,0.02)] ${className}`} />
  );
}
