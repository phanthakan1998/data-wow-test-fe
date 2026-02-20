import { ReactNode } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  Divider,
} from "@mui/material";
import clsx from "clsx";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
interface IConcertCardProps {
  title: string;
  description: string;
  attendees: number;
  icon?: ReactNode;
  onDelete?: () => void;
  className?: string;
}

//TODO change icon

export default function ConcertCard({
  title,
  description,
  attendees,
  onDelete,
  className,
}: IConcertCardProps) {
  return (
    <Card
      className={clsx(
        "w-full rounded-lg border border-gray-200 shadow-sm px-2.5",
        className,
      )}
      elevation={0}
    >
      <CardContent className="p-6">
        <Typography variant="h6" className="text-[#1692EC] font-semibold mb-4">
          {title}
        </Typography>
        <Divider className="!my-2" />
        <Typography
          variant="body2"
          className="text-black leading-relaxed mb-6 text-[24px]"
        >
          {description}
        </Typography>

        <Box className="flex items-center justify-between">
          <Box className="flex items-center justify-center text-black text-[32px] ">
            <PermIdentityOutlinedIcon />
            <Typography
              variant="body2"
              className="flex text-center items-center !ml-1 text-[24px]"
            >
              {attendees}
            </Typography>
          </Box>

          <Button
            variant="contained"
            color="error"
            onClick={onDelete}
            className="rounded-sm"
          >
            <DeleteOutlineOutlinedIcon />
            <p>Delete</p>
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
