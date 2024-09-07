import { Box, Flex, Heading, Link } from '@radix-ui/themes';
import { NavLink } from "@remix-run/react";

export default function Header() {
    return (
        <Box style={{ background: 'var(--red)' }}>
            <Flex align="center" justify="between">
                <Heading size="8">Logo</Heading>
                <Flex gap="4">
                    <Link asChild>
                        <NavLink to="/">Home</NavLink>
                    </Link>
                    <Link asChild>
                        <NavLink to="/about">About</NavLink>
                    </Link>
                    <NavLink to="#">Sign up</NavLink>
                    <NavLink to="#">Sign in</NavLink>
                </Flex>
            </Flex>
        </Box>
    );
}