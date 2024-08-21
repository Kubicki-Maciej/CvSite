import React from 'react'

export default function SocialBtn({objectIcon}) {
  function onclick(){
    console.log('print me');
  }
  return (
    <div>
      <button onClick={onclick} className=" font-bold py-2 px-4 rounded-full transition dark:hover:bg-tahiti-light hover:bg-tahiti-dark dark:invert dark:hover:invert-0  ">
        <img className='  h-[48px] w-[48px] ' src={objectIcon}/>
      </button>
    </div>
  )
}
