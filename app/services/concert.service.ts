import {
  IConcertHistoryResponse,
  IConcertResponse,
  ICreateConcertRequest,
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
    const response = await api.get<IApiResponse<IDashboardSummaryResponse>>(
      "/concerts/dashboard/summary",
    );

    return response.data.data;
  };

export const createConcert = async (
  payload: ICreateConcertRequest,
): Promise<IConcertResponse> => {
  const response = await api.post<IApiResponse<IConcertResponse>>(
    "/concerts",
    payload,
  );

  return response.data.data;
};

export const deleteConcert = async (
  concertId: string,
): Promise<IConcertResponse> => {
  const response = await api.delete<IApiResponse<IConcertResponse>>(
    `/concerts/${concertId}`,
  );

  return response.data.data;
};

export const getAllHistory = async (): Promise<IConcertHistoryResponse[]> => {
  const response =
    await api.get<IApiResponse<IConcertHistoryResponse[]>>("/concerts/history");

  return response.data.data;
};
