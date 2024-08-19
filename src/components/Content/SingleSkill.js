import React from 'react'

export default function SingleSkill({name, logo}) {
  return (
    <div className='p4 dark:bg p-2'>
        <img src={logo} alt={name} />
    </div>
  )
}
