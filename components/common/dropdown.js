import Link from 'next/link'
const indazooArr = ['kxxzxx', 'bkkoli', 'c-in', 'Omondi', 'D.A', 'scenestealer']

export default () => {
  return (
    <div class='relative'>
      <div class='absolute mt-2 py-2 w-48 bg-white rounded-lg shadow-xl'>
        {indazooArr.map((artistName, i) => {
          return (
            <Link href={'/artist/' + artistName} key={i}>
              <a class='block px-4 py-2 text-gray-800 hover:bg-yellow-600 hover:text-white'>
                {artistName}
              </a>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
