import { useState, useRef } from "react"
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md"
import { Gif } from "/components"
import * as S from "/styles/components/GifSlider.styles.js"

export const GifSlider = ({ gifs, size }) => {
  const [ sliderViewPx, setSliderViewPx ] = useState(0)
  const [ shouldHideNextArrow, setShouldHideNextArrow ] = useState(false)
  const sliderRef = useRef(null)

  const slidePrevChunk = () => {
    const smartMeasure = (sliderViewPx + 300 > 0)
      ? 0
      : sliderViewPx + 300

    sliderRef.current.style.transform = `translateX(${smartMeasure}px)`
    setSliderViewPx(smartMeasure)
  }

  const slideNextChunk = () => {
    let smartMeasure
    const hiddenWidthAndContainer = Math.abs(sliderViewPx - 300 - 1040)

    if (hiddenWidthAndContainer > sliderRef.current.offsetWidth) {
      smartMeasure = sliderRef.current.offsetWidth - 1040
      smartMeasure *= -1
      setShouldHideNextArrow(true)
    } else {
      smartMeasure = sliderViewPx - 300
    }

    sliderRef.current.style.transform = `translateX(${smartMeasure}px)`
    setSliderViewPx(smartMeasure)
  }

  return (
    <S.GifSlider size={size}>
      { sliderViewPx < 0 && <S.ArrowPrevious onClick={slidePrevChunk}>
        <MdNavigateBefore />
      </S.ArrowPrevious> }

      { !shouldHideNextArrow && <S.ArrowNext onClick={slideNextChunk}>
        <MdNavigateNext />
      </S.ArrowNext> }

      <S.GifSliderOverflow ref={sliderRef}>
        { gifs.map(gifInfo => (
          <Gif key={gifInfo.id} gifInfo={gifInfo} />
        ))}
      </S.GifSliderOverflow>
    </S.GifSlider>
  )
}