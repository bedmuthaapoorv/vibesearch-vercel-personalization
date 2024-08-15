import RightMenu from './RightMenu';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'VIBE search'
};

export default function Page(){
    return (<RightMenu></RightMenu>)
}