import React from 'react'
import { useField } from 'formik'

const CustomInput = ({...props}) => {
    const [field, meta] = useField(props)
  return (
    <>
        <input {...field} {...props}
            className={meta.touched && meta.error ? 'error' : ''} 
        />
        {meta.touched && meta.error && <div className='error'>{meta.error}</div>}
    </>
  )
}

export default CustomInput
