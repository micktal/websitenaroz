import React from 'react';

type Props = {
  title: string;
  subtitle?: string;
};

export default function SectionHeader({ title, subtitle }: Props) {
  return (
    <div className="mb-6">
      <div className="section-header">
        <div className="marker" aria-hidden />
        <div>
          <h1 className="text-3xl font-extrabold">{title}</h1>
          {subtitle && <p className="mt-1 text-sm muted-foreground">{subtitle}</p>}
        </div>
      </div>
    </div>
  );
}
