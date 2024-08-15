"use client"
import Utilities from "../Utilities"
import Resources from "@/app/resources/resources"
import { motion } from 'framer-motion'
import styles from './LeftMenu.module.css'
import { useEffect, useState } from "react"
import services from "@/app/services/services"
import Link from "next/link"
export default function LeftMenu(openMenu: boolean, query:any="", setOpenMenu:any) {

    let [userDetails, setUserDetails] = useState<any>({
        "data": {
            "user": null
        }
    })
    useEffect(() => {
        if (userDetails["data"]["user"] == null) {
            setTimeout(()=>{
                services.getUserDetails(setUserDetails)
            },1000)
        }
    }, [])
    let [showDelete, setShowDelete]=useState<Number>(-1);
    let [history, setHistory] = useState<any>(null);
    let temp:any=""
    useEffect(()=>{
        temp=localStorage? localStorage.getItem("vibesearch-history"): "";
        localStorage? setHistory(localStorage.getItem("vibesearch-history")?.split(",")) :""
    }, [temp, query])
    return (
        <motion.div initial={{ x: -308 }} animate={{ x: openMenu ? 0 : -308 }}>
            <div className={`${styles.menu}`}>
                <div className={`${styles.menu__historyContainer}`}>
                    <div className={`${styles.historyContainer__flex}`}>
                        <img src={Resources.menuSandwichIcon.src} 
                        className={`${styles.historyContainer__sandwich} `}
                        onClick={
                            ()=>{
                                setOpenMenu(false)
                            }
                        }
                        ></img>
                        <div className={`montserrat ${styles.historyContainer__title} `}>{history && history.length>=2? "Recent": ""}</div>
                        <div className={`${styles.historyContainer__historyElements} `}>
                            {
                                history && history.length>=2 ? history.map((values:any, index:any) => {
                                    if(index==0){
                                        return <div key={index}></div>
                                    }
                                    return (
                                        <div key={index} className={`${styles.historyContainer__element}`} onMouseEnter={()=>{
                        
                                            //setShowDelete(index)
                                        }}
                                        onMouseLeave={
                                            ()=>{
                                                //setShowDelete(-1)
                                            }    
                                        }
                                        >
                                            <Link href={'/components/SearchResults?query='+values} onClick={
                                                ()=>setOpenMenu(false)
                                            }>
                                                <div className={`cabin ${styles.historyContainer__historyTitle}`}>{values}</div>
                                            </Link>
                                        </div>
                                    )
                                }): <div className={`${styles.historyContainer__element}`}>No Searches Yet</div>
                            }
                        </div>
                    </div>
                </div>
                <div className={`${styles.LeftMenu__helpFlex}`}>
                    <img className={`${styles.LeftMenu__helpIcon}`} src={Resources.helpIcon.src}></img>
                    <div className={`montserrat ${styles.LeftMenu__helpButton}`}>Help</div>
                </div>
                <div className={`${styles.menu__accountContainer}`}>
                    <div className={`${styles.menu__account}`}>
                        <img className={`${styles.account__image}`} src={userDetails["data"]["user"] && userDetails["data"]["user"]["user_metadata"]["picture"] ? userDetails["data"]["user"]["user_metadata"]["picture"] : Resources.guestModeIcon.src}></img>
                        <div className={`${styles.account__name}`}>{userDetails["data"]["user"] ? userDetails["data"]["user"]["user_metadata"]["full_name"] : "Guest Mode"}</div>
                        <div className={`${styles.account__logout}`}>{!userDetails["data"]["user"] ? <Link href={"/components/GetStarted"}>Log in</Link> : <Link href={'/components/GetStarted'}><div onClick={() => services.logOut()}>Log Out</div></Link>}</div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}