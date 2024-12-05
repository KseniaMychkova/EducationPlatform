import style from '../Learning/style.module.css'

function Learning() {
    return (
        <section className={style.learning}>
            <div className={style.image}></div>
            <div className={style.description}>
                <h2>Learn a language in a playful way</h2>
                <p>Make learning programming languages more fun with mini-games</p>
                <div>
                    <button className={style.sprint}>
                        <div className={style.sneakers}></div>
                        <div className={style.text_button}></div>
                    </button>
                    <button className={style.tasks}>
                        <div className={style.speaker}></div>
                        <div className={style.text_button}></div>                        <div></div>
                    </button>

                </div>
            </div>
        </section>
    )
}

export default Learning