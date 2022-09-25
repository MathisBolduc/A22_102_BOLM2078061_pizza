import './Pizza.css';
const Pizza = (props) => {

    return(
        <div className="image">
            <img src="/img/image0.png" alt="" />
            <img src={`/img/image${props.ingredients[0].state ? props.pizzas[0].image  : 'o'}.png`} alt="" />
            <img src={`/img/image${props.ingredients[1].state ? props.pizzas[1].image  : 'o'}.png`} alt="" />
            <img src={`/img/image${props.ingredients[2].state ? props.pizzas[2].image  : 'o'}.png`} alt="" />
            <img src={`/img/image${props.ingredients[3].state ? props.pizzas[3].image  : 'o'}.png`} alt="" />
            <img src={`/img/image${props.ingredients[4].state ? props.pizzas[4].image  : 'o'}.png`} alt="" />
            <img src={`/img/image${props.ingredients[5].state ? props.pizzas[5].image  : 'o'}.png`} alt="" />
            <img src={`/img/image${props.ingredients[6].state ? props.pizzas[6].image  : 'o'}.png`} alt="" />
            <img src={`/img/image${props.ingredients[7].state ? props.pizzas[7].image  : 'o'}.png`} alt="" />
            <img src={`/img/image${props.ingredients[8].state ? props.pizzas[8].image  : 'o'}.png`} alt="" />
            <img src={`/img/image${props.ingredients[9].state ? props.pizzas[9].image  : 'o'}.png`} alt="" />
        </div>
    );
};

export default Pizza;