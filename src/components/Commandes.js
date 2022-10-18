import { Link } from "react-router-dom";
const Commandes = (props) => {
    return (
        <div>
            <Link to="/pizza/0" >
                <button>Revenir aux pizzas</button>
            </Link>
            <div>
                <ul>
                    {props.commandes.map((commande, index) => (
                        <li key={index} >
                            <h3>Commandes #{index + 1}</h3>
                            <ul>

                                {commande.panier.map((pizza, index) => {
                                    let cout = pizza.cout * pizza.qte;
                                    return (
                                        <li key={pizza.nomPizza + index} >{pizza.nomPizza} x{pizza.qte} {cout.toFixed(2)}$</li>
                                    )
                                })}
                            </ul>
                            <h2>Total : {commande.coutTotal.toFixed(2)}</h2>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
export default Commandes;