// File: components/Navbar.js
"use client"; // Ensure this is included for Next.js apps
import React, { useState } from "react";
import Link from "next/link";
import { slide as Menu } from "react-burger-menu";
import "../style/Navbar.css";
import ham from '../app/res/Hamburger.svg'
const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuStateChange = (state) => {
    setMenuOpen(state.isOpen);
  };

  return (
    <nav className="navbar" id="outer-container">
      
      
     <div className="desktop-menu" style={{display:"flex",justifyContent:"space-between",width:"100%"}}>
      <div className="nav-brand">CSS World</div>
      <ul className="navbar-menu">
        <li><Link href="/" prefetch={true}>Home</Link></li>
        <li><Link href="/boxshadow" prefetch={true}>Box Shadow</Link></li>
        <li><Link href="/textshadow" prefetch={true}>Text Shadow</Link></li>
        <li><Link href="/csscursor" prefetch={true}>CSS Cursor</Link></li>
        <li><Link href="/border" prefetch={true}>Border</Link></li>
        <li><Link href="/gradientcss" prefetch={true}>Gradient CSS</Link></li>
        <li><Link href="/transformcss" prefetch={true}>Transform CSS</Link></li>
        <li><Link href="/rgbanhexcolor" prefetch={true}>RGBA & Hex Color</Link></li>
        <li><Link href="/multiplecol" prefetch={true}>Multiple Columns</Link></li>
        <li><Link href="/filter" prefetch={true}>Filter</Link></li>
      </ul>
      </div>
      {/* Burger Menu for Mobile */}
      <div className=" hamburger-menu">
      <Menu 
        isOpen={isMenuOpen} 
        onStateChange={handleMenuStateChange} 
        right
        pageWrapId={ "page-wrap" } 
        outerContainerId={ "outer-container" }
      >
        
          
        <Link href="/" prefetch={true} onClick={() => setMenuOpen(false)}>Home</Link>
        <Link href="/boxshadow" prefetch={true} onClick={() => setMenuOpen(false)}>Box Shadow</Link>
        <Link href="/textshadow" prefetch={true} onClick={() => setMenuOpen(false)}>Text Shadow</Link>
        <Link href="/csscursor" prefetch={true} onClick={() => setMenuOpen(false)}>CSS Cursor</Link>
        <Link href="/border" prefetch={true} onClick={() => setMenuOpen(false)}>Border</Link>
        <Link href="/gradientcss" prefetch={true} onClick={() => setMenuOpen(false)}>Gradient CSS</Link>
        <Link href="/transformcss" prefetch={true} onClick={() => setMenuOpen(false)}>Transform CSS</Link>
        <Link href="/rgbanhexcolor" prefetch={true} onClick={() => setMenuOpen(false)}>RGBA & Hex Color</Link>
        <Link href="/multiplecol" prefetch={true} onClick={() => setMenuOpen(false)}>Multiple Columns</Link>
        <Link href="/filter" prefetch={true} onClick={() => setMenuOpen(false)}>Filter</Link>
        
      </Menu>
      </div>
    </nav>
  );
};

export default Navbar;
