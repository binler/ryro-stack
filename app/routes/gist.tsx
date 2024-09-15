import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
    return [
        { title: "Gists" },
        { name: "description", content: "Welcome to Gists" },
    ];
};

export async function loader() {
    const res = await fetch("https://api.github.com/gists");
    return json(await res.json());
}

export default function Gist() {
    const gists = useLoaderData<typeof loader>();

    return (
        <ul>
            {gists.map((gist: any) => (
                <li key={gist.id}>
                    <a href={gist.html_url}>{gist.id}</a>
                </li>
            ))}
        </ul>
    )
}