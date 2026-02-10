/**
 * Simple in-memory rate limiter
 * 
 * Limits requests per IP within a sliding time window.
 * Note: Resets on server restart. For production at scale,
 * consider Redis-based rate limiting.
 */

const MAX_REQUESTS = 3;
const WINDOW_MS = 60 * 1000; // 1 minute

const requests = new Map<string, { count: number; resetTime: number }>();

/** Returns true if the request is allowed, false if rate-limited */
export function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = requests.get(ip);

  // First request or window expired — reset
  if (!record || now > record.resetTime) {
    requests.set(ip, { count: 1, resetTime: now + WINDOW_MS });
    return true;
  }

  // Within window — check count
  if (record.count >= MAX_REQUESTS) return false;

  record.count++;
  return true;
}
