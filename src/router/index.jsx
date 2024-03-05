import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Main from '../pages/Main'

export function AppRouters() {
  return (
    <BrowserRouter basename='/react-challenge-fernando-kawano'>
      <Routes>
        <Route path='/' element={<Main />} />
      </Routes>
    </BrowserRouter>
  )
}
