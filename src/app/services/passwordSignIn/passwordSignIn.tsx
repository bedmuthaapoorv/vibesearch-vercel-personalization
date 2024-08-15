import Resources from "@/app/resources/resources";
export default async function passwordSignIn(email:string, password:string) {
    await Resources.config["supabaseClient"].auth.signUp({
        email:email,
        password: password
    })
}