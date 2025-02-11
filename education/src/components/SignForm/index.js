import style from '../SignForm/style.module.css'
import { Link } from 'react-router-dom'
import FormInput from '../FormInput/index'
const arr = ['email', 'name', 'surname', 'password']

function SignForm() {
    const inputPlaceholder = arr.map(el => <FormInput el={el}></FormInput>)
    return (
        <section className={style.signForm}>
            <div className={style.wrapper}>
                <div className={style.form}>
                    <h2>Sign</h2>
                    {inputPlaceholder}
                    <button> <Link to={'/courses'}>Sign Up</Link></button>
                </div>
                <div className={style.image}></div>
            </div>
        </section>
    )
}

export default SignForm