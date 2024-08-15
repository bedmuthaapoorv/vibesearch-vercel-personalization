import HomeScreen from "./HomeScreen"
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'VIBE search'
};

export default function Page(){
    return (<HomeScreen></HomeScreen>)
}