import style from '../Footer/style.module.css'

function Footer() {
    return (
        <footer className={style.footer}>
            <div className={style.wrapper}>
                <div className={style.links}>
                    <div className={style.learning_links}>
                        <a href='#!'>Home</a>
                        <a href='#!'>Textbook</a>
                        <a href='#!'>Statistics</a>
                        <a href='#!'>Sprint</a>
                    </div>
                    <div className={style.people_links}>
                        <a href='#!'>Alex</a>
                        <a href='#!'>Gabriel</a>
                        <a href='#!'>Marcus</a>
                    </div>
                </div>
                <div className={style.networks}>
                    <div>
                        <div className={style.git}></div>
                        <div className={style.gt}></div>
                        <div className={style.youtube}></div>
                    </div>
                    <p>©2021 Hschool. Project for Hschool.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer