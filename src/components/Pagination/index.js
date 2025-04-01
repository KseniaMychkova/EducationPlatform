import style from '../Pagination/style.module.css'

function Pagination (){
    return (
        <div className={style.pagination}>
            <div className={style.paginationCircle}>
                <p className={style.paginationContent}>←</p>
            </div>
            <div className={style.paginationCircle}>
                <p className={style.paginationContent}>1</p>
            </div>
            <div className={style.paginationCircle}>
                <p className={style.paginationContent}>2</p>
            </div>
            <div className={style.paginationCircle}>
                <p className={style.paginationContent}>3</p>
            </div>

        </div>
    )
}

export default Pagination