"use client"

import React from 'react'
import { LinkType } from '@/utils/types' 
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavLink = ({link}:{LinkType}) => {

    const pathName = usePathname();
  return (
    <Link className={`rounded p-1 ${pathName === link.url && "bg-black text-white"} `} href={link.url}>{link.title}</Link>
  )
}

export default NavLink