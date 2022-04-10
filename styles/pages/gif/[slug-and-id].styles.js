import styled from "styled-components"
import { BiLinkExternal } from "react-icons/bi"
import { BsPatchCheckFill } from "react-icons/bs"

export const Gif = styled.div`
  display: grid;
  grid-template-columns: 230px 1fr 250px;
  grid-template-areas:
    "information  bigGif        actions"
    "information  relatedGifs   relatedGifs"
  ;
  gap: 2rem;
  margin-top: 2rem;
  min-height: 50vh;
`

export const Information = styled.div`
  grid-area: information;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 3rem;
`

export const Owner = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: .8rem;
  width: 100%;
`

// Not is an Image Component from next 'cause i dont wanna add all hostnames for CORS in next.config.js
export const Avatar = styled.img`

`

export const AccountInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`

export const Name = styled.span`
  font-weight: bold;
  line-height: 1;
`

export const Username = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .3rem;

  color: ${ props => props.theme.color.placeholder };
  font-weight: bold;
  font-size: 14px;
`

export const VerifiedIcon = styled(BsPatchCheckFill)`
  color: ${ props => props.theme.color.blue };
  font-size: 14px;
`

export const Source = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: .5rem;
  width: 100%;
`

export const SectionTitle = styled.span`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: .5rem;

  color: ${ props => props.theme.color.placeholder };
  font-weight: bold;
  font-size: 14px;
`

export const SourceUrl = styled.a`
  display: inline;

  color: ${ props => props.theme.color.white };
  font-weight: bold;
  font-size: 14px;
  text-decoration: none;

  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const SourceIcon = styled(BiLinkExternal)`
  margin-right: .3rem;
`

export const VirtualBackgroundAdvice = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

export const GifVirtualBackground = styled.img`
  z-index: 2;
  width: 100%;
  margin-top: 1rem;
  margin-bottom: -.7rem;
`

export const LearnMoreButton = styled.a`
  color: ${ props => props.theme.color.white };
  background-color: ${ props => props.theme.color.gray };
  font-weight: bold;
  font-size: 14px;
  text-align: center;
  text-decoration: none;

  width: 100%;
  padding: .5rem 0;
`

export const BigGifInfo = styled.div`
  grid-area: bigGif;
`

export const GifAndDetails = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  margin-top: .5rem;
`

export const BigGif = styled.img`
  width: 100%;
`

export const DetailsGifModal = styled.div`
  position: absolute;
  z-index: 2;
  top: .4rem;
  left: 50%;
  transform: translateX(-50%);

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: .5rem 1rem;

  background-color: rgba(0, 0, 0, .9);
  width: calc(100% - .8rem);
  padding: 1rem;
`

export const DetailModal = styled.span`
  font-size: 14px;
`

export const DetailsIcon = styled.span`
  color: ${ props => props.theme.color.placeholder };
  font-size: 1.5rem;
  line-height: 1;
  cursor: pointer;
`

export const Actions = styled.div`
  grid-area: actions;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: .5rem;
  width: 100%;
  margin-top: 2rem;
`

export const Action = styled.span`
  display: flex;
  align-items: center;
  gap: .8rem;
  cursor: pointer;
`

export const ActionName = styled.span`
  font-weight: bold;
  font-size: 17px;
`

export const ActionIcon = styled.span`
  font-size: 1.8rem;
`

export const RelatedGifs = styled.div`
  grid-area: relatedGifs;
`

export const RelatedTitle = styled.h4`
  margin-bottom: .5rem;
`