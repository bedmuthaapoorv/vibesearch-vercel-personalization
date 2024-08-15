import SignUp from "./SignUp"
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'VIBE search'
};

export default function Page(){
    return (<SignUp></SignUp>)
}