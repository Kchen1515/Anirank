import Link from 'next/link'
import styles from  '../styles/navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <div>
        <h3>Anirank</h3>
      </div>
      <div>
        <button>
          <Link href='/login'> Login</Link>
        </button>
      </div>
    </nav>
  )
}

export default Navbar