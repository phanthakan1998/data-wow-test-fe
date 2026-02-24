import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Box,
  Divider,
  InputAdornment,
} from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import { useState } from "react";

export default function ConcertCreateCard() {
  const [form, setForm] = useState({
    name: "",
    seats: 500,
    description: "",
  });

  const handleChange =
    (field: string) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm({ ...form, [field]: event.target.value });
    };

  const handleSubmit = () => {
    console.log(form);
  };

  return (
    <Card
      elevation={0}
      sx={{
        borderRadius: 3,
        border: "1px solid #e5e7eb",
      }}
    >
      <CardContent sx={{ p: 4 }}>
        <Typography
          variant="h5"
          sx={{
            color: "#2b83c6",
            fontWeight: 700,
            mb: 2,
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
            <Typography sx={{ mb: 1 }}>Concert Name</Typography>
            <TextField
              fullWidth
              placeholder="Please input concert name"
              value={form.name}
              onChange={handleChange("name")}
              size="medium"
            />
          </Box>

          <Box>
            <Typography sx={{ mb: 1 }}>Total of seat</Typography>
            <TextField
              fullWidth
              type="number"
              value={form.seats}
              onChange={handleChange("seats")}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <PersonOutlineIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography sx={{ mb: 1 }}>Description</Typography>
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
            startIcon={<SaveOutlinedIcon />}
            onClick={handleSubmit}
            sx={{
              px: 4,
              py: 1.2,
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
  );
}
