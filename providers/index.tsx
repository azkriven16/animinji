import React, { ReactNode } from "react";
import { ThemeProvider } from "./theme-provider";
import TRPCProvider from "./trpc-provider";
import { ClerkProvider } from "@clerk/nextjs";

interface Props {
  children: ReactNode;
}

export default function Providers({ children }: Props) {
  return (
    <ClerkProvider
      appearance={{
        variables: {
          colorPrimary: "#dc2626",
        },
      }}
    >
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <TRPCProvider>{children}</TRPCProvider>
      </ThemeProvider>
    </ClerkProvider>
  );
}
