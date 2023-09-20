"use client";

import { ButtonType } from "@/types/buttton";
import { Children } from "@/types/generics";

interface IButton extends Children {
  type?: ButtonType;
  className?: string;
}

const Button = ({ children, type, className }: IButton) => {
  return type === ButtonType.SECONDARY ? (
    <button className="bg-themeBlack border-2 border-themeBlue transition-all duration-700 rounded-lg px-8 min-h-[2.5rem] font-semibold text-lg">
      {children}
    </button>
  ) : (
    <button className="bg-gradient-to-r from-themePurple to-themeBlue hover:from-themeBlue hover:to-themeBlue transition-all duration-700 rounded-lg px-8 min-h-[2.5rem] font-semibold text-lg">
      {children}
    </button>
  );
};

export default Button;
