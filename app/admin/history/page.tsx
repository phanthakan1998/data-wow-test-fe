import { Box } from "@mui/material";
import { IConcertHistoryResponse } from "@/interfaces/concert";
import HistoryTable from "./components/HistoryTable";
import { getAllHistory } from "@/services/concert.service";

async function getHistory(): Promise<IConcertHistoryResponse[]> {
  try {
    return await getAllHistory();
  } catch {
    return [];
  }
}

export default async function HistoryPage() {
  const historyData = await getHistory();

  return (
    <Box>
      <HistoryTable rows={historyData} />
    </Box>
  );
}
