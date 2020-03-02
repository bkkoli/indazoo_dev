const links = [
  { href: 'https://github.com/zeit/next.js', label: 'GitHub' },
  { href: 'https://nextjs.org/docs', label: 'Docs' },
]

export default function breadCrumb(props) {
  return (
    <div className="text-2xl font-bold h-20 flex items-center">
      <span style={{height:"fit-content"}}>#{props.name}</span>
    </div>
  )
}
