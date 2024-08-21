import React from 'react'


export default function ProjectContent({title, technologyUsed, object}) {

  return (
    <div className='flex flex-col align-middle items-center justify-center p-4' >
      <h1>{title}</h1>
      <p className='text-xs'>{technologyUsed} </p>
      <p>{object.textEng}</p>
    </div>
  )
}
