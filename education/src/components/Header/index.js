import style from '../Header/style.module.css'

function Header () {
    return (
        <header className={style.header}>
            <div className={style.logo}>Hschool</div>
            <div className={style.signButtons}>
                <button className={style.log}>Login →</button>
                <button className={style.sign}>Sign Up</button>
            </div>
        </header>
    )

}

export default Header