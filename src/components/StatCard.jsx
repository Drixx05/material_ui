import React from "react";
import { Card, CardContent, Box, Typography } from "@mui/material";

const StatCard = ({ icon: Icon, value, label }) => {
	return (
		<Card sx={{ flexBasis: "32%"}}>
			<CardContent>
				<Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
					<Icon sx={{ mr: 1 }} />
					<Typography variant="h4" component="div">
						{value}
					</Typography>
				</Box>
				<Typography color="text.secondary">{label}</Typography>
			</CardContent>
		</Card>
	);
};

export default StatCard;
