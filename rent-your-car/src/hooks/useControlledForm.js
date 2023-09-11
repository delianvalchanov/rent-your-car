import { useState } from "react"

export const useForm = (initialValues, onSubmitHandler) => {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const changeHandler = (e) => {
        setValues(state => ({ ...state, [e.target.name]: e.target.value }))
    }

    const onSubmit = (e) => {
        e.preventDefault();

        onSubmitHandler(values);
        setValues(initialValues);
        setErrors(validate(values))
        setIsSubmit(true);
    }

    const validate = (values) => {
        const err = {}
        const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i;
        if (!values.username) {
            err.username = 'Username is required!'
        }
        if (!values.email) {
            err.email = 'Email is required!'
        } else if (!regex.test(values.email)) {
            err.email = 'This is not valid email format!'
        }
        if (!values.password) {
            err.password = 'Password is required!'
        } else if (!values.password.length > 5) {
            err.password = 'Password minimum length is 5 characters!'
        } else if (!values.password.length < 15) {
            err.password = 'Password maximum length is 15 characters!'
        }
        if (!values.confirmPassword) {
            err.confirmPassword = 'Confirm password is required!'
        }

        return err;
    }

    const changeValues = (newValues) => {
        setValues(newValues);
    }

    return {
        values,
        errors,
        changeHandler,
        onSubmit,
        changeValues
    }

}