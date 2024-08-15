"use client"
import styles from "./HomeScreen.module.css"
import { useEffect, useState } from 'react';
import services from '@/app/services/services';
import Utilities from '../Utilities/Utilities';

export default function HomeScreen() {
    let [openMenu, setOpenMenu] = useState(false);
    let [userDetails, setUserDetails] = useState<any>({})
    useEffect(() => {
            setTimeout(()=>{
                services.getUserDetails(setUserDetails)
            },1000)
        }, [])
    return <div className={`${styles.homescreen__parent}`}>
        {Utilities.LeftMenu(openMenu, null, setOpenMenu)}
        <div className={`${styles.container}`} style={{
            background: openMenu ? "rgba(255,255,255,.5)" : "white"
        }}
            onClick={
                () => {
                    if (openMenu) setOpenMenu(false);
                }
            }
        >
            {Utilities.HomeScreenHeader(setOpenMenu, userDetails, null, true, null)}
            <div className={styles.homescreen}>
                <div className={`${styles.homescreen__content}`}>
                    <Utilities.VibeLogo></Utilities.VibeLogo>
                    <p className={`${styles.homescreen__userName}`}>
                        {userDetails && userDetails["data"] && userDetails["data"]["user"] ? "Hello " + (userDetails["data"]["user"]["user_metadata"]["full_name"].split(" ")[0]) + " !" : ""}
                    </p>
                    <div className={`${styles.content__mediumText} montserrat fontWeight800`}>
                        Find Products You Love!
                    </div>
                    <div className={`${styles.content__smallText} cabin`}>
                        Upload a photo or type in the vibe you're looking for
                    </div>
                </div>
                {Utilities.SearchBox("What are you looking for?", openMenu, "")}
            </div>
            <div className={`${styles.container__padding}`}>

            </div>
        </div>
    </div>
}