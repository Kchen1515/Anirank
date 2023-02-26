import styles from '../styles/home.module.css'
import Link from 'next/link'





export default function Home() {



  return (
    <div>
    <div className={styles.home}>
      <div>
        <h1>Welcome To Anirank</h1>
      </div>
      <div className={styles.buttonCtn}>
        <Link href="/signup">
          <button className={styles.homeButton}> Register</button>
        </Link>
        <Link href="/login">
          <button className={styles.homeButton}> Sign In</button>
        </Link>
      </div>

    </div>
    </div>
  )
}
