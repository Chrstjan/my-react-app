import { NavbarComponent } from "../Navbar/NavbarComponent"
import style from './HeaderComponent.module.scss'

export const HeaderComponent = () => {
    return (
        <>
            <header className={style.headerStyle}>
                <h1 className={style.headerText}>Header Component</h1>
                <NavbarComponent />
            </header>
        </>
    )
}