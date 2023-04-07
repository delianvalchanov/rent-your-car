import { Button } from 'react-bootstrap'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

import { AuthContext } from '../../contexts/AuthContext'
import LoginCSS from './assets/Login.module.css'
import { useForm } from '../../hooks/useForm'

const LoginFormKeys = {
    Email: 'email',
    Password: 'password'
};

export const Login = () => {
    const { onLoginSubmit } = useContext(AuthContext)
    const { values, changeHandler, onSubmit } = useForm({
        [LoginFormKeys.Email]: '',
        [LoginFormKeys.Password]: '',
    }, onLoginSubmit)

    return (
        <section className={LoginCSS.wrapper}>
            <form id={LoginCSS['login']} method="POST" onSubmit={onSubmit}>
                <div className="container">
                    <h2>Login</h2>

                    <label htmlFor="email">Email: </label>
                    <input
                        type="email"
                        id={LoginCSS['email']}
                        name={LoginFormKeys.Email}
                        placeholder="peter@gmail.com"
                        value={values[LoginFormKeys.Email]}
                        onChange={changeHandler}
                    />

                    <label htmlFor="login-pass">Password: </label>
                    <input
                        type="password"
                        id={LoginCSS['password']}
                        name={LoginFormKeys.Password}
                        value={values[LoginFormKeys.Password]}
                        onChange={changeHandler}
                    />

                    <Button type="submit" className={LoginCSS.submit} value="Submit"> Login</Button>

                    <p className={LoginCSS.field}><span>If you don't have profile, click <Link to="/register">here</Link></span></p>
                </div>
            </form>
        </section>
    )
}