"use client"
import { FileClock, Home, Settings, WalletCards } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'

const SideNav = () => {

    const Menulist =[
        {
            name:'Home',
            icon:Home,
            path:'/dashboard'
        },
        {
            name:'History',
            icon:FileClock,
            path:'/dashboard/history'
        },
        {
            name:'Billing',
            icon:WalletCards,
            path:'/dashboard/billing'
        },
        {
            name:'Setting',
            icon:Settings,
            path:'/dashboard/setting'
        },
    ]

    const path = usePathname();
    useEffect(()=>{
        console.log(path)
    },[])
  return (
    <div className='h-screen p-5 shadow-sm border bg-white'>
        <div className='flex justify-center'>
            <Image src={'/logo.svg'} alt='logo' width={50} height={50} />
      </div>
      <hr className='my-7 border'/>
      <div className='mt-3'>
            {Menulist.map((menu, index)=>(
                <Link href={menu.path}>
                    <div className={`flex gap-2 mb-2 p-3 hover:bg-primary hover:text-white rounded-lg cursor-pointer items-center ${path==menu.path&&'bg-primary text-white'}`}>
                    <menu.icon className='h-6 w-6'/>
                    <h2 className='text-lg'>{menu.name}</h2>
                </div>
                </Link>
            ))}
      </div>
      
    </div>
  )
}

export default SideNav
