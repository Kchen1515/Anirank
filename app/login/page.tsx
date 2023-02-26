import { SignIn } from "@clerk/nextjs/app-beta";
import styles from '../../styles/signin.module.css'
export default function Login() {
  return (
    <div className={styles.container}>
      <SignIn

        signUpUrl="/login"
        afterSignInUrl="/anime"
      />
    </div>
  )
}