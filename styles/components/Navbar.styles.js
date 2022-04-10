import styled from "styled-components"
import Image from "next/image"
import { BsThreeDotsVertical } from "react-icons/bs"

export const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 1.3rem;
`

export const NavbarLogo = styled(Image)`
  cursor: pointer;
`

export const NavItemList = styled.ul`
  display: flex;
  align-items: flex-end;
  gap: 5px;
`

export const NavItem = styled.li`
  cursor: pointer;
  padding-top: .4rem;
  transition: .2s ease-out 0s;

  &:hover {
    background-color: rgba(255, 255, 255, .2);
  }
`

export const NavItemLabel = styled.span`
  font-weight: bold;
  font-size: ${ props => props.theme.fontSize.menuItem };
  margin: 0 1rem;
`

export const NavItemDotsOption = styled(BsThreeDotsVertical)`
  color: white;
  font-size: 1.2rem;
  margin: 0 .3rem;
`

export const NavItemBotLine = styled.div`
  background-color: ${ props => props.color ? props.color : "rgba(0, 0, 0, 0)"};
  width: 100%;
  height: 4px;
  margin-top: .4rem;
`

export const ActionButtonGroup = styled.div`
  display: flex;
  gap: 4px;
`

export const ActionButton = styled.button`
  background-color: ${ props => props.theme.color.lightPurple };
  font-weight: bold;
  font-size: ${ props => props.theme.fontSize.menuItem };

  width: 83px;
  height: 35px;
  text-align: center;
`

export const LoginButton = styled.div`
  display: flex;
  height: 35px;
`

export const LoginIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${ props => props.theme.color.white };
  background-color: ${ props => props.theme.color.lightGray };
  font-size: 1.2rem;

  padding: 0 10px;
`

export const LoginLabel = styled.span`
  display: flex;
  align-items: center;

  background-color: ${ props => props.theme.color.gray };
  font-weight: bold;
  font-size: ${ props => props.theme.fontSize.menuItem };
  padding: 0 35px;
`