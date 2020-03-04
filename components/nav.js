import Link from 'next/link'
import { useRouter } from 'next/router'
const links = [
  { href: 'https://github.com/zeit/next.js', label: 'GitHub' },
  { href: 'https://nextjs.org/docs', label: 'Docs' },
]

Nav.getInitialProps = async ctx => {
  const router = useRouter()
  let targetId = router.pathname.replace('/', '')
  document.getElementById(targetId).classList.add('text-yellow-600')
}

export default function Nav() {
  return (
    <nav
      className='border-1 border-gray-100'
      style={{ borderBottom: '1px solid #cbd5e0' }}
    >
      <ul className='flex justify-start items-center pr-24 pl-24 h-20'>
        <Link href='/'>
          <img
            src='/img/common/logo_black.png'
            className='h-12 cursor-pointer'
          />
        </Link>
        {/* <li className='mr-6 ml-auto'>
          <Link href='/'>
            <a
              id='home'
              className='text-black no-underline hover:text-yellow-600'
            >
              HOME
            </a>
          </Link>
        </li> */}
        <li className='mr-6 ml-auto'>
          <Link href='/about'>
            <a
              id='about'
              className='text-black no-underline hover:text-yellow-600'
            >
              ABOUT
            </a>
          </Link>
        </li>
        <li className='mr-6'>
          <Link href='/artists'>
            <a
              id='artists'
              className='text-black no-underline hover:text-yellow-600'
            >
              ARTIST
            </a>
          </Link>
        </li>
        <li className='mr-6'>
          <Link href='/works'>
            <a
              id='works'
              className='text-black no-underline hover:text-yellow-600'
            >
              WORKS
            </a>
          </Link>
        </li>
        <li className='mr-6'>
          <Link href='/shop'>
            <a
              id='shop'
              className='text-black no-underline hover:text-yellow-600'
            >
              SHOP
            </a>
          </Link>
        </li>
        <li className='mr-6'>
          <Link href='/contact'>
            <a
              id='contact'
              className='text-black no-underline hover:text-yellow-600'
            >
              CONTACT
            </a>
          </Link>
        </li>
        {/* <ul className="flex justify-between items-center">
          {links.map(({ href, label }) => (
            <li key={`${href}${label}`} className="ml-4">
              <a href={href} className="btn-blue no-underline">
                {label}
              </a>
            </li>
          ))}
        </ul> */}
      </ul>
    </nav>
  )
}
