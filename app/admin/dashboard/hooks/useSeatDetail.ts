import { IDashboardSummary } from "@/interfaces/concert";
import { getDashboardSummary } from "@/services/concert.service";
import { AxiosError } from "axios";
import { useEffect, useState } from "react";

export const useDashBoard = () => {
  const [concertDetail, setConcertDetail] = useState<IDashboardSummary>({
    totalSeats: 0,
    totalReserved: 0,
    totalCanceled: 0,
  });

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchDashboard = async () => {
    try {
      setIsLoading(true);

      const result = await getDashboardSummary();

      const mappedData: IDashboardSummary = {
        totalSeats: Number(result.totalSeats ?? 0),
        totalReserved: Number(result.totalReserved ?? 0),
        totalCanceled: Number(result.totalCanceled ?? 0),
      };

      setConcertDetail(mappedData);
      setError(null);
    } catch (err) {
      const error = err as AxiosError<{ message?: string }>;

      setError(
        error.response?.data?.message ||
          error.message ||
          "Something went wrong",
      );
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboard();
  }, []);

  return {
    concertDetail,
    isLoading,
    error,
    refetch: fetchDashboard,
  };
};

export default useDashBoard;
