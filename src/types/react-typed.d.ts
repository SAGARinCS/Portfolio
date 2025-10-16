declare module "react-typed" {
  import * as React from "react";
  export const Typed: React.FC<{
    strings: string[];
    typeSpeed?: number;
    backSpeed?: number;
    loop?: boolean;
    className?: string;
    cursorChar?: string;
    startDelay?: number;
    backDelay?: number;
  }>;
}
