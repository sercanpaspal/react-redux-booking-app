import React from 'react'
import './index.scss'

const RadioList = ({ children, value, label, onChange, name, items }) => (
  <div className="radio-list">
    <label>{label}</label>
    <ul>
      {items.map((item, _i) => (
        <li key={_i}>
          <input
            name={name}
            value={item.id}
            type="radio"
            id={`${name}_${_i}`}
            onChange={(e) => onChange(e.currentTarget.value)}
            checked={value == item.id}
          />
          <label htmlFor={`${name}_${_i}`}>{children(item)}</label>
        </li>
      ))}
    </ul>
  </div>
)

export default RadioList
