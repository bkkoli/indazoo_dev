export default props => {
  const { closeFunc } = props
  return (
    <div className='bg-black w-full h-screen z-40 absolute top-0 left-0 flex flex-row justify-center'>
      <div
        className='absolute flex flex-col cursor-pointer'
        style={{ right: 35, top: 20 }}
      >
        <i
          aria-hidden='true'
          className='close icon text-white'
          onClick={closeFunc}
        ></i>
        <span className='text-white mt-2'>닫기</span>
      </div>
      <iframe
        className='w-11/12 h-screen absolute z-50'
        src='https://www.youtube.com/embed/ucQVAVu5k9g'
        frameborder='0'
        allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
        allowfullscreen
      ></iframe>
    </div>
  )
}
