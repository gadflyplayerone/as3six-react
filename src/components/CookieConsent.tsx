// src/components/CookieConsent.tsx
import { useEffect, useState } from "react";

const STORAGE_KEY = "as3six-cookie-consent";

type ConsentChoice = "accepted" | "declined";

const getStoredConsent = () => {
  if (typeof window === "undefined") return null;
  try {
    return window.localStorage.getItem(STORAGE_KEY) as ConsentChoice | null;
  } catch {
    return null;
  }
};

const persistConsent = (choice: ConsentChoice) => {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, choice);
  } catch {
    // Ignore storage failures; banner will reappear on next visit.
  }
};

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!getStoredConsent()) {
      setVisible(true);
    }
  }, []);

  const handleChoice = (choice: ConsentChoice) => {
    persistConsent(choice);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <section
      role="dialog"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-body"
      className="fixed inset-x-0 bottom-0 z-40 px-4 pb-4 sm:pb-8"
    >
      <div className="mx-auto max-w-4xl rounded-2xl border border-white/10 bg-surface p-6 shadow-2xl backdrop-blur supports-[backdrop-filter]:bg-white/90">
        <h2 id="cookie-consent-title" className="text-lg font-semibold text-body">
          Cookies & Privacy
        </h2>
        <p id="cookie-consent-body" className="mt-2 text-sm text-muted">
          We use essential cookies to keep the site running smoothly and may use analytics cookies to
          understand usage trends. We never sell your data. You can read the details on our{" "}
          <a href="/cookies" className="font-medium text-brand underline-offset-4 hover:underline">
            Cookies Policy
          </a>
          .
        </p>
        <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-end">
          <button
            type="button"
            onClick={() => handleChoice("declined")}
            className="inline-flex items-center justify-center rounded-xl border border-transparent bg-surface-2 px-4 py-2 text-sm font-medium text-body transition hover:bg-surface-2"
          >
            Decline Non-Essential
          </button>
          <button
            type="button"
            onClick={() => handleChoice("accepted")}
            className="inline-flex items-center justify-center rounded-xl bg-brand px-4 py-2 text-sm font-semibold text-onbrand transition hover:opacity-90"
          >
            Accept All Cookies
          </button>
        </div>
      </div>
    </section>
  );
}
