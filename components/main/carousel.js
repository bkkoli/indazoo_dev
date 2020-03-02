import Carousel from 'react-bootstrap/Carousel'
export default function carousel() {
  return (
    <Carousel className="max-h-full w-screen">
      <Carousel.Item>
        <img className="d-block w-100" src="/img/main/main_1.jpeg" alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="/img/main/main_2.jpg" alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="/img/main/main_3.jpg" alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  )
}
