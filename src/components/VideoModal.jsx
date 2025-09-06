import React, { useEffect, useRef } from "react";
import videoSrc from "../../videos/1.mp4";

/*
  Accessible modal for playing a promotional video.
  Features:
  - Focus trap & return
  - ESC + backdrop close
  - Pauses video on close
  - Responsive layout (full-screen mobile, centered desktop)
*/
export default function VideoModal({ open, onClose }) {
  const dialogRef = useRef(null);
  const closeBtnRef = useRef(null);
  const videoRef = useRef(null);
  const lastFocused = useRef(null);

  // Handle open/close focus management
  useEffect(() => {
    if (open) {
      lastFocused.current = document.activeElement;
      // Slight delay to ensure element exists
      setTimeout(() => {
        closeBtnRef.current?.focus();
      }, 10);
    } else {
      // Restore focus
      lastFocused.current && lastFocused.current.focus?.();
    }
  }, [open]);

  // Global key handlers
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      } else if (e.key === "Tab") {
        // Basic focus trap between close button and video element
        const focusables = [closeBtnRef.current, videoRef.current];
        const idx = focusables.indexOf(document.activeElement);
        if (e.shiftKey) {
          if (idx <= 0) {
            e.preventDefault();
            focusables[focusables.length - 1]?.focus();
          }
        } else {
          if (idx === focusables.length - 1) {
            e.preventDefault();
            focusables[0]?.focus();
          }
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  // Pause when closing
  useEffect(() => {
    if (!open && videoRef.current) {
      try {
        videoRef.current.pause();
      } catch (_) {}
    }
  }, [open]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Promotional video"
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
    >
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close video"
        onClick={onClose}
        className="absolute inset-0 bg-black/70 backdrop-blur-sm cursor-default"
        tabIndex={-1}
      />
      {/* Dialog panel */}
      <div
        ref={dialogRef}
        className="relative w-full max-w-4xl mx-auto bg-black rounded-xl shadow-2xl overflow-hidden flex flex-col h-[70vh] sm:h-[72vh] focus:outline-none"
      >
        <div className="absolute top-3 right-3 z-10 flex gap-2">
          <button
            ref={closeBtnRef}
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-brandYellow"
          >
            <span className="sr-only">Close</span>
            <i className="fa-solid fa-xmark" aria-hidden="true" />
          </button>
        </div>
        <div className="w-full h-full flex-1">
          <video
            ref={videoRef}
            src={videoSrc}
            className="w-full h-full object-cover"
            controls
            playsInline
            autoPlay
            aria-label="Company promotional video"
          />
        </div>
      </div>
    </div>
  );
}
