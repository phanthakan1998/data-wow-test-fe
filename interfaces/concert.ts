import { HistoryAction } from "@/enums/history";

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
  concertName: string;
  userName: string;
  action: HistoryAction;
  createdAt: string;
}
