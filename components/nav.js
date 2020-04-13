import Link from '../components/common/link'
import { useRouter } from 'next/router'
import Dropdown from './common/dropdown'
import { useState } from 'react'
const links = [
  { href: 'https://github.com/zeit/next.js', label: 'GitHub' },
  { href: 'https://nextjs.org/docs', label: 'Docs' },
]

export default function Nav(props) {
  const [dropdownShow, setDropDownShow] = useState(false)
  const onClickDropDown = () => {
    setDropDownShow(!dropdownShow)
  }

  return (
    <nav
      className='border-1 border-gray-100 main_nav'
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
          <Link href='/about' activeClassName='text-yellow-600'>
            <a
              id='about'
              className='text-black no-underline hover:text-yellow-600'
            >
              ABOUT
            </a>
          </Link>
        </li>
        <li className='mr-6'>
          <span
            className='text-black no-underline hover:text-yellow-600 cursor-pointer'
            onClick={onClickDropDown}
          >
            ARTIST
          </span>
          {dropdownShow ? <Dropdown /> : ''}
        </li>
        <li className='mr-6'>
          <Link href='/works' activeClassName='text-yellow-600'>
            <a
              id='works'
              className='text-black no-underline hover:text-yellow-600'
            >
              WORKS
            </a>
          </Link>
        </li>
        <li className='mr-6'>
          <Link href='/shop' activeClassName='text-yellow-600'>
            <a
              id='shop'
              className='text-black no-underline hover:text-yellow-600'
            >
              SHOP
            </a>
          </Link>
        </li>
        <li className='mr-6'>
          <Link href='/contact' activeClassName='text-yellow-600'>
            <a
              id='contact'
              className='text-black no-underline hover:text-yellow-600'
            >
              CONTACT
            </a>
          </Link>
        </li>
        <i className="bars icon cursor-pointer"></i>
      </ul>
    </nav>
  )
}
