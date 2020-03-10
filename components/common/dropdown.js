import Link from 'next/link'
const indazooArr = ['kxxzxx', 'bkkoli', 'c-in', 'Omondi', 'D.A', 'scenestealer']

export default () => {
  return (
    <div className='relative'>
      <div
        className='absolute mt-2 py-2 w-48 bg-white rounded-lg shadow-xl'
        style={{ zIndex: 50 }}
      >
        {indazooArr.map((artistName, i) => {
          return (
            <Link href={'/artist/' + artistName} key={i}>
              <a className='block px-4 py-2 text-gray-800 hover:bg-yellow-600 hover:text-white'>
                {artistName}
              </a>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
