"use client";

import React from "react";
import AuthProvider from "./AuthProvider";
import LayoutProvider from "./LayoutProvider";
type IAppProvidersProps = {
  children: React.ReactNode;
};

export default function AppProviders({ children }: IAppProvidersProps) {
  return (
    <AuthProvider>
      <LayoutProvider>{children}</LayoutProvider>
    </AuthProvider>
  );
}
