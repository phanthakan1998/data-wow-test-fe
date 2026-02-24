import React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import AdminLayout from "@/components/Sidebar";
import theme from "@/theme/theme";

function LayoutProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AdminLayout>{children}</AdminLayout>
    </ThemeProvider>
  );
}

export default LayoutProvider;
