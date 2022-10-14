import './Pizza.css';
import { useLoaderData, Link } from "react-router-dom";
const Pizza = (props) => {

    return (
        <div>
            <div className='checklist'>
                {props.Pizzas.map((pizza, i) => (
                    <li key={pizza.nom + i} >
                        {pizza.nom}
                        <input onChange={() => props.OnChangeHandler(i)} type="checkbox" checked={props.Pizzas[i].state} name="" id="" />
                    </li>
                ))}
            </div>
            <div className="image">
                <img src="/img/image0.png" alt="" />
                <img src={`/img/image${props.Pizzas[0].state ? props.Pizzas[0].image : 'o'}.png`} alt="" />
                <img src={`/img/image${props.Pizzas[1].state ? props.Pizzas[1].image : 'o'}.png`} alt="" />
                <img src={`/img/image${props.Pizzas[2].state ? props.Pizzas[2].image : 'o'}.png`} alt="" />
                <img src={`/img/image${props.Pizzas[3].state ? props.Pizzas[3].image : 'o'}.png`} alt="" />
                <img src={`/img/image${props.Pizzas[4].state ? props.Pizzas[4].image : 'o'}.png`} alt="" />
                <img src={`/img/image${props.Pizzas[5].state ? props.Pizzas[5].image : 'o'}.png`} alt="" />
                <img src={`/img/image${props.Pizzas[6].state ? props.Pizzas[6].image : 'o'}.png`} alt="" />
                <img src={`/img/image${props.Pizzas[7].state ? props.Pizzas[7].image : 'o'}.png`} alt="" />
                <img src={`/img/image${props.Pizzas[8].state ? props.Pizzas[8].image : 'o'}.png`} alt="" />
                <img src={`/img/image${props.Pizzas[9].state ? props.Pizzas[9].image : 'o'}.png`} alt="" />
            </div>
            <div>
                <div>
                    <h3>{props.prix.toFixed(2)}$</h3>
                </div>
                <div className='button' >
                    <input onChange={props.OnChangeHandlerPizza} value={props.newPizza} type="text" className="Input" placeholder="Nommer votre pizza" />
                    <Link to="/pizza/0">
                        <button  onClick={() => props.OnClickHandlerEnregistrer(0)} disabled={props.disabled} >Enregistrer</button>
                    </Link>
                    <button onClick={props.OnClickHandlerAnnuler}>Annuler</button>
                </div>
            </div>
        </div>
    );
};

export default Pizza;