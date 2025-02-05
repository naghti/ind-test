"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, LogIn, LogOut, RefreshCw } from "lucide-react"; 

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

    // close menu once licked on any link
    const handleUx = ()=>{
        setMenuOpen(false)
    }

    // Navigation links array
    const navLinks = [
        { name: "О школе", href: "/" },
        { name: "Курсы", href: "/" },
        { name: "Библиотека", href: "/" },
      ];
    return (
        <nav className="flex items-center justify-between px-3 py-3 bg-white border-b border-gray-200">
            
        {/* Left Section: Logo + Brand (Hidden on Mobile) */}
        <div className="flex items-center space-x-2">
            {/* Logo */}
            <div className="flex items-center justify-center  p-2 bg-black rounded">
                <Link href='/'> <RefreshCw className="w-5 h-5 text-white" /> </Link>
            </div>
            <span className="text-lg font-semibold hidden md:block">STEMPS</span>
        </div>

        {/* Center Section: Navigation Links (Hidden on Mobile) */}
        <div className="hidden md:flex space-x-8">
            {navLinks.map((nav, index) => (
                <Link 
                key={index} 
                href={nav.href} 
                className="text-gray-800 hover:text-gray-600"
                onClick={handleUx}
                >
                {nav.name}
                </Link>
            ))}
            </div>

        {/* Right Section: Login/Logout Button OR Mobile Menu Button */}
        <div className="md:hidden">
            <button onClick={() => {
                setMenuOpen(!menuOpen)
                setIsAuthenticated(!isAuthenticated)
            }} className={`transition-transform duration-300 ${menuOpen ? "rotate-180 opacity-0" : "opacity-100"}} p-2 bg-black text-white rounded`}>
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
        </div>
        
        {/* Right Section (Desktop): Login/Logout Button */}
        <Link
            href={isAuthenticated ? "/logout" : "/login"}
            className="hidden md:flex items-center space-x-2 bg-black text-white px-4 py-2 rounded hover:bg-gray-900" >
            {isAuthenticated ? (
            <>
                <span>Выход</span>
                <LogOut className="w-5 h-5" />
            </>
            ) : (
            <>
                <span>Вход</span>
                <LogIn className="w-5 h-5" />
            </>
            )}
        </Link>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
            <div className="absolute z-10 top-14 left-0  w-full bg-white rounded-b-[40px]  shadow-md  md:hidden">
                <h1 className="text-center underline ">logo</h1>
            <div className="flex flex-col items-center py-4 space-y-4 mt-4">
                {navLinks.map((nav, index) => (
                <Link 
                key={index} 
                href={nav.href} 
                onClick={handleUx} 
                className="text-gray-800 hover:text-gray-600">
                {nav.name}
                </Link>
                ))}
                <Link
                    href={isAuthenticated ? "/" : "/"}
                    className="flex items-center space-x-2 bg-black text-white px-4 py-2 rounded hover:bg-gray-900"
                    onClick={()=>setIsAuthenticated(!isAuthenticated)}
                >
                {isAuthenticated ? (
                    <>
                    <span>Выход</span>
                    <LogOut className="w-4 h-4" />
                    </>
                ) : (
                    <>
                    <span>Вход</span>
                    <LogIn className="w-4 h-4" />
                    </>
                )}
                </Link>
            </div>
            </div>
        )}
        </nav>
  );
}
