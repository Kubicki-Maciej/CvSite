import React ,{ useState, useEffect } from 'react'
import Socials from './Socials'
import TypeWriter from '../Core/TypeWriter'


export default function Profile({title, name, text, author}) {
  const [showSecondPart, setShowSecondPart] = useState(false)

  function changeState(){
    console.log('zmiana statusu');
    setShowSecondPart(true)
  }

  return (
    <div className='text-center xl:text-left order-1 xl:order-none'>
        <span className='text-xl'>Software Developer</span>
        
        <h1 className='text-5xl mb-6'>
            <TypeWriter text1={"Hello I am "} text2={"Maciej Kubicki"} textBool={true} setTextBool={changeState}/>
            
           
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
