"use client";
import ConcertDetailCard from "@/components/ConcertDetailCard";
import { Box, Tab, Tabs } from "@mui/material";
import React from "react";

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

export default function ConcertDetailContainer() {
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
            <ConcertDetailCard
              title="Coldplay Live"
              description="Lorem ipsum dolor sit amet consectetur. Elit purus nam gravida porttitor nibh urna sit ornare a. Proin dolor morbi id ornare aenean non. Fusce dignissim turpis sed non est orci sed in. Blandit ut purus nunc sed donec commodo morbi diam scelerisque."
              attendees={500}
              onDelete={() => console.log("Delete concert")}
            />

            <ConcertDetailCard
              title="Taylor Swift Tour"
              description="Lorem ipsum dolor sit amet consectetur. Elit purus nam gravida porttitor nibh urna sit ornare a. "
              attendees={200}
              onDelete={() => console.log("Delete concert")}
            />
          </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          Item Two
        </CustomTabPanel>
      </Box>
    </Box>
  );
}
