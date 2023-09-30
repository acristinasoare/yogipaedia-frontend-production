// Reusable modal component/card that renders the individual pose data pulled from the database.
// Modal: Displays Image, English name, Sanskrit name, description, favourites button (heart - outline before, then filled when clicked/added to favourites, reverse to remove), optional: add to flow button. Close button.

import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import "../../styles/app_static_sass/pose-details.scss";

// MUI modal inbuilt style settings
const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 300,
	bgcolor: "background.paper",
	border: "2px solid #000",
	boxShadow: 24,
	p: 4,
};

const PoseDetails = ({
	userId,
	poseId,
	poseImage,
	sanskritName,
	englishName,
	poseBenefits,
	poseDescription,
	poseLevel,
	handleFavouriteClick,
}) => {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<div>
			<Button className="pose__modal-button" onClick={handleOpen}>
				{englishName}
			</Button>
			<Modal
				className="pose__modal"
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Card className="pose__card" sx={{ style }}>
					<CardMedia
						className="pose__image"
						component="img"
						sx={{ height: 250, width: 250 }}
						image={poseImage}
						title="green iguana"
					/>
					<CardContent className="pose__text-areas">
						<Typography
							className="pose__names"
							gutterBottom
							variant="h5"
							component="div"
						>
							{englishName} / {sanskritName}
						</Typography>
						<br />
						<Typography
							className="pose__description"
							component="div"
							variant="body2"
							color="text.secondary"
						>
							{poseDescription}
						</Typography>
						<br />
						<Typography
							className="pose__benefits"
							component="div"
							variant="body2"
							color="text.secondary"
						>
							Benefits: {poseBenefits}
						</Typography>
					</CardContent>
					<CardActions>
						<Button
							className="card__button"
							size="small"
							onClick={() =>
								handleFavouriteClick(
									(userId = { userId }),
									(poseId = { poseId })
								)
							}
						>
							Add to my favourites
						</Button>
					</CardActions>
				</Card>
			</Modal>
		</div>
	);
};
export default PoseDetails;
