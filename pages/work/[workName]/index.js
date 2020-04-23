import { useState } from 'react'
import { useRouter } from 'next/router'
import Nav from '../../../components/nav'
import BreadCrumb from '../../../components/breadCrumb'
export default () => {
  const router = useRouter()
  const work = {
    수목장: {
      content: 'scenestealer 1st mixtape',
      image: '/img/works/수목장.jpeg',
    },
    '704': {
      content: 'Indazoo 1st mixtape',
      image: '/img/works/704.jpeg',
    },
    開場: {
      content: 'Indazoo 1st performance',
      image: '/img/works/개장.jpeg',
    },
  }
  let { workName } = router.query
  workName = workName ? workName : '704'
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
      url: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/688402048&color=%23998d82&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'
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

  let trackList_sumockjang = [
    {
      songName: '밧줄',
      singer: 'Scenesteala',
      featuring: '',
    },
    {
      songName: '무명 래퍼의 노래',
      singer: 'Scenesteala',
      featuring: '',
    },
    {
      songName: 'Sin',
      singer: 'Scenesteala',
      featuring: '',
    },
    {
      songName: '형이임마너한테해줄말이있어',
      singer: 'Scenesteala',
      featuring: ``,
    },
    {
      songName: '물',
      singer: 'Scenesteala',
      featuring: '',
    },
    {
      songName: '래퍼 중의 래퍼',
      singer: 'Scenesteala',
      featuring: '',
    },
  ]

  trackList = workName === '704' ? trackList : trackList_sumockjang
  const [clicked, setClicked] = useState(false)
  const onClickTrack = (e) => {
    console.info(e.currentTarget.querySelector('.url').innerText)
    setClicked(true)
  }
  const onClickIpod = e => {
    let client_x = e.clientX
    let client_y = e.clientY
    if (screen.width > 375) {
      let previous_song_left = (screen.width / 10) * 2.9
      let previous_song_right = (screen.width / 10) * 3.5
      let next_song_left = (screen.width / 10) * 6.5
      let next_song_right = (screen.width / 10) * 7.1
      let song_top = (screen.height / 10) * 6.6
      let song_bottom = (screen.height / 10) * 6.8
      let menu_left = (screen.width / 10) * 4.7
      let menu_right = (screen.width / 10) * 5.4
      let menu_top = (screen.height / 10) * 5.5
      let menu_bottom = (screen.height / 10) * 6
      
      if (client_y >= song_top && client_y <= song_bottom) {
        if (client_x >= previous_song_left && client_x <= previous_song_right) {
          alert('left')
        }
        if (client_x >= next_song_left && client_x <= next_song_right) {
          alert('right')
        }
      }

      if (client_x >= menu_left && client_x <= menu_right) {
        if ( client_y >= menu_top && client_y <= menu_bottom) {
          alert('menu')
        }

      }

    } else {
    }
  }
  return (
    <div className='flex flex-col works_index'>
      <Nav />
      <section className='bg-gray-200 h-full flex flex-col container-px works_each'>
        <BreadCrumb name={workName} />
        <div className='flex flex-row desktop'>
          <div className='flex flex-col w-8/12'>
            <div>
              {clicked ? (
                <iframe
                  width='100%'
                  height='600'
                  scrolling='no'
                  frameBorder='no'
                  allow='autoplay'
                  className='rounded-l-md'
                  src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/688402060&color=%23998d82&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'
                ></iframe>
              ) : (
                <img className='w-full rounded-l-md' style={{ height: '600px' }} src={work[workName].image} />
              )}
            </div>
          </div>
          <div className='flex flex-col w-4/12 bg-white'>
            <div className='bg-white flex flex-row h-20 items-center rounded-t-md pl-8 border-bottom title'>
              <span className='font-bold text-xl pl-3'>Track List</span>
            </div>
            <div className='text-xl'>
              <div className='track_list'>
                {trackList.map((track, index) => {
                  return (
                    <div className='flex py-2 pl-8 hover:bg-gray-300 cursor-pointer track' key={index} onClick={onClickTrack}>
                      <div className='ml-2 flex-grow flex flex-col justify-center'>
                        <div className='song_name font-bold'>
                          {index + 1}. {track.songName} {track.featuring !== '' ? '(feat. ' + track.featuring + ')' : ''}
                        </div>
                        <div className='singer'>{track.singer}</div>
                        <div className='hidden url'>{track.url}</div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
        <div className='mobile mb-16 relative hidden'>
          <iframe
            width='85%'
            height='39%'
            scrolling='no'
            frameBorder='no'
            allow='autoplay'
            className='absolute ipod_display'
            src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/688402060&color=%23998d82&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'
          ></iframe>
          <img className='w-full rounded_b_25 ipod' src='/img/works/ipod.png' onClick={onClickIpod} />
        </div>
      </section>
    </div>
  )
}
