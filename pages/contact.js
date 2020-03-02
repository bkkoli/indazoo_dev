import Nav from '../components/nav'
import BreadCrumb from '../components/breadCrumb'
import Router from 'next/router'
export default () => (
  <div className="flex flex-col">
    <Nav />
    <div className="bg-gray-200 h-full flex flex-col px-64">
      <BreadCrumb name={Router.route.replace('/', '')} />
      <div className="hero m-auto">
        <div className="flex flex-row">
          <div className="flex flex-col w-7/12 mr-16">
            <div className="bg-white flex flex-row h-20 items-center rounded-t-md">
              <img />
              <span className="font-bold text-xl pl-3">indazoo</span>
              <i
                aria-hidden="true"
                className="ellipsis horizontal icon flex-auto text-right pr-3"
              ></i>
            </div>
            <div>
              <img
                className="w-full rounded-b-md"
                style={{ height: '600px' }}
                src="/img/test1.jpg"
              />
            </div>
          </div>
          <div className="flex flex-col w-5/12">
            <div className="bg-white flex flex-row h-20 items-center rounded-t-md">
              <img />
              <span className="font-bold text-xl">Someone</span>
            </div>
            <div>
              <img
                className="w-full rounded-b-md"
                style={{ height: '600px' }}
                src="/img/test1.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)
