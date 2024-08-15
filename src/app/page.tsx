import config from "./resources/config";
import Components from "./Components";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'VIBE search'
};

export default async function Home() {
  return (

      <Components.GetStarted></Components.GetStarted>
  )
}