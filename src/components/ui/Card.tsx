import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  borderColor?: string;
  hover?: boolean;
}

export function Card({
  children,
  className = '',
  borderColor = 'border-slate-200',
  hover = true,
}: CardProps) {
  return (
    <div
      className={`bg-white rounded-2xl shadow-lg border-2 ${borderColor} ${
        hover ? 'hover:shadow-xl transition duration-300' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}
