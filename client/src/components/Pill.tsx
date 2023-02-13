import PillModal from "@/components/PillModal";
import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import { FC, useState } from "react";

type Props = { pillId: "red" | "blue" };

const Pill: FC<Props> = ({ pillId: pillId }) => {
  const [open, setOpen] = useState(false);

  const handlePillClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const pillImage =
    pillId === "red"
      ? "https://news.emory.edu/features/2021/11/molnupiravir_experts_weigh_in_treatment_covid_19-11-2021/assets/T6ei4HzRxZ/social-media-molnupiravir-1024x512.jpeg"
      : "https://c8.alamy.com/comp/DD93G4/blue-pill-in-the-palm-of-a-hand-DD93G4.jpg";

  const pillColor = pillId === "red" ? "primary" : "secondary";

  const pillTitle = pillId === "red" ? "The Red Pill" : "The Blue Pill";

  const pillLabel = pillId === "red" ? "Not a Rickroll" : "Totally a Rickroll";

  const pillURL =
    pillId === "red"
      ? "https://picsum.photos/200/200"
      : "https://www.google.com/";

  return (
    <>
      <Card>
        <CardActionArea onClick={handlePillClick}>
          <CardMedia image={pillImage} style={{ height: 150 }} />
          <CardContent>
            <Typography variant="h6" color={pillColor} textAlign="center">
              {pillTitle}
            </Typography>
            <Typography variant="h3" textAlign="center" fontWeight="bold">
              {pillLabel}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <PillModal
        pillId={pillId}
        pillLabel={pillLabel}
        pillURL={pillURL}
        open={open}
        onClose={handleClose}
      />
    </>
  );
};

export default Pill;
