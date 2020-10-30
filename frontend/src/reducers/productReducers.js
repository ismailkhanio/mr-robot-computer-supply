// all reducer functions for products go in here

// import constants
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
} from '../constants/productConstants'

// product list reducer, handles state for product list on the home page
export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    // reducer loading, loading occurring and state still initial
    case PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] }
    // reducer successful, load done and state set to the payload value
    case PRODUCT_LIST_SUCCESS:
      return { loading: false, products: action.payload }
    // reducer failed, load done and state set to the payload value
    case PRODUCT_LIST_FAIL:
      return { loading: false, products: action.payload }
    // return current state as default
    default:
      return state
  }
}
