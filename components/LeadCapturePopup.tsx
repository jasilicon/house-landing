"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Dancing_Script } from "next/font/google";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["600", "700"],
});

// Popup shows at most once per visit (this tab) and never again once closed.
const SESSION_KEY = "metricmaster-lead-popup-seen";

export default function LeadCapturePopup() {
  const [shown, setShown] = useState(false);
  const shownRef = useRef(false);

  const reveal = useCallback(() => {
    if (shownRef.current) return;
    shownRef.current = true;
    try {
      sessionStorage.setItem(SESSION_KEY, "1");
    } catch {
      // sessionStorage unavailable (e.g. strict private mode) – still show once this load
    }
    setShown(true);
  }, []);

  const close = useCallback(() => setShown(false), []);

  useEffect(() => {
    // Already shown or dismissed this visit – leave them alone.
    try {
      if (sessionStorage.getItem(SESSION_KEY)) return;
    } catch {
      // ignore
    }

    // Only run on large screens – skip on mobile/touch-first devices.
    const isLarge = window.matchMedia("(min-width: 768px)").matches;
    if (!isLarge) return;

    const handleMouseOut = (e: MouseEvent) => {
      // Mouse left the window toward the tab/address bar (no target in the page).
      if (!e.relatedTarget && e.clientY <= 0) {
        reveal();
      }
    };

    const checkScroll = () => {
      const scroller = document.scrollingElement || document.documentElement;
      const scrollable = scroller.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;
      // +1px of slack absorbs sub-pixel rounding so "exactly 60%" still fires.
      if (scroller.scrollTop + 1 >= scrollable * 0.6) reveal();
    };

    const handleScroll = () => checkScroll();

    document.addEventListener("mouseout", handleMouseOut);
    window.addEventListener("scroll", handleScroll, { passive: true });

    // If the browser restores a deep scroll position (back button / refresh)
    // no scroll event fires, so re-check once the page has settled.
    const restoreCheck = window.setTimeout(checkScroll, 300);

    return () => {
      window.clearTimeout(restoreCheck);
      document.removeEventListener("mouseout", handleMouseOut);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [reveal]);

  useEffect(() => {
    if (!shown) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };

    document.addEventListener("keydown", handleKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [shown, close]);

  return (
    <div
      inert={!shown}
      aria-hidden={!shown}
      onClick={(e) => {
        const target = e.target as HTMLElement;
        if (!target.closest("[data-popup-card]")) close();
      }}
      className={`fixed inset-0 z-[60] overflow-y-auto bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${
        shown ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <div className="flex min-h-full items-center justify-center p-4">
        <div
          data-popup-card
          className="relative w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-2xl animate-pop-in"
        >
          {/* Header */}
          <div className="relative bg-gray-800 px-6 py-8 text-center text-white">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Want this design?
            </h2>
            <button
              onClick={close}
              aria-label="Close modal"
              className="absolute top-4 right-4 p-1 text-gray-400 transition-colors hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Body */}
          <div className="flex flex-col items-center px-8 py-10 text-center">
            <p className="mb-8 text-lg font-medium leading-relaxed text-gray-600">
              I have <span className="font-bold text-black">2 spots open</span>{" "}
              this month. Send me a quick message to see if this layout fits
              your business.
            </p>

            <div className="mb-8 select-none">
              <p className="mb-1 text-[11px] font-bold tracking-[0.2em] text-gray-400 uppercase">
                Created By{" "}
                <span className="inline-block animate-pulse text-red-500">
                  ❤️
                </span>
              </p>
              <h3
                className={`font-bold mt-2 text-3xl text-black ${dancingScript.className}`}
              >
                Jaikumar Raja
              </h3>
            </div>

            <a
              href="https://www.linkedin.com/in/jaikumar-kpv"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex w-full items-center justify-center gap-3 rounded-xl bg-[#0077b5] py-4 px-6 text-lg font-semibold text-white shadow-[0_8px_20px_-6px_rgba(0,119,181,0.5)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#005e93] hover:shadow-[0_12px_25px_-6px_rgba(0,119,181,0.6)]"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              Message me on LinkedIn
            </a>

            <div className="mt-6 flex items-center space-x-4 text-sm font-medium text-gray-400">
              <a
                href="https://instagram.com/jaikumar_kpv"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-200 hover:text-black"
              >
                Instagram
              </a>
              <span className="text-gray-300">•</span>
              <a
                href="mailto:jaikumar.developer.official@gmail.com"
                className="transition-colors duration-200 hover:text-black"
              >
                Email Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}