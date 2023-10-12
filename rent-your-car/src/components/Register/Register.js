import { Button } from "react-bootstrap"
import { useContext } from "react"
import { Link } from "react-router-dom"
import { useFormik } from "formik"

import { AuthContext } from "../../contexts/AuthContext"
import RegisterCSS from "./assets/Register.module.css"
import { RegisterSchema } from "../../schemas/authSchema"

export const Register = () => {
    const { onRegisterSubmit } = useContext(AuthContext);

    const onSubmit = () => {
        onRegisterSubmit(values)
    }

    const { values, errors, handleBlur, touched, handleChange, handleSubmit } = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
            confirmPassword: ''
        },
        validationSchema: RegisterSchema,
        onSubmit,
    })

    return (
        <section className={RegisterCSS.wrapper}>
            <form id={RegisterCSS['register']} method='POST' onSubmit={handleSubmit} autoComplete="off">
                <div className="container">
                    <h2>Register</h2>
                    <fieldset>
                        <label htmlFor="username">Username: </label>
                        <input type="text"
                            id='username'
                            className={errors.username && touched.username ? RegisterCSS.inputerr : RegisterCSS.authField}
                            name="username"
                            value={values.username}
                            onChange={handleChange('username')}
                            onBlur={handleBlur('username')}
                        />
                        {errors.username && touched.username && <p>{errors.username}</p>}
                    </fieldset>

                    <fieldset>
                        <label htmlFor="email">Email: </label>
                        <input type="email"
                            id='email'
                            className={errors.email && touched.email ? RegisterCSS.inputerr : RegisterCSS.authField}
                            name="email"
                            placeholder="peter@gmail.com"
                            value={values.email}
                            onChange={handleChange('email')}
                            onBlur={handleBlur('email')}
                        />
                        {errors.email && touched.email && <p>{errors.email}</p>}
                    </fieldset>

                    <fieldset>
                        <label htmlFor="password">Password: </label>
                        <input type="password"
                            id='password'
                            className={errors.password && touched.password ? RegisterCSS.inputerr : RegisterCSS.authField}
                            name="password"
                            value={values.password}
                            onChange={handleChange('password')}
                            onBlur={handleBlur('password')}
                        />
                        {errors.password && touched.password && <p>{errors.password}</p>}
                    </fieldset>

                    <fieldset>
                        <label htmlFor="confirmPassword">Confirm Password: </label>
                        <input type="password"
                            id='confirmPassword'
                            className={errors.confirmPassword && touched.confirmPassword ? RegisterCSS.inputerr : RegisterCSS.authField}
                            name="confirmPassword"
                            value={values.confirmPassword}
                            onChange={handleChange('confirmPassword')}
                            onBlur={handleBlur('confirmPassword')}
                        />
                        {errors.confirmPassword && touched.confirmPassword && <p>{errors.confirmPassword}</p>}
                    </fieldset>

                    <Button type="submit" className={RegisterCSS.submit} value="Submit">Register</Button>

                    <p className={RegisterCSS.field}><span>If you already have profile, click <Link id={RegisterCSS.pathToLogin} to={'/login'}>here</Link></span></p>
                </div>
            </form>
        </section>
    )
}