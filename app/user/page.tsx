import { getAllConcerts } from "@/app/services/concert.service";
import { IConcertResponse } from "@/interfaces/dashboard";
import ConcertCardContainer from "./components/ConcertCardContainer";

async function getConcerts(): Promise<IConcertResponse[]> {
  try {
    return await getAllConcerts();
  } catch {
    return [];
  }
}

export default async function UserPage() {
  const concerts = await getConcerts();

  return <ConcertCardContainer concerts={concerts} />;
}
