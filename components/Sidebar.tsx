"use client";

import { useState } from "react";
import Link from "next/link";
import { Drawer, Typography, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import { useAuthContext } from "@/providers/AuthProvider";
import { Role } from "@/enums/role";
import HomeIcon from "@/assets/icons/HomeIcon";
import HistoryIcon from "@/assets/icons/HistoryIcon";
import SwitchIcon from "@/assets/icons/SwitchIcon";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { role, logout, switchRole } = useAuthContext();

  const drawerContent = (
    <div className="h-full flex flex-col bg-white w-64">
      <div className="p-6 mt-10">
        <Typography variant="h4" fontWeight="bold">
          {role === Role.ADMIN ? "Admin" : "User"}
        </Typography>
      </div>

      <nav className="flex-1 px-4 py-4 space-y-2">
        {role === Role.ADMIN && (
          <>
            <Link
              href="/admin/dashboard"
              className="flex items-center gap-3 px-4 py-2 rounded-lg bg-gray-100 font-medium text-xl"
            >
              <HomeIcon />
              Home
            </Link>

            <Link
              href="/admin/history"
              className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-100 text-xl"
            >
              <HistoryIcon />
              History
            </Link>
          </>
        )}

        {role === "user" && (
          <Link
            href="/user"
            className="flex items-center gap-3 px-4 py-2 rounded-lg bg-gray-100 font-medium text-xl"
          >
            <HistoryIcon />
            User Home
          </Link>
        )}

        <Link
          href={role === Role.ADMIN ? "/user" : "/admin/dashboard"}
          onClick={switchRole}
          className="flex items-center gap-3 px-4 py-2 rounded-lg bg-gray-100 font-medium text-xl"
        >
          <SwitchIcon />
          Switch to {role === Role.ADMIN ? Role.USER : Role.ADMIN}
        </Link>
      </nav>

      <div className="p-4">
        <button
          onClick={logout}
          className="flex items-center gap-3 w-full px-4 py-2 rounded-lg hover:bg-gray-100 text-left"
        >
          <LogoutIcon fontSize="small" />
          Logout
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex">
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        className="md:hidden"
        slotProps={{
          paper: { className: "w-64" },
        }}
      >
        {drawerContent}
      </Drawer>

      <Drawer
        variant="permanent"
        open
        className="hidden md:block"
        slotProps={{
          paper: {
            className: "w-64 border-r border-gray-200 bg-white",
          },
        }}
      >
        {drawerContent}
      </Drawer>

      <div className="flex-1">
        <div className="md:hidden p-4">
          <IconButton onClick={() => setMobileOpen(true)}>
            <MenuIcon />
          </IconButton>
        </div>

        <main className="p-8 md:ml-64">{children}</main>
      </div>
    </div>
  );
}
