import React from 'react'
import { useField } from 'formik'


const CustomInput = (props) => {
    const [field, meta] = useField(props)
    return (
        <div className='form-field'>
            {meta.touched && meta.error && <p className='error'>{meta.error}</p>}
            <input {...field} {...props} className={`${meta.touched && meta.error ? 'error' : ''} ${meta.touched && !meta.error ? 'success' : ''}`} />
        </div>
    )
}

export default CustomInput
