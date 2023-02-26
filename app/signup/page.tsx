import {SignUp } from "@clerk/nextjs/app-beta";
import styles from "../../styles/signup.module.css"

export default function Signup() {
  return (
    <div className={styles.container}>
      <SignUp
        signInUrl="/login"
        afterSignUpUrl="/anime"
      />
    </div>
  )
}