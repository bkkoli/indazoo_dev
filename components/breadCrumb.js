const links = [
  { href: 'https://github.com/zeit/next.js', label: 'GitHub' },
  { href: 'https://nextjs.org/docs', label: 'Docs' },
]

export default function breadCrumb(props) {
  return (
    <div className='text-2xl font-bold flex items-center font-mono breadCrumb'>
      <span style={{ height: 'fit-content' }}>
        # {props.name === 'about' ? 'What is the indazoo?' : props.name}
      </span>
    </div>
  )
}
