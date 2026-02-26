import { IConfirmModalProps } from "@/interfaces/components";
import { Dialog, DialogContent, Typography, Button, Box } from "@mui/material";

export default function ConfirmModal({
  open,
  type,
  title,
  description,
  confirmText = "",
  cancelText = "",
  onConfirm,
  onCancel,
  icon,
}: IConfirmModalProps) {
  const isError = type === "error";

  return (
    <Dialog
      open={open}
      onClose={onCancel}
      maxWidth="sm"
      sx={{
        minWidth: 420,
        minHeight: 250,
        borderRadius: 8,
      }}
    >
      <DialogContent
        sx={{
          py: 4,
          px: 4,
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mb: 4,
          }}
        >
          {icon}
        </Box>

        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            fontSize: 20,
            color: "black",
            mb: 2,
          }}
        >
          {title}
        </Typography>

        {description && (
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: 18,
              color: "black",
              mb: 4,
            }}
          >
            {description}
          </Typography>
        )}

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 3,
          }}
        >
          <Button
            variant="outlined"
            onClick={onCancel}
            sx={{
              px: 5,
              py: 1.5,
              borderRadius: 1,
              textTransform: "none",
              borderColor: "#d1d5db",
              color: "#262626",
              width: 180,
              fontSize: 16,
              fontWeight: 500,
            }}
          >
            {cancelText}
          </Button>

          <Button
            variant="contained"
            onClick={onConfirm}
            color={isError ? "error" : "success"}
            disableElevation
            sx={{
              px: 5,
              py: 1.5,
              borderRadius: 1,
              textTransform: "none",
              width: 180,
              fontSize: 16,
            }}
          >
            {confirmText}
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
