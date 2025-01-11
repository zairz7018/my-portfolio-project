// import React from 'react';
import { Moon, Sun } from 'lucide-react';

interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

export function ThemeToggle({ isDark, onToggle }: ThemeToggleProps) {
  return (
    <button
      onClick={onToggle}
      className="relative p-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-all duration-200"
      aria-label="Toggle theme"
    >
      <div className="relative w-6 h-6">
        <span
          className={`absolute inset-0 transform transition-transform duration-500 rotate-0 ${
            isDark ? 'rotate-[360deg]' : '-rotate-[360deg]'
          }`}
        >
          {isDark ? (
            <Sun className="w-6 h-6 text-yellow-400" />
          ) : (
            <Moon className="w-6 h-6 text-blue-600" />
          )}
        </span>
      </div>
    </button>
  );
}
