import Masonry from "react-responsive-masonry"
import { NotFoundLayout } from "/layouts"
import { giphyApi } from "/api"
import { Gif } from "/components"
import * as S from "/styles/pages/404.styles.js"

const NotFound = ({ trendingGifs }) => {
  return (
    <S.NotFound>
      <S.EmojiGif 
        src="/404-main-emoji.gif" 
        width="300"
        height="300"
      />

      <S.NotFoundMessage>
        Oops! There’s nothing here.<br />
        For GIFs that DO exist, here's our trending feed...
      </S.NotFoundMessage>

      <S.ArrowDown />

      <Masonry columnsCount={4} gutter="1rem">
        { trendingGifs.map(gifInfo => (
          <Gif key={gifInfo.id} gifInfo={gifInfo} masonryMode />
        )) }
      </Masonry>
    </S.NotFound>
  )
}

NotFound.getLayout = page => {
  return (
    <NotFoundLayout>
      { page }
    </NotFoundLayout>
  )
}

export const getStaticProps = async () => {
  const API_KEY = process.env.API_KEY
  const response = await giphyApi.get(`/gifs/trending?api_key=${API_KEY}&bundle=low_bandwidth&limit=40`)

  return {
    props: {
      trendingGifs: response.data.data
    },
    revalidate: (60 * 60 * 12) // Revalidate this endpoint each 12 hs
  }
}

export default NotFound