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
        <div className='hero py-64 text-center text-6xl font-extrabold shop_body'>Comming Soon</div>
      </section>
      <style jsx>
        {`
          @media (max-width: 768px) {
            .shop {
              padding-left: 10%;
              padding-right: 10%;
            }
            .shop .shop_body {
              font-size: 3.8rem;
            }
          }

          @media (max-width: 576px) {
            .shop .shop_body {
              font-size: 2.5rem;
            }
          }

          @media (max-width: 375px) {
            .shop .shop_body {
              font-size: 2rem;
            }
          }
        `}
      </style>
    </div>
  )
}
