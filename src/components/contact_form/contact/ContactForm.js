import React from 'react'
import { Form, Formik } from 'formik'
import { ValidateSettings } from './ValidateSettings'
import CustomInput from '../CustomInput'
import CustomTextArea from '../CustomTextArea'
import './ContactForm.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


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

          
            } else {
                notifyError()
                actions.resetForm()
            
            }
        } catch (error) {
            notifyErrorApi()
            actions.resetForm()
        }
    }
        


    const notifySuccess = () => {
        toast.success('Tack, vi har tagit emot ditt meddelande!', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: false 
        });    
    };

    const notifyError = () => {
        toast.error('Tyvärr kunde inte ditt meddelande skickas, vänligen försök igen!', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: false 
        });
    };
    const notifyErrorApi = () => {
        toast.error('Vi kan för tillfället inte ta emot erat meddelande, vänligen försök om en liten stund!', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: false 
        });
    };
        

  return (
        <section className='connect-form'>
            <div className='container'>
                <h2>Leave us a message<br />for any information.</h2>
                <Formik
                initialValues={{name:'', email: '', message: ''}} 
                validationSchema={ValidateSettings}
                onSubmit={sendToApi}>    

                    {({isSubmitting}) => (
                        <Form className='contact-form col-12 col-sm9 col-lg-10' noValidate>
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
                            {isSubmitting ? <span className="spinner-border spinner-border-sm ms-2" aria-hidden="true"></span>: <i className='fa-regular fa-arrow-up-right'></i>}
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