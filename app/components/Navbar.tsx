'use client'

import Link from 'next/link'
import { Coffee, BookOpen, Image, Info, MapPin } from 'lucide-react'

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link href="/" className="logo">
            <Coffee className="logo-icon" /> Brew <span className="highlight">Haven</span>
          </Link>

          {/* Mobile Menu Toggle */}
          <input type="checkbox" id="menu-toggle" className="menu-checkbox" />
          <label htmlFor="menu-toggle" className="menu-toggle">
            <span className="bar"></span>
            <span className="bar"></span>
          </label>

          <div className="nav-links">
            <Link href="/menu"><BookOpen className="nav-icon" /> Menu</Link>
            <Link href="/gallery"><Image className="nav-icon" /> Gallery</Link>
            <Link href="/about"><Info className="nav-icon" /> Our Story</Link>
            <Link href="/contact" className="visit-btn"><MapPin className="nav-icon" /> Visit Us</Link>
          </div>
        </div>
      </nav>

     
    
       


        
  
    </>
  )
}
