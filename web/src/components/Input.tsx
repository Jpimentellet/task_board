import { ChangeEvent } from 'react'
import { InputType } from '../types/inputType'

const Input = ({ label, placeholder, value, setter }: InputType) => {

  const onChange = (e:ChangeEvent<HTMLInputElement>) =>
    setter(e.currentTarget.value)

  return (
    <div className="input">
      { label && <label htmlFor="input">{ label }</label> }
      <input
        id="input"
        type="text"
        placeholder={ placeholder }
        value={ value }
        onChange={ onChange }
      />
    </div>
  )
}

export { Input }