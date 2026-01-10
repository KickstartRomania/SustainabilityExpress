/**
 * Error handling utility that safely logs errors in development
 * but prevents sensitive information leakage in production.
 */

export function logError(error: unknown, context: string): void {
  // Only log detailed errors in development mode
  if (import.meta.env.DEV) {
    console.error(`[${context}]`, error);
  }
  // In production, errors are silently handled to prevent information leakage
  // Consider integrating a production error monitoring service like Sentry
}

/**
 * Extracts a user-friendly error message from an error object.
 * Never exposes internal error details to the user.
 */
export function getUserFriendlyMessage(error: unknown, fallbackMessage: string): string {
  // Always return the fallback message to prevent information leakage
  // Internal error details are only logged via logError() in development
  return fallbackMessage;
}
