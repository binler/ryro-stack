import { Table } from '@radix-ui/themes';
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
	return [
		{ title: "Home page" },
		{ name: "description", content: "Welcome to Remix!" },
	];
};

export default function Index() {
	return (
		<Table.Root>
			<Table.Header>
				<Table.Row>
					<Table.ColumnHeaderCell>Full name</Table.ColumnHeaderCell>
					<Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
					<Table.ColumnHeaderCell>Group</Table.ColumnHeaderCell>
				</Table.Row>
			</Table.Header>

			<Table.Body>
				<Table.Row>
					<Table.RowHeaderCell>Danilo Sousa</Table.RowHeaderCell>
					<Table.Cell>danilo@example.com</Table.Cell>
					<Table.Cell>Developer</Table.Cell>
				</Table.Row>

				<Table.Row>
					<Table.RowHeaderCell>Zahra Ambessa</Table.RowHeaderCell>
					<Table.Cell>zahra@example.com</Table.Cell>
					<Table.Cell>Admin</Table.Cell>
				</Table.Row>

				<Table.Row>
					<Table.RowHeaderCell>Jasper Eriksson</Table.RowHeaderCell>
					<Table.Cell>jasper@example.com</Table.Cell>
					<Table.Cell>Developer</Table.Cell>
				</Table.Row>
			</Table.Body>
		</Table.Root>
	);
}
