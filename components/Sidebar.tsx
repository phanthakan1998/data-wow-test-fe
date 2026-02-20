"use client";

import { useState } from "react";
import Link from "next/link";
import { Drawer, Typography, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HistoryIcon from "@mui/icons-material/History";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import LogoutIcon from "@mui/icons-material/Logout";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

//TODO need to find icon

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const drawerContent = (
    <div className="h-full flex flex-col bg-white w-64">
      <div className="p-6 mt-10">
        <Typography variant="h4" fontWeight="bold">
          Admin
        </Typography>
      </div>

      <nav className="flex-1 px-4 py-4 space-y-2">
        <Link
          href="/admin"
          className="flex items-center gap-3 px-4 py-2 rounded-lg bg-gray-100 font-medium"
        >
          <HomeOutlinedIcon fontSize="medium" />
          Home
        </Link>

        <Link
          href="/admin/history"
          className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-100"
        >
          <HistoryIcon fontSize="small" />
          History
        </Link>

        <Link
          href="/"
          className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-100"
        >
          <SwapHorizIcon fontSize="small" />
          Switch to user
        </Link>
      </nav>

      <div className="p-4">
        <button className="flex items-center gap-3 w-full px-4 py-2 rounded-lg hover:bg-gray-100 text-left">
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
          paper: {
            className: "w-64",
          },
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
