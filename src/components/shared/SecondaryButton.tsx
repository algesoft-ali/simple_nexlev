import React, { ReactNode, ButtonHTMLAttributes } from "react";

interface SecondaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={`flex border text-sm md:text-base py-4 md:py-4 px-8 gap-4 font-semibold rounded-lg items-center  justify-center hover:bg-neutral-100 active:scale-95 transition-all duration-200 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default SecondaryButton;
