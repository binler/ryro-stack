import {
    Link
} from "@remix-run/react";

export const handle = {
    breadcrumb: () => <Link to="/about">About</Link>,
};

export async function loader() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Profile"), 2000);
    });
}

export default function About() {
    return <h1>About</h1>
}