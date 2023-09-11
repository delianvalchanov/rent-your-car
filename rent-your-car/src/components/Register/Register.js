import { Button } from "react-bootstrap"
import { useContext } from "react"
import { Link } from "react-router-dom"

import { useForm } from "../../hooks/useControlledForm"
import { AuthContext } from "../../contexts/AuthContext"
import RegisterCSS from "./assets/Register.module.css"

const RegisterFormKeys = {
    Username: 'username',
    Email: 'email',
    Password: 'password',
    ConfirmPassword: 'confirmPassword'
}

export const Register = () => {
    const { onRegisterSubmit } = useContext(AuthContext);
    const { values, errors, changeHandler, onSubmit } = useForm({
        [RegisterFormKeys.Username]: '',
        [RegisterFormKeys.Email]: '',
        [RegisterFormKeys.Password]: '',
        [RegisterFormKeys.ConfirmPassword]: '',
    }, onRegisterSubmit)

    return (
        <section className={RegisterCSS.wrapper}>
            <form id={RegisterCSS['register']} method='POST' onSubmit={onSubmit}>
                <div className="container">
                    <h2>Register</h2>
                    <formfield>
                        <label htmlFor="username">Username: </label>
                        <input type="text"
                            id={RegisterCSS['username']}
                            name="username"
                            value={values[RegisterFormKeys.Username]}
                            onChange={changeHandler}
                        />
                        <p>{errors.username}</p>
                    </formfield>

                    <formfield>
                        <label htmlFor="email">Email: </label>
                        <input type="email"
                            id={RegisterCSS['email']}
                            name="email"
                            placeholder="peter@gmail.com"
                            value={values[RegisterFormKeys.Email]}
                            onChange={changeHandler}
                        />
                        <p>{errors.email}</p>
                    </formfield>

                    <formfield>
                        <label htmlFor="password">Password: </label>
                        <input type="password"
                            id={RegisterCSS['password']}
                            name="password"
                            value={values[RegisterFormKeys.Password]}
                            onChange={changeHandler}
                        />
                        <p>{errors.password}</p>
                    </formfield>

                    <formfield>
                        <label htmlFor="confirmPassword">Confirm Password: </label>
                        <input type="password"
                            id={RegisterCSS['confirmPassword']}
                            name="confirmPassword"
                            value={values[RegisterFormKeys.ConfirmPassword]}
                            onChange={changeHandler}
                        />
                        <p>{errors.confirmPassword}</p>
                    </formfield>

                    <Button type="submit" className={RegisterCSS.submit} value="Submit">Register</Button>

                    <p className={RegisterCSS.field}><span>If you already have profile, click <Link id={RegisterCSS.pathToLogin} to={'/login'}>here</Link></span></p>
                </div>
            </form>
        </section>
    )
}