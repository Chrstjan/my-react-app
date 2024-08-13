import { ItemsComponent } from "../Dishes/ItemsComponent"
import { GreetingsComponent } from "../Greetings/GreetingsComponent"
import style from "./Main.module.scss"

export const MainComponent = () => {
    const dishesArray = [
        {
            name: "Kødsovs"
        },
        {
            name: "Lasagne"
        },
        {
            name: "Mexicansk"
        },
        {
            name: "Pølsehorn"
        },
        {
            name: "Nuggets"
        }
    ]

    const moviesArray = [
        {
            name: "Star Wars Revenge of the Sith",
        },
        {
            name: "Star Wars Return Of The Jedi"
        },
        {
            name: "Baby Driver"
        },
        {
            name: "Shawshank Redemption"
        },
        {
            name: "WALL-E"
        }
    ]

    return (
        <>
            <section className={style.mainDisplay}>
                <h3 className={style.mainColor}>
                    Main Component
                </h3>
                <GreetingsComponent name="Christian"/>
                <GreetingsComponent name="Gordon Ramsay"/>
                <GreetingsComponent name="Banjo Joe"/>
                <ItemsComponent dishes={dishesArray}/>
                <ItemsComponent dishes={moviesArray} />
            </section>
        </>
    )
}