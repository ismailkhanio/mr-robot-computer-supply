// connect all the reducers and related middleware here
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
  productListReducer,
  productDetailsReducer,
} from './reducers/productReducers'

// create reducer
const reducer = combineReducers({
  // productList is the name for this part of the state. This is what shows up in devtools
  productList: productListReducer,
  productDetails: productDetailsReducer,
})

// any state that is needed when the redux store is page loaded goes here as initial state
const initialState = {}

// all middleware inside of an array
const middleware = [thunk]

// start store, passing in reducer, initial state, redux devtools with thunk middleware
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
