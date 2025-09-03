"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  // check cookie on mount
  useEffect(() => {
    const cookies = document.cookie.split(";").map((c) => c.trim());
    const consent = cookies.find((c) => c.startsWith("cookiesAccepted="));
    if (!consent) {
      setShow(true);
    }
  }, []);

  // accept handler
  const handleAccept = () => {
    const expiryDate = new Date();
    expiryDate.setFullYear(expiryDate.getFullYear() + 1); // valid for 1 year
    document.cookie = `cookiesAccepted=true; expires=${expiryDate.toUTCString()}; path=/`;
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.4 }}
          className="
            fixed bottom-6 left-1/2 -translate-x-1/2 z-50
            max-w-md w-[90%] p-6
            rounded-2xl shadow-xl
            bg-white/20 backdrop-blur-md border border-white/30
            text-white z-99999999999999999
          "
          style={{ opacity: 1, transform: "none", zIndex: 100 }}
        >
          <h3 className="text-lg font-bold mb-2">🍪 We value your privacy</h3>
          <p className="text-md mb-4">
            We use cookies to enhance your browsing experience, serve personalized
            content, and analyze our traffic. By clicking “Accept”, you consent to
            our use of cookies.
          </p>
          <div className="flex justify-end gap-3">
            <button
              onClick={() => setShow(false)}
              className="px-4 py-2 text-sm rounded-lg border border-white/40 hover:bg-white/10 transition"
            >
              Decline
            </button>
            <button
              onClick={handleAccept}
              className="px-4 py-2 text-sm rounded-lg bg-[#002440] hover:bg-[#003366] text-white transition"
            >
              Accept
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
