'use client'

import Link from 'next/link'
import styles from  '../styles/navbar.module.css'
import { UserButton } from '@clerk/nextjs';

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <div>
        <h3>Anirank</h3>
      </div>
      <div>
        <UserButton/>
      </div>
    </nav>
  )
}

export default Navbar