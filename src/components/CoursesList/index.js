import style from '../CoursesList/style.module.css'
import arr from '../../storage/index'
import CourseItem from '../CoursesList/CourseItem'
import Pagination from '../Pagination'

function CoursesList() {
    const containerInfo = arr.map(el => <CourseItem el={el}></CourseItem>)
    return (
        <section className={style.courses}>
            <div className={style.wrapper}>
                <div className={style.title}>
                    <h2>Courses</h2>
                </div>
                <div className={style.courses_list}>
                    {containerInfo}
                </div>
                <div className={style.pagination}></div>
            </div>
            <Pagination/>
        </section >
    )
}

export default CoursesList