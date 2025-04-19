// External Dependencies
import { cva } from "class-variance-authority";

// Internal Dependencies
import { cn } from "../lib/utils";
import Loader from "./loader";
import React from "react";

interface Button extends React.ComponentProps<"button"> {
  variant?: "solid";
  isButtonLoading?: boolean;
  buttonLoadingText?: string;
  buttonLoaderClassName?: React.ComponentProps<"svg">["className"];
  buttonLoaderSpeed?: "normal" | "slow" | "fast" | "default";
}

const CustomButton = ({
  className,
  children,
  variant,
  isButtonLoading,
  buttonLoadingText,
  buttonLoaderClassName,
  buttonLoaderSpeed = "default",
  ...restProps
}: Button) => {
  return (
    <button
      className={cn(buttonVariants({ variant }), className)}
      {...restProps}
    >
      {isButtonLoading ? (
        <div className="flex items-center justify-between gap-x-2">
          <Loader className={buttonLoaderClassName} speed={buttonLoaderSpeed} />
          {buttonLoadingText ? <span>{buttonLoadingText}</span> : children}
        </div>
      ) : (
        children
      )}
    </button>
  );
};

const buttonVariants = cva("", {
  variants: {
    variant: {
      solid:
        "flex items-center justify-between rounded-full border border-blue-500 bg-blue-500 font-medium text-white shadow-lg transition-all hover:border-none hover:outline-2 hover:outline-offset-2 hover:outline-blue-500 focus:border-none focus:outline-2 focus:outline-offset-2 focus:outline-blue-500 active:border-none active:bg-blue-600 active:outline-2 active:outline-offset-2 active:outline-blue-600 disabled:border-none disabled:opacity-50 disabled:hover:cursor-not-allowed disabled:hover:outline-none disabled:active:bg-blue-500",
    },
  },
  defaultVariants: {
    variant: "solid",
  },
});

export { CustomButton };
