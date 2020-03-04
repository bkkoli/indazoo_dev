import Nav from '../components/nav'
import BreadCrumb from '../components/breadCrumb'
import { useRouter } from 'next/router'
import Carousel from '../components/main/carousel'
export default () => {
  const router = useRouter()
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
        <div className='flex flex-row flex-wrap pb-4'>
          <Carousel imgList={imgList} />
          {/* <div class='max-w-sm rounded overflow-hidden shadow-lg'>
            <img
              class='w-full'
              src='/img/main/main_3.jpg'
              alt='Sunset in the mountains'
            />
            <div class='px-6 py-4'>
              <div class='font-bold text-xl mb-2'>kxxzxx</div>
              <p class='text-gray-700 text-base'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div class='px-6 py-4'>
              <span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>
                #photography
              </span>
              <span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>
                #Rap
              </span>
              <span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700'>
                #Skate Board
              </span>
            </div>
          </div>
          <div class='max-w-sm rounded overflow-hidden shadow-lg'>
            <img
              class='w-full'
              src='/img/main/main_3.jpg'
              alt='Sunset in the mountains'
            />
            <div class='px-6 py-4'>
              <div class='font-bold text-xl mb-2'>bkkoli</div>
              <p class='text-gray-700 text-base'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div class='px-6 py-4'>
              <span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>
                #programming
              </span>
              <span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>
                #정신적 지주
              </span>
            </div>
          </div>
          <div class='max-w-sm rounded overflow-hidden shadow-lg'>
            <img
              class='w-full'
              src='/img/main/main_3.jpg'
              alt='Sunset in the mountains'
            />
            <div class='px-6 py-4'>
              <div class='font-bold text-xl mb-2'>c-in</div>
              <p class='text-gray-700 text-base'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div class='px-6 py-4'>
              <span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>
                #photography
              </span>
              <span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>
                #B-boy
              </span>
            </div>
          </div>
          <div class='max-w-sm rounded overflow-hidden shadow-lg'>
            <img
              class='w-full'
              src='/img/main/main_3.jpg'
              alt='Sunset in the mountains'
            />
            <div class='px-6 py-4'>
              <div class='font-bold text-xl mb-2'>D.A</div>
              <p class='text-gray-700 text-base'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div class='px-6 py-4'>
              <span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>
                #Producing
              </span>
              <span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>
                #Rap
              </span>
            </div>
          </div>
          <div class='max-w-sm rounded overflow-hidden shadow-lg'>
            <img
              class='w-full'
              src='/img/main/main_3.jpg'
              alt='Sunset in the mountains'
            />
            <div class='px-6 py-4'>
              <div class='font-bold text-xl mb-2'>Omondi</div>
              <p class='text-gray-700 text-base'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div class='px-6 py-4'>
              <span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>
                #Producing
              </span>
              <span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>
                #Magic
              </span>
            </div>
          </div>
          <div class='max-w-sm rounded overflow-hidden shadow-lg'>
            <img
              class='w-full'
              src='/img/main/main_3.jpg'
              alt='Sunset in the mountains'
            />
            <div class='px-6 py-4'>
              <div class='font-bold text-xl mb-2'>Scenestealer</div>
              <p class='text-gray-700 text-base'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div class='px-6 py-4'>
              <span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>
                #Producing
              </span>
              <span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>
                #Rap
              </span>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}
