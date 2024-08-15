import Resources from "@/app/resources/resources";
import axios from "axios";
import services from "../services";

export default async function addToWishList(productId:string, access_token: any){
    let data={
        "product_id": productId
    }
    let header={
        headers: {
            "apitoken": access_token
        }
    }
    // console.log(data)
    // console.log(header)
    try{
        let results=await axios.post(Resources.config["vibesearchAPIEndpoint"] + "/addin-wishlist", data, header)
        // console.log(results)
    }catch(e){
        // console.log(e)
    }
    // setState(results["data"])
}