import React, { useState } from 'react';
import './ContactForm.css'

const ContactForm = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [formError, setFormError] = useState({});
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)

  const validateForm  = async (event) => {
    event.preventDefault();
    const errors = validate(values);
    setFormError(errors);
    setIsFormSubmitted(false)
    if (Object.keys(errors).length === 0) {
      
      try {
          const response = await fetch('https://win23-assignment.azurewebsites.net/api/contactform', {
             method: 'POST',
              headers: {
               'Content-Type': 'application/json',
            },
              body: JSON.stringify(values),
            });
     
            if (response.status === 200) {
              setIsFormSubmitted(true)
              setValues({ name:'', email: '', message: ''})
              console.log('Form submitted successfully');
              console.log(response);
            // Om API-anropet lyckades, gör något här
           } else {
              console.error('Form submission failed');
              // Om API-anropet misslyckades, gör något här
            }
          } catch (error) {
            console.error('Error submitting form:', error);
            // Hantera fel här om det uppstår några problem med API-anropet
          }
 
 
      }
  };

  const validate = (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = 'Name is required';
    }

    if (!values.email.trim()) {
      errors.email = 'E-post är obligatoriskt';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      errors.email = 'Ogiltig e-postadress';
    }

    if (!values.message) {
      errors.message = 'Message is required'
    }

    return errors;
  };

  const inputChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
    const errors = validate({ ...values, [name]: value });
    setFormError(errors);
    setIsFormSubmitted(false)
  };

  return (
    <div className='container'>
      <form onSubmit={validateForm} noValidate>
        <div className='forminput'>
          <input
            id='name'
            name='name'
            type='text'
            placeholder='name*'
            value={values.name}
            onChange={inputChange}
          />
          <p>{formError.name}</p>
        </div>
  
        <div className='forminput'>
          <input
            id='email'
            name='email'
            type='email'
            placeholder='email*'
            value={values.email}
            onChange={inputChange}
          />
          <p>{formError.email}</p>
        </div>
  
        <div className='forminput'>
          <textarea
            id='message'
            name='message'
            type='text'
            placeholder='your message*'
            value={values.message}
            onChange={inputChange}
          />
          <p>{formError.message}</p>
        </div>
  
        <button type='submit'>Submit</button>
      </form>
  
      {isFormSubmitted ? (
        <p className='tack'>Tack! Ditt meddelande har skickats!</p>
      ) : null}
    </div>
  );
};

export default ContactForm;