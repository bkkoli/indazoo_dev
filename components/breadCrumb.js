const links = [
  { href: 'https://github.com/zeit/next.js', label: 'GitHub' },
  { href: 'https://nextjs.org/docs', label: 'Docs' },
]

export default function breadCrumb(props) {
  return (
    <div className='text-2xl font-bold flex items-center font-mono breadCrumb'>
      <span style={{ height: 'fit-content' }}># {props.name === 'about' ? 'What is the indazoo?' : props.name}</span>
      <style jsx>{`
        .breadCrumb {
          height: 6rem;
        }
        .breadCrumb span {
          margin-top: 3%;
        }
        @media (max-width: 768px) {
        }

        @media (max-width: 576px) {
          .breadCrumb {
            font-size: 1.25rem !important;
          }
        }

        @media (max-width: 375px) {
          .breadCrumb span {
            margin-top: 5% !important;
          }
        }
      `}</style>
    </div>
  )
}
