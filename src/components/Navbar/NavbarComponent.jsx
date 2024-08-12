import style from "./Navbar.module.scss"

export const NavbarComponent = () => {
    return (
        <>
            <nav>
                <ul className={style.listItem}>
                    <li>Item One</li>
                    <li>Item Two</li>
                    <li>Item Three</li>
                    <li>Item Four</li>
                    <li>Item Five</li>
                </ul>
            </nav>
        </>
    )
}