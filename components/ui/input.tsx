import * as React from "react";
import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  wrapperClassName?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { className, type, leftIcon, rightIcon, wrapperClassName, ...props },
    ref
  ) => {
    return (
      <div
        className={cn(
          "relative flex items-center border border-input rounded-md bg-transparent h-9 px-3 py-1 shadow-xs transition-colors",
          "focus-within:border-ring focus-within:ring-[3px] focus-within:ring-ring/50",
          "aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          wrapperClassName
        )}
      >
        {leftIcon && (
          <span className="mr-2   text-neutral-500">{leftIcon}</span>
        )}

        <input
          ref={ref}
          type={type}
          className={cn(
            "w-full bg-transparent outline-none border-none text-base md:text-sm placeholder:text-muted-foreground",
            "file:text-foreground file:bg-transparent file:border-0 file:font-medium file:h-7 file:text-sm",
            className
          )}
          {...props}
        />

        {rightIcon && (
          <span className="ml-2 text-muted-foreground">{rightIcon}</span>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
