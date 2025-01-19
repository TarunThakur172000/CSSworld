// File: components/Navbar.js
"use client"; // Ensure this is included for Next.js apps
import React, { useState } from "react";
import Link from "next/link";
import { slide as Menu } from "react-burger-menu";
import "../style/Navbar.css";
import ham from '../app/res/Hamburger.svg'
import Switch from "@/app/res/Switch";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuStateChange = (state) => {
    setMenuOpen(state.isOpen);
    const bar=document.querySelectorAll(".bm-burger-bars");
    if(state.isOpen){
      bar.forEach((el) => el.classList.add("active"));
      }else{
        bar.forEach((el) => el.classList.remove("active"));
        }
    

  };

  return (
    <nav className="navbar" id="outer-container">
      
      
     <div className="desktop-menu" style={{display:"flex",justifyContent:"space-between",width:"100%"}}>
      <div className="nav-brand">CSS World</div>
      <ul className="navbar-menu">
          <li><Link href="/" prefetch={true} onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link href="/box-shadow" prefetch={true} onClick={() => setMenuOpen(false)}>Box Shadow</Link></li>
          <li><Link href="/text-shadow" prefetch={true} onClick={() => setMenuOpen(false)}>Text Shadow</Link></li>
          <li><Link href="/css-cursor" prefetch={true} onClick={() => setMenuOpen(false)}>CSS Cursor</Link></li>
          <li><Link href="/border" prefetch={true} onClick={() => setMenuOpen(false)}>Border</Link></li>
          <li><Link href="/gradient-css" prefetch={true} onClick={() => setMenuOpen(false)}>Gradient CSS</Link></li>
          <li><Link href="/transform-css" prefetch={true} onClick={() => setMenuOpen(false)}>Transform CSS</Link></li>
          <li><Link href="/rgba-and-hex-color" prefetch={true} onClick={() => setMenuOpen(false)}>RGBA & Hex Color</Link></li>
          <li><Link href="/multiple-columns" prefetch={true} onClick={() => setMenuOpen(false)}>Multiple Columns</Link></li>
          <li><Link href="/image-filter" prefetch={true} onClick={() => setMenuOpen(false)}>Filter</Link></li>
          <li><Link href="/scrollbar" prefetch={true} onClick={() => setMenuOpen(false)}>Scrollbar</Link></li>
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
          <Link href="/box-shadow" prefetch={true} onClick={() => setMenuOpen(false)}>Box Shadow</Link>
          <Link href="/text-shadow" prefetch={true} onClick={() => setMenuOpen(false)}>Text Shadow</Link>
          <Link href="/css-cursor" prefetch={true} onClick={() => setMenuOpen(false)}>CSS Cursor</Link>
          <Link href="/border" prefetch={true} onClick={() => setMenuOpen(false)}>Border</Link>
          <Link href="/gradient-css" prefetch={true} onClick={() => setMenuOpen(false)}>Gradient CSS</Link>
          <Link href="/transform-css" prefetch={true} onClick={() => setMenuOpen(false)}>Transform CSS</Link>
          <Link href="/rgba-and-hex-color" prefetch={true} onClick={() => setMenuOpen(false)}>RGBA & Hex Color</Link>
          <Link href="/multiple-columns" prefetch={true} onClick={() => setMenuOpen(false)}>Multiple Columns</Link>
          <Link href="/image-filter" prefetch={true} onClick={() => setMenuOpen(false)}>Filter</Link>
          <Link href="/scrollbar" prefetch={true} onClick={() => setMenuOpen(false)}>Scrollbar</Link>

        
      </Menu>
      </div>
    </nav>
  );
};

export default Navbar;
