/**
 * Client-side rate limiting utility to prevent form spam.
 * Uses localStorage to track submission timestamps.
 */

const RATE_LIMIT_KEY_PREFIX = 'rate_limit_';
const DEFAULT_MAX_SUBMISSIONS = 3;
const DEFAULT_WINDOW_MS = 3600000; // 1 hour in milliseconds

interface RateLimitConfig {
  maxSubmissions?: number;
  windowMs?: number;
}

interface RateLimitResult {
  allowed: boolean;
  remainingSubmissions: number;
  resetTime: Date | null;
}

/**
 * Checks if a submission is allowed based on rate limiting rules.
 * @param formId - Unique identifier for the form
 * @param config - Rate limiting configuration
 * @returns Object indicating if submission is allowed and remaining count
 */
export function checkRateLimit(
  formId: string,
  config: RateLimitConfig = {}
): RateLimitResult {
  const { maxSubmissions = DEFAULT_MAX_SUBMISSIONS, windowMs = DEFAULT_WINDOW_MS } = config;
  const key = `${RATE_LIMIT_KEY_PREFIX}${formId}`;
  
  try {
    const stored = localStorage.getItem(key);
    const timestamps: number[] = stored ? JSON.parse(stored) : [];
    const now = Date.now();
    const windowStart = now - windowMs;
    
    // Filter to only recent submissions within the time window
    const recentSubmissions = timestamps.filter((t) => t > windowStart);
    
    if (recentSubmissions.length >= maxSubmissions) {
      // Find when the oldest submission in window will expire
      const oldestInWindow = Math.min(...recentSubmissions);
      const resetTime = new Date(oldestInWindow + windowMs);
      
      return {
        allowed: false,
        remainingSubmissions: 0,
        resetTime,
      };
    }
    
    return {
      allowed: true,
      remainingSubmissions: maxSubmissions - recentSubmissions.length,
      resetTime: null,
    };
  } catch {
    // If localStorage fails, allow the submission
    return {
      allowed: true,
      remainingSubmissions: maxSubmissions,
      resetTime: null,
    };
  }
}

/**
 * Records a successful submission for rate limiting.
 * @param formId - Unique identifier for the form
 * @param windowMs - Time window for rate limiting
 */
export function recordSubmission(formId: string, windowMs: number = DEFAULT_WINDOW_MS): void {
  const key = `${RATE_LIMIT_KEY_PREFIX}${formId}`;
  
  try {
    const stored = localStorage.getItem(key);
    const timestamps: number[] = stored ? JSON.parse(stored) : [];
    const now = Date.now();
    const windowStart = now - windowMs;
    
    // Keep only recent timestamps and add the new one
    const recentSubmissions = timestamps.filter((t) => t > windowStart);
    recentSubmissions.push(now);
    
    localStorage.setItem(key, JSON.stringify(recentSubmissions));
  } catch {
    // Silently fail if localStorage is unavailable
  }
}

/**
 * Formats the reset time into a user-friendly message.
 */
export function formatResetTime(resetTime: Date): string {
  const now = new Date();
  const diffMs = resetTime.getTime() - now.getTime();
  const diffMins = Math.ceil(diffMs / 60000);
  
  if (diffMins <= 1) {
    return 'less than a minute';
  } else if (diffMins < 60) {
    return `${diffMins} minutes`;
  } else {
    const hours = Math.ceil(diffMins / 60);
    return `${hours} hour${hours > 1 ? 's' : ''}`;
  }
}
