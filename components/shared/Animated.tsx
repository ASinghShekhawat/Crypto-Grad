"use client";

import { Children } from "@/types/generics";
import { useIntersectionObserver } from "usehooks-ts";
import { useRef } from "react";

interface IAnimated extends Children {
  className?: string;
}

const Animated = ({ children, className }: IAnimated) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, {});
  const isVisible = !!entry?.isIntersecting;

  return (
    <div
      ref={ref}
      className={`${
        isVisible ? "animated animatedFadeInUp fadeInUp" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default Animated;
