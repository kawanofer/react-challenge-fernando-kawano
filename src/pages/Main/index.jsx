import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'

import { setFormData } from 'store/redux/formData/actions'

import Button from 'components/Button'

import Breakify from './breakify'

const Main = () => {
  const dispatch = useDispatch()

  const { handleSubmit, register } = useForm({
    mode: 'onChange',
    defaultValues: { firstName: '', lastName: '' }
  })

  const onSubmit = (data, e) => {
    e.preventDefault()
    dispatch(
      setFormData({ firstName: data.firstName, lastName: data.lastName })
    )
  }

  return (
    <main>
      <h1 className='text-3xl font-bold mb-16'>React Test!</h1>

      <div className='border-grey rounded-md border'>
        <Breakify />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='p-10'>
            <div className='flex gap-10'>
              <div className='flex flex-col w-full'>
                <label className='text-lg mb-2'>First Name</label>
                <input
                  className='text-dark w-full px-5 py-5 mb-5 border rounded-md leading-tight focus:outline-none text-lg'
                  id='firstName'
                  required
                  {...register('firstName')}
                />
              </div>

              <div className='flex flex-col w-full'>
                <label className='text-lg mb-2'>Last Name</label>
                <input
                  className='text-dark w-full px-5 py-5 mb-5 border rounded-md leading-tight focus:outline-none text-lg'
                  id='lastName'
                  required
                  {...register('lastName')}
                />
              </div>
            </div>
            <div className='text-center'>
              <Button
                id='submitContactAgent'
                type='submit'
                variant='primary'
                className='w-56 h-16 mt-5 text-xl'>
                Breakify
              </Button>
            </div>
          </div>
        </form>
      </div>
    </main>
  )
}

export default Main
