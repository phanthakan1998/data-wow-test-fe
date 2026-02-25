"use client";
import ConcertDetailCard from "@/components/ConcertDetailCard";
import { IConcertResponse, IDashboardSummary } from "@/interfaces/dashboard";
import { Box, Tab, Tabs } from "@mui/material";
import React from "react";
import ConcertCreateCard from "./ConcertCreateCard";

interface IConcertDetailContainer {
  children?: React.ReactNode;
  index: number;
  value: number;
  className?: string;
}

function CustomTabPanel(props: IConcertDetailContainer) {
  const { children, value, index, className, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`concert-tabpanel-${index}`}
      aria-labelledby={`concert-tab-${index}`}
      className={className}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

interface IConcertDetailContainerProps {
  concertDetail: IConcertResponse[];
}

export default function ConcertDetailContainer({
  concertDetail,
}: IConcertDetailContainerProps) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Box sx={{ borderBottom: 1, borderColor: "divider", mt: 4 }}>
        <Tabs
          value={value}
          onChange={handleChange}
          sx={{
            "& .MuiTab-root": {
              fontSize: "24px",
              fontWeight: 600,
              textTransform: "none",
            },
          }}
        >
          <Tab label="Overview" />
          <Tab label="Create" />
        </Tabs>
        <CustomTabPanel value={value} index={0} className="mt-4">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-6">
              {concertDetail.map((concert) => (
                <ConcertDetailCard
                  key={concert.id}
                  title={concert.name}
                  description={concert.description}
                  attendees={concert.totalSeats}
                  onDelete={() => console.log("Delete concert", concert.id)}
                />
              ))}
            </div>
          </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <ConcertCreateCard />
        </CustomTabPanel>
      </Box>
    </Box>
  );
}
