import React from 'react'

const FormInput = (props) => {

    const { onChange, formError, ...inputProps} = props


  return (
      <div className='forminput'>
        <input {...inputProps} onChange={onChange} />
        <p>{formError}</p>
      </div>
  )
}

export default FormInput