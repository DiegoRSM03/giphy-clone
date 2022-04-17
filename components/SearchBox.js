import { useRef } from "react"
import { useRouter } from "next/router"
import { IoSearchSharp } from "react-icons/io5"
import * as S from "/styles/components/Searchbox.styles.js"

export const Searchbox = () => {
  const searchboxRef = useRef(null)
  const router = useRouter()

  const handleSubmitSearch = event => {
    event.preventDefault()
    const keyword = searchboxRef.current.value
    router.push(`/search/${keyword}`)
  }

  return (
    <S.Searchbox onSubmit={handleSubmitSearch} >
      <S.TextFieldSearch
        type="text"
        placeholder="Search all the GIFs and Stickers"
        ref={ searchboxRef }
      />
      <S.ButtonSearch>
        <IoSearchSharp />
      </S.ButtonSearch>
    </S.Searchbox>
  )
}