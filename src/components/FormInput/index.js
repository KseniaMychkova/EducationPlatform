import style from '../FormInput/style.module.css'

function FormInput({el}) {
    return (
        <div className={style.input}>
            <input placeholder={el}></input>
        </div>
    )
}

export default FormInput
