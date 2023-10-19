import { useState } from "react"
import { FormValidation } from "../validation/FormValidation";

export const useForm = (initialValues, onSubmitHandler) => {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [focused, setFocused] = useState(false);

    const changeHandler = (e) => {
        setValues(state => ({ ...state, [e.target.name]: e.target.value }))
    }

    const handleFocus = (e) => {
        setFocused(true)
    };

    const onSubmit = (e) => {
        e.preventDefault();

        onSubmitHandler(values);
        setValues(initialValues);
        setErrors(FormValidation(values))
        setIsSubmit(true);
    }


    // useEffect(() => {
    //     if (Object.keys(errors).length === 0 && onSubmit) {
    //         console.log(values);
    //     }
    // })
    const changeValues = (newValues) => {
        setValues(newValues);
    }

    return {
        values,
        errors,
        changeHandler,
        onSubmit,
        changeValues,
        handleFocus,
        focused
    }

}