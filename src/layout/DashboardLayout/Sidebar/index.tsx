'use client'

import { Popper } from '@/components/Popper'
import Image from 'next/image'
import Link from 'next/link'
import { ReactNode, useState } from 'react'
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
  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null)

  const toggleUserInfo = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!anchorEl) {
      setAnchorEl(e.currentTarget)
    } else {
      setAnchorEl(null)
    }
  }

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
      <div className="sticky bottom-4 py-4 w-full">
        <div
          className="flex items-center cursor-pointer hover:bg-gray-100 w-full px-3 py-1 rounded-md transition"
          onClick={toggleUserInfo}
        >
          <Image
            src="/avatar.png"
            alt="image not found"
            width={46}
            height={46}
            className="rounded-full mr-2 w-[46px] h-[46px] object-cover p-1"
          />
          abc
        </div>
        <Popper
          anchorEl={anchorEl}
          onClose={() => {
            console.log(123)
          }}
          anchorOrigin={{
            vertical: 'center',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'center',
            horizontal: 'center',
          }}
        >
          asdasd
          asdasdasd
        </Popper>
      </div>
    </div>
  )
}
