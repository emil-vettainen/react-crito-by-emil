import React from 'react';
import './ContactForm.css'
import { useFormik } from 'formik';
import * as Yup from 'yup'

const ContactForm = () => {
 
  const form = useFormik ({
    initialValues: {
        name: '',
        email: '',
        message: ''
    },

    validationSchema: Yup.object ({
        name: Yup.string()
            .required('Name is required'),
        email: Yup.string()
            .required('Email is required')
            .email('Invalid email'),
        message: Yup.string()
            .required('Message is required')


    }),

    onSubmit: (values) => {
        console.log(values);
    }


  })

  
      
        // try {
        //   const response = await fetch('https://win23-assignment.azurewebsites.net/api/contactform', {
        //      method: 'POST',
        //       headers: {
        //        'Content-Type': 'application/json',
        //     },
        //       body: JSON.stringify(values),
        //     });
     
        //     if (response.status === 200) {
        //       setIsFormSubmitted(true)
        //       setValues({ name:'', email: '', message: ''})
        //       console.log('Form submitted successfully');
        //       console.log(response);
        //     // Om API-anropet lyckades, gör något här
        //    } else {
        //       console.error('Form submission failed');
        //       // Om API-anropet misslyckades, gör något här
        //     }
        //   } catch (error) {
        //     console.error('Error submitting form:', error);
        //     // Hantera fel här om det uppstår några problem med API-anropet
        // }
 
 
      
  

  

    return (
        <section className='connect-form'>
            <div className='container'>
                <h2>Leave us a message<br />for any information.</h2>

                <form onSubmit={form.handleSubmit} className='message-form col-12 col-sm-9 col-lg-10'  noValidate>
                    <div className='forminput'>
                        <label>{form.touched.name && form.errors.name ? form.errors.name : ''}</label>
                        <input
                            id='name'
                            name='name'
                            type='text'
                            placeholder='name*'
                            value={form.values.name}
                            onChange={form.handleChange}
                            
                            
                        />
                       
                    </div>

                    <div className='forminput'>
                    <label>{form.touched.email && form.errors.email ? form.errors.email : ''}</label>
                    <input
                        id='email'
                        name='email'
                        type='email'
                        placeholder='email*'
                        value={form.values.email}
                        onChange={form.handleChange}
                        
                        
                    />
                    
                    </div>

                    <div className='forminput'>
                    <label>{form.touched.message && form.errors.message ? form.errors.message : ''}</label>
                    <textarea
                        id='message'
                        name='message'
                        type='text'
                        placeholder='your message*'
                        value={form.values.message}
                        onChange={form.handleChange}

                        
                    />
              
                    </div>

                    <button type="submit" className="button">Send Message<i
                            className="fa-regular fa-arrow-up-right"></i></button>
                </form>

               
            </div>
        </section>
    );
};

export default ContactForm;