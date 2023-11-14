import React from 'react'
import { useField } from 'formik'

const CustomTextArea = (props) => {
    const [field, meta] = useField(props)
  return (
    <div className='form-field'>
        {meta.touched && meta.error && <p className='error'>{meta.error}</p>}
        <textarea {...field} {...props} className={`${meta.touched && meta.error ? 'error' : ''} ${meta.touched && !meta.error ? 'success' : ''}`}/>
    </div>
  )
}

export default CustomTextArea
