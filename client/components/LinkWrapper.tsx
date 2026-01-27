import React from 'react';
import { Link } from 'react-router-dom';

export default function LinkWrapper(props: React.ComponentProps<typeof Link>) {
  // Thin wrapper to avoid naming collisions and centralize link behavior
  return <Link {...props} />;
}
