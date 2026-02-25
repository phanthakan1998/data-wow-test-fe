"use client";

import { Box } from "@mui/material";
import ConcertDetailCard from "@/components/ConcertDetailCard";
import { IUserConcertDetail } from "@/interfaces/reservation";
import { cancelConcert, reserveConcert } from "@/services/reservation.service";
import { ConcertType } from "@/enums/concert";

interface IConcertCardContainerProps {
  concerts: IUserConcertDetail[];
}

export default function ConcertCardContainer({
  concerts,
}: IConcertCardContainerProps) {
  const onHandleConcert = async (concertId: string, status: ConcertType) => {
    if (status === ConcertType.RESERVE) {
      await cancelConcert({ concertId: concertId, userId: "1" });
    } else {
      await reserveConcert({ concertId: concertId, userId: "1" });
    }
  };

  console.log({ concerts });

  return (
    <Box className="flex flex-col gap-6">
      {concerts.map((concert) => (
        <ConcertDetailCard
          key={concert.id}
          title={concert.name}
          description={concert.description}
          attendees={concert.totalSeats}
          type={concert.status}
          onConfirm={() => onHandleConcert(concert.id, concert.status)}
        />
      ))}
    </Box>
  );
}
