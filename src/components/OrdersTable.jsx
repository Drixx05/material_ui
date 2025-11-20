import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Typography,
} from "@mui/material";

const rows = [
	{ id: 1, name: "Nom 1", date: "24-04-2025", status: "En cours" },
	{ id: 2, name: "Nom 2", date: "16-04-2025", status: "Payée" },
	{ id: 3, name: "Nom 3", date: "10-04-2025", status: "Terminée" },
	{ id: 4, name: "Nom 5", date: "02-04-2025", status: "Terminée" },
];

export default function OrdersTable() {
	return (
		<TableContainer>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell>
							<b>ID</b>
						</TableCell>
						<TableCell>
							<b>Nom</b>
						</TableCell>
						<TableCell>
							<b>Date</b>
						</TableCell>
						<TableCell>
							<b>Statut</b>
						</TableCell>
					</TableRow>
				</TableHead>

				<TableBody>
					{rows.map((row) => (
						<TableRow key={row.id}>
							<TableCell>{row.id}</TableCell>
							<TableCell>{row.name}</TableCell>
							<TableCell>{row.date}</TableCell>
							<TableCell>{row.status}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
