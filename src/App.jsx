import React, { Suspense } from 'react'
import { Provider } from 'react-redux'

import { AppRouters } from './router'
import { store } from './store'

function App() {
  return (
    <Suspense
      fallback={<div className='flex justify-center text-3xl'>Loading...</div>}>
      <Provider store={store}>
        <AppRouters />
      </Provider>
    </Suspense>
  )
}

export default App
