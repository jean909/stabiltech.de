/**
 * Utility functions
 * 
 * cn() - Merges Tailwind CSS class names, resolving conflicts.
 * Used across all UI components for conditional styling.
 */

import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
