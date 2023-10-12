export const FormValidation = (values) => {
    const err = {}
    const regexMail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i;
    const regexUsername = /^([a-z0-9]|[-._](?![-._])){4,20}$/;

    if (!values.username) {
        err.username = 'Username is required!'
    } else if (!regexUsername.test(values.username)) {
        err.username = 'Username length must be between 4-20 characters, can`t contain special symbols!'
    }
    if (!values.email) {
        err.email = 'Email is required!'
    } else if (!regexMail.test(values.email)) {
        err.email = 'This is not valid email format!'
    }
    if (!values.password) {
        err.password = 'Password is required!'
    } else if (values.password.length < 5 || values.password.length > 20) {
        err.password = 'Password length must be between 5-20 characters'
    }
    if (!values.confirmPassword) {
        err.confirmPassword = 'Confirm password is required!'
    } else if (values.confirmPassword !== values.password) {
        err.confirmPassword = 'Password don`t match!'
    }
    if (!values.model) {
        err.model = 'Field is required!'
    }
    if (!values.year) {
        err.year = 'Field is required'
    } else if (values.year < 1900 || values.year > 2023) {
        err.year = 'Year of production must be between 1900-2023'
    }
    if (!values.price) {
        err.price = 'Field is required!'
    } else if (typeof (values.price) !== Number) {
        err.price = 'Field must contain only numbers'
    }
    if (!values.carImage) {
        err.carImage = 'Field is required!'
    }
    if (!values.description) {
        err.description = 'Field is required!'
    } else if (values.description.length < 10) {
        err.description = 'Description must be a minimum of 10 characters'
    }

    return err;
}