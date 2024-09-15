
import { Avatar } from "@radix-ui/themes";
import { json } from "@remix-run/node";
import type { MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import type { ColumnDef } from "@tanstack/react-table";
import { MyTable } from "~/components/mytable";

export const meta: MetaFunction = () => {
    return [
        { title: "Gists" },
        { name: "description", content: "Welcome to Gists" },
    ];
};

export async function loader() {
    const res = await fetch("https://api.artic.edu/api/v1/artworks");
    return json(await res.json());
}

interface ArtWork {
    id: number,
    title: string;
    inscriptions: string,
    color: {
        population: number
    },
    thumbnail: {
        lqip: string,
        alt_text: string
    }
}

export default function Gist() {
    const artworks = useLoaderData<typeof loader>();
    const columns: ColumnDef<ArtWork>[] = [
        {
            header: "ID",
            accessorKey: "id",
        },
        {
            header: "Title",
            accessorKey: "title",
        },
        {
            header: "Inscriptions",
            accessorKey: "inscriptions",
        },
        {
            header: "Population",
            accessorKey: "color.population",
        },
        {
            accessorKey: 'thumbnail',
            cell: ({ row }) => <Avatar fallback="A" size="4" src={row.original.thumbnail.lqip} />,
        }
    ];

    return (
        <MyTable columns={columns} data={artworks.data} />
    )
}