"use client";
import { Box } from "@mui/material";
import SeatDetailContainer from "./components/SeatDetailContainer";
import React from "react";
import ConcertDetailContainer from "./components/ConcertDetailContainer";

export default function DashboardPage() {
  return (
    <Box>
      <SeatDetailContainer />
      <ConcertDetailContainer />
    </Box>
  );
}
