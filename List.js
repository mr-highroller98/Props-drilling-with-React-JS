import { AppContext } from "../context/index";
import { useContext } from "react";

function List() {
    const context = useContext(AppContext);
    console.log(context, 'Ajay');
    const { name, title, colors } = context;
    if (colors.length === 0) {
        return (<h2>No colors available</h2>)
    }
    return (
        <>
            <h2>{name}</h2>
            <h4>{title}</h4>
            <h2>{colors}</h2>
            <ul>
                {colors.map(color => {
                    return (<li key={color}>{color}</li>)
                })}
            </ul>
        </>
    )
}

export default List;