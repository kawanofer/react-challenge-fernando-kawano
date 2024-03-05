import React from 'react'
import { useSelector } from 'react-redux'

import elements from 'data/elements'
import { capitalize } from 'lodash'

export default function Breakify() {
  const { formData } = useSelector((state) => state.formData)

  const matchWord = (word) => {
    const regex = new RegExp(`(${elements.join('|')})`, 'gi')
    let found = false
    return (
      <div>
        {word.split(regex).map((part, index) => {
          if (elements.includes(part.toUpperCase()) && !found) {
            found = true
            return (
              <span key={index} className='text-green font-extrabold '>
                {capitalize(part)}
              </span>
            )
          } else {
            return <span key={index}>{part}</span>
          }
        })}
      </div>
    )
  }

  return (
    <div className='py-10 text-white tracking-wider text-center text-8xl text-wrap'>
      <div className='mb-3'>{matchWord(formData.firstName)}</div>
      <div>{matchWord(formData.lastName)}</div>
    </div>
  )
}
