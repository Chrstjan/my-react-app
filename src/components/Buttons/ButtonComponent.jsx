import style from "./Button.module.scss"

export const ButtonComponent = (props) => {
    return (
        <>
            <button onClick={ () => props.action()} className={`${style[props.size]} ${style[props.theme]}`}>{props.btnText}</button>
        </>
    )
}