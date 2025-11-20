import { Box, CssBaseline, Typography } from "@mui/material";
import { AttachMoney, People, Message } from "@mui/icons-material";

import Sidebar from "./components/SideBar";
import Header from "./components/Header";
import StatCard from "./components/StatCard";
import OrdersTable from "./components/OrdersTable";
import Chart from "./components/Chart";

const chartData = [
	{ x: 1, y: 2 },
	{ x: 2, y: 6 },
	{ x: 3, y: 2 },
	{ x: 5, y: 9 },
	{ x: 8, y: 2 },
	{ x: 10, y: 4.5 },
];

export default function App() {
	return (
		<Box sx={{ display: "flex" }}>
			<CssBaseline />
			<Sidebar />
			<Box component="main" sx={{ flexGrow: 1, ml: "88px" }}>
				<Header />

				<Box
					sx={{
						display: "flex",
						flexWrap: "wrap",
						m: 5,
						justifyContent: "space-between",
					}}
				>
					<StatCard icon={AttachMoney} value="1000" label="Ventes" />
					<StatCard icon={People} value="300" label="Clients" />
					<StatCard icon={Message} value="5" label="Messages" />
				</Box>
				<Box sx={{ display: "flex", flexDirection: "column" }}>
					<Chart data={chartData} />
				</Box>

				<Box sx={{ width: "80%", mt: '30px', p: 3 }}>
					<Typography variant="h6" sx={{ mb: 2 }}>
						Dernières commandes
					</Typography>
					<OrdersTable />
				</Box>
			</Box>
		</Box>
	);
}
