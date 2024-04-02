'use client'
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

const Themetoggle = () => {
  const { theme, setTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const newTheme = currentTheme === "light" ? "dark" : "light";
    setTheme(newTheme);
    setCurrentTheme(newTheme);
  };

  return (
    <div className="w-fit">
      
      <div>
        <button
          className="w-20 h-8 rounded-full bg-gray-300 flex items-center transition duration-300 focus:outline-none shadow"
          onClick={toggleTheme}
        >
          <div
            className={`w-10 h-10 relative rounded-full transition-transform duration-500 ${
              currentTheme === "dark"
                ? "bg-gray-700 translate-x-full"
                : "bg-yellow-500 translate-x-0"
            } p-1 text-white`}
          >
            {currentTheme === "dark" ? (
              <svg
              
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            )}
          </div>
        </button>
      </div>

      {/* Styles Of dark and Light mode ------------------------------------------------------------- */}
      <style jsx global>{`
        :root {
          --color-bg: ${currentTheme === "light" ? "#FFFFFF" : "#1E1E1E"};
          --color-text: ${currentTheme === "light" ? "#000000" : "#FFFFFF"};
        }

        body {
          background-color: var(--color-bg);
          color: var(--color-text);
          transition: background-color 0.5s ease, color 0.5s ease;
        }
      `}</style>
    </div>
  );
};

export default Themetoggle;
