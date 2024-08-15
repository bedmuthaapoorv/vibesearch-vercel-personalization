export default function isUserLoggedIn(userDetails: any){
    return (userDetails["data"] && userDetails["data"]["user"])?true:false
}