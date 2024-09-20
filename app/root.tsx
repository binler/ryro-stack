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
import type { MetaFunction, } from "@remix-run/node";
import BreadCrumb from "~/components/partials/breadcrumb";
import Footer from '~/components/partials/footer';
import Head from '~/components/partials/head';
import Header from '~/components/partials/header';
import Loading from "~/components/partials/loading";

export const meta: MetaFunction = ({ matches }) => {
	const parentMeta = matches
		.flatMap((match) => match.meta ?? [])
		.filter((meta) => !("title" in meta));
	return [...parentMeta, { title: "RyRo-Stack" }];
};


export function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<Head />
			<body>
				<Theme>
					<Loading />
					<Container size="4" height={'100vh'}>
						<Header />
						<BreadCrumb />
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
			<div>
				<h1>
					{error.status} {error.statusText}
				</h1>
				<p>{error.data}</p>
			</div>
		);
	}
	if (error instanceof Error) {
		return (
			<div>
				<h1>Error</h1>
				<p>{error.message}</p>
				<p>The stack trace is:</p>
				<pre>{error.stack}</pre>
			</div>
		);
	}
	return <h1>Unknown Error</h1>;
}

export default function App() {
	return <Outlet />;
}
