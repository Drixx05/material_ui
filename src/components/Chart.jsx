import { Paper, Box, Typography } from "@mui/material";
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
    ResponsiveContainer,
} from "recharts";

const defaultData = [
	{ x: 1, y: 2 },
	{ x: 2, y: 6 },
	{ x: 3, y: 2 },
	{ x: 4, y: 8 },
	{ x: 5, y: 9 },
	{ x: 6, y: 3 },
	{ x: 7, y: 2 },
	{ x: 8, y: 1 },
	{ x: 9, y: 4 },
	{ x: 10, y: 5 },
];

export default function Chart({
	title = "Graphique (avec @mui/x-charts)",
	data = defaultData,
}) {
	return (


			<Box sx={{ height: 300 }}>
						<Typography variant="h6" sx={{ mb: 2, ml: 3 }}>
				{title}
			</Typography>
                <ResponsiveContainer width="20%" height="100%">
				<LineChart data={data}>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="x" />
					<YAxis />
					<Tooltip />
					<Line
						type="monotone"
						dataKey="y"
						stroke="#00bcd4"
						strokeWidth={3}
						dot={{
							fill: "#00bcd4",
							r: 5,
							stroke: "#fff",
							strokeWidth: 2,
						}}
						activeDot={{ r: 8 }}
					/>
				</LineChart>
                </ResponsiveContainer>
			</Box>
	);
}
