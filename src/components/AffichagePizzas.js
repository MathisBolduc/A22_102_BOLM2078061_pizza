import './AffichagePizzas.css';
import { useLoaderData, Link, Outlet } from "react-router-dom";
const AffichagePizzas = ({ PizzasNommees, onClickPanier }) => {
    return (

        <div className='home'>
            <div className='pizzas'>


                <div className='buttonsPizzas'>

                    <div>
                        <Link to="/pizza/creer"><h2>Créer</h2></Link>
                    </div>
                    <div>
                        <Link to="/pizza/commandes"><h2>Commandes</h2></Link>
                    </div>
                    <div>
                        <Link to="/pizza/panier"><h2>Mon panier</h2></Link>
                    </div>
                </div>
                <div className='flexPizzas'>

                    {PizzasNommees.map((pizza, index) => (
                        <div key={pizza.nomPizza} className='pizza'>
                            <Link key={pizza.nomPizza + index} to={`/pizza/${index}`}>
                                <h2 key={pizza.nomPizza} >{pizza.nomPizza}</h2>
                                <div>
                                    <h3>{pizza.cout.toFixed(2)}</h3>
                                </div>
                                <div className='image'>

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
                            </Link>
                            <button onClick={() => onClickPanier(index)} className="panierAffichage">
                                <span className="material-symbols-outlined">
                                    shopping_cart
                                </span>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
            <Outlet />
        </div>
    );
};
export default AffichagePizzas;
