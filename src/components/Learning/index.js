import style from '../Learning/style.module.css'

function Learning() {
    return (
        <section className={style.learning}>
            <div className={style.wrapper}>
                <div className={style.image}></div>
                <div className={style.description}>
                    <h2>Learn a language in a playful way</h2>
                    <p>Make learning programming languages more fun with mini-games</p>
                    <div className={style.buttons}>
                        <button className={style.sprint}>
                            <div className={style.sneakers}></div>
                            <div className={style.text_button}>Sprint →</div>
                        </button>
                        <button className={style.tasks}>
                            <div className={style.speaker}></div>
                            <div className={style.text_button}>Tasks →</div>                        <div></div>
                        </button>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Learning