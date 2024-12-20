import style from '../About/style.module.css'
import {Link} from 'react-router-dom'

function About() {
    return (
        <section className={style.aboutCourses}>
            <div className={style.course}>
                <div className={style.container}>
                    <div className={style.image}></div>
                    <div className={style.text}>
                        <h3>JavaScript </h3>
                        <p>JavaScript is a practical course where students learn the basics of JavaScript. It covers variables, operators, conditionals, loops, functions, and data manipulation.</p>
                    </div>
                </div>
                <button><Link to={'/'}>Go to course</Link></button>
            </div>
            <div className={style.lessons}>
                <h3>15 lessons</h3>
                <ol>
                    <li>Test</li>
                    <li>Test</li>
                    <li>Test</li>
                    <li>Test</li>
                    <li>Test</li>
                </ol>
            </div>
        </section>
    )
}

export default About