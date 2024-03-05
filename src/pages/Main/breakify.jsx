import React from 'react'
import { useSelector } from 'react-redux'

import elements from 'data/elements'
import { toUpper } from 'lodash'

export default function Breakify() {
  const { formData } = useSelector((state) => state.formData)

  const matchWord = (word) => {
    const matchingElements = new Set()
    for (let i = 0; i < elements.length; i++) {
      if (word.toLowerCase().includes(elements[i].toLowerCase())) {
        matchingElements.add(elements[i])
      }
    }
    const firstItemFound = [...matchingElements][0]
    const firstIndex = word.toLowerCase().indexOf(firstItemFound.toLowerCase())
    const before = word.substring(0, firstIndex)
    const after = word.substring(
      word.toLowerCase().indexOf(firstItemFound.toLowerCase()) +
        firstItemFound.length
    )
    return (
      <>
        <span>{before.toLowerCase()}</span>
        <span className='bg-green px-3 font-extrabold'>
          {toUpper(firstItemFound)}
        </span>
        <span>{after.toLowerCase()}</span>
      </>
    )
  }

  return (
    <div className='py-10 text-white tracking-wider text-center text-8xl text-wrap'>
      <div className='mb-8'>{matchWord(formData.firstName)}</div>
      <div>{matchWord(formData.lastName)}</div>
    </div>
  )
}
