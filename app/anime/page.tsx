'use client'

import styles from '../../styles/search.module.css'
import SearchBar from '@/components/SearchBar'
import Link from 'next/link';
import {useState, useEffect} from 'react';


export default function SearchAnime() {
  const [topAnime, setTopAnime] = useState([])

  const getTopAnime = async () => {
    const data = await fetch('https://api.jikan.moe/v4/top/anime?page=1')
      .then((res) => res.json())
    // const res = await data.json()
    // console.log(res)
    setTopAnime(data.data)
  }

  useEffect(()=> {
    getTopAnime();
  }, [])

  console.log(topAnime)

  return(
    <div className={styles.container}>
      <div>
        <h1>Search All Your Favorite Animes</h1>
      </div>
      {
        topAnime.map((anime, index) => {
          return(
            <div key={index}>
              <Link href={`anime/${anime.mal_id}`}>
                <p>{anime.mal_id}</p>
              </Link>
            </div>
          )
        })
      }

      <SearchBar/>
    </div>
  )
}


// export async function generateStaticParams() {
//   let data = await getData()
//   let animeInfo = data.data
//   return [{
//     slug: animeInfo
//   }]
// }
