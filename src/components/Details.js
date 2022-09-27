import { useLoaderData, useParams } from "react-router-dom";
const Details = props => {
    const pizza = useLoaderData();

    return (
        <div>
            <div>
                <h1>{pizza.nomPizza}</h1>
                <div className="imagePizzas">
                                <img src="/img/image0.png" alt="" />
                                {pizza.ingredientsUnePizza.map((ingredient) => (
                                    <img key={ingredient.nom + ingredient.image} src={`/img/image${ingredient.image}.png`} alt="" />
                                ))}
                </div>
                <ul>

                {pizza.ingredientsUnePizza.map((ingredient) => (
                    <li className='ingredient' key={ingredient.nom}>
                        {ingredient.nom}
                    </li>
                ))}
                </ul>
            </div>
        </div>
    )
}
export default Details;