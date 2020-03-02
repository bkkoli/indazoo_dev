import Nav from '../components/nav'
import BreadCrumb from '../components/breadCrumb'
import Router from 'next/router'

export default () => (
  <div>
    <Nav />
    <BreadCrumb name={Router.route.replace('/', '')} />
    <div className="hero">
      <h1 className="title">About</h1>
    </div>
  </div>
)
