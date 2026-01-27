import React from 'react';
import { Link } from 'react-router-dom';

export default function AppLink(props: React.ComponentProps<typeof Link>) {
  // Simple wrapper to centralize link usage and avoid import name collisions
  return <Link {...props} />;
}
