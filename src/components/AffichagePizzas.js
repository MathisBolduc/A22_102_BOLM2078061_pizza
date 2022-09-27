import './AffichagePizzas.css';
import { useLoaderData, Link,Outlet  } from "react-router-dom";
const AffichagePizzas = (props) => {
    const pizzas = useLoaderData();
    console.log(pizzas);
    return (
        <div className='pizzas'>


            {pizzas.map((pizza, index) => (
                <Link key={pizza.nomPizza + index} to={`/pizza/${index}`}>
                    <div key={pizza.nomPizza} className='pizza'>
                        <h2 key={pizza.nomPizza} >{pizza.nomPizza}</h2>
                        <div className=''>

                            {/* {pizza.ingredientsUnePizza.map((ingredient) => (
                            <p className='ingredient' key={ingredient.nom}>
                            {ingredient.nom}
                            </p>
                        ))} */}

                            <div className="imagePizzas">
                                <img src="/img/image0.png" alt="" />
                                {pizza.ingredientsUnePizza.map((ingredient) => (
                                    <img key={ingredient.nom + ingredient.image} src={`/img/image${ingredient.image}.png`} alt="" />
                                ))}
                            </div>

                        </div>
                    </div>
                </Link>
            ))}
            <Outlet/>
            <div>
                <Link to="/pizza/creer"><h2>Créer</h2></Link>
            </div>
        </div>
    );
};
export default AffichagePizzas;
