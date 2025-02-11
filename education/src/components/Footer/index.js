import style from '../Footer/style.module.css'
import FooterLinks from './FooterLinks';
const arrLearningLinks = ['Home', 'Textbook', 'Statistics', 'Sprint'];
const arrPeopleLinks = ['Alex', 'Gabriel', 'Marcus']


function Footer() {
    const learningLinks = arrLearningLinks.map(el => <FooterLinks el={el}></FooterLinks>)
    const peopleLinks = arrPeopleLinks.map(el => <FooterLinks el={el}></FooterLinks>)

    return (
        <footer className={style.footer}>
            <div className={style.wrapper}>
                <div className={style.links}>
                    <div className={style.learning_links}>
                        {learningLinks}
                    </div>
                    <div className={style.people_links}>
                        {peopleLinks}
                    </div>
                </div>
                <div className={style.networks}>
                    <div>
                        <div className={style.git}></div>
                        <div className={style.gt}></div>
                        <div className={style.youtube}></div>
                    </div>
                    <p>©2021 Hschool. Project for Hschool.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer