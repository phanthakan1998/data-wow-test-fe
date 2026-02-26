"use client";

import { Box, CircularProgress } from "@mui/material";
import ConcertDetailCard from "@/components/ConcertDetailCard";
import { IUserConcertDetail } from "@/interfaces/reservation";
import { cancelConcert, reserveConcert } from "@/services/reservation.service";
import { ConcertType } from "@/enums/concert";
import { useRouter } from "next/navigation";
import { useAuthContext } from "@/providers/AuthProvider";
import { useState } from "react";

interface IConcertCardContainerProps {
  concerts: IUserConcertDetail[];
}

export default function ConcertCardContainer({
  concerts,
}: IConcertCardContainerProps) {
  const router = useRouter();
  const { userId } = useAuthContext();

  const [loading, setLoading] = useState(false);

  const onHandleConcert = async (concertId: string, status: ConcertType) => {
    try {
      setLoading(true);

      if (status === ConcertType.RESERVE) {
        await cancelConcert({
          concertId,
          userId,
        });
      } else {
        await reserveConcert({
          concertId,
          userId,
        });
      }

      router.refresh();
    } catch {
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box className="flex flex-col gap-6">
      {concerts.map((concert) => (
        <ConcertDetailCard
          key={concert.id}
          title={concert.name}
          description={concert.description}
          attendees={concert.totalSeats}
          type={concert.status}
          loading={loading}
          onConfirm={() => onHandleConcert(concert.id, concert.status)}
        />
      ))}
    </Box>
  );
}
