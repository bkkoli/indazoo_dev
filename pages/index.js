import Nav from '../components/main/nav'
import Carousel from '../components/main/carousel'

export default () => (
  <div>
    <Carousel />
    <i
      aria-hidden="true"
      className="play icon text-gray-300 hover:text-white cursor-pointer"
    ></i>
    <Nav />
  </div>
)
