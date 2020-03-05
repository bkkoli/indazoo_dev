import Button from 'react-bootstrap/Button'
export default () => {
  return (
    <div className='contact h-full flex flex-col'>
      <div className='msg-header flex flex-row pl-4 pr-4'>
        {/* <div className='left text-blue-600'>
          <i className='angle left icon'></i>
        </div> */}
        <div className='flex-grow flex flex-col items-center justify-center'>
          <i aria-hidden='true' className='user icon h-16 w-16'></i>
          <span className='ml-4 mr-4'>Someone</span>
        </div>
      </div>
      <div className='messages-wrapper bg-white h-full flex flex-col'>
        <div className='message from'>Hey!</div>
        <div className='message from last'>How Can I contact you guys?</div>
        <div className='message to last'>
          Send Email to indazoo-2014@naver.com plz!
        </div>
        <div className='mt-auto mb-4 flex justify-center'>
          <Button variant='primary'>Send Email</Button>
        </div>
      </div>
    </div>
  )
}
