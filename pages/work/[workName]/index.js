import { useRouter } from 'next/router'
import Nav from '../../../components/nav'
import BreadCrumb from '../../../components/breadCrumb'
export default () => {
  const router = useRouter()
  const work = {
    수목장: {
      content: 'scenestealer 1st mixtape',
    },
    '704': {
      content: 'Indazoo 1st mixtape',
    },
    開場: {
      content: 'Indazoo 1st performance',
    },
  }
  let { workName } = router.query
  console.info(workName)
  let content = ''

  let trackList = [
    {
      songName: '천장',
      singer: 'D.A',
      featuring: 'kxxzxx',
    },
    {
      songName: '일기',
      singer: 'D.A',
      featuring: 'kxxzxx',
    },
    {
      songName: '보다',
      singer: 'D.A',
      featuring: 'kxxzxx',
    },
    {
      songName: '구역',
      singer: 'D.A',
      featuring: `Saint'Z`,
    },
    {
      songName: '교착',
      singer: 'D.A',
      featuring: 'Dalli Choi & Scenesteala',
    },
    {
      songName: '섬',
      singer: 'D.A',
      featuring: 'kxxzxx',
    },
    {
      songName: 'skit',
      singer: 'D.A',
      featuring: 'kxxzxx',
    },
    {
      songName: '야간할증',
      singer: 'D.A',
      featuring: 'kxxzxx',
    },
    {
      songName: '잘 자',
      singer: 'D.A',
      featuring: 'kxxzxx',
    },
    {
      songName: '렘수면-Outro',
      singer: 'D.A',
      featuring: 'kxxzxx',
    },
  ]
  return (
    <div className='flex flex-col artists'>
      <Nav />
      <section className='bg-gray-200 h-full flex flex-col container-px works_each'>
        <BreadCrumb name={workName} />
        {/* <div>{content}</div> */}
        {/* <iframe
          width='100%'
          height='450'
          scrolling='no'
          frameborder='no'
          allow='autoplay'
          src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/880590271&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true'
        ></iframe> */}
        <div className='flex relative'>
          <img src='/img/works/ipod.png' className='rounded-lg ipod rounded_b_25' />
          <iframe
            width='25%'
            height='280'
            scrolling='no'
            frameborder='no'
            allow='autoplay'
            className='absolute'
            style={{ top: '32px', left: '31px', width: '309px', height: '235px' }}
            src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/688402060&color=%23998d82&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'
          ></iframe>
          <div className='track_list ml-16'>
            <div className='album title text-4xl mb-8'>{workName} trackList</div>
            {trackList.map((track, index) => {
              return (
                <div className='flex my-2' key={index}>
                  <div className='album_cover'>
                    <img src='/img/works/704.jpeg' className='rounded-lg' />
                  </div>
                  <div className='ml-2 border-t border-b border-solid border-gray-500 flex-grow flex flex-col justify-center'>
                    <div className='song_name font-bold'>
                      {index + 1}. {track.songName} {track.featuring !== '' ? '(feat. ' + track.featuring + ')' : ''}
                    </div>
                    <div className='singer'>{track.singer}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
