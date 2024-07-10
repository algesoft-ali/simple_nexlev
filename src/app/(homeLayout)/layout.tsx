import Navbar from "@/components/shared/Navbar";
import StoreProvider from "@/lib/StoreProvider";
import { FC, PropsWithChildren } from "react";

const HomeLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <StoreProvider>
      <Navbar />
      {children}
    </StoreProvider>
  );
};

export default HomeLayout;
