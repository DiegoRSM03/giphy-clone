import styled from "styled-components"
import { MdNavigateNext } from "react-icons/md"

export const ShortSliderHome = styled.div`
  display: grid;
  grid-template-columns: max-content auto max-content;
  grid-template-rows: auto;
  grid-template-areas: 
    "sectionInfo  .           allGifsLink"
    "gifSlider    gifSlider   gifSlider"
  ;
  gap: .8rem;
  width: 100%;
`

export const SectionInfo = styled.div`
  grid-area: sectionInfo;
  display: flex;
  align-items: center;
  gap: .6rem;
`

export const SectionIconContainer = styled.span`
  color: ${ props => props.color ? props.color : "white" };
  font-size: 1.5rem;
`

export const SectionName = styled.span`
  color: ${ props => props.theme.color.white };
  font-weight: bold;
  font-size: ${ props => props.theme.fontSize.title };
`


export const AllGifsLink = styled.div`
  grid-area: allGifsLink;
  display: flex;
  align-items: center;
  cursor: pointer;
`

export const AllGifsLabel = styled.span`
  color: ${ props => props.theme.color.placeholder };
  font-weight: bold;
`

export const AllGifsIcon = styled(MdNavigateNext)`
  color: ${ props => props.theme.color.placeholder };
  font-size: 1.3rem;
`