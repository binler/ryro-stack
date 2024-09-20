import { Box, Flex, Heading, Link } from '@radix-ui/themes';
import { NavLink } from "@remix-run/react";

interface Nav {
    name: string;
    url: string;
}

const Menu: Nav[] = [
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' },
    { name: 'Gists', url: '/gist' },
    { name: 'Sign in', url: '#' },
    { name: 'Sign up', url: '#' }
];

const NavItem: React.FC<Nav> = ({ name, url }) => (
    <Link asChild>
        <NavLink to={url}>{name}</NavLink>
    </Link>
);


const Header: React.FC = () => {
    return (
        <Box style={{ background: 'var(--red)' }}>
            <Flex align="center" justify="between">
                <Heading size="8">Logo</Heading>
                <Flex gap="4">
                    {Menu.map((item) => (
                        <NavItem key={item.name} {...item} />
                    ))}
                </Flex>
            </Flex>
        </Box>
    );
};

export default Header;