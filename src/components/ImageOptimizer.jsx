import React from 'react';

export default function ImageOptimizer({ 
  src, 
  alt, 
  className = '', 
  loading = 'lazy',
  sizes = '100vw',
  priority = false
}) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={priority ? 'eager' : loading}
      sizes={sizes}
      decoding="async"
    />
  );
}