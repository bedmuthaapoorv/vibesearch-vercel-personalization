// "use client";
// import styles from "./LogIn.module.css";
// import Components from "@/app/Components";
// import services from "@/app/services/services";
// import Link from "next/link";
// import Utilities from "../Utilities/Utilities";
// import backIconLogo from "../../resources/back-icon.png";
// import { useEffect, useState } from "react";

// export default function LogIn() {
//   let [cred, setCred] = useState({
//     Email: "hi",
//     Password: "",
//   });
//   // useEffect(()=>{
//   //     console.log(cred)
//   // })
//   return (
//     <div className={`${styles.signup}`}>
//       <Link href={'/components/GetStarted'}  className={`${styles.back__image}`}>
//         <img
         
//           src={backIconLogo.src}
//           alt="Back Icon"
//         />
//       </Link>

//       {/* <div>{JSON.stringify(cred)}</div> */}
//       <div className={`${styles.signup__form}`}>
//         <div className={`${styles.signup__title}`}>
//           <div className={`${styles.title__content} montserrat fontWeight600`}>
//             Login to Your Account
//           </div>
//         </div>

//         {Utilities.formElement({
//           label: "Email",
//           placeholder: "Enter Email",
//           isPassword: false,
//           setState: setCred,
//           state: cred,
//         })}
//         {Utilities.formElement({
//           label: "Password",
//           placeholder: "Enter Password",
//           isPassword: true,
//           tip: "Forgot Password",
//           setState: setCred,
//           state: cred,
//         })}
//       </div>
//       <Link href={"/components/HomeScreen"}>
//         <div
//           className={`${styles.signup__signup} inter500 button`}
//           onClick={() => {
//             services.passwordLogIn(cred["Email"], cred["Password"]);
//           }}
//         >
//           Login
//         </div>
//       </Link>
//       <div className={`${styles.signup__login} inter500`}>
//         Don't have an account? <Link href={"SignUp"}>Sign Up</Link>
//       </div>
//     </div>
//   );
// }
