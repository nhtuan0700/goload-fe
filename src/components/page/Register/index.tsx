'use client'

import { Button } from '@/components/common/Button'
import { Input } from '@/components/common/Input'
import { createAccount } from '@/services/api/account'
import { GoLoadCreateAccountRequest } from '@/services/dataaccess'
import Link from 'next/link'
import { ChangeEvent, useState } from 'react'

export default function RegisterPage() {
  const [formData, setFormData] = useState<GoLoadCreateAccountRequest>({
    accountName: '',
    password: '',
  })

  const onChangeForm = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleRegister = async () => {
    try {
      await createAccount(formData)
      alert('Register successfully')
    } catch (error) {
      alert('Failed to register!!')
    }
  }

  return (
    <>
      <h3 className="text-2xl">Register</h3>
      <p className="my-2">If you want to continue, please register!</p>
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

      <Button
        className="w-full mt-2"
        variant="secondary"
        onClick={handleRegister}
      >
        Register
      </Button>
      <Link className="text-blue-400 text-sm mt-2" href="/login">
        Back to login
      </Link>
    </>
  )
}
