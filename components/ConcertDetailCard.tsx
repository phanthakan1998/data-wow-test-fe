import { ReactNode, useMemo, useState } from "react";
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
  icon?: ReactNode;
}

export default function ConcertDetailCard({
  title,
  description,
  attendees,
  onConfirm,
  className,
  type = ConcertType.DELETE,
  isAdmin = false,
}: IConcertDetailCardProps) {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const actionConfig: IActionCard = useMemo(() => {
    const configMap: Record<ConcertType, IActionCard> = {
      [ConcertType.RESERVE]: {
        color: "error",
        text: "Cancel",
      },
      [ConcertType.FULL]: {
        color: "primary",
        text: "Reserve",
      },
      [ConcertType.AVAILABLE]: {
        color: "primary",
        text: "Reserve",
      },
      [ConcertType.CANCEL]: {
        color: "primary",
        text: "Reserve",
      },
      [ConcertType.DELETE]: {
        color: "error",
        text: "Delete",
        icon: <DeleteOutlineOutlinedIcon />,
      },
    };

    return configMap[type];
  }, [type]);

  const handleClick = () => {
    if (isAdmin) {
      setIsOpenModal(true);
    } else {
      onConfirm?.();
    }
  };

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  const handleConfirm = () => {
    onConfirm?.();
    setIsOpenModal(false);
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
          onConfirm={handleConfirm}
          onCancel={handleCloseModal}
          icon={<CloseCircleIcon size={48} />}
        />
      )}

      <Card
        className={clsx(className)}
        elevation={0}
        sx={{
          width: "100%",
          borderRadius: 2,
          border: "1px solid #C2C2C2",
          boxShadow: "0px 1px 3px rgba(0,0,0,0.1)",
        }}
      >
        <CardContent
          sx={{
            p: { xs: 2, sm: 3, md: 4 },
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: "#1692EC",
              fontWeight: 600,
              fontSize: { xs: "20px", sm: "24px", md: "32px" },
            }}
          >
            {title}
          </Typography>

          <Divider sx={{ my: { xs: 1.5, md: 2 } }} />

          <Typography
            variant="body2"
            sx={{
              color: "#000",
              lineHeight: 1.6,
              mb: { xs: 3, md: 6 },
              fontSize: { xs: "14px", sm: "16px", md: "24px" },

              wordBreak: "break-word",
              overflowWrap: "anywhere",
            }}
          >
            {description}
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: { xs: "flex-start", sm: "center" },
              justifyContent: "space-between",
              gap: { xs: 2, sm: 0 },
            }}
          >
            {/* Attendees */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                color: "#000",
              }}
            >
              <PersonIcon size={24} />
              <Typography
                sx={{
                  ml: 1,
                  fontSize: { xs: "16px", sm: "18px", md: "24px" },
                }}
              >
                {attendees}
              </Typography>
            </Box>

            <Button
              variant="contained"
              disabled={type === ConcertType.FULL}
              color={actionConfig.color}
              sx={{
                borderRadius: 1,
                display: "flex",
                alignItems: "center",
                gap: 1,
                width: { xs: "100%", sm: "160px" },
                height: { xs: "48px", md: "60px" },
                textTransform: "none",
                fontSize: { xs: "14px", sm: "16px", md: "20px" },
              }}
              onClick={handleClick}
            >
              {actionConfig.icon}
              {actionConfig.text}
            </Button>
          </Box>
        </CardContent>
      </Card>
    </>
  );
}
