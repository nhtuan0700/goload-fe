import DashboardLayout from '@/layout/Dashboard'
import { ReactNode } from 'react'

export default function GlobalLayout({ children }: { children: ReactNode }) {
  return <DashboardLayout>{children}</DashboardLayout>
}
