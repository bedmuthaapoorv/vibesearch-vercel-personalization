import Resources from "@/app/resources/resources"

export default async function getAccessToken(setState: any) {
    let session=await Resources.config["supabaseClient"].auth.getSession()
    if(session && session["data"] && session["data"]["session"] && session["data"]["session"]["access_token"]){
        setState? setState(session):""
        return session
    }else{
        session={
            "data":{
                "session":{
                    "access_token": "P2H8RNXPvIiPoeM0iJEDjJ2Skk37h5pScMQF5oMRUXm3dKoUC2wxrWImx5ccA9VOrOoeaLcMQqn57vYDPucTkYnkkH6icUQy09vtd5eIrAIXhBtmUfAmPI3thD2OoUeF"
                }
            }
        }
        setState? setState(session) : ""
        return session
    }
}