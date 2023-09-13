'use client'

import React from 'react'
import Link from 'next/link'
import styles from './navbar.module.css'
import DarkModeToggle from '../darkModeToggle/darkModeToggle'
import { signOut, useSession} from 'next-auth/react'


const Navbar = () => {
const session = useSession()
  const links = [
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    {
      id: 2,
      title: "Portfolio",
      url: "/portfolio",
    },
    {
      id: 3,
      title: "Blog",
      url: "blog",
    },
    {
      id: 4,
      title: "About",
      url: "/about",
    },
    {
      id: 5,
      title: "Contact",
      url: "/contact",
    },
    {
      id: 6,
      title: "Dashboard",
      url: "/dashboard",
    },
  ];
  return (
    <div className={styles.container}>
      <Link href='/' className={styles.logo}>
        NextBlog
        </Link>
        <div className={styles.links}>
          <DarkModeToggle />
          {links.map((link) => (
            <Link key={link.id} href={link.url} className={styles.link}>{link.title}</Link>
          ))}
          {session.status === 'authenticated' && 
          <button onClick={signOut} className={styles.logout}>Logout</button>
}
        </div>
    </div>
  )
}

export default Navbar