import Resources from "@/app/resources/resources"
export default async function logOut(){
    await Resources.config["supabaseClient"].auth.signOut()
}