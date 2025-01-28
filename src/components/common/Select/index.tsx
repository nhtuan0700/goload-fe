'use client'

import { SelectOption } from '@/types/common'
import { SelectHTMLAttributes } from 'react'

interface InputProps<T> extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  error?: string
  wrapperClass?: string
  options: SelectOption<T>[]
}

export const Select = <T,>({
  label,
  error,
  wrapperClass = '',
  className = '',
  options = [],
  ...rest
}: InputProps<T>) => {
  return (
    <div className={`flex flex-col ${wrapperClass}`}>
      <label htmlFor={rest.id} className="mb-1">
        {label}
      </label>
      <div className={`relative ${className} ${error ? 'border-red' : ''}`}>
        <select
          name={rest.name}
          id={rest.id}
          className="w-full h-full border border-gray-200 rounded p-[10px] focus:border-black outline-none"
          {...rest}
        >
          {options.map((item, idx) => (
            <option value={String(item.value)} key={idx}>
              {item.label}
            </option>
          ))}
        </select>
      </div>
      {error && <span className="text-sm text-red">{error}</span>}
    </div>
  )
}
