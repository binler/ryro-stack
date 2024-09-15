import { Box, Flex } from '@radix-ui/themes';
import { useMatches } from "@remix-run/react";

interface Bread {
    handle?: {
        breadcrumb: (match: Bread) => React.ReactNode;
    };
}

export default function BreadCrumb() {
    const matches = useMatches() as Bread[];
    const pagesHasBreadCrumb = matches.filter((match) => match?.handle?.breadcrumb);

    return (
        <Flex gap="3" mt="5">
            {pagesHasBreadCrumb.map((match, index) => (
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                <Box key={index}>
                    {match.handle?.breadcrumb(match)} {index === pagesHasBreadCrumb.length - 1 ? '' : '/'}
                </Box>
            ))}
        </Flex>
    );
}