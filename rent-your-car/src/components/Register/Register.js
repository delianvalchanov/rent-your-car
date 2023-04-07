import { Button } from "react-bootstrap"
import { useContext } from "react"
import { Link } from "react-router-dom"

import { useForm } from "../../hooks/useForm"
import { AuthContext } from "../../contexts/AuthContext"
import RegisterCSS from "./assets/Register.module.css"

export const Register = () => {
    const { onRegisterSubmit } = useContext(AuthContext);
    const { values, changeHandler, onSubmit } = useForm({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    }, onRegisterSubmit)

    return (
        <section className={RegisterCSS.wrapper}>
            <form id={RegisterCSS['register']} method='POST' onSubmit={onSubmit}>
                <div className="container">
                    <h2>Register</h2>

                    <label htmlFor="username">Username: </label>
                    <input type="text"
                        id={RegisterCSS['username']}
                        name="username"
                        value={values.username}
                        onChange={changeHandler}
                    />

                    <label htmlFor="email">Email: </label>
                    <input type="email"
                        id={RegisterCSS['email']}
                        name="email"
                        placeholder="peter@gmail.com"
                        value={values.email}
                        onChange={changeHandler}
                    />

                    <label htmlFor="password">Password: </label>
                    <input type="password"
                        id={RegisterCSS['password']}
                        name="password"
                        value={values.password}
                        onChange={changeHandler}
                    />

                    <label htmlFor="confirmPassword">Confirm Password: </label>
                    <input type="password"
                        id={RegisterCSS['confirmPassword']}
                        name="confirmPassword"
                        value={values.confirmPassword}
                        onChange={changeHandler}
                    />

                    <Button type="submit" className={RegisterCSS.submit} value="Submit">Register</Button>

                    <p className={RegisterCSS.field}><span>If you already have profile, click <Link to="/login">here</Link></span></p>
                </div>
            </form>
        </section>
    )
}