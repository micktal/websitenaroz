import React from "react";

export default function Separator({ className = "" }: { className?: string }) {
  return <div className={`my-8 h-px bg-border ${className}`} />;
}
