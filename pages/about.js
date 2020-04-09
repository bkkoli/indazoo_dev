import Nav from '../components/nav'
import BreadCrumb from '../components/breadCrumb'
import { useRouter } from 'next/router'

export default () => {
  const router = useRouter()
  return (
    <div className='flex flex-col'>
      <Nav active={router.pathname.replace('/', '')} />
      <section className='bg-gray-200 h-full flex flex-col container-px'>
        <BreadCrumb name={router.pathname.replace('/', '')} />
        <div className='flex flex-row'>
          <div className='flex flex-col w-9/12 mr-16'>
            <div className='bg-white flex flex-row h-20 items-center rounded-t-md pl-8'>
              <img
                src='/img/common/logo_face.jpg'
                className='max-h-full w-auto rounded-full h-16'
              />
              <span className='font-bold text-xl pl-3'>indazoo</span>
            </div>
            <div>
              <img
                className='w-full rounded-b-md'
                style={{ height: '600px' }}
                src='/img/main/main_3.jpg'
              />
            </div>
          </div>
          <div className='flex flex-col w-3/12 bg-white'>
            <div
              className=' flex flex-row h-20 items-center rounded-t-md'
              style={{ borderBottom: '1px solid #efefef' }}
            >
              <span className='font-bold text-xl pl-8'>Member</span>
            </div>
            <div className='pl-8 text-xl' style={{ height: '600px' }}>
              <div className='flex flex-row items-center mt-8'>
                <img
                  className='h-12 w-12 max-h-full rounded-full'
                  src='/img/common/bkkoli.jpeg'
                />
                <span className='fit-content font-bold ml-3'>kxxzxx</span>
              </div>
              <div className='flex flex-row items-center mt-8'>
                <img
                  className='h-12 w-12 max-h-full rounded-full'
                  src='/img/common/circle_Omondi.jpeg'
                />
                <span className='fit-content font-bold ml-3'>Omondi</span>
              </div>
              <div className='flex flex-row items-center mt-8'>
                <img
                  className='h-12 w-12 max-h-full rounded-full'
                  src='/img/common/bkkoli.jpeg'
                />
                <span className='fit-content font-bold ml-3'>D.A</span>
              </div>
              <div className='flex flex-row items-center mt-8'>
                <img
                  className='h-12 w-12 max-h-full rounded-full'
                  src='/img/common/bkkoli.jpeg'
                />
                <span className='fit-content font-bold ml-3'>bkkoli</span>
              </div>
              <div className='flex flex-row items-center mt-8'>
                <img
                  className='h-12 w-12 max-h-full rounded-full'
                  src='/img/common/circle_c-in.jpeg'
                />
                <span className='fit-content font-bold ml-3'>c-in</span>
              </div>
              <div className='flex flex-row items-center mt-8'>
                <img
                  className='h-12 w-12 max-h-full rounded-full'
                  src='/img/common/bkkoli.jpeg'
                />
                <span className='fit-content font-bold ml-3'>scenestealer</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
