const Panier = ({ panier, OnClickHandlerEnregistrerPanier}) => {

    let total = 0;
    return (
        <div>
            <h2>Votre panier</h2>
            <div>
                <ul>

                    {panier.map((pizza, index) => {
                    let cout = pizza.cout * pizza.qte;
                    total += cout;
                    return(
                    <li key={pizza.nomPizza +index } >{pizza.nomPizza} x{pizza.qte} {cout.toFixed(2)}$</li>
                    )})}
                </ul>
                <div>
                    <p><b>{total.toFixed(2)}$</b></p>
                </div>
                <button onClick={() => OnClickHandlerEnregistrerPanier(total)} >Enregistrer</button>
            </div>
        </div>
    )
}
export default Panier;