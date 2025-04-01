import style from '../Knowledge/style.module.css'

function Knowledge() {
    return (
        <section className={style.knowledge}>
            <div className={style.wrapper}>
                <div className={style.description}>
                    <h2>Increase your knowledge</h2>
                    <p>Traditional and new effective approaches to learning languages</p>
                    <button>Textbook →</button>
                </div>
                <div className={style.image}></div>
            </div>
        </section>
    )
}

export default Knowledge