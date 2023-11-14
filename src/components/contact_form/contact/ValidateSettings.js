import * as yup from 'yup'

export const ValidateSettings = yup.object().shape ({
    name :yup.string()
    .required('Name is required')
    .matches(/^[a-z ,.'-]{2,}$/i, 'Name must contain at least 2 letters'),

    email :yup.string()
    .required('Email is required')
    .matches(
        /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        'Invalid email'
      ),
    
    message: yup.string()
    .required('Message is required')
})
  


