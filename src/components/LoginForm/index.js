import style from '../LoginForm/style.module.css'
import {Link} from 'react-router-dom'
import FormInput from '../FormInput/index'
const arr = ['email', 'password']

function LoginForm() {
    const inputPlaceholder = arr.map(el => <FormInput el={el}></FormInput>)
    return (
        <section className={style.loginForm}>
            <div className={style.wrapper}>
                <div className={style.form}>
                    <h2>Login</h2>
                    {inputPlaceholder}
                    <button><Link to={'/courses'}>Login</Link></button>
                </div>
                <div className={style.image}></div>
            </div>
        </section>
    )
}

export default LoginForm