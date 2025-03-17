import { cva, VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes } from "react";
import { cn } from "../../lib/utils";
import Loader from "./loader";

export const buttonVariants = cva(
  "active:scale-95 inline-flex capitalize  items-center font-semibold transition justify-center rounded-md text-sm  transition-color focus:outline-none focus:ring-2  focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      mainColor: {
        default:
          "bg-mainBlue focus:ring-mainBlue/80 text-mainBlue border-mainBlue  hover:bg-mainBlue/85",
        secondly:
          "bg-secondly focus:ring-secondly/80 text-secondly border-secondly  hover:bg-secondly/85",
      },

      variant: {
        default: " text-white ",
        ghost: "bg-transparent    border-2 hover:bg-mainBlue/5",
      },
      size: {
        default: " py-[13px] px-4",
        sm: " px-2",
        lg: " px-8",
      },
    },
    defaultVariants: {
      mainColor: "default",
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
  fullWidth?: boolean;
}

const Button = ({
  className,
  children,
  variant,
  isLoading,
  size,
  mainColor,
  fullWidth,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        buttonVariants({ variant, size, mainColor }),
        fullWidth && "w-full",
        className
      )}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? <Loader /> : null}
      {children}
    </button>
  );
};

export default Button;
