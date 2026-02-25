import { Box } from "@mui/material";
import SeatDetailContainer from "./components/SeatDetailContainer";
import { getAllConcerts, getDashboardSummary } from "@/app/services/concert";
import { IConcertResponse, IDashboardSummary } from "@/interfaces/dashboard";
import ConcertDetailContainer from "./components/ConcertDetailContainer";

async function getDashboardData(): Promise<IDashboardSummary> {
  try {
    const result = await getDashboardSummary();

    return {
      totalSeats: Number(result.totalSeats ?? 0),
      totalReserved: Number(result.totalReserved ?? 0),
      totalCanceled: Number(result.totalCanceled ?? 0),
    };
  } catch {
    return {
      totalSeats: 0,
      totalReserved: 0,
      totalCanceled: 0,
    };
  }
}

async function getAllConcert(): Promise<Array<IConcertResponse>> {
  try {
    const result = await getAllConcerts();

    return result;
  } catch {
    return [];
  }
}

export default async function DashboardPage() {
  const dashboarData = await getDashboardData();
  const concerts = await getAllConcerts();

  return (
    <Box>
      <SeatDetailContainer dashboardDetail={dashboarData} />
      <ConcertDetailContainer concertDetail={concerts} />
    </Box>
  );
}
