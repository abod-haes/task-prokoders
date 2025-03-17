import React, { forwardRef, ReactNode, ComponentProps } from "react";
import { cn } from "@/lib/utils";

// Corrected Input component
const Input = forwardRef<
  HTMLInputElement,
  {
    name: string;
    label?: ReactNode;
    className?: string;
    fullWidth?: boolean;
  } & ComponentProps<"input">
>(({ name, label, fullWidth, className, ...restProps }, ref) => {
  return (
    <label
      htmlFor={name}
      className={cn(
        "text-secondly text-sm font-semibold",
        fullWidth && "w-full"
      )}
    >
      {label && <p className="mb-0.5 capitalize">{label}</p>}
      <input
        name={name}
        className={cn(
          "border rounded m-[1px]  w-full p-3  outline-none font-normal text-sm  focus:border-mainBlue focus:border-2 focus:m-0 transition",
          fullWidth && "w-full",
          className
        )}
        {...restProps} // Spread other props (including those from register)
        ref={ref}
      />
    </label>
  );
});

Input.displayName = "Input";

export default Input;
