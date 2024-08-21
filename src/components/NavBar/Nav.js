import React from 'react'
import { useEffect, useState } from 'react';
import Button from '../Core/Button'
import ThemeToggle from '../Core/Theme'

// import Logo from './Logo'


// export default function Nav() {
//   const [isShrunk, setIsShrunk] = useState(false);
  
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 40) {
//         setIsShrunk(true);
//       } else {
//         setIsShrunk(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <nav class="xl:p-12 p-8 ">
//         <div class="container mx-auto flex justify-between items-center z-[1]">
//             <div class=" font-bold text-xl">
//                 <Logo />
//             </div>
//             <div class="space-x-3 flex flex-row just">
//                 <Button btnName={"Skills"} direction={"#skills"}/>
//                 <Button btnName={"Project"} direction={"#project"}/>
//                 <Button btnName={"About me"} direction={"#aboutme"}/>
//                 <ThemeToggle/>
//             </div>
//         </div>
//     </nav>
//   )
// }


import Logo from './Logo'; // Ensure you have this component


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
    <nav className={`fixed z-20 top-0 left-0 right-0 transition-all duration-300  ${isShrunk ? 'p-4 h-16 bg-white dark:bg-background-dark' : 'p-8 h-24 bg-transparent'}  `}>
      <div className="container mx-auto flex justify-between items-center ">
        <div className={`font-bold text-xl ${isShrunk ? 'text-lg' : 'text-xl'}`}>
          <Logo />
        </div>
        <div className={`space-x-3 flex flex-row ${isShrunk ? 'text-sm' : 'text-base'}`}>
          <Button btnName={"Skills"} direction={"#skills"} />
          <Button btnName={"Project"} direction={"#project"} />
          <Button btnName={"About me"} direction={"#aboutme"} />
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}