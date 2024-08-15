import Resources from "@/app/resources/resources";
export default async function passwordLogIn(email:string, password:string){
    await Resources.config["supabaseClient"].auth.signInWithPassword(
        {
            email: email,
            password: password
        }
    )
}