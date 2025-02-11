import style from '../CoursesList/style.module.css'
import { Link } from 'react-router-dom'

function CourseItem({el}) {
    return (
        <div className={style.container}>
            <Link to={'/about'}>
                <div className={style.image}></div>
                <div className={style.description}>
                    <h3>{el.title}</h3>
                    <p>{el.descroption}</p>
                </div>
            </Link>
        </div>
    )
}

export default CourseItem