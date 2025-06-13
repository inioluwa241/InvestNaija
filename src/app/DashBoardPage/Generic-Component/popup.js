'use client';
import React, { useEffect } from 'react';

const SuccessToast = ({ message, show, onClose }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000); // 3 seconds
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div style={{padding:"1rem 2rem"}} className="fixed top-5 right-5 z-50 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg transition-opacity duration-300">
      ✅ {message}
    </div>
  );
};

export default SuccessToast;
