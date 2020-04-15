import Nav from '../components/nav'
import BreadCrumb from '../components/breadCrumb'
import { useRouter } from 'next/router'
import { useState } from 'react'

export default () => {
  const router = useRouter()
  const [isShowImgTag, setIsShowImgTag] = useState(false)
  const onClickAboutImg = () => {
    setIsShowImgTag(!isShowImgTag)
  }
  const onClickImgTag = (memberName) => {
    console.info(memberName)
  }
  return (
    <div className='flex flex-col'>
      <Nav active={router.pathname.replace('/', '')} />
      <section className='bg-gray-200 h-full flex flex-col container-px about'>
        <BreadCrumb name={router.pathname.replace('/', '')} />
        <div className='flex flex-row about_body'>
          <div className='flex flex-col w-9/12 mr-16'>
            <div className='bg-white flex flex-row h-20 items-center rounded-t-md pl-8'>
              <img src='/img/common/logo_face.jpg' className='max-h-full w-auto rounded-full h-16' />
              <span className='font-bold text-xl pl-3'>indazoo</span>
            </div>
            <div onClick={onClickAboutImg} className='relative'>
              <img className='w-full rounded-b-md' src='/img/main/main_3.jpg' />
              { isShowImgTag ? <><div className='tag absolute flex flex-col items-center da_position hidden'>
                <div className='bg-black opacity-75 py-1 px-2 rounded' onClick={onClickImgTag('D.A')}>
                  <span className='opacity-100 text-white font-extrabold'>D.A</span>
                </div>
                <div className='triangle_down'></div>
              </div>
              <div className='tag absolute flex flex-col items-center bkkoli_position hidden'>
                <div className='bg-black opacity-75 py-1 px-2 rounded'>
                  <span className='opacity-100 text-white font-extrabold'>bkkoli</span>
                </div>
                <div className='triangle_down'></div>
              </div>
              <div className='tag absolute flex flex-col items-center omondi_position hidden'>
                <div className='bg-black opacity-75 py-1 px-2 rounded'>
                  <span className='opacity-100 text-white font-extrabold'>Omondi</span>
                </div>
                <div className='triangle_down'></div>
              </div>
              <div className='tag absolute flex flex-col items-center cin_position hidden'>
                <div className='triangle_up'></div>
                <div className='bg-black opacity-75 py-1 px-2 rounded'>
                  <span className='opacity-100 text-white font-extrabold'>c-in</span>
                </div>
              </div>
              <div className='tag absolute flex flex-col items-center kxxzxx_position hidden'>
                <div className='triangle_up'></div>
                <div className='bg-black opacity-75 py-1 px-2 rounded'>
                  <span className='opacity-100 text-white font-extrabold'>kxxzxx</span>
                </div>
              </div></> : ''}
            </div>
          </div>
          <div className='flex flex-col w-3/12 bg-white member'>
            <div className='flex flex-row h-20 items-center rounded-t-md title' style={{ borderBottom: '1px solid #efefef' }}>
              <span className='font-bold text-xl pl-8'>Member</span>
            </div>
            <div className='pl-8 text-xl body'>
              <div className='flex flex-row items-center mt-8'>
                <img className='h-12 w-12 max-h-full rounded-full' src='/img/common/bkkoli.jpeg' />
                <span className='fit-content font-bold ml-3'>kxxzxx</span>
              </div>
              <div className='flex flex-row items-center mt-8'>
                <img className='h-12 w-12 max-h-full rounded-full' src='/img/common/circle_Omondi.jpeg' />
                <span className='fit-content font-bold ml-3'>Omondi</span>
              </div>
              <div className='flex flex-row items-center mt-8'>
                <img className='h-12 w-12 max-h-full rounded-full' src='/img/common/bkkoli.jpeg' />
                <span className='fit-content font-bold ml-3'>D.A</span>
              </div>
              <div className='flex flex-row items-center mt-8'>
                <img className='h-12 w-12 max-h-full rounded-full' src='/img/common/bkkoli.jpeg' />
                <span className='fit-content font-bold ml-3'>bkkoli</span>
              </div>
              <div className='flex flex-row items-center mt-8'>
                <img className='h-12 w-12 max-h-full rounded-full' src='/img/common/circle_c-in.jpeg' />
                <span className='fit-content font-bold ml-3'>c-in</span>
              </div>
              <div className='flex flex-row items-center mt-8'>
                <img className='h-12 w-12 max-h-full rounded-full' src='/img/common/bkkoli.jpeg' />
                <span className='fit-content font-bold ml-3'>scenestealer</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
