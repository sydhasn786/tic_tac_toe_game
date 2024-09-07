// components/Square.tsx
"use client";  // Necessary for the Square component as well

import React from 'react';

interface SquareProps {
  value: string;
  onClick: () => void;
}

const Square: React.FC<SquareProps> = ({ value, onClick }) => {
  return (
    <button
      className="w-16 h-16 border border-cayan-400 text-2xl font-bold flex items-center justify-center  bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-pink-500 hover:to-orange-500"
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Square;
