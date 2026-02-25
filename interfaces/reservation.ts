import { ConcertType } from "@/enums/concert";

export interface IUserConcertDetail {
  id: string;
  name: string;
  description: string;
  totalSeats: number;
  status: ConcertType;
}

export interface IReserveSeatPayload {
  userId: string;
  concertId: string;
}

export interface IReserveSeatResponse {
  id: string;
  concertId: string;
  userId: string;
}

export interface ICancelSeatPayload {
  userId: string;
  concertId: string;
}
