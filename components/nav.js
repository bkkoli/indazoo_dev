import Link from 'next/link'

const links = [
  { href: 'https://github.com/zeit/next.js', label: 'GitHub' },
  { href: 'https://nextjs.org/docs', label: 'Docs' },
]

export default function Nav() {
  return (
    <nav>
      <ul className='flex justify-start items-center pr-24 pl-24 h-20'>
        <Link href='/'>
          <img
            src='/img/common/logo_black.png'
            className='h-12 cursor-pointer'
          />
        </Link>
        <li className='mr-6 ml-auto'>
          <Link href='/'>
            <a className='text-black no-underline hover:text-yellow-600'>
              HOME
            </a>
          </Link>
        </li>
        <li className='mr-6'>
          <Link href='/about'>
            <a className='text-black no-underline hover:text-yellow-600'>
              ABOUT
            </a>
          </Link>
        </li>
        <li className='mr-6'>
          <Link href='/artist'>
            <a className='text-black no-underline hover:text-yellow-600'>
              ARTIST
            </a>
          </Link>
        </li>
        <li className='mr-6'>
          <Link href='/shop'>
            <a className='text-black no-underline hover:text-yellow-600'>
              SHOP
            </a>
          </Link>
        </li>
        <li className='mr-6'>
          <Link href='/contact'>
            <a className='text-black no-underline hover:text-yellow-600'>
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
