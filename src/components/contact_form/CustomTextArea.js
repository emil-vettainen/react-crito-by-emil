import React from 'react'
import { useField } from 'formik'

const CustomTextArea = ({...props}) => {
    const [field, meta] = useField(props)
  return (
    <>
        <textarea {...field} {...props}
            className={meta.touched && meta.error ? 'error' : ''} 
        />
        {meta.touched && meta.error && <div className='error'>{meta.error}</div>}
    </>
  )
}

export default CustomTextArea
