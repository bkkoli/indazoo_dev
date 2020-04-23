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
  const [isClosedMobileMenu, setIsClosedMobileMenu] = useState(true)
  const onClickDropDown = () => {
    setDropDownShow(!dropdownShow)
  }

  const toggleMobileMenu = () => {
    setIsClosedMobileMenu(!isClosedMobileMenu)
  }

  return (
    <nav className='border-1 border-gray-100 main_nav' style={{ borderBottom: '1px solid #cbd5e0' }}>
      <ul className='flex justify-start items-center pr-24 pl-24 h-20'>
        <Link href='/'>
          <img src='/img/common/logo_black.png' className='h-12 cursor-pointer' />
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
            <a id='about' className='text-black no-underline hover:text-yellow-600'>
              ABOUT
            </a>
          </Link>
        </li>
        <li className='mr-6'>
          <span className='text-black no-underline hover:text-yellow-600 cursor-pointer' onClick={onClickDropDown}>
            ARTIST
          </span>
          {dropdownShow ? <Dropdown /> : ''}
        </li>
        <li className='mr-6'>
          <Link href='/works' activeClassName='text-yellow-600'>
            <a id='works' className='text-black no-underline hover:text-yellow-600'>
              WORKS
            </a>
          </Link>
        </li>
        <li className='mr-6'>
          <Link href='/shop' activeClassName='text-yellow-600'>
            <a id='shop' className='text-black no-underline hover:text-yellow-600'>
              SHOP
            </a>
          </Link>
        </li>
        <li className='mr-6'>
          <Link href='/contact' activeClassName='text-yellow-600'>
            <a id='contact' className='text-black no-underline hover:text-yellow-600'>
              CONTACT
            </a>
          </Link>
        </li>
        <i className='bars icon cursor-pointer' onClick={toggleMobileMenu}></i>
        {isClosedMobileMenu ? (
          ''
        ) : (
          <ul className='fixed z-50 bg-white inset-0 flex flex-col items-center mobile_menu hidden'>
            <div className='flex'>
              <i aria-hidden='true' className='close icon text-black' onClick={toggleMobileMenu}></i>
            </div>
            <ul className='flex flex-col items-center w-full h-full text-3xl'>
              {/* <li className='title'>Menu</li> */}
              <li className='body'>
                <Link href='/about' activeClassName='text-yellow-600'>
                  <a id='about' className='text-black no-underline hover:text-yellow-600'>
                    ABOUT
                  </a>
                </Link>
              </li>
              <li className='body flex flex-col' style={{ marginBottom: '3%' }}>
                <div className='flex flex-row' onClick={onClickDropDown}>
                  {dropdownShow ? <i className='minus icon'></i> : <i className='plus icon'></i>}
                  <span className='text-black no-underline cursor-pointer'>ARTIST</span>
                </div>

                {dropdownShow ? (
                  <div className='flex flex-col items-center artist_mobile_dropdown'>
                    <Link href='/artist/kxxzxx'>
                      <span className='mb-3 mt-3 text-gray-600'>kxxzxx</span>
                    </Link>
                    <Link href='/artist/bkkoli'>
                      <span className='mb-3 mt-3 text-gray-600'>bkkoli</span>
                    </Link>
                    <Link href='/artist/c-in'>
                      <span className='mb-3 mt-3 text-gray-600'>c-in</span>
                    </Link>
                    <Link href='/artist/Omondi'>
                      <span className='mb-3 mt-3 text-gray-600'>Omondi</span>
                    </Link>
                    <Link href='/artist/D.A'>
                      <span className='mb-3 mt-3 text-gray-600'>D.A</span>
                    </Link>
                    <Link href='/artist/scenestealer'>
                      <span className='mb-3 mt-3 text-gray-600'>scenestealer</span>
                    </Link>
                  </div>
                ) : (
                  ''
                )}
              </li>
              <li className='body'>
                <Link href='/works' activeClassName='text-yellow-600'>
                  <a id='works' className='text-black no-underline hover:text-yellow-600'>
                    WORKS
                  </a>
                </Link>
              </li>
              <li className='body'>
                <Link href='/shop' activeClassName='text-yellow-600'>
                  <a id='shop' className='text-black no-underline hover:text-yellow-600'>
                    SHOP
                  </a>
                </Link>
              </li>
              <li className='body'>
                <Link href='/contact' activeClassName='text-yellow-600'>
                  <a id='contact' className='text-black no-underline hover:text-yellow-600'>
                    CONTACT
                  </a>
                </Link>
              </li>
            </ul>
          </ul>
        )}
      </ul>
      <style jsx>{`
        .main_nav > ul > i {
          display: none;
        }
        @media (max-width: 768px) {
          .main_nav > ul {
            padding-left: 2rem;
            padding-right: 2rem;
          }
          .main_nav > ul > li {
            display: none;
          }
          .main_nav > ul > i {
            display: unset;
            margin-left: auto;
          }

          .main_nav .mobile_menu {
            display: unset;
          }
          .main_nav .mobile_menu > div > i {
            font-size: 3rem !important;
            margin-top: 5%;
            margin-right: 5%;
            margin-left: auto;
          }
          .main_nav .mobile_menu .title {
            margin-top: 5%;
            margin-bottom: 5%;
          }
          .main_nav .mobile_menu .body {
            margin-bottom: 5%;
          }
          .main_nav .mobile_menu .body:first-child {
            margin-top: 15%;
          }
          .main_nav .mobile_menu ul {
            font-size: 3rem;
          }
        }

        @media (max-width: 576px) {
          .main_nav .mobile_menu > div > i {
            font-size: 2rem !important;
          }
          .main_nav .mobile_menu .title {
            margin-top: 5%;
            margin-bottom: 5%;
          }
          .main_nav .mobile_menu .body {
            margin-bottom: 5%;
          }
          .main_nav .mobile_menu .body .artist_mobile_dropdown > span {
            margin-top: 0.5rem !important;
            margin-bottom: 0.5rem !important;
          }
          .main_nav .mobile_menu .body:first-child {
            margin-top: 25%;
          }
          .main_nav .mobile_menu ul {
            font-size: 2rem;
          }
        }

        @media (max-width: 375px) {
          .main_nav .mobile_menu .body .artist_mobile_dropdown > span {
            margin-top: 0.3rem !important;
            margin-bottom: 0.3rem !important;
          }
        }
      `}</style>
    </nav>
  )
}
