'use client'

import { Button } from '@/components/common/Button'
import { Input } from '@/components/common/Input'
import { createSession } from '@/services/api/account'
import { GoLoadCreateAccountRequest } from '@/services/dataaccess'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ChangeEvent, useState } from 'react'

export default function LoginPage() {
  const router = useRouter()
  
  const [formData, setFormData] = useState<GoLoadCreateAccountRequest>({
    accountName: '',
    password: '',
  })

  const handleSubmit = async () => {
    try {
      await createSession(formData)
      alert('Login successfully')
      router.push('/')
    } catch (error) {
      // console.log(error)
      alert('Failed to login!!')
    }
  }

  const onChangeForm = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <>
      <h3 className="text-2xl">Login</h3>
      <p className="my-2">Welcome to Goload. Please login to continue</p>
      <Input
        label="Username"
        wrapperClass="w-full mb-2"
        placeholder="Enter your username"
        name="accountName"
        onChange={onChangeForm}
      />
      <Input
        label="Password"
        wrapperClass="w-full mb-2"
        placeholder="Enter your password"
        type="password"
        name="password"
        onChange={onChangeForm}
      />
      <Link className="self-end text-sm text-blue-400" href="/">
        Forgot your password?
      </Link>
      <Button className="w-full mt-2" onClick={handleSubmit}>Login</Button>
      <p className="mt-2 text-sm">
        You don't have an account?{' '}
        <Link className="text-blue-400" href="/register">
          Signup now
        </Link>
      </p>
    </>
  )
}
