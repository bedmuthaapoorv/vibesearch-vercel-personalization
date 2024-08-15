import axios from "axios"
import Resources from "@/app/resources/resources"
export default async function clicked(access_token: any, id: any){
    let header={
        headers: {
            "apitoken": access_token
        }
    }
    // console.log(header)
    try{
        await axios.post(Resources.config["vibesearchAPIEndpoint"] + "/clicked", 
            {
                "product_id" : id
            }, header
        )
        // console.log(results)
    }catch(e){
        // console.log(e)
    }
}