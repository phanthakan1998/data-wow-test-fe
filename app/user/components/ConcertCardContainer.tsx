"use client";

import { Box } from "@mui/material";
import { IConcertResponse } from "@/interfaces/dashboard";
import ConcertDetailCard from "@/components/ConcertDetailCard";

interface IConcertCardContainerProps {
  concerts: IConcertResponse[];
}

export default function ConcertCardContainer({
  concerts,
}: IConcertCardContainerProps) {
  const onDeleteConcert = (id: string) => {};
  return (
    <Box className="flex flex-col gap-6">
      {concerts.map((concert) => (
        <ConcertDetailCard
          key={concert.id}
          title={concert.name}
          description={concert.description}
          attendees={concert.totalSeats}
          onConfirm={() => onDeleteConcert(concert.id)}
        />
      ))}
    </Box>
  );
}
