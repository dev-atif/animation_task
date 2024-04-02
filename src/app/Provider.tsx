"use clinet";

import { ThemeProvider } from "next-themes";
import React from "react";

export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" enableSystem defaultTheme="system">
      {" "}
      {children}
    </ThemeProvider>
  );
}
