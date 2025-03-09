import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <div>
      <nav className='flex bg-zinc-300 space-x-6 h-16 px-6 items-center'>
        <div>
        <h1>Logo</h1>
        </div>
        <ul>
            <li><Link  href="/issue">Issue</Link></li>
        </ul>
        
      </nav>
    </div>
  )
}

export default NavBar
