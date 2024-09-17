import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import navbaritems from '../../lib/navbar'
import Sidebar from './Sidebar'
import { Camera, Menu, X } from 'lucide-react';
import { Link } from 'react-scroll';
import { NavLink } from 'react-router-dom';

const NavBar = ({ id }) => {

  const [open, setOpen] = useState(false)

  const handleScroll = () => {
    const aboutUsSection = document.getElementById('about-us');
    if (aboutUsSection) {
      aboutUsSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <div id={id} className='w-full text-white relative' >

      <header className=" flex flex-col items-center justify-center gap-6">
       
          <div className="shadow-md shadow-slate-900 bg-zinc-950
           dark:text-gray-50 w-full py-2
       flex flex-col items-center justify-start">

            {/* logo */}
            <div className="flex md:items-center flex-col w-full">
              <a className=" text-gray-600" href="/">
                <span className="sr-only">Home</span>
                <img
                  className=' border-none rounded'
                  height={120}
                  width={120}
                  src={logo} alt="Logo" />
                {/* <span className=' font-extrabold text-2xl leading-tight'>TRIAC</span> */}
              </a>
            </div>

      
            <div
              onClick={() => setOpen(prev => !prev)}
              className=" md:hidden fixed top-5 right-5 rounded
               bg-gray-800 p-1 z-[10000] flex justify-center items-center">

              <button>
                {open ? <X
                  size={30}
                  className={`cursor-pointer transition-transform
         duration-500 ease-in-out ${open ? "" : "rotate-180"}`}

                /> : <Menu 
                       size={30}
                       className=''
                      />
                  }
              </button>
            </div>
          </div>

          <div className="md:flex bg-gradient-to-r from-slate-800
           to-[#191919]  bg-[#191919] border-2 border-cyan-600 shadow-lg
           shadow-cyan-600 
            w-11/12 rounded-full
             md:items-center md:gap-12 justify-center flex-wrap hidden">
              {/* Desktop view---- */}
              <nav aria-label="Global" className="hidden md:block">
                <ul className="flex flex-wrap items-center  py-4 px-6   md:gap-10 text-sm">


                  {
                    navbaritems.map(({ id, name, url, scrollId }) => {

                      return <li key={id}>

                        {(url === '#teams' ||
                          url === '#contact-us' || url === '#about-us') ? <Link
                            href={url}
                            to={scrollId ? scrollId : url}
                            smooth
                            duration={700}
                            className='text-gray-100  text-xl transition hover:text-gray-500/75'
                          >
                          {name}
                        </Link> : <NavLink
                          to={url}
                          className={`text-gray-100  text-xl transition hover:text-gray-500/75`}

                        >
                          {name}
                        </NavLink>}



                      </li>
                    })
                  }
                </ul>
              </nav>
            </div>
                   {/* mobile view */}

                  
              <Sidebar open={open} setOpen={setOpen} />

      </header>

    </div>
  )
}

export default NavBar
