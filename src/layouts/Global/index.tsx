'use client'
import Alert from '@/layouts/Alert'
import Loading from '@/layouts/Loading'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import 'react-toastify/dist/ReactToastify.min.css'
import { RecoilRoot } from 'recoil'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 1000 * 60 * 60 * 24, // 24 hours
    },
  },
})

const Global = ({ children }: { children: React.ReactNode }) => {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <Alert />
        <Loading />
        {children}
      </QueryClientProvider>
    </RecoilRoot>
  )
}

export default Global
