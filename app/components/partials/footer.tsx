import { Flex, Link } from '@radix-ui/themes';

export default function Footer() {
    return (
        <Flex align="center" gap="4" mt="4">
            <Flex gap="2" direction="column">
                <Link href="#">Home</Link>
                <Link href="#">About</Link>
            </Flex>
            <Flex gap="2" direction="column">
                <Link href="#">Home</Link>
                <Link href="#">About</Link>
            </Flex>
        </Flex>
    );
}