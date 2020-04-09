import Nav from '../../../components/nav'
import BreadCrumb from '../../../components/breadCrumb'
import Dropdown from '../../../components/artist/dropdown'
import { useRouter } from 'next/router'
import { useState } from 'react'
/*  
const indazooObj = {
  kxxzxx: {
    img: {
      circle: '/img/common/circle_Omondi.jpeg',
      profile: '/img/common/profile_Omondi.jpeg',
    },
  },
  Omondi: {
    img: {
      circle: '/img/common/circle_Omondi.jpeg',
      profile: '/img/common/profile_Omondi.jpeg',
    },
  },
  bkkoli: {
    img: {
      circle: '/img/common/circle_Omondi.jpeg',
      profile: '/img/common/profile_Omondi.jpeg',
    },
  },
  'c-in': {
    img: {
      circle: '/img/common/circle_Omondi.jpeg',
      profile: '/img/common/profile_Omondi.jpeg',
    },
  },
  'D.A': {
    img: {
      circle: '/img/common/circle_Omondi.jpeg',
      profile: '/img/common/profile_Omondi.jpeg',
    },
  },
  scenestealer: {
    img: {
      circle: '/img/common/circle_Omondi.jpeg',
      profile: '/img/common/profile_Omondi.jpeg',
    },
  },
}
*/

export default ({ artist }) => {
  const router = useRouter()
  const { artistName } = router.query

  console.info('---------------------------------------------')
  console.dir(artist)

  const [dropdownShow, setDropDownShow] = useState(false)
  const onClickDropDown = () => {
    setDropDownShow(!dropdownShow)
  }

  const img1 = '/img/common/circle_Omondi.jpeg'
  const img2 = '/img/common/profile_Omondi.jpeg'

  return (
    <div className='flex flex-col artists'>
      <Nav />
      <section className='bg-gray-200 h-full flex flex-col container-px'>
        <BreadCrumb name={artistName} />
        <div className='flex flex-row'>
          <div className='flex flex-col w-8/12'>
            <div>
              <img
                className='w-full rounded-b-md'
                style={{ height: '600px' }}
                src={img2}
              />
            </div>
          </div>
          <div className='flex flex-col w-4/12 bg-white'>
            <div className='bg-white flex flex-row h-20 items-center rounded-t-md pl-8 border-bottom'>
              <img src={img1} className='rounded-full h-12 w-12' />
              <span className='font-bold text-xl pl-3'>{artistName}</span>
              <i
                aria-hidden='true'
                className='ellipsis horizontal icon ml-auto text-right pr-8 cursor-pointer'
                onClick={onClickDropDown}
              ></i>
              {dropdownShow ? <Dropdown artist={artistName} /> : ''}
            </div>
            <div className='pl-8 text-xl'>
              <div className='flex flex-row items-center mt-4'>
                <img src={img1} className='rounded-full h-12 w-12' />
                <span className='font-bold text-xl pl-3 mr-4'>
                  {artistName}
                </span>
                <div>This is test text</div>
              </div>
              <div className='flex flex-row items-center mt-4'>
                <i
                  aria-hidden='true'
                  className='user circle icon h-16 w-16'
                ></i>
                <span className='font-bold text-xl pl-3 mr-4'>Someone</span>
                <div>Question</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export function getStaticProps() {
  let router = useRouter()

  let { artistName } = router.query

  const indazooObj = {
    kxxzxx: {
      img: {
        circle: '/img/common/circle_Omondi.jpeg',
        profile: '/img/common/profile_Omondi.jpeg',
      },
    },
    Omondi: {
      img: {
        circle: '/img/common/circle_Omondi.jpeg',
        profile: '/img/common/profile_Omondi.jpeg',
      },
    },
    bkkoli: {
      img: {
        circle: '/img/common/circle_Omondi.jpeg',
        profile: '/img/common/profile_Omondi.jpeg',
      },
    },
    'c-in': {
      img: {
        circle: '/img/common/circle_Omondi.jpeg',
        profile: '/img/common/profile_Omondi.jpeg',
      },
    },
    'D.A': {
      img: {
        circle: '/img/common/circle_Omondi.jpeg',
        profile: '/img/common/profile_Omondi.jpeg',
      },
    },
    scenestealer: {
      img: {
        circle: '/img/common/circle_Omondi.jpeg',
        profile: '/img/common/profile_Omondi.jpeg',
      },
    },
  }

  return {
    props: {
      artist: indazooObj[artistName],
    },
  }
}
