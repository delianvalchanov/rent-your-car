import * as yup from 'yup';

const usernamePattern = /^[a-zA-Z]{4,}\d*$/i;
const passwordPattern = /^(?=.*[0-9]).{6,32}$/;

export const LoginSchema = yup.object().shape({
    email: yup.string().email('Please enter a valid email!').required("Field is required!"),
    password: yup.string().matches(passwordPattern, { message: 'Password must be 6-32 characters long' }).required("Field is required!"),
})

export const RegisterSchema = yup.object().shape({
    username: yup.string().matches(usernamePattern, { message: 'Username must be at least 4 characters long and start with a letter!' }).required('Field is required!'),
    email: yup.string().email('Please enter a valid email!').required("Field is required!"),
    password: yup.string().matches(passwordPattern, { message: 'Password must be 6-32 characters long' }).required("Field is required!"),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords don`t match!').required('Field is required!')
})