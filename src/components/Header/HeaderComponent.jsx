import { NavbarComponent } from "../Navbar/NavbarComponent"
import style from './HeaderComponent.module.scss'

export const HeaderComponent = (props) => {
    return (
        <>
            <header className={style.headerStyle} style={{backgroundColor: props.color}}>
                <h1 className={style.headerText}>{props.title}</h1>
                <h2>{props.headerText}</h2>
                <NavbarComponent />
            </header>
        </>
    )
}

HeaderComponent.defaultProps = {
    headerText: "Mangler header text"
}
