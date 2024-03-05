import { applyMiddleware, compose, createStore } from 'redux'

const CreateStore = (reducers, middlewares) => {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  return createStore(
    reducers,
    composeEnhancers(applyMiddleware(...middlewares))
  )
}

export default CreateStore
