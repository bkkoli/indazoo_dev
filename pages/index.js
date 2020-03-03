import Nav from '../components/main/nav'
import Carousel from '../components/main/carousel'
import Youtube from '../components/main/youtube'
import { useState } from 'react'

export default () => {
  const [clickedArrow, setClickedArrow] = useState(false)
  const onClickArrowBtn = () => {
    setClickedArrow(true)
  }
  const onClickCloseBtn = () => {
    setClickedArrow(false)
  }
  return (
    <div>
      <Carousel />
      <i
        aria-hidden='true'
        className='play icon text-gray-300 hover:text-white cursor-pointer'
        onClick={onClickArrowBtn}
      ></i>
      <Nav />
      {clickedArrow ? <Youtube closeFunc={onClickCloseBtn} /> : ''}
    </div>
  )
}
