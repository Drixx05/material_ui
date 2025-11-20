import {
	Drawer,
	List,
	ListItem,
	ListItemIcon,
} from "@mui/material";
import {
	Home,
	Dataset,
	Add,
	People,
	BarChart,
	Settings,
} from "@mui/icons-material";

const navigationItems = [
	{ icon: Home, id: "home" },
	{ icon: Dataset, id: "dataset" },
	{ icon: Add, id: "add" },
	{ icon: People, id: "people" },
	{ icon: BarChart, id: "chart" },
	{ icon: Settings, id: "settings" },
];

const Sidebar = () => {
	return (
		<Drawer variant="permanent" anchor="left">
			<List sx={{ mt: "65px" }}>
				{navigationItems.map((item) => {
					const { icon: Icon } = item;
					return (
						<ListItem key={item.id} >
							<ListItemIcon >
								<Icon sx={{ width: "100%" }}/>
							</ListItemIcon>
						</ListItem>
					);
				})}
			</List>
		</Drawer>
	);
};

export default Sidebar;
