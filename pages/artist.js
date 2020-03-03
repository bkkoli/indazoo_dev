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
        <div className='hero m-auto text-center text-6xl font-extrabold'>
          Comming Soon
        </div>
      </div>
    </div>
  )
}
