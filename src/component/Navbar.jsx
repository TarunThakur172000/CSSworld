// File: components/Navbar.js
import React from 'react';
import Link from 'next/link';
import '../style/Navbar.css';

function Navbar() {
  
  return (
    <nav className="navbar">
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
    </nav>
  );
}

export default Navbar;
