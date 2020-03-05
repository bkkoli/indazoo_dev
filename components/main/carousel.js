import Carousel from 'react-bootstrap/Carousel'
export default function carousel(props) {
  return (
    <Carousel className='max-h-full w-screen'>
      {props.imgList.map((img, i) => {
        return (
          <Carousel.Item key={i}>
            <img className='d-block w-100' src={img.src} />
            {img.label ? (
              <Carousel.Caption>
                <h1>{img.label}</h1>
                <p>{img.content}</p>
              </Carousel.Caption>
            ) : (
              ''
            )}
          </Carousel.Item>
        )
      })}
    </Carousel>
  )
}
