'use client'

import { InputHTMLAttributes, useState } from 'react'
import { LuEye, LuEyeOff } from 'react-icons/lu'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  wrapperClass?: string
}

export const Input = ({
  label,
  error,
  wrapperClass = '',
  className = '',
  type = 'text',
  ...rest
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false)

  const renderToggleTypePassword = () => {
    const toggleShowPassword = () => {
      setShowPassword(!showPassword)
    }

    return (
      <button
        type="button"
        onClick={toggleShowPassword}
        className="text-xl absolute right-2 top-3 transition-all text-gray-200"
      >
        {showPassword ? <LuEye /> : <LuEyeOff />}
      </button>
    )
  }

  return (
    <div className={`flex flex-col ${wrapperClass}`}>
      <label htmlFor={rest.id} className="mb-1">
        {label}
      </label>
      <div className={`relative ${className} ${error ? 'border-red' : ''}`}>
        <input
          className="w-full h-full border border-gray-200 rounded p-[10px] focus:border-black outline-none"
          type={
            type === 'password' ? (showPassword ? 'text' : 'password') : type
          }
          {...rest}
        />
        {type === 'password' && renderToggleTypePassword()}
      </div>
      {error && <span className="text-sm text-red">{error}</span>}
    </div>
  )
}
