import React from 'react'
import { useEffect, useState } from 'react';

import Button from '../Core/Button'
import ThemeToggle from '../Core/Theme'
import Logo from './Logo'


export default function Nav() {
  const [isShrunk, setIsShrunk] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsShrunk(true);
      } else {
        setIsShrunk(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav class="xl:p-12 p-8 ">
        <div class="container mx-auto flex justify-between items-center z-[1]">
            <div class=" font-bold text-xl">
                <Logo />
            </div>
            <div class="space-x-3 flex flex-row just">
                <Button btnName={"Skills"} direction={"#skills"}/>
                <Button btnName={"Project"} direction={"#project"}/>
                <Button btnName={"About me"} direction={"#aboutme"}/>
                <ThemeToggle/>
            </div>
        </div>
    </nav>
  )
}
