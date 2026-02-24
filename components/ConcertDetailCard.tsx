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
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import PersonIcon from "@/assets/icons/PersonIcon";

interface IConcertDetailCardProps {
  title: string;
  description: string;
  attendees: number;
  icon?: ReactNode;
  onDelete?: () => void;
  className?: string;
}

export default function ConcertDetailCard({
  title,
  description,
  attendees,
  onDelete,
  className,
}: IConcertDetailCardProps) {
  return (
    <Card
      className={clsx(className)}
      elevation={0}
      sx={{
        width: "100%",
        borderRadius: "8px",
        border: "1px solid #C2C2C2",
        boxShadow: "0px 1px 3px rgba(0,0,0,0.1)",
      }}
    >
      <CardContent sx={{ p: 4 }}>
        <Typography
          variant="h6"
          sx={{
            color: "#1692EC",
            fontWeight: 600,
            fontSize: "32px",
          }}
        >
          {title}
        </Typography>

        <Divider sx={{ my: 2 }} />

        <Typography
          variant="body2"
          sx={{
            color: "#000",
            lineHeight: "1.625",
            mb: 6,
            fontSize: "24px",
          }}
        >
          {description}
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#000",
              fontSize: "32px",
            }}
          >
            <PersonIcon size={32} />
            <Typography
              variant="body2"
              sx={{
                display: "flex",
                alignItems: "center",
                ml: 1,
                fontSize: "24px",
              }}
            >
              {attendees}
            </Typography>
          </Box>

          <Button
            variant="contained"
            color="error"
            onClick={onDelete}
            sx={{
              borderRadius: "4px",
              display: "flex",
              alignItems: "center",
              gap: 1,
              width: "160px",
              height: "60px",
              textTransform: "none",
              fontSize: "24px",
            }}
          >
            <DeleteOutlineOutlinedIcon />
            <p>Delete</p>
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
