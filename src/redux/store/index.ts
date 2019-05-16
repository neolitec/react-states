import { applyMiddleware, createStore, compose } from 'redux'
import thunk from 'redux-thunk'

import reducers from '../reducers/index'

const storeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  reducers,
  storeEnhancers(applyMiddleware(thunk))
)

export default store
