import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/home.module.css'
const inter = Inter({ subsets: ['latin'] })
import Link from 'next/link'

const getData = async () => {
  let data = await fetch(`https://api.jikan.moe/v4/anime/1/full`)
  return data.json()
}


export default async function Home() {

  const data = await getData()
  let anime = data.data

  return (
    <div className={styles.home}>
      <div>
        <h1>Welcome To Anirank</h1>
      </div>
      <div>
        <Link href="/anime">
          <button className={styles.homeButton}> Check out Anime</button>
        </Link>
      </div>

    </div>
  )
}
