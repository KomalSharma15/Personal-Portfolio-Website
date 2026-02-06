
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'py-4' : 'py-8'}`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className={`flex items-center justify-between transition-all duration-500 rounded-full px-6 py-2 ${isScrolled ? 'glass shadow-2xl scale-100' : 'bg-transparent'}`}>
          <a href="#" className="text-xl font-extrabold tracking-tighter text-white">KS<span className="text-indigo-500">.</span></a>
          
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <a 
                key={item.name} 
                href={item.href}
                className="px-4 py-2 text-xs font-semibold tracking-widest uppercase text-zinc-400 hover:text-white transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className="ml-4 px-5 py-2 text-xs font-bold tracking-widest uppercase bg-white text-black rounded-full hover:bg-zinc-200 transition-all"
            >
              Hire Me
            </a>
          </div>

          <button className="md:hidden text-zinc-400 hover:text-white p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
