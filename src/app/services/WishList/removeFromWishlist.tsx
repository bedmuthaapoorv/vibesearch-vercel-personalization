import Resources from "@/app/resources/resources";
import axios from "axios";
export default async function removeFromWishlist(productId:string, access_token:any){
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
        let results=await axios.post(Resources.config["vibesearchAPIEndpoint"] + "/removefrom-wishlist", data, header)
        // console.log(results)
    }catch(e){
        // console.log(e)
    }  
}