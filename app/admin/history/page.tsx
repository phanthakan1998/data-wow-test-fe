import { Box } from "@mui/material";
import { getAllHistory } from "@/app/services/concert.service";
import { IConcertHistoryResponse } from "@/interfaces/dashboard";
import HistoryTable from "./components/HistoryTable";

async function getHistory(): Promise<IConcertHistoryResponse[]> {
  try {
    const result = await getAllHistory();
    return result;
  } catch {
    return [];
  }
}

export default async function HistoryPage() {
  const historyData = await getHistory();
  console.log(historyData);

  return (
    <Box>
      <HistoryTable />
    </Box>
  );
}
