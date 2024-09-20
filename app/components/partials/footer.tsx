import { Box, Flex, Link } from '@radix-ui/themes';

export default function Footer() {
    return (
        <Box as="div" position="fixed" bottom={"0"} height={'200px'}>
            <Flex align="center" gap="4">
                <Flex gap="2" direction="column">
                    <Link href="#">Home</Link>
                    <Link href="#">About</Link>
                </Flex>
                <Flex gap="2" direction="column">
                    <Link href="#">Home</Link>
                    <Link href="#">About</Link>
                </Flex>
            </Flex>
        </Box>
    );
}