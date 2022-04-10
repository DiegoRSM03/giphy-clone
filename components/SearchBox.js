import { IoSearchSharp } from "react-icons/io5"
import * as S from "/styles/components/Searchbox.styles.js"

export const Searchbox = () => {
  return (
    <S.Searchbox>
      <S.TextFieldSearch
        type="text"
        placeholder="Search all the GIFs and Stickers"
      />
      <S.ButtonSearch>
        <IoSearchSharp />
      </S.ButtonSearch>
    </S.Searchbox>
  )
}