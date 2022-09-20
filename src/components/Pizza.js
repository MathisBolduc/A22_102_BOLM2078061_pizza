import './Pizza.css';
const Pizza = (props) => {

    return(
        <div className="image">
            <img src="/img/image0.png" alt="" />
            <img src={`/img/image${props.ingredients[0] ? props.pizzas[0].image  : 'o'}.png`} alt="" />
            <img src={`/img/image${props.ingredients[1] ? props.pizzas[1].image  : 'o'}.png`} alt="" />
            <img src={`/img/image${props.ingredients[2] ? props.pizzas[2].image  : 'o'}.png`} alt="" />
            <img src={`/img/image${props.ingredients[3] ? props.pizzas[3].image  : 'o'}.png`} alt="" />
            <img src={`/img/image${props.ingredients[4] ? props.pizzas[4].image  : 'o'}.png`} alt="" />
            <img src={`/img/image${props.ingredients[5] ? props.pizzas[5].image  : 'o'}.png`} alt="" />
            <img src={`/img/image${props.ingredients[6] ? props.pizzas[6].image  : 'o'}.png`} alt="" />
            <img src={`/img/image${props.ingredients[7] ? props.pizzas[7].image  : 'o'}.png`} alt="" />
            <img src={`/img/image${props.ingredients[8] ? props.pizzas[8].image  : 'o'}.png`} alt="" />
            <img src={`/img/image${props.ingredients[9] ? props.pizzas[9].image  : 'o'}.png`} alt="" />
        </div>
    );
};

export default Pizza;