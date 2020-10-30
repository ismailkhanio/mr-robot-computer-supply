// all actions relating to the product goes here
import axios from 'axios'
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
} from '../constants/productConstants'

// make action creator function that feeds back to the reducer
export const listProducts = () => async (dispatch) => {
  try {
    // dispatch product list load request.
    dispatch({ type: PRODUCT_LIST_REQUEST })

    // then, make the request with axios to get product data from server
    const { data } = await axios.get('/api/products')

    // dispatch product list success
    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    // dispatch product list failure. Payload is the error message from custom error handle middleware
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload:
        // display generic error response AND custom error data response. If that response exists the display it, else show the generic message. 
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
