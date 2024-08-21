import React from 'react'
import Socials from './Socials'

export default function Profile({title, name, text, author}) {
  return (
    <div className='text-center xl:text-left order-1 xl:order-none'>
        <span className='text-xl'>Software Developer</span>
        
        <h1 className='text-5xl mb-6'>
            Hello I am <br /> <span className='text-tahiti-dark dark:text-tahiti'>Dev.Kubicki</span>
        </h1>
        <p className='max-w-[500px] mb-2 text/80'>
          {text}
        </p>
        <p className='max-w-[500px] mb-8 text-sm'>
          {author}
        </p>
        <div>
           <Socials/>
        </div>
    </div>
  )
}
