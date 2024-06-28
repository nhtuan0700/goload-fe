import { ButtonHTMLAttributes } from 'react'

export const IconButton = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <button className={`p-2 transition hover:bg-gray-100 text-3xl rounded-md ${props.className}`}>{props.children}</button>
}
