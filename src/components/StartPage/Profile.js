import React from 'react'
import Socials from './Socials'

export default function Profile() {
  return (
    <div className='text-center xl:text-left odrer-2 xl:order-none'>
        <span className='text-xl'>Software Developer</span>
        
        <h1 className='text-5xl mb-6'>
            Hello I am <br /> <span className='text-tahiti-dark dark:text-tahiti'>Dev.Kubicki</span>
        </h1>
        <p className='max-w-[500px] mb-9 text/80'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
        </p>
        <div>
           <Socials/>
        </div>
    </div>
  )
}
