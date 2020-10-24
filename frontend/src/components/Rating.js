import React from 'react'
import PropTypes from 'prop-types'

const Rating = ({ value, text, color }) => {
  return (
    <div className='rating'>
      {/* rating system is out of 5 stars. Need a icon class for every star up to 5  */}
      {/* class ternary logic: if value is >= 1 then give full-star class, if >= 0.5 give half-star class, else if empty give empty star class.*/}
      <span>
        <i
          style={{ color }}
          className={
            value >= 1
              ? 'fas fa-star'
              : value >= 0.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        ></i>
        <i
          style={{ color }}
          className={
            value >= 2
              ? 'fas fa-star'
              : value >= 1.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        ></i>
        <i
          style={{ color }}
          className={
            value >= 3
              ? 'fas fa-star'
              : value >= 2.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        ></i>
        <i
          style={{ color }}
          className={
            value >= 4
              ? 'fas fa-star'
              : value >= 3.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        ></i>
        <i
          style={{ color }}
          className={
            value >= 5
              ? 'fas fa-star'
              : value >= 4.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        ></i>
      </span>
      {/* text that is passed in displays. This text is optional, thus need a ternary conditional to only show text with {text && text}. This means 'if there is text, then show it' */}
      <span>{text && text}</span>
    </div>
  )
}

// create default prop for color value. This is adding a color value in Product.js <Rating/> component with a default color value. Useful for when we don't want to pass in a prop value more than once. defaultProps is a built in method. propTypes specifies the type of each prop whereas defaultProps sets a default prop value.

Rating.defaultProps = {
  color: '#f8e825',
}

// propTypes; defines what type (bool, string, num, etc.) the prop should be. If a value is passed into our component that isn't defined as the same type assigned to the property below, then a warning displays in the console, indicating an incorrect type was passed in. This prevents bugs. This is called typechecking.
Rating.propTypes = {
  value: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
}

export default Rating
