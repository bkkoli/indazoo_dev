import Nav from '../components/nav'
import BreadCrumb from '../components/breadCrumb'
import Router from 'next/router'
export default () => (
  <div className='flex flex-col'>
    <Nav />
    <div className='bg-gray-200 h-full flex flex-col px-64'>
      <BreadCrumb name={Router.route.replace('/', '')} />
      <div className='hero m-auto text-center text-6xl font-extrabold'>
        Comming Soon
      </div>
    </div>
  </div>
)
