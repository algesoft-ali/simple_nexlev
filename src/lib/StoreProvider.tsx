"use client";

import { FC, PropsWithChildren, useRef } from "react";
import { Provider } from "react-redux";
import { store } from "./store";

const StoreProvider: FC<PropsWithChildren> = ({ children }) => {
  // const storeRef = useRef<AppStore>();

  // if (!storeRef?.current) {
  //   storeRef.current = makeStore();
  // }
  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
