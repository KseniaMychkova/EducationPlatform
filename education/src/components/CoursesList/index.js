import style from '../CoursesList/style.module.css'
import { Link } from 'react-router-dom'

function CoursesList() {
    return (
        <section className={style.courses}>
            <div className={style.wrapper}>
                <div className={style.title}>
                    <h2>Courses</h2>
                </div>
                <div className={style.courses_list}>
                    <div className={style.container}>
                        <Link to={'/about'}>
                            <div className={style.image}></div>
                            <div className={style.description}>
                                <h3>JavaScript</h3>
                                <p>JavaScript is a practical course where students learn the basics of JavaScript. It covers variables, operators, conditionals, loops, functions, and data manipulation.</p>
                            </div>
                        </Link>
                    </div>
                    <div className={style.container}>
                        <Link to={'/about'}>
                            <div className={style.image}></div>
                            <div className={style.description}>
                                <h3>TypeScript</h3>
                                <p>TypeScript is a course that provides an introduction to TypeScript. Students will learn about TypeScript's key features, such as type annotations, interfaces, classes, and modules</p>
                            </div>
                        </Link>
                    </div>
                    <div className={style.container}>
                        <Link to={'/about'}>
                            <div className={style.image}></div>
                            <div className={style.description}>
                                <h3>Python</h3>
                                <p>Students will learn about variables, data types, conditionals, loops, functions, and file handling. Through hands-on exercises and projects, students will gain proficiency in writing Python code and solving real-world problems.</p>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className={style.pagination}></div>
            </div>
        </section >
    )
}

export default CoursesList