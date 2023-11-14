import React from 'react'
import { Formik, Form } from 'formik'
import './SignForm.css'


import { ValidateSignUp } from './ValidateSignUp'
import CustomInput from '../CustomInput'

const SignForm = () => {




  return (
        <section className="sign-up">
            <div className="container">
                <h2>Get News Updates By Signup</h2>

                <Formik 
                initialValues={{email: ''}}
                validationSchema={ValidateSignUp} 
                onSubmit={(values, actions) => {
                    alert(JSON.stringify(values))
                    actions.resetForm()
                }}
                >
            
                {({isSubmitting}) => (
                        <Form className='sign-up-form' noValidate>
                            <CustomInput
                                name='email'
                                type='email'
                                placeholder='Email*'
                            />
                            
                            <button className='button' disabled={isSubmitting} type="submit">Subscribe
                            {isSubmitting ? <span className="spinner-border spinner-border-sm ms-2" aria-hidden="true"></span>: null}
                            <i className="fa-regular fa-arrow-up-right"></i></button>
                        </Form>
                    )}
                </Formik>
            </div>
        </section>
    )
}

export default SignForm