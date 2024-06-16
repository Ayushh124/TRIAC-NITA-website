import { ArrowLeftToLine } from 'lucide-react';
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import { NavLink, useLocation } from 'react-router-dom';
import navbaritems from '../../lib/navbar';

function Sidebar({ open, setOpen }) {
  const { pathname } = useLocation();
  const sidebarRef = useRef();

  useEffect(() => {
    // Disable scrolling on the body when the sidebar is open
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [open]);

  useEffect(() => {
    // Handle clicks outside the sidebar
    function handleClickOutside(event) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open]);

  return (
    <>
      {open && <div className="fixed inset-0 z-[9999] bg-black opacity-50" onClick={() => setOpen(false)}></div>}
      <div
        ref={sidebarRef}
        className={`fixed top-0 left-0 z-[10000] bg-gray-950 cursor-pointer min-h-screen ${
          open ? 'translate-x-0' : 'translate-x-[-100%]'
        } duration-700 text-gray-300 px-4 pt-16 shadow-xl transition w-4/5 h-screen overflow-y-auto`}
      >
        <div className="pb-10 border-b-2 border-b-slate-500 flex justify-between items-center">
          <h2 className="text-2xl pl-5">TRIAC</h2>
          <ArrowLeftToLine
            size={40}
            className={`cursor-pointer transition-transform z-[10000] bg-gray-900 p-1 rounded-md duration-500 ease-in-out ${
              open ? '' : 'rotate-180'
            }`}
            onClick={() => setOpen(prev => !prev)}
          />
        </div>
        <ul className="mt-4 mb-4 w-full flex flex-col gap-4">
          {navbaritems?.map(({ id, name, url, scrollId, icon: Icon }) => (
            <li key={id}>
              {url === '#teams' || url === '#contact-us' || url === '#about-us' ? (
                <Link
                  href={url}
                  to={scrollId ? scrollId : url}
                  smooth
                  duration={700}
                  className="group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-700 pl-5 rounded-md"
                >
                  <div className="flex gap-6 items-center">
                    <Icon />
                    <div
                      style={{ transitionDelay: `${id + 2}00ms` }}
                      className={`text-xl ${!open && 'opacity-0 translate-x-28 overflow-hidden'}`}
                    >
                      {name}
                    </div>
                  </div>
                </Link>
              ) : (
                <NavLink
                  to={url}
                  className={`group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-zinc-700 pl-5 rounded-md ${
                    pathname === url && 'bg-gray-700'
                  }`}
                >
                  <div className="flex gap-6 items-center">
                    <Icon />
                    <div
                      style={{ transitionDelay: `${id + 2}00ms` }}
                      className={`text-xl ${!open && 'opacity-0 translate-x-28 overflow-hidden'}`}
                    >
                      {name}
                    </div>
                  </div>
                </NavLink>
              )}
            </li>
          ))}
        </ul>
        <div className="flex flex-col text-center text-xs gap-2 py-4 bg-gray-800 text-gray-300 mb-4">
          <span>&copy; 2024 All Rights Reserved</span>
          <span>
            Made with <span role="img" aria-label="heart">❤️</span> by the TRIAC Team
          </span>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
