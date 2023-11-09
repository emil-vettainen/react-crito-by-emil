import { Form, Formik } from 'formik'
import React from 'react'
import CustomInput from './CustomInput'
import { ValidateSettings } from './ValidateSettings'

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './ContactForm.css'
import CustomTextArea from './CustomTextArea';

const ContactForm = () => {

    const sendToApi = async (values, actions) => {

        
        try {
            const response = await fetch('https://win23-assignment.azurewebsites.net/api/contactform', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(values)
            })

            console.log(response);
    
            if (response.status === 200) {
                notifySuccess(); 
                actions.resetForm()

            console.log('Formuläret skickades framgångsrikt till API.');
            } else {

            alert('1Något gick fel, försök igen')
            actions.resetForm()
            console.error('Något gick fel vid skickande av formuläret till API.');
            }
        } catch (error) {
        
        console.error('Något gick fel:', error);
        alert('2Något gick fel, försök igen')
            actions.resetForm()
    
        }
    }
        


    const notifySuccess = () => {
        toast.success('Tack, vi har tagit emot ditt meddelande!', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: false 
        });
    };
        
    
 
   

  return (
        <section className='connect-form'>
            <div className='container'>
                <Formik
                initialValues={{name:'', email: '', message: ''}} 
                validationSchema={ValidateSettings}
                onSubmit={sendToApi}>    

                    {({isSubmitting}) => (
                        <Form className='message-form col-12 col-sm9 col-lg-10' noValidate>
                            <CustomInput
                                name='name'
                                type='text'
                                placeholder='Name*' 
                            />
                            <CustomInput
                                name='email'
                                type='email'
                                placeholder='Email*' 
                            />
                            <CustomTextArea
                                name='message'
                                type='text'
                                placeholder='Your Message*' 
                            />
                            <button className='button' disabled={isSubmitting} type="submit">Send
                            {isSubmitting ? <span className="spinner-border spinner-border-sm ms-2" aria-hidden="true"></span>: null}
                            </button>
                            <ToastContainer />
                        </Form>
                    )}
                </Formik>
            </div>
        </section>
    )
}

export default ContactForm