import style from '../Header/style.module.css'
import {Link} from 'react-router-dom'

function Header() {
    return (
        <header className={style.header}>
            <div className={style.wrapper}>
                <div className={style.logo}>Hschool</div>
                <div className={style.signButtons}>
                    <button className={style.log}><Link to={"/login"}>Login →</Link></button>
                    <button className={style.sign}><Link to={"/reg"}>Sign Up</Link></button>
                </div>
            </div>
        </header>
    )

}

export default Header