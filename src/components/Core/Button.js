import React from 'react'

export default function Button({btnName, direction}) {
  return (
    <a href={`${direction}`} class="dark:text-gray-300 dark:hover:text-tahiti-light transition hover:text-tahiti-dark font-bold  dark:border-tahiti-dark">{btnName}</a>
  )
}
