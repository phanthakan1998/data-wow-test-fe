import { ReactNode, useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  Divider,
  ButtonProps,
} from "@mui/material";
import clsx from "clsx";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import PersonIcon from "@/assets/icons/PersonIcon";
import { ConcertType } from "@/enums/concert";
import ConfirmModal from "./ConfirmModal";
import CloseCircleIcon from "@/assets/icons/CloseWithCircleIcon";
type MuiColor = ButtonProps["color"];
interface IConcertDetailCardProps {
  title: string;
  description: string;
  attendees: number;
  icon?: ReactNode;
  onConfirm?: () => void;
  className?: string;
  type?: ConcertType;
  loading: boolean;
  isAdmin?: boolean;
}

interface IActionCard {
  text: string;
  color: MuiColor;
  icon: ReactNode | null;
}

export default function ConcertDetailCard({
  title,
  description,
  attendees,
  onConfirm,
  className,
  type = ConcertType.DELETE,
  loading,
  isAdmin,
}: IConcertDetailCardProps) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const getActionCard = (): IActionCard => {
    if (type === ConcertType.RESERVE) {
      return {
        color: "error",
        text: "Cancel",
        icon: "",
      };
    }
    if (
      type === ConcertType.FULL ||
      type === ConcertType.AVAILABLE ||
      type === ConcertType.CANCEl
    ) {
      return {
        color: "primary",
        text: "Reserve",
        icon: "",
      };
    }

    return {
      color: "error",
      text: "Delete",
      icon: <DeleteOutlineOutlinedIcon />,
    };
  };

  const actionCard = getActionCard();

  const onClickButton = () => {
    setIsOpenModal(true);
  };

  return (
    <>
      {isAdmin && (
        <ConfirmModal
          open={isOpenModal}
          type="error"
          title="Are you sure to delete?"
          description={`"${title}"`}
          confirmText="Yes, Delete"
          cancelText="Cancel"
          onConfirm={onConfirm}
          onCancel={() => setIsOpenModal(false)}
          icon={<CloseCircleIcon size={48} />}
        />
      )}
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
              disabled={type === ConcertType.FULL}
              color={actionCard.color}
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
              onClick={onClickButton}
              loading={loading}
            >
              {actionCard.icon}
              <p>{actionCard.text}</p>
            </Button>
          </Box>
        </CardContent>
      </Card>
    </>
  );
}
