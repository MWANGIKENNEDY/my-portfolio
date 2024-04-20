"use client"

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type Mylink = {
  link: {
    url:string,
    title:string
}
}

const NavLink = ({link}:Mylink) => {

    const pathName = usePathname();
  return (
    <Link className={`rounded p-1 ${pathName === link.url && "bg-black text-white"} `} href={link.url}>{link.title}</Link>
  )
}

export default NavLink