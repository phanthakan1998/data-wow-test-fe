import {
  IConcertResponse,
  IDashboardSummaryResponse,
} from "@/interfaces/dashboard";
import api from "../../core/axios";
import { IApiResponse } from "@/interfaces/api";

export const getAllConcerts = async (): Promise<IConcertResponse[]> => {
  const response = await api.get<IApiResponse<IConcertResponse[]>>("/concerts");

  return response.data.data;
};
export const getDashboardSummary =
  async (): Promise<IDashboardSummaryResponse> => {
    try {
      const response = await api.get<IApiResponse<IDashboardSummaryResponse>>(
        "/concerts/dashboard/summary",
      );

      return response.data.data;
    } catch {
      throw new Error("Failed to fetch dashboard summary");
    }
  };
