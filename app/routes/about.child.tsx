import {
    Link
} from "@remix-run/react";

export const handle = {
    breadcrumb: () => <Link to="/about/child">About Child</Link>,
};


export default function AboutChild() {
    return <h1>About Child</h1>
}