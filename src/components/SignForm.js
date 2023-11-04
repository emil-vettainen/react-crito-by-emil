import React, { useState } from 'react'

const SignForm = () => {

  const [values, setValues] = useState({
    email: ''
  })
  const [formError, setFormError] = useState({})
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)

  const HandleSignUp = (event) => {
    event.preventDefault()
    const errors = ValidateSignUp(values)
    setFormError(errors)
    console.log(formError);

    if (Object.keys(errors).length === 0) {
      console.log('inga fel gogog');
    }
  }


  const ValidateSignUp = (values) => {
    const errors = {}

    if(!values.email) {
      errors.email = 'Email is required'
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    .test(values.email)) {
      errors.email = 'You have entered an invalid email adress'
    }

    return errors
  }

  const InputChange = (event) => {
    const {name, value} = event.target
    setValues({...values, [name]: value})
    const errors = ValidateSignUp({...values, [name]: value})
    setFormError(errors)

  }



  return (
    <section className="sign-up">
    <div className="container">
      <h2>Get News Updates By Signup</h2>


      <form onSubmit={HandleSignUp} id="sign-up-form" className="sign-up-form"   noValidate>
        <input 
        type="email" 
        id="email" 
        name="email" 
        placeholder="username@domain.com"
        value={values.email}
        onChange={InputChange}
        
        />

      
        

        <button aria-label="Subscribe to our newsletter" type="submit" id="submit" className="button">Subscribe<i
          className="fa-regular fa-arrow-up-right" aria-hidden="true"></i></button>
          

        <p>{formError.email}</p>
      </form>

      



    </div>
    </section>
  )
}

export default SignForm