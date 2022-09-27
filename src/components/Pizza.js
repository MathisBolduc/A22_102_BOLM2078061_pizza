import './Pizza.css';
import { useLoaderData, Link } from "react-router-dom";
const Pizza = (props) => {

    const fn = useLoaderData();
    return (
        <div>
            <div className='checklist'>
                {fn[0].Pizzas.map((pizza, i) => (
                    <li key={pizza.nom + i} >
                        {pizza.nom}
                        <input onChange={() => fn[1].OnChangeHandler(i)} type="checkbox" checked={fn[0].Pizzas[i].state} name="" id="" />
                    </li>
                ))}
            </div>
            <div className="image">
                <img src="/img/image0.png" alt="" />
                <img src={`/img/image${fn[0].Pizzas[0].state ? fn[0].Pizzas[0].image : 'o'}.png`} alt="" />
                <img src={`/img/image${fn[0].Pizzas[1].state ? fn[0].Pizzas[1].image : 'o'}.png`} alt="" />
                <img src={`/img/image${fn[0].Pizzas[2].state ? fn[0].Pizzas[2].image : 'o'}.png`} alt="" />
                <img src={`/img/image${fn[0].Pizzas[3].state ? fn[0].Pizzas[3].image : 'o'}.png`} alt="" />
                <img src={`/img/image${fn[0].Pizzas[4].state ? fn[0].Pizzas[4].image : 'o'}.png`} alt="" />
                <img src={`/img/image${fn[0].Pizzas[5].state ? fn[0].Pizzas[5].image : 'o'}.png`} alt="" />
                <img src={`/img/image${fn[0].Pizzas[6].state ? fn[0].Pizzas[6].image : 'o'}.png`} alt="" />
                <img src={`/img/image${fn[0].Pizzas[7].state ? fn[0].Pizzas[7].image : 'o'}.png`} alt="" />
                <img src={`/img/image${fn[0].Pizzas[8].state ? fn[0].Pizzas[8].image : 'o'}.png`} alt="" />
                <img src={`/img/image${fn[0].Pizzas[9].state ? fn[0].Pizzas[9].image : 'o'}.png`} alt="" />
            </div>
            <div>

                <div className='button' >
                    <input onChange={fn[2].OnChangeHandlerPizza} value={fn[6].newPizza} type="text" className="Input" placeholder="Nommer votre pizza" />
                    <Link to="/pizza/0">
                        <button onClick={() => fn[4].OnClickHandlerEnregistrer(0)} disabled={fn[5].isDisabled} >Enregistrer</button>
                    </Link>
                    <button onClick={fn[3].OnClickHandlerAnnuler}>Annuler</button>
                </div>
            </div>
        </div>
    );
};

export default Pizza;