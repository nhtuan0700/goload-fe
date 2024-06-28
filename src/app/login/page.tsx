'use client'

import { useEffect, useState } from 'react'

export default function Login() {
  const [isClient, setIsClient] = useState<boolean>()

  useEffect(() => {
    setIsClient(true)
  }, [])

  return isClient ? <p>Login page</p> : <></>
}
