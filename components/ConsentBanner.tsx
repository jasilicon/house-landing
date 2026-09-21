"use client";
import { useSyncExternalStore } from "react";
import Script from "next/script";

const CONSENT_KEY = "bc-consent";

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

function getConsentSnapshot() {
  return localStorage.getItem(CONSENT_KEY) === "accepted";
}

export default function ConsentBanner() {
  const hasConsented = useSyncExternalStore(
    subscribe,
    getConsentSnapshot,
    () => false
  );

  const acceptTracking = () => {
    localStorage.setItem(CONSENT_KEY, "accepted");
    // Notify subscribers in the same tab, since storage events only fire cross-tab
    window.dispatchEvent(new Event("storage"));
  };

  return (
    <>
      {/* Pixels only load if hasConsented is true */}
      {hasConsented && (
        <Script id="agency-pixel">
          {`
            // [TODO: INSERT AGENCY PIXEL SCRIPT HERE]
            console.log("Pixel loaded securely.");
          `}
        </Script>
      )}

      {/* The visible banner */}
      {!hasConsented && (
        <div className="fixed bottom-0 left-0 right-0 bg-black text-white p-4 flex flex-col md:flex-row justify-between items-center gap-4 z-50">
          <p className="text-sm">We use cookies to improve your experience and show relevant offers. By clicking Accept, you agree to our use of these tools. Read our Privacy Policy for details.</p>
          <button onClick={acceptTracking} className="bg-white text-black px-6 py-2 rounded font-semibold text-sm">
            Accept
          </button>
        </div>
      )}
    </>
  );
}