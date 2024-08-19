import React from 'react'
import Button from '../Core/Button'
import ThemeToggle from '../Core/Theme'
import Logo from './Logo'


export default function Nav() {
  return (
    <nav class="xl:p-12 p-8">
        <div class="container mx-auto flex justify-between items-center ">
            <div class=" font-bold text-xl">
                <Logo />
            </div>
            <div class="space-x-5">
                <Button btnName={"Skills"}/>
                <Button btnName={"Project"}/>
                <Button btnName={"Contact"}/>
                <Button btnName={"About me"}/>
                <ThemeToggle/>
            </div>
        </div>
    </nav>
  )
}
