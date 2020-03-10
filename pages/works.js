import Nav from '../components/nav'
import BreadCrumb from '../components/breadCrumb'
import { useRouter } from 'next/router'
export default () => {
  const router = useRouter()
  const onMouseEnterWork = e => {
    e.currentTarget.children[1].style.display = 'unset'
  }
  const onMouseLeaveWork = e => {
    e.currentTarget.children[1].style.display = 'none'
  }
  return (
    <div className='works flex flex-col'>
      <Nav />
      <div className='bg-gray-200 h-full flex flex-col container-px'>
        <BreadCrumb name={router.pathname.replace('/', '')} />
        <div className='flex flex-row flex-wrap'>
          <div
            className='work relative mb-16 mr-auto'
            style={{ width: '47%' }}
            onMouseEnter={onMouseEnterWork}
            onMouseLeave={onMouseLeaveWork}
          >
            <img src='/img/common/bkkoli.jpeg' className='rounded-lg' />
            <span className='text-6xl absolute hidden'>開場</span>
          </div>
          <div
            style={{ width: '47%' }}
            className='work relative mb-16 ml-auto'
            onMouseEnter={onMouseEnterWork}
            onMouseLeave={onMouseLeaveWork}
          >
            <img src='/img/common/bkkoli.jpeg' className='rounded-lg' />
            <span className='text-6xl absolute hidden'>704</span>
          </div>
          <div
            className='work relative mb-16 mr-auto'
            style={{ width: '47%' }}
            onMouseEnter={onMouseEnterWork}
            onMouseLeave={onMouseLeaveWork}
          >
            <img src='/img/common/bkkoli.jpeg' className='rounded-lg' />
            <span className='text-6xl absolute hidden'>수목장</span>
          </div>
          <div
            style={{ width: '47%' }}
            className='work relative mb-16 ml-auto'
            onMouseEnter={onMouseEnterWork}
            onMouseLeave={onMouseLeaveWork}
          >
            <img src='/img/common/bkkoli.jpeg' className='rounded-lg' />
            <span className='text-6xl absolute hidden'>704</span>
          </div>
        </div>
      </div>
    </div>
  )
}
