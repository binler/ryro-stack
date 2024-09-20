
import { AspectRatio, Box, Flex, RadioCards, Text } from "@radix-ui/themes";
import type { MetaFunction, } from "@remix-run/node";
import {
	Link
} from "@remix-run/react";

export const meta: MetaFunction = () => {
	return [
		{ title: "Home" },
		{ name: "description", content: "Welcome to RyRo-Stack" },
	];
};

export const handle = {
	breadcrumb: () => <Link to="/">Home</Link>,
};

export default function Index() {
	return (
		<>
			<AspectRatio ratio={16 / 8}>
				<img
					src="https://images.unsplash.com/photo-1479030160180-b1860951d696?&auto=format&fit=crop&w=1200&q=80"
					alt="A house in a forest"
					style={{
						objectFit: 'cover',
						width: '100%',
						height: '100%',
						borderRadius: 'var(--radius-2)',
					}}
				/>
			</AspectRatio>
			<Box mt={"8"}>
				<RadioCards.Root defaultValue="1" columns={{ initial: '1', sm: '4' }}>
					<RadioCards.Item value="1">
						<Flex direction="column" width="100%">
							<Text weight="bold">8-core CPU</Text>
							<Text>32 GB RAM</Text>
						</Flex>
					</RadioCards.Item>
					<RadioCards.Item value="2">
						<Flex direction="column" width="100%">
							<Text weight="bold">6-core CPU</Text>
							<Text>24 GB RAM</Text>
						</Flex>
					</RadioCards.Item>
					<RadioCards.Item value="3">
						<Flex direction="column" width="100%">
							<Text weight="bold">4-core CPU</Text>
							<Text>16 GB RAM</Text>
						</Flex>
					</RadioCards.Item>
					<RadioCards.Item value="4">
						<Flex direction="column" width="100%">
							<Text weight="bold">4-core CPU</Text>
							<Text>16 GB RAM</Text>
						</Flex>
					</RadioCards.Item>
				</RadioCards.Root>
			</Box>
		</>
	);
}
