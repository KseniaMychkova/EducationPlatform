import style from '../Preview/style.module.css'

function Preview() {
    return (
        <section className={style.preview}>
            <div className={style.preview_description}>
                <p className={style.course}>E-COURSE PLATFORM</p>
                <h1>Learning and
                    teaching online,
                    made easy.</h1>
                    <p className={style.text}>Any subject, in any language, on any device, for all ages!</p>
                    <button>About platform</button>
                    <div className={style.count_of_students}></div>
            </div>
            <div className={style.preview_img_boy}></div>

        </section>
    )
}

export default Preview