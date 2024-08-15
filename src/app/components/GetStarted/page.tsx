import GetStarted from "./GetStarted"
import { Metadata } from "next";
export const metadata: Metadata = {
    title: 'VIBE search'
};
export default function Page() {
    return (
        <GetStarted></GetStarted>
    )
}