import { useRouter } from 'next/router'
import Nav from '../../../components/nav'
import BreadCrumb from '../../../components/breadCrumb'
export default () => {
  const router = useRouter()
  const work = {
    수목장: {
      content: 'scenestealer 1st mixtape',
    },
    '704': {
      content: 'Indazoo 1st mixtape',
    },
    開場: {
      content: 'Indazoo 1st performance',
    },
  }
  let { workName } = router.query
  console.info(workName)
  let content = ''
  return (
    <div className='flex flex-col artists'>
      <Nav />
      <section className='bg-gray-200 h-full flex flex-col container-px'>
        <BreadCrumb name={workName} />
        <div>{content}</div>
      </section>
    </div>
  )
}
