import style from '../SignForm/style.module.css'
import {Link} from 'react-router-dom'

function SignForm() {
    return (
        <section className={style.signForm}>
            <div className={style.wrapper}>
                <div className={style.form}>
                    <h2>Sign</h2>
                    <input placeholder="Placeholder text"></input>
                    <input placeholder="Placeholder text"></input>
                    <input placeholder="Placeholder text"></input>
                    <input placeholder="Placeholder text"></input>
                    <button> <Link to={'/courses'}>Sign Up</Link></button>
                </div>
                <div className={style.image}></div>
            </div>
        </section>
    )
}

export default SignForm