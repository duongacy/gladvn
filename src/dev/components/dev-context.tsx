import React, { createContext, useContext, useState } from "react";

import type { Size } from "../../lib/types";

interface DevContextType {
  size: Size;
  setSize: (size: Size) => void;
}

const DevContext = createContext<DevContextType | undefined>(undefined);

export function DevContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [size, setSize] = useState<Size>("md");

  return (
    <DevContext.Provider value={{ size, setSize }}>
      {children}
    </DevContext.Provider>
  );
}

export function useDevContext() {
  const context = useContext(DevContext);
  if (context === undefined) {
    throw new Error("useDevContext must be used within a DevContextProvider");
  }
  return context;
}
