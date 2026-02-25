export interface IDashboardSummary {
  totalSeats: number;
  totalReserved: number;
  totalCanceled: number;
}

export interface IConcertResponse {
  id: string;
  name: string;
  description: string;
  totalSeats: number;
}

export interface IDashboardSummaryResponse {
  totalSeats: number;
  totalReserved: number;
  totalCanceled: number;
}

export interface ICreateConcertRequest {
  name: string;
  description: string;
  totalSeats: number;
}

export interface IConcertHistoryResponse {
  id: string;
  concertId: string;
  userName: string;
  action: "RESERVED" | "CANCELED";
  seatNumber: number;
  createdAt: string;
}
