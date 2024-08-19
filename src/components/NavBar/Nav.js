import React from 'react'
import Button from '../Core/Button'
import Logo from './Logo'

export default function Nav() {
  return (
    <div className>
        <nav class="bg-gray-800 p-4">
        <div class="container mx-auto flex justify-between items-center">
            
            <div class="text-white font-bold text-xl">
                <Logo />
            </div>
            
            <div class="space-x-4">
                <Button btnName={"Skills"}/>
                <Button btnName={"Project"}/>
                <Button btnName={"Contact"}/>
                <Button btnName={"About me"}/>
            </div>
        </div>
    </nav>
        {/* 
        
        <Button />
        <Button />
        <Button /> */}
    </div>
  )
}
