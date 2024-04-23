import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatAmount(n: number): string | number {
  if (n < 1e3) return Math.floor(n);
  if (n === 1e3) return Math.floor(+(n / 1e3)) + 'K';
  if (n === 1e6) return Math.floor(+(n / 1e6)) + 'M';
  if (n === 1e9) return Math.floor(+(n / 1e9)) + 'B';
  if (n === 1e12) return Math.floor(+(n / 1e12)) + 'T';
  if (n > 1e3 && n < 1e6) return Math.floor(+(n / 1e3)) + 'K+';
  if (n > 1e6 && n < 1e9) return Math.floor(+(n / 1e6)) + 'M+';
  if (n > 1e9 && n < 1e12) return Math.floor(+(n / 1e9)) + 'B+';
  if (n >= 1e12) return Math.floor(+(n / 1e12)) + 'T+';
  return '';
}
