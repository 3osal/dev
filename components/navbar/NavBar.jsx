"use client"
import Link from "next/link"
import { NAVBAR_ICON, NAVBAR_LINKS } from "./navbarData"
import { useState } from "react"
import { BsLayoutSidebarInset } from "react-icons/bs";
import { BsLayoutSidebarInsetReverse } from "react-icons/bs";

const NavBar = () => {
    const [open , setOpen] = useState(false)
    const handelNav = ()=> {
        setOpen(!open)
    }
    const closeNav = () => {
        setOpen(false)
    }
  return (
    <header className=" fixed left-0 right-0 z-30 ">
                <span onClick={handelNav} className={!open ? 'absolute right-2 top-5 text-[18px] md:right-10 md:top-10  text-white font-bold  cursor-pointer' : 'absolute right-2 top-5 text-[18px] md:right-10 md:top-10  text-main-mainColor font-bold  cursor-pointer'}>
                {!open ? <BsLayoutSidebarInset /> : <BsLayoutSidebarInsetReverse />}
                </span>
        <nav className={!open ? 'h-[1px] w-0 overflow-hidden bg-black trans' : 'h-screen w-full bg-black/95  flex items-center justify-center z-10 trans'}>
            <div className="flex flex-col items-center gap-5 z-40 trans">
                {NAVBAR_LINKS.map((item) => (
                    <Link onClick={closeNav} className="text-[25px] capitalize text-text-primary trans hover:text-main-mainColor hover:translate-x-2" key={item.id} href={item.path}>
                        {item.lable}
                    </Link>
                ))}
            </div>
            <span className="absolute left-2 bottom-2 overflow-hidden">
            © 2024 3osal. All rights belong to us!
            </span>
        </nav>
    </header>
  )
}

export default NavBar