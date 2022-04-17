import styled from "styled-components"

export const SearchedKeyword = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.h2`
  font-weight: 800;
  font-size: 36px;
  margin: .8rem 0;
`

export const MasonryItemSelector = styled.div`
  display: flex;
  align-items: center;

  position: relative;
  width: 17rem;
  padding: .7rem 0;
  margin: 1rem 0;
`

export const MasonryItemType = styled.span`
  font-weight: bold;
  font-size: 17px;
  text-align: center;
  text-shadow: rgba(0, 0, 0, 0.2) 1px 1px 1px;

  cursor: pointer;
  width: 50%;
`

export const CurrentItemType = styled.div`
  position: absolute;
  z-index: -1;
  top: 0;
  transition: .4s ease 0s;

  border-radius: 22px;
  width: 50%;
  height: 100%;

  &.gif-type-selected {
    left: 0;
    background: rgba(0, 0, 0, 0) linear-gradient(-135deg, rgb(74, 144, 226) 0%, rgb(148, 56, 255) 100%) repeat scroll 0% 0%;
  }

  &.sticker-type-selected {
    left: 50%;
    background: rgba(0, 0, 0, 0) linear-gradient(-135deg, rgb(0, 231, 149) 0%, rgb(0, 187, 221) 100%) repeat scroll 0% 0%;
  }
`