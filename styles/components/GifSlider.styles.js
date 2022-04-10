import styled, { css } from "styled-components"

export const GifSlider = styled.div`
  grid-area: gifSlider;
  position: relative;

  width: 100%;
  height: ${ props => props.size == "s" ? "150px" : "250px" };
  overflow: hidden;
`

export const GifSliderOverflow = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: .4rem;

  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;

  width: auto;
  height: 100%;
  transition: .3s ease 0s;
  transform: translateX(0%);
`

const commonArrowStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  z-index: 3;
  top: 0;

  color: ${ props => props.theme.color.placeholder };
  font-size: 2.5rem;
  cursor: pointer;

  width: 2.5rem;
  height: 100%;
  transition: .2s linear 0s;

  &:hover {
    color: ${ props => props.theme.color.white };
  }
`

export const ArrowPrevious = styled.span`
  ${ commonArrowStyles }
  left: 0;
  background-image: linear-gradient(to right, rgba(0, 0, 0, .6), rgba(0, 0, 0, 0));

  &:hover {
    background-image: linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  }
`

export const ArrowNext = styled.span`
  ${ commonArrowStyles }
  right: 0;
  background-image: linear-gradient(to left, rgba(0, 0, 0, .6), rgba(0, 0, 0, 0));

  &:hover {
    background-image: linear-gradient(to left, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  }
`