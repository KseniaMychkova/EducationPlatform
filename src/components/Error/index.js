import style from '../Error/style.module.css'
import image from './assets/ghost.png'
import {Link} from 'react-router-dom'


function Error() {
    return (
        <section className={style.error}>
            <div className={style.wrapper}>
                <div className={style.content}>
                    <div className={style.text}>
                        <p>Error 404</p>
                        <h2>Hey Buddy</h2>
                        <p>We can’t seem to find the page you are looking for.</p>
                    </div>
                    <button><Link to={'/'}>Go home</Link></button>
                </div>
                <div className={style.img}>
                    <img src={image} alt=''></img>
                </div>
            </div>
        </section>
    )
}

export default Error