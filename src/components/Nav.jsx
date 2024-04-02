import { headerLogo } from '../assets/images'
import { hamburger } from '../assets/icons'
import { close_icon } from '../assets/icons'
import { navLinks } from '../constants'
import { useState } from 'react'
const Nav = () => {
  const [menu, setMenu] = useState(false)
  function handelMenu() {
    setMenu((prevMenu) => !prevMenu)
    let body = document.querySelector('body')
    body.classList.toggle('overflow-hidden')
  }
  return (
    <header className='padding-x py-8
    absolute z-10  w-full'>
      <nav className='flex justify-between
       max-container items-center'>
        <a href="/">
          <img 
            src={headerLogo} 
            alt="logo"
            width={130}
            height={29}
           />
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16
        max-lg:hidden'>
          {navLinks.map((navlink) => (
            <li key={navlink.label}>
              <a 
              href={navlink.href}
              className='font-montserrat leading-normal
              test-lg text-slate-gray'
              >{navlink.label}</a>
            </li>
          ))}
        </ul>
        <ul className={
          `absolute overflow-hidden z-50 h-screen transition-all duration-500
          flex flex-col gap-10 border-r-[1px] border-black  pt-20 bg-white w-full 
          ${ menu ?
            "  top-0 left-0 "
             : "-left-full top-0"
            }`}
          
         >

        {navLinks.map((navlink) => (
            <li className='w-full border-b-[1px]
             border-slate-gray pb-4 font-semibold hover:text-coral-red' key={navlink.label}>
              <a 
              href={navlink.href}
              className='font-montserrat leading-normal
              test-lg text-slate-gray py-6 pl-8'
              >{navlink.label}</a>
            </li>
          ))}
        </ul>
        <div>
          <img
          src={hamburger} 
          alt="hamburger"
          width={25}
          height={25} 
          className={menu ? "hidden " : ' lg:hidden cursor-pointer z-50'}
          onClick={handelMenu}/>
          <img
          src={close_icon} 
          alt="hamburger"
          width={25}
          height={25} 
          className={menu ? 'relative lg:hidden cursor-pointer z-50' : "hidden"}
          onClick={handelMenu}/>

        </div>
      </nav>
    </header>
  )
}

export default Nav
