const Panier = ({ panier, OnClickHandlerEnregistrerPanier }) => {

    let total = 0;
    return (
        <div className="outlet">
            <h2>Votre panier</h2>
            <div>
                <ul>    
                    <li className="liPanier">
                        <h4><b>Nom</b></h4>
                        <h4><b>Quantité</b> </h4>
                        <h4><b>Coût</b> </h4>
                    </li>
                    {panier.map((pizza, index) => {
                        let cout = pizza.cout * pizza.qte;
                        total += cout;
                        return (
                            <li className="liPanier" key={pizza.nomPizza + index} >
                                <h4>
                                    {pizza.nomPizza}
                                </h4>
                                <h4>
                                    x{pizza.qte}
                                </h4>
                                <h4>
                                    {cout.toFixed(2)}$
                                </h4>
                            </li>
                        )
                    })}
                </ul>
                <div>
                    <p><b>Total : {total.toFixed(2)}$</b></p>
                </div>
                <button onClick={() => OnClickHandlerEnregistrerPanier(total)} >Enregistrer</button>
            </div>
        </div>
    )
}
export default Panier;