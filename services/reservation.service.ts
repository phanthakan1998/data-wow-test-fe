import api from "../core/axios";
import { IApiResponse } from "@/interfaces/api";
import {
  ICancelSeatPayload,
  IReserveSeatPayload,
  IReserveSeatResponse,
  IUserConcertDetail,
} from "@/interfaces/reservation";

export const getAllUserConcert = async (
  userId: string,
): Promise<IUserConcertDetail[]> => {
  const response = await api.get<IApiResponse<IUserConcertDetail[]>>(
    `/reservation/${userId}/concerts`,
  );

  return response.data.data;
};

export const reserveConcert = async (
  payload: IReserveSeatPayload,
): Promise<IReserveSeatResponse> => {
  const response = await api.post<IApiResponse<IReserveSeatResponse>>(
    "/reservation/reserve",
    payload,
  );

  return response.data.data;
};

export const cancelConcert = async (
  payload: ICancelSeatPayload,
): Promise<IReserveSeatResponse> => {
  const response = await api.patch<IApiResponse<IReserveSeatResponse>>(
    "/reservation/cancel",
    payload,
  );

  return response.data.data;
};
