import { ChangeEvent } from 'react'
import { InputType } from '../types/inputType'

const TextArea = ({ label, placeholder, value, setter }: InputType) => {
  const onChange = (e:ChangeEvent<HTMLTextAreaElement>) =>
    setter(e.currentTarget.value)

  return (
    <div className="text-area">
      { label && <label htmlFor="text-area">{ label }</label> }
      <textarea
        id="text-area"
        placeholder={ placeholder }
        value={ value }
        onChange={ onChange }
      />
    </div>
  )
}

export { TextArea }