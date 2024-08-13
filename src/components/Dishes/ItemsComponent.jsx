export const ItemsComponent = (props) => {
    return (
        <>
            <ul>
                {props.dishes.map((dish) => {
                    return <>
                        <li>{dish.name}</li>
                    </>
                })}
            </ul>
        </>
    )
}