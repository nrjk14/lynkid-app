import * as React from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

export function Button({ children, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 rounded-full bg-orange-400 hover:bg-orange-500 text-white font-semibold shadow-md transition"
    >
      {children}
    </button>
  );
}
