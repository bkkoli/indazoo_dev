import Nav from '../components/nav'
import BreadCrumb from '../components/breadCrumb'
import { useRouter } from 'next/router'
export default () => {
  const router = useRouter()
  return (
    <div className='flex flex-col'>
      <Nav />
      <div className='bg-gray-200 h-full flex flex-col px-64'>
        <BreadCrumb name={router.pathname.replace('/', '')} />
        <div className='hero my-8'>
          <div className='flex flex-row'>
            <div className='flex flex-col w-7/12 mr-16'>
              <div className='bg-white flex flex-row h-20 items-center rounded-t-md pl-8'>
                <img
                  src='/img/common/logo_face.jpg'
                  className='max-h-full w-auto rounded-full h-16'
                />
                <span className='font-bold text-xl pl-3'>indazoo</span>
                <i
                  aria-hidden='true'
                  className='ellipsis horizontal icon flex-auto text-right pr-8'
                ></i>
              </div>
              <div>
                <img
                  className='w-full rounded-b-md'
                  style={{ height: '600px' }}
                  src='/img/contact/contact_left.jpeg'
                />
              </div>
            </div>
            <div className='flex flex-col w-5/12'>
              {/* <div className='bg-white flex flex-row h-20 items-center rounded-t-md'>
                <img />
                <span className='font-bold text-xl'>Someone</span>
              </div> */}
              <div>
                <img
                  className='w-full rounded-b-md'
                  style={{ height: '670px' }}
                  src='/img/contact/Thumbnail.png'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}