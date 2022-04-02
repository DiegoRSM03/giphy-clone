import styled from "styled-components"
import Image from "next/image"
import { MdExpandMore } from "react-icons/md"

export const NotFound = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 3rem;
`

export const EmojiGif = styled(Image)`

`

export const NotFoundMessage = styled.span`
  font-weight: bold;
  font-size: 17px;
  text-align: center;
  margin-top: 3rem;
`

export const ArrowDown = styled(MdExpandMore)`
  color: ${ props => props.theme.color.white };
  font-size: 2rem;
  margin: 1rem 0;
`