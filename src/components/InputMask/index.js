import React, { useEffect, useState } from 'react'

const InputMask = ({ mask, separator = ' ', value, onChange, ...props }) => {
  const [maskedValue, setMaskedValue] = useState('')

  useEffect(() => {
    setMaskedValue(value || '')
  }, [value])

  useEffect(() => {
    onChange(maskedValue)
  }, [maskedValue])

  return (
    <input
      {...props}
      onChange={(e) => setMaskedValue(e.target.value.split(separator).join(''))}
      value={maskedValue.split(mask).filter(Boolean).join(separator)}
    />
  )
}

export default InputMask
