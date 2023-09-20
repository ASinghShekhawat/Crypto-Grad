"use client";

import { ButtonType } from "@/types/buttton";
import { Children } from "@/types/generics";
import { CgSpinner } from "react-icons/cg";

interface IButton extends Children {
  type?: ButtonType;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
}

const Button = ({ children, type, className, disabled, loading }: IButton) => {
  return type === ButtonType.SECONDARY ? (
    <button
      disabled={disabled}
      className="bg-themeBlack flex items-center gap-2 border-2 border-themeBlue transition-all duration-700 rounded-lg px-8 min-h-[2.5rem] font-semibold text-lg"
    >
      {children} {loading && <CgSpinner className="animate-spin" />}
    </button>
  ) : (
    <button
      disabled={disabled}
      className="bg-gradient-to-r flex items-center gap-2 from-themePurple to-themeBlue hover:from-themeBlue hover:to-themeBlue disabled:!from-themeGrey disabled:!to-themeGrey disabled:text-themeTextGrey transition-all duration-700 rounded-lg px-8 min-h-[2.5rem] font-semibold text-lg"
    >
      {children} {loading && <CgSpinner className="animate-spin" />}
    </button>
  );
};

export default Button;
