import styles from '../../styles/search.module.css'
import SearchBar from '@/components/SearchBar'
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { currentUser, auth } from '@clerk/nextjs/app-beta';
import type { User,} from '@clerk/nextjs/dist/api'



export default  async function MainPage() {

  const user: User | null = await currentUser();
  console.log(user?.id)


  return(
    <div className={styles.container}>
      <Navbar/>
      <div>
        <h1>Search All Your Favorite Animes</h1>
      </div>
      <div>
        {user?.emailAddresses[0].emailAddress}
      </div>
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
