"use client";
import ConcertDetailCard from "@/components/ConcertDetailCard";
import { IConcertResponse } from "@/interfaces/dashboard";
import { Alert, Box, Snackbar, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import ConcertCreateCard from "./ConcertCreateCard";
import { deleteConcert } from "@/app/services/concert.service";
import { IErrorAlert } from "@/interfaces/components";
import { useRouter } from "next/navigation";

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
  const [indexTab, setIndexTab] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setIndexTab(newValue);
  };

  const [isOpenAlert, setIsOpenAlert] = useState(false);
  const [alert, setAlert] = useState<IErrorAlert | null>(null);

  const router = useRouter();

  const onSuccessCreate = () => {
    setIndexTab(0);
    setIsOpenAlert(true);
  };

  //TODO add loading

  const onDeleteConcert = async (id: string) => {
    try {
      await deleteConcert(id);

      setAlert({
        type: "success",
        message: "Delete successfully",
      });
      router.refresh();
    } catch {
      setAlert({
        type: "error",
        message: "Delete failed",
      });
    }
  };
  return (
    <>
      <Snackbar
        open={isOpenAlert}
        autoHideDuration={1500}
        onClose={() => setIsOpenAlert(false)}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          severity={alert?.type}
          variant="filled"
          onClose={() => setIsOpenAlert(false)}
          sx={{ fontSize: 18 }}
        >
          {alert?.message}
        </Alert>
      </Snackbar>
      <Box>
        <Box sx={{ borderBottom: 1, borderColor: "divider", mt: 4 }}>
          <Tabs
            value={indexTab}
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
          <CustomTabPanel value={indexTab} index={0} className="mt-4">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-6">
                {concertDetail.map((concert) => (
                  <ConcertDetailCard
                    key={concert.id}
                    title={concert.name}
                    description={concert.description}
                    attendees={concert.totalSeats}
                    onConfirm={() => onDeleteConcert(concert.id)}
                  />
                ))}
              </div>
            </div>
          </CustomTabPanel>
          <CustomTabPanel value={indexTab} index={1}>
            <ConcertCreateCard onSuccessCreate={onSuccessCreate} />
          </CustomTabPanel>
        </Box>
      </Box>
    </>
  );
}
