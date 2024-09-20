import { Progress } from '@radix-ui/themes';
import {
    useNavigation,
} from "@remix-run/react";

export default function Loading() {
    const navigation = useNavigation();
    return navigation.state === "loading" && (
        <Progress radius='none' />
    );
}