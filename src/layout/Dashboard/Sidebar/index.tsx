'use client'

import { Account } from '@/layout/Dashboard/Account'
import Link from 'next/link'
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
      className={`flex items-center py-3 mb-2 rounded-lg ${active && 'active'}`}
      href={link}
    >
      <span className="text-3xl mx-2">{icon}</span>
      <span className="text-sm">{label}</span>
    </Link>
  )
}

export const Sidebar = function () {

  return (
    <div className="p-4 border-r border-gray-200 h-full relative flex flex-col box-border">
      <div className="p-4">
        <h2>Goload</h2>
      </div>
      <div className="mb-8"></div>
      <div className="flex-grow overflow-y-auto">
        <MenuItem icon={<MdDashboard />} label="Dashboard" link="/" active />
        <MenuItem
          icon={<IoCloudDownloadOutline />}
          label="Download tasks"
          link="/"
        />
      </div>
      <Account />
    </div>
  )
}
