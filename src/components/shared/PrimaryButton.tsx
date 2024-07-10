import React, { ReactNode, ButtonHTMLAttributes } from "react";

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={`flex border text-sm md:text-base py-4 hover:bg-primary-dark text-white bg-primary md:py-4 px-8 gap-4 font-semibold rounded-lg items-center justify-center active:scale-95 transition-all duration-200 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
