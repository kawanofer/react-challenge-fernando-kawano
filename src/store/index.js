import { persistStore } from 'redux-persist'
import createSagaMiddleware from 'redux-saga'
import history from 'services/history'

import createStore from './createStore'
import persistReducer from './persistReducer'
import rootReducer from './redux/rootReducer'
import rootSaga from './redux/rootSaga'

const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]

const store = createStore(persistReducer(rootReducer(history)), middleware)
const persistor = persistStore(store)

sagaMiddleware.run(rootSaga)
export { store, persistor }
