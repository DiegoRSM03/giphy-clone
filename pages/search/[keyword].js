import { useState } from "react"
import Masonry from "react-responsive-masonry"

import { giphyApi } from "/api"
import { Gif } from "/components"
import * as S from "/styles/pages/search/[keyword].styles.js"

const SearchedKeyword = ({ keyword, ...props }) => {
  const [gifOrSticker, setGifOrSticker] = useState("gifsRelated")

  return (
    <S.SearchedKeyword>
      <S.Title>{ keyword }</S.Title>

      <S.MasonryItemSelector>
        <S.CurrentItemType className={ gifOrSticker === "gifsRelated" ? "gif-type-selected" : "sticker-type-selected" } />

        <S.MasonryItemType onClick={() => setGifOrSticker("gifsRelated")} >GIFs</S.MasonryItemType>
        <S.MasonryItemType onClick={() => setGifOrSticker("stickersRelated")} >Stickers</S.MasonryItemType>
      </S.MasonryItemSelector>

      <Masonry columnsCount={4} gutter="1rem">
        { props[gifOrSticker].map(masonryItem => (
          <Gif key={masonryItem.id} gifInfo={masonryItem} masonryMode />
        )) }
      </Masonry>
    </S.SearchedKeyword>
  )
}

export const getServerSideProps = async ({ params }) => {
  const API_KEY = process.env.API_KEY
  const keyword = params["keyword"]

  const giphyRequests = [
    giphyApi.get(`/gifs/search?api_key=${API_KEY}&bundle=low_bandwidth&q=${keyword}`),
    giphyApi.get(`/stickers/search?api_key=${API_KEY}&bundle=low_bandwidth&q=${keyword}`),
  ]

  const requestsResult = await Promise.allSettled(giphyRequests)

  const gifsRelated = requestsResult[0].value.data.data
  const stickersRelated = requestsResult[1].value.data.data

  return {
    props: {
      keyword,
      gifsRelated,
      stickersRelated
    }
  }
}

export default SearchedKeyword