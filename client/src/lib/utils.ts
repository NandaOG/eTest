// lib/utils.ts
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Utility function for conditionally combining Tailwind classes.
 * - `clsx` handles conditional classnames
 * - `twMerge` intelligently merges Tailwind classes (e.g. "p-2 p-4" → "p-4")
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
