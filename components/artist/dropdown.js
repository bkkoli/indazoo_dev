import Link from 'next/link'
const contactObj = {
  kxxzxx: {
    instagram: 'https://www.instagram.com/kxxzxx/',
    soundCloud: 'https://soundcloud.com/kxxzxx',
    email: 'mailto:kxdzxo@gmail.com',
  },
  bkkoli: {
    instagram: 'https://www.instagram.com/b_kkoli/',
    email: 'bkkomailto:ryubokgi@gmail.comli',
  },
  'c-in': {
    instagram: 'https://www.instagram.com/indazoobboycin/',
    email: 'mailto:repeatpass@gmail.com',
  },
  Omondi: {
    instagram: 'https://www.instagram.com/j_seowoo/',
    soundCloud: 'https://soundcloud.com/44147882',
    email: 'mailto:csw7882@gmail.com',
  },
  'D.A': {
    instagram: 'https://www.instagram.com/junminzzang/',
    soundCloud: 'https://soundcloud.com/qwer-ty-1',
    email: 'mailto:wnsals9422@naver.com',
  },
  scenestealer: {
    instagram: '/img/main/main_3.jpg',
    soundCloud: 'Scenestealer',
    email: 'Scenestealer',
  },
}

export default props => {
  const tgtObj = contactObj[props.artist]
  console.dir(props)
  return (
    <div className='relative artist_dropdown'>
      <div className='absolute mt-2 py-2 w-48 bg-white rounded-lg shadow-xl'>
        {tgtObj.instagram ? (
          <a className='block px-4 py-2 text-gray-800 hover:bg-yellow-600 hover:text-white' href={tgtObj.instagram}>
            <i aria-hidden='true' className='instagram icon'></i>instagram
          </a>
        ) : (
          ''
        )}
        {tgtObj.soundCloud ? (
          <a className='block px-4 py-2 text-gray-800 hover:bg-yellow-600 hover:text-white' href={tgtObj.soundCloud}>
            <i aria-hidden='true' className='soundcloud icon'></i>soundCloud
          </a>
        ) : (
          ''
        )}
        {tgtObj.email ? (
          <a className='block px-4 py-2 text-gray-800 hover:bg-yellow-600 hover:text-white' href={tgtObj.email}>
            <i aria-hidden='true' className='envelope outline icon'></i>Email
          </a>
        ) : (
          ''
        )}
      </div>
      <style jsx>
        {`
          .artist_dropdown > div {
            left: -50px;
          }

          @media (max-width: 768px) {
            .artist_dropdown > div {
              right: 0px;
              left: unset;
            }
          }
        `}
      </style>
    </div>
  )
}
