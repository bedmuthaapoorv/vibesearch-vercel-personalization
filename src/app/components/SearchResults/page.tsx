import { Suspense } from "react"
import SearchResults from "./SearchResults"
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'VIBE search'
};

export default function Page() {
    return (<Suspense fallback={
        <div>
            loading...
        </div>
    }>
        <SearchResults></SearchResults>
    </Suspense>)
}