"use client"
import { IoShareSocialSharp } from "react-icons/io5";
import { SOCIAL_DATA } from "./SocialCata";
import Link from "next/link";
import { useState } from "react";
const Social = () => {
    const [open , setOpen] = useState (false);
    const handelSocial = ()=> {
        setOpen(!open)
    }
  return (
    <div className="fixed right-0 top-[50%] z-50">
        <span onClick={handelSocial} className="block p-[10px] bg-main-mainColor text-[20px] font-bold text-white cursor-pointer ">
            <IoShareSocialSharp />
        </span>
        <div className={!open ? ' hidden' : '  bg-background-ALT flex flex-col items-center gap-5'}>
            {SOCIAL_DATA.map((item)=> (
                <Link className="p-[10px] hover:bg-main-mainColor w-full " href={item.path} key={item.id}>
                    {item.icon}
                </Link>
            ))}
        </div>
    </div>
  )
}

export default Social