import { AppBar, Toolbar, Typography, IconButton, Avatar } from "@mui/material";

const Header = ({ title = "Tableau de bord" }) => {
	return (
		<AppBar position="static" color="primary">
			<Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
				<Typography variant="h6" sx={{ color: "white", fontWeight: 500 }}>
					{title}
				</Typography>

				<IconButton>
					<Avatar src="/broken-image.jpg" />
				</IconButton>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
