import { useLoaderData, useParams } from "react-router-dom";
const Details = props => {
    const pizza = useLoaderData();

    return (
        <div className="outlet">
            <div>
                <h1>{pizza.nomPizza}</h1>
                <div className="imagePizzasDetail">
                                <img src="/img/image0.png" alt="" />
                                {pizza.ingredientsUnePizza.map((ingredient) => (
                                    <img key={ingredient.nom + ingredient.image} src={`/img/image${ingredient.image}.png`} alt="" />
                                ))}
                </div>
                <ul className='ingredient'>

                {pizza.ingredientsUnePizza.map((ingredient) => (
                    <li  key={ingredient.nom}>
                        {ingredient.nom}  
                    </li>
                ))}
                </ul>
                <h3>Total : {pizza.cout}$</h3>
            </div>
        </div>
    )
}
export default Details;