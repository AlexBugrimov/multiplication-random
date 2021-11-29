import React from "react";

interface InputProps {
  type: string;
  min?: number;
  placeholder: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = (props: InputProps) => (
  <input
    {...props}
    className="w-full py-3 placeholder-gray-500 border-2 border-teal-400 bg-teal-50 focus:outline-none rounded-lg
                focus:ring-teal-600 focus:ring-2 shadow-sm focus:border-transparent"/>)