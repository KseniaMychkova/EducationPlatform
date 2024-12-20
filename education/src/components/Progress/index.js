import style from '../Progress/style.module.css'

function Progress() {
    return (
        <section className={style.progress}>
            <div className={style.wrapper}>
                <div className={style.image}></div>
                <div className={style.description}>
                    <h2>Watch your progress every day</h2>
                    <p>Save statistics on your achievements and mistakes</p>
                    <button>Statistics →</button>
                </div>
            </div>
        </section>
    )
}


export default Progress