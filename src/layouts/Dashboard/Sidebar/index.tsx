'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'
import { IoCloudDownloadOutline } from 'react-icons/io5'
import { MdDashboard } from 'react-icons/md'
import './style.css'

interface MenuItemProps {
  icon: ReactNode
  label: string
  link: string
  active?: boolean
}

const MenuItem = ({ icon, label, link, active }: MenuItemProps) => {
  return (
    <Link
      className={`flex items-center py-3 mb-2 rounded-lg ${
        active ? 'bg-gray-200' : 'hover:bg-gray'
      }  transition`}
      href={link}
    >
      <span className="text-3xl mx-2">{icon}</span>
      <span className="text-sm">{label}</span>
    </Link>
  )
}

export const Sidebar = function () {
  const pathname = usePathname()

  return (
    <div className="p-4 border-r bg-white border-gray-200 h-full relative flex flex-col box-border">
      <div className="p-4">
        <h2>Goload</h2>
      </div>
      <div className="mb-8"></div>
      <div className="flex-grow overflow-y-auto">
        <MenuItem
          icon={<MdDashboard />}
          label="Dashboard"
          link="/"
          active={pathname === '/'}
        />
        <MenuItem
          icon={<IoCloudDownloadOutline />}
          label="Download tasks"
          link="/download-task"
          active={pathname === '/download-task'}
        />
      </div>
    </div>
  )
}
