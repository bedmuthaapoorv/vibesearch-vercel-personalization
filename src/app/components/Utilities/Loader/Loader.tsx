'use client'
import Lottie from "react-lottie"
import Resources from "@/app/resources/resources";
export default function Loader(){
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: Resources.loadingAnimation,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    return <Lottie options={defaultOptions}
                height={200}
                width={200}>
            </Lottie>
}