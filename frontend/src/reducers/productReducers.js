// all reducer functions for products go in here

// import constants
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
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
      return { loading: false, error: action.payload }
    // return current state as default
    default:
      return state
  }
}

// product details reducer
export const productDetailsReducer = (state = { product: {reviews: []} }, action) => {
  switch (action.type) {
    // reducer loading, loading occurring and state still initial
    case PRODUCT_DETAILS_REQUEST:
      return { loading: true, ...state }
    // reducer successful, load done and state set to the payload value
    case PRODUCT_DETAILS_SUCCESS:
      return { loading: false, product: action.payload }
    // reducer failed, load done and state set to the payload value
    case PRODUCT_DETAILS_FAIL:
      return { loading: false, error: action.payload }
    // return current state as default
    default:
      return state
  }
}
