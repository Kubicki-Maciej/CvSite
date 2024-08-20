import React from 'react'

export default function SingleSkill({name, logo, lvl}) {
  return (
    <div className='flex items-center  mb-2 mt-2 ml-4 '>
        <div className="xl:h-14 h-12 flex items-center">
          <img src={logo} alt={name} className='h-full object-contain' />
        </div>
        <div className='ml-4'>
          <p className='text-md'>{name}</p>
          <p className='text-sm'>{lvl}</p>
        </div>
    </div>
  )
}
