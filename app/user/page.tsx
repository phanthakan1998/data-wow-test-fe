import ConcertCardContainer from "./components/ConcertCardContainer";
import { getAllUserConcert } from "@/services/reservation.service";
import { IUserConcertDetail } from "@/interfaces/reservation";

async function getConcerts(): Promise<IUserConcertDetail[]> {
  try {
    return await getAllUserConcert("1");
  } catch {
    return [];
  }
}

export default async function UserPage() {
  const concerts = await getConcerts();

  return <ConcertCardContainer concerts={concerts} />;
}
