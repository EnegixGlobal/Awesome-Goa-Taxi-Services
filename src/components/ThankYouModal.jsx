import React from "react";

export default function ThankYouModal({
  isOpen,
  onClose,
  message = "Thank you for your submission!",
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="bg-white rounded-2xl p-8 mx-4 max-w-md w-full shadow-2xl animate-[fadeInScale_0.3s_ease-out] relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 hover:text-gray-700 transition-colors"
          aria-label="Close"
        >
          <i className="fa-solid fa-xmark text-sm"></i>
        </button>

        {/* Success icon */}
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
          <i className="fa-solid fa-check text-2xl text-green-600"></i>
        </div>

        {/* Content */}
        <div className="text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Message Sent Successfully!
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            {message}
          </p>
          <button
            onClick={onClose}
            className="bg-brandYellow text-black font-semibold px-8 py-3 rounded-full hover:brightness-95 transition text-sm"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
