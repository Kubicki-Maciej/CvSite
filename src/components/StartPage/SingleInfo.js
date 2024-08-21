import React from 'react'

export default function SingleInfo({title, paragraph}) {
  return (
    <div className='text-center max-w-[300px] '>
        <div className=''>
        <span className='text-lg'>{title}</span>
        <p className='text-sm'>{
        paragraph}</p>
        </div>
        
    </div>
  )
}
