import style from "./Footer.module.scss";

export const FooterComponent = () => {
    return (
        <>
            <footer className={style.footerDisplay}>
                <h5 className={style.footerText}>Footer Component</h5>
            </footer>
        </>
    )
}