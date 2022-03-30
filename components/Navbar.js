import Image from "next/image"
import Link from "next/link"
import { ImUser } from "react-icons/im"
import * as S from "/styles/Navbar.styles.js"

const navItemLabelList = [
  { label: "Reactions", bottomColor: "#05C7FF", goTo: "/reactions" }, 
  { label: "Entertainment", bottomColor: "#5478FF", goTo: "/entertainment" }, 
  { label: "Sports", bottomColor: "#8943FF", goTo: "/sports" }, 
  { label: "Stickers", bottomColor: "#AA37EF", goTo: "/stickers" }, 
  { label: "Artists", bottomColor: "#C83ED3", goTo: "/artists" }, 
]

export const Navbar = () => {
  return (<>
    <S.Navbar>
      <Image 
        src="/logo.gif" 
        alt="Giphy's company logo"
        width="165"
        height="35"
        loading="eager"
      />

      <S.NavItemList>
        { navItemLabelList.map(item => (
          <Link href={ item.goTo } key={ item.goTo }>
            <S.NavItem>
              <S.NavItemLabel>{ item.label }</S.NavItemLabel>
              <S.NavItemBotLine color={ item.bottomColor } />
            </S.NavItem>
          </Link>
        )) }
        <S.NavItem>
          <S.NavItemDotsOption />
          <S.NavItemBotLine color="#DE44BD" />
        </S.NavItem>
      </S.NavItemList>

      <S.ActionButtonGroup>
        <S.ActionButton>Upload</S.ActionButton>
        <S.ActionButton>Create</S.ActionButton>
      </S.ActionButtonGroup>

      <S.LoginButton>
        <S.LoginIcon>
          <ImUser />
        </S.LoginIcon>
        <S.LoginLabel>Log in</S.LoginLabel>
      </S.LoginButton>
    </S.Navbar>
  </>)
}