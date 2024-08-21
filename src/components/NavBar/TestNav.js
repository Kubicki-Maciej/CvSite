import { useEffect, useState } from 'react';
import Logo from './Logo'; // Ensure you have this component
import Button from './Button'; // Ensure you have this component
import ThemeToggle from './ThemeToggle'; // Ensure you have this component

export default function Nav() {
  const [isShrunk, setIsShrunk] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className={`fixed top-0 left-0 right-0 transition-all duration-300 ${isShrunk ? 'p-4 h-16' : 'p-8 h-24'} bg-white shadow-md`}>
      <div className="container mx-auto flex justify-between items-center z-[1]">
        <div className={`font-bold ${isShrunk ? 'text-lg' : 'text-xl'}`}>
          <Logo />
        </div>
        <div className="hidden md:flex md:space-x-3">
          <Button btnName={"Skills"} direction={"#skills"} />
          <Button btnName={"Project"} direction={"#project"} />
          <Button btnName={"About me"} direction={"#aboutme"} />
          <ThemeToggle />
        </div>
        {/* Burger Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex items-center p-2"
        >
          <svg
            className={`w-6 h-6 ${isMenuOpen ? 'hidden' : 'block'}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
          <svg
            className={`w-6 h-6 ${isMenuOpen ? 'block' : 'hidden'}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-md transition-transform duration-300 ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="flex flex-col space-y-2 p-4">
          <Button btnName={"Skills"} direction={"#skills"} />
          <Button btnName={"Project"} direction={"#project"} />
          <Button btnName={"About me"} direction={"#aboutme"} />
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
