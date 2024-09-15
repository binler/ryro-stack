
import {
    Link
} from "@remix-run/react";

export const handle = {
    breadcrumb: () => <Link to="/topic">Topic</Link>,
};

export default function Topic() {
    return <img width={1545} height={2250} src="data:image/gif;base64,R0lGODlhAwAFAPMAALJ2amWHfZmEdpmOeKCGZreUbqqDc7Kadp2RgJCqmqGgjLewm4uvp8aog8O5nwAAACH5BAAAAAAALAAAAAADAAUAAAQLsCV32CJBDWREAREAOw==" />
}