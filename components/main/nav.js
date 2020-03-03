import Link from 'next/link'

const links = [
  { href: 'https://github.com/zeit/next.js', label: 'GitHub' },
  { href: 'https://nextjs.org/docs', label: 'Docs' },
]

export default function Nav() {
  return (
    <nav className='fixed bottom-0 right-0 text-2xl'>
      <ul className='flex justify-end items-center p-8 pr-24 pb-24'>
        <li className='mr-6'>
          <a
            className='text-white no-underline hover:text-yellow-600'
            href='https://www.youtube.com/channel/UCpODlSz6HU1vhdbuE0xBGZA/videos'
          >
            <i aria-hidden='true' className='youtube icon'></i>
          </a>
        </li>
        <li className='mr-6'>
          <a
            className='text-white no-underline hover:text-yellow-600'
            href='https://soundcloud.com/indazoo'
          >
            <i aria-hidden='true' className='soundcloud icon'></i>
          </a>
        </li>
        <li className='mr-6'>
          <a
            className='text-white no-underline hover:text-yellow-600'
            href='https://www.instagram.com/indazoo_official/'
          >
            <i aria-hidden='true' className='instagram icon'></i>
          </a>
        </li>
        <li className='mr-6'>
          <Link href='/about'>
            <a className='text-white no-underline hover:text-yellow-600'>
              ENTER
            </a>
          </Link>
        </li>
        <li className='mr-6'>
          <Link href='/shop'>
            <a className='text-white no-underline hover:text-yellow-600'>
              SHOP
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
