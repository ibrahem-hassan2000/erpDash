"use client";
import React from "react";

interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}
function Button({ children, className, onClick }: ButtonProps) {
  const handelClick = (e: any) => {
    e.preventDefault();
    if (onClick) onClick();
  };
  return (
    <button
      onClick={(e) => {
        handelClick(e);
      }}
      className={` h-10 mdl:h-12 bg-main text-xs mdl:text-sm px-3 gap-2 mdl:px-6 w-fit rounded-2xl mdl:rounded-3xl flex items-center justify-center text-white font-medium
       ${className}
      `}
    >
      {children}
    </button>
  );
}

export default Button;
