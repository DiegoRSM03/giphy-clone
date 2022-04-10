import { MdFavorite } from "react-icons/md"
import { RiSendPlaneFill } from "react-icons/ri"
import { ImEmbed } from "react-icons/im"
import * as S from "/styles/pages/gif/[slug-and-id].styles.js"

const actionList = [
  { name: "Favorite", icon: <MdFavorite /> },
  { name: "Share", icon: <RiSendPlaneFill /> },
  { name: "Embed", icon: <ImEmbed /> }
]

const Actions = () => {
  return (
    <S.Actions>
      { actionList.map(action => (
        <S.Action>
          <S.ActionIcon>{ action.icon}</S.ActionIcon>
          <S.ActionName>{ action.name }</S.ActionName>
        </S.Action>
      ))}
    </S.Actions>
  )
}

export default Actions