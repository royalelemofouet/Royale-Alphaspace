import { type ReactNode } from 'react';

const Title = ({ text } : {text : string}): ReactNode => {
  return (
    <div>
      <h2 className='my-4 sm:my-6 text-3xl sm:text-4xl lg:text-5xl capitalize'> {text}</h2>
    </div>
  )
}

export default Title;