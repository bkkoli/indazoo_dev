import Nav from '../../../components/nav'
import BreadCrumb from '../../../components/breadCrumb'
import Dropdown from '../../../components/artist/dropdown'
import { useRouter } from 'next/router'
import { useState } from 'react'
export default () => {
  const router = useRouter()
  const { artistName } = router.query
  const [dropdownShow, setDropDownShow] = useState(false)
  const onClickDropDown = () => {
    setDropDownShow(!dropdownShow)
  }

  return (
    <div className='flex flex-col artists'>
      <Nav />
      <div className='bg-gray-200 h-full flex flex-col container-px'>
        <BreadCrumb name={artistName} />
        <div className='flex flex-row'>
          <div className='flex flex-col w-8/12'>
            <div>
              <img
                className='w-full rounded-b-md'
                style={{ height: '600px' }}
                src='/img/main/main_3.jpg'
              />
            </div>
          </div>
          <div className='flex flex-col w-4/12 bg-white'>
            <div className='bg-white flex flex-row h-20 items-center rounded-t-md pl-8 border-bottom'>
              <img src='/img/test1.jpg' className='rounded-full h-12 w-12' />
              <span className='font-bold text-xl pl-3'>{artistName}</span>
              <i
                aria-hidden='true'
                className='ellipsis horizontal icon ml-auto text-right pr-8 cursor-pointer'
                onClick={onClickDropDown}
              ></i>
              {dropdownShow ? <Dropdown artist='kxxzxx' /> : ''}
            </div>
            <div className='pl-8 text-xl'>
              <div className='flex flex-row items-center mt-4'>
                <img src='/img/test1.jpg' className='rounded-full h-12 w-12' />
                <span className='font-bold text-xl pl-3 mr-4'>
                  {artistName}
                </span>
                <div>This is test text</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
