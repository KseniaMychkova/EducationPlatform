import style from '../LoginForm/style.module.css'
import {Link} from 'react-router-dom'

function LoginForm() {
    return (
        <section className={style.loginForm}>
            <div className={style.wrapper}>
                <div className={style.form}>
                    <h2>Login</h2>
                    <input placeholder="Placeholder text"></input>
                    <input placeholder="Placeholder text"></input>
                    <button><Link to={'/courses'}>Login</Link></button>
                </div>
                <div className={style.image}></div>
            </div>
        </section>
    )
}

export default LoginForm