"use client";

import React, { createContext, useContext, useState } from "react";

export type PortfolioMode = "dual" | "ai" | "code" | "video";

interface ModeContextType {
  mode: PortfolioMode;
  setMode: (mode: PortfolioMode) => void;
  accentColor: string;
}

const ModeContext = createContext<ModeContextType>({
  mode: "dual",
  setMode: () => {},
  accentColor: "#ff4d00",
});

export const usePortfolioMode = () => useContext(ModeContext);

export const ModeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mode, setMode] = useState<PortfolioMode>("dual");

  // Dynamic accent color based on active mode
  const accentColor =
    mode === "ai" || mode === "video"
      ? "#ff4d00" // Neural Amber Flame
      : mode === "code"
      ? "#00e5ff" // Cyber Electric Cyan
      : "#ff4d00"; // Dual Mode Fiery Ember

  return (
    <ModeContext.Provider value={{ mode, setMode, accentColor }}>
      {children}
    </ModeContext.Provider>
  );
};
