import Resources from "@/app/resources/resources";
import axios from "axios";
import services from "../services";

export default async function getWishList(access_token: any, setState: any){
    let header={
        headers: {
            "apitoken": access_token
        }
    }
    // console.log(header)
    try{
        let results=await axios.get(Resources.config["vibesearchAPIEndpoint"] + "/get-wishlist", header)
        // console.log(results)
        setState(results["data"]["data"])
    }catch(e){
        // console.log(e)
    }
    
}