import * as yup from 'yup'

export const ValidateSettings = yup.object().shape ({
    name :yup.string()
    .required('Name is required'),

    email :yup.string()
    .required('Email is required'),
    

    message: yup.string()
    .required('Message is required')
})
  


