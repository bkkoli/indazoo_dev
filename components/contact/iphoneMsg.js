import Button from 'react-bootstrap/Button'
export default () => {
  return (
    <div className='contact h-full flex flex-col'>
      <div className='msg-header flex flex-row pl-4 pr-4 h-20'>
        {/* <div className='left text-blue-600'>
          <i className='angle left icon'></i>
        </div> */}
        <div className='flex-grow flex flex-col items-center justify-center'>
          <i aria-hidden='true' className='user circle icon h-16 w-16'></i>
          <span className='ml-4 mr-4'>Someone</span>
        </div>
      </div>
      <div
        className='messages-wrapper bg-white h-full flex flex-col'
      >
        <div className='message from'>Hey!</div>
        <div className='message from last'>How Can I contact you guys?</div>
        <div className='message to'>Click on the links below</div>
        <div className='message to'>
          <a
            className='text-white no-underline'
            href='mailto:indazoo-2014@naver.com'
          >
            <i className='envelope outline icon'></i>Email
          </a>
        </div>
        <div className='message to'>
          <a
            className='text-white no-underline'
            href='https://www.youtube.com/channel/UCpODlSz6HU1vhdbuE0xBGZA/videos'
          >
            <i className='youtube icon'></i>Youtube
          </a>
        </div>
        <div className='message to'>
          <a
            className='text-white no-underline'
            href='https://soundcloud.com/indazoo'
          >
            <i className='soundcloud icon'></i>SoundCloud
          </a>
        </div>
        <div className='message to last'>
          <a
            className='text-white no-underline'
            href='https://www.instagram.com/indazoo_official/'
          >
            <i className='instagram icon'></i>Instagram
          </a>
        </div>
        <div className='mt-auto flex justify-center h-full'>
          <img
            src='/img/contact/iphoneKeyboard.jpg'
            className='max-h-full w-full'
          />
        </div>
      </div>
    </div>
  )
}
