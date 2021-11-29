import React from "react";

interface ButtonProps {
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({onClick, text}: ButtonProps) => (
  <button type="button"
          onClick={onClick}
          className="bg-teal-400 text-teal-800 font-medium px-10 py-3 rounded hover:bg-teal-600 hover:text-white transition-all">{text}</button>)