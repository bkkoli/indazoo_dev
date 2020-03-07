import Nav from '../components/nav'
import BreadCrumb from '../components/breadCrumb'
import { useRouter } from 'next/router'
import Carousel from '../components/main/carousel'
export default () => {
  const router = useRouter()
  console.dir(router)
  const imgList = [
    {
      src: '/img/main/main_1.jpeg',
      label: 'kxxzxx',
      content: 'kxxzxx',
    },
    {
      src: '/img/main/main_2.jpg',
      label: 'bkkoli',
      content: 'bkkoli',
    },
    {
      src: '/img/main/main_3.jpg',
      label: 'c-in',
      content: 'c-in',
    },
    {
      src: '/img/main/main_1.jpeg',
      label: 'Omondi',
      content: 'Omondi',
    },
    {
      src: '/img/main/main_2.jpg',
      label: 'D.A',
      content: 'D.A',
    },
    {
      src: '/img/main/main_3.jpg',
      label: 'Scenestealer',
      content: 'Scenestealer',
    },
  ]
  return (
    <div className='flex flex-col artists'>
      <Nav />
      <div className='bg-gray-200 h-full flex flex-col container-px'>
        <BreadCrumb name={router.pathname.replace('/', '')} />
        <div className='flex flex-row'>
          <div className='flex flex-col w-8/12'>
            {/* <div className='bg-white flex flex-row h-20 items-center rounded-t-md pl-8'>
              <img
                src='/img/common/logo_face.jpg'
                className='max-h-full w-auto rounded-full h-16'
              />
              <span className='font-bold text-xl pl-3'>kxxzxx</span>
            </div> */}
            <div>
              <img
                className='w-full rounded-b-md'
                style={{ height: '600px' }}
                src='/img/main/main_3.jpg'
              />
            </div>
          </div>
          <div className='flex flex-col w-4/12 bg-white'>
            <div className='bg-white flex flex-row h-20 items-center rounded-t-md pl-8 border-bottom'>
              <img src='/img/test1.jpg' className='rounded-full h-12 w-12' />
              <span className='font-bold text-xl pl-3'>kxxzxx</span>
              <i
                aria-hidden='true'
                className='ellipsis horizontal icon flex-auto text-right pr-8'
              ></i>
            </div>
            <div className='pl-8 text-xl'></div>
          </div>
        </div>
      </div>
    </div>
  )
}
