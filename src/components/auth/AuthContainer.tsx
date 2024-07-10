import { FC, PropsWithChildren } from "react";

const AuthContainer: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="bg-gray-50 h-[calc(100vh-90px)] flex items-center justify-center w-full">
      {children}
    </div>
  );
};

export default AuthContainer;
