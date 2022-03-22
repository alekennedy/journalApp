import {useState} from 'react'

export const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState);

  const reset = (newFormValue = initialState)=>{
      setValues(newFormValue);
  }

  const handleInputChange = ({target})=>{
      setValues({
          ...values,
          [target.name]: target.value
      })
  }

  return [values, handleInputChange, reset];
}
