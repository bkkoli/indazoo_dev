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
  const onClickWork = e => {
    console.dir(e.currentTarget.children[1])
    let workName = e.currentTarget.children[1].textContent
    router.push(`/work/${workName}`)
  }
  return (
    <div className='works flex flex-col'>
      <Nav />
      <section className='bg-gray-200 h-full flex flex-col container-px'>
        <BreadCrumb name={router.pathname.replace('/', '')} style={{ height: '10%' }} />
        <div className='flex flex-row pb-16 workLayout' style={{ height: '90%' }}>
          <div
            className='work relative mr-auto cursor-pointer left_work'
            onMouseEnter={onMouseEnterWork}
            onMouseLeave={onMouseLeaveWork}
            onClick={onClickWork}
          >
            <img src='/img/works/개장.jpeg' className='rounded-lg h-full' />
            <span className='text-6xl absolute hidden'>開場</span>
          </div>
          <div className='flex flex-col w-5/12 right_work'>
            <div
              /* style={{ width: '47%' }} */
              style={{ height: '48%' }}
              className='work relative mb-auto cursor-pointer'
              onMouseEnter={onMouseEnterWork}
              onMouseLeave={onMouseLeaveWork}
              onClick={onClickWork}
            >
              <img src='/img/works/704.jpeg' className='rounded-lg' />
              <span className='text-6xl absolute hidden'>704</span>
            </div>
            <div
              className='work relative cursor-pointer'
              style={{ height: '48%' }}
              /* style={{ width: '47%' }} */
              onMouseEnter={onMouseEnterWork}
              onMouseLeave={onMouseLeaveWork}
              onClick={onClickWork}
            >
              <img src='/img/works/수목장.jpeg' className='rounded-lg' />
              <span className='text-6xl absolute hidden'>수목장</span>
            </div>
          </div>
          {/* <div
            style={{ width: '47%' }}
            className='work relative mb-16 ml-auto'
            onMouseEnter={onMouseEnterWork}
            onMouseLeave={onMouseLeaveWork}
            onClick={onClickWork}
          >
            <img src='/img/works/704.jpeg' className='rounded-lg' />
            <span className='text-6xl absolute hidden'>704</span>
          </div> */}
        </div>
      </section>
    </div>
  )
}
