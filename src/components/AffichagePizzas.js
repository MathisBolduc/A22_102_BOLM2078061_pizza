import './AffichagePizzas.css';
const AffichagePizzas = (props) => {
    return (
        <div className='pizzas'>

            
            {props.pizzas.map((pizza) => (
                <div className='pizza'>
                    <h2 key={pizza.nomPizza} >{pizza.nomPizza}</h2>
                    <div className=''>

                        {pizza.ingredientsUnePizza.map((ingredient) => (
                                <p className='ingredient' key={ingredient.nom}>
                                    {ingredient.nom}
                                </p>
                        ))}
                            <div className="imagePizzas">
                            <img src="/img/image0.png" alt="" />
                        {pizza.ingredientsUnePizza.map((ingredient) => (
                                <img key={ingredient.nom+ingredient.image} src={`/img/image${ingredient.image}.png`} alt="" />
                                ))}
                                </div>

                    </div>
                </div>
            ))}
        </div>
    );
};
export default AffichagePizzas;
