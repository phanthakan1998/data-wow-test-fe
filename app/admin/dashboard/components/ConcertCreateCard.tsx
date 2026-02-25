import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Box,
  Divider,
  InputAdornment,
  Snackbar,
  Alert,
} from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import { useState } from "react";
import { createConcert } from "@/services/concert.service";

interface IConcertCreateCardProps {
  onSuccessCreate: () => void;
}

export default function ConcertCreateCard({
  onSuccessCreate,
}: IConcertCreateCardProps) {
  const [form, setForm] = useState({
    name: "",
    seats: 0,
    description: "",
  });

  const [isOpenAlert, setIsOpenAlert] = useState(false);

  const handleChange =
    (field: string) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm({ ...form, [field]: event.target.value });
    };

  const handleSubmit = async () => {
    try {
      await createConcert({
        name: form.name,
        description: form.description,
        totalSeats: Number(form.seats),
      });

      onSuccessCreate();
    } catch {
      setIsOpenAlert(true);
    }
  };
  //TODO disable button when not commit
  return (
    <>
      <Snackbar
        open={isOpenAlert}
        autoHideDuration={1500}
        onClose={() => setIsOpenAlert(false)}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert severity="error" variant="filled" sx={{ fontSize: 18 }}>
          Create failed
        </Alert>
      </Snackbar>
      <Card
        elevation={0}
        sx={{
          borderRadius: 3,
          border: "1px solid #e5e7eb",
          marginTop: "32px",
        }}
      >
        <CardContent sx={{ p: 4 }}>
          <Typography
            variant="h5"
            sx={{
              color: "#2b83c6",
              fontWeight: 700,
              mb: 2,
              fontSize: 40,
            }}
          >
            Create
          </Typography>

          <Divider sx={{ mb: 4 }} />

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              gap: 3,
              mb: 3,
            }}
          >
            <Box>
              <Typography sx={{ mb: 1, fontSize: 24 }}>Concert Name</Typography>
              <TextField
                fullWidth
                placeholder="Please input concert name"
                value={form.name}
                onChange={handleChange("name")}
                size="medium"
              />
            </Box>

            <Box>
              <Typography sx={{ mb: 1, fontSize: 24 }}>
                Total of seat
              </Typography>
              <TextField
                fullWidth
                type="number"
                value={form.seats}
                onKeyDown={(e) => {
                  if (e.key === "-" || e.key === "e") {
                    e.preventDefault();
                  }
                }}
                onChange={handleChange("seats")}
                slotProps={{
                  htmlInput: {
                    min: 0,
                  },
                  input: {
                    endAdornment: (
                      <InputAdornment position="end">
                        <PersonOutlineIcon />
                      </InputAdornment>
                    ),
                  },
                }}
              />
            </Box>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography sx={{ mb: 1, fontSize: 24 }}>Description</Typography>
            <TextField
              fullWidth
              multiline
              rows={4}
              placeholder="Please input description"
              value={form.description}
              onChange={handleChange("description")}
            />
          </Box>

          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              variant="contained"
              startIcon={<SaveOutlinedIcon sx={{ fontSize: 30 }} />}
              onClick={handleSubmit}
              sx={{
                px: 4,
                py: 1.2,
                fontSize: 24,
                fontWeight: 500,
                textTransform: "none",
                backgroundColor: "#2b83c6",
                "&:hover": {
                  backgroundColor: "#1f6fb2",
                },
              }}
            >
              Save
            </Button>
          </Box>
        </CardContent>
      </Card>
    </>
  );
}
