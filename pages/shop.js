import Nav from '../components/nav'
import BreadCrumb from '../components/breadCrumb'
import { useRouter } from 'next/router'
export default () => {
  const router = useRouter()
  return (
    <div className='flex flex-col'>
      <Nav />
      <section className='bg-gray-200 h-full flex flex-col container-px shop'>
        <BreadCrumb name={router.pathname.replace('/', '')} />
        <div className='hero py-64 text-center text-6xl font-extrabold shop_body'>
          Comming Soon
        </div>
      </section>
    </div>
  )
}
