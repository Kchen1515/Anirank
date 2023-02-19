

const getEachAnime = async (slug:string) => {
  const data = await fetch(`https://api.jikan.moe/v4/anime/${slug}`)
  return data.json();
}


const AnimePage = async ({params}: any) => {

  const {slug} = params
  const anime = await getEachAnime(slug)
  console.log(anime.data.title)

  return (

    <div>
      <h1>testing</h1>
      <p>{anime.data.title}</p>
    </div>
  )
}

export default AnimePage