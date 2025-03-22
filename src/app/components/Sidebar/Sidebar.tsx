import React, { useState } from 'react';
import Link from 'next/link';
import { AiOutlineMenu,
  AiFillCloseCircle,
  AiFillHome,
  AiOutlineUser,
  AiFillSetting,
  AiFillInfoCircle } from "react-icons/ai";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    console.log('aaaa');
    
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Menú lateral */}
      <div
        className={` fixed inset-y-0 w-20 left-0 bg-gray-800 text-white transition-transform duration-300 transform ${
          isOpen ? 'translate-x-0 w-64' : '-translate-x-full '
        } md:translate-x-0 `}
      >
        {/* Botón de hamburguesa (dentro del Sidebar) */}
        <button
          onClick={toggleSidebar}
          className={`w-10 h-10 flex justify-center mt-4 top-4 right-4 p-2 bg-gray-700 text-white rounded-md mb-4 ${ isOpen ? 'ml-auto bg-transparent' : 'mx-auto' }`}
        >
          {isOpen ? <AiFillCloseCircle /> : <AiOutlineMenu />}
        </button>

        <div className="p-4">
          {/* Logo o título */}
          <h2 className="text-lg font-semibold mt-6 mb-6 hidden md:block lg:block">
            SYS
          </h2>

          {/* Opciones del menú */}
          <nav>
            <Link href="/" className="flex items-center p-2 hover:bg-gray-700 rounded-md">
              <AiFillHome className="w-6 h-6" />
              <span className={`ml-2 ${isOpen ? 'inline' : 'hidden md:hidden lg:hidden'}`}>Inicio</span>
            </Link>
            <Link href="/page1" className="flex items-center p-2 hover:bg-gray-700 rounded-md">
              <AiOutlineUser className="w-6 h-6" />
              <span className={`ml-2 ${isOpen ? 'inline' : 'hidden md:hidden lg:hidden'}`}>Página 1</span>
            </Link>
            <Link href="/page2" className="flex items-center p-2 hover:bg-gray-700 rounded-md">
              <AiFillSetting className="w-6 h-6" />
              <span className={`ml-2 ${isOpen ? 'inline' : 'hidden md:hidden lg:hidden'}`}>Página 2</span>
            </Link>
            <Link href="/page3" className="flex items-center p-2 hover:bg-gray-700 rounded-md">
              <AiFillInfoCircle className="w-6 h-6" />
              <span className={`ml-2 ${isOpen ? 'inline' : 'hidden md:hidden lg:hidden'}`}>Página 3</span>
            </Link>
          </nav>
        </div>
      </div>

      {/* Botón de hamburguesa (solo visible en móviles) */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 p-2 bg-gray-800 text-white rounded-md md:hidden"
      >
        {!isOpen && <AiOutlineMenu />}
      </button>
    </>
  );
};

export default Sidebar;