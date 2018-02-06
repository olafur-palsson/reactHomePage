import React from "react"
import propTypes from "prop-types"

const Input = ({label, text, type, id, value, handleChange}) => (
  <div className="form-group">
    <label htmlFor={label}>{text}</label>
    <input
      type = {type}
      className="form-control"
      id={id}
      value={value}
      onChange={handleChange}
      required
    />
  </div>
)

Input.propTypes = {
  label: propTypes.string.isRequired,
  text: propTypes.string.isRequired,
  type: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
  value: propTypes.string.isRequired,
  handleChange: propTypes.func.isRequired
}

export default Input
