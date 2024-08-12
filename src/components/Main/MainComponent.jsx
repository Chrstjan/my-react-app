import style from "./Main.module.scss"

export const MainComponent = () => {
    return (
        <>
            <section className={style.mainDisplay}>
                <h3 className={style.mainColor}>
                    Main Component
                </h3>
            </section>
        </>
    )
}