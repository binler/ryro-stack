import {
	Outlet,
	Scripts,
	ScrollRestoration,
	isRouteErrorResponse,
	useRouteError
} from "@remix-run/react";
import '@radix-ui/themes/styles.css';
import '~/styles/main.css';

import { Box, Container, Theme } from '@radix-ui/themes';
import Footer from '~/components/partials/footer';
import Head from '~/components/partials/head';
import Header from '~/components/partials/header';


export function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<Head />
			<body>
				<Theme>
					<Container size="3">
						<Header />
						<Box mt="4">
							{children}
						</Box>
						<Footer />
					</Container>
					<ScrollRestoration />
					<Scripts />
				</Theme>
			</body>
		</html>
	);
}

export function ErrorBoundary() {
	const error = useRouteError();

	if (isRouteErrorResponse(error)) {
		return (
			<>
				<h1>
					{error.status} {error.statusText}
				</h1>
				<p>{error.data}</p>
			</>
		);
	}

	return (
		<>
			<h1>Error!</h1>
			<p>{"Unknown error"}</p>
		</>
	);
}

export default function App() {
	return <Outlet />;
}
