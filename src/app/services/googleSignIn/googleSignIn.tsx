import config from '@/app/resources/config';

export default async function googleSignIn() {
  // https://vibesearch-vercel.vercel.app
  // http://localhost:3000
  const supabase = config["supabaseClient"];
  await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: 'https://vibesearch-vercel.vercel.app/components/HomeScreen',
      queryParams: {
        access_type: 'offline',
        prompt: 'select_account',
      }
    }
  }).then(() => {
  })
}