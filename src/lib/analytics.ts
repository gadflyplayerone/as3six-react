// src/lib/analytics.ts
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

type EventParams = Record<string, string | number | boolean | undefined>;

let analyticsEnabled = false;

export function isAnalyticsEnabled() {
  return analyticsEnabled;
}

export function setAnalyticsEnabled(enabled: boolean) {
  analyticsEnabled = enabled;
  if (typeof window === "undefined" || !window.gtag) return;

  window.gtag("consent", "update", {
    analytics_storage: enabled ? "granted" : "denied",
  });
}

export function trackEvent(action: string, params: EventParams = {}) {
  if (!analyticsEnabled) return;
  if (typeof window === "undefined" || !window.gtag) return;

  window.gtag("event", action, params);
}
