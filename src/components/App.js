import Checklist from "./Checklist";
import Pizza from "./Pizza";
import AffichagePizzas from "./AffichagePizzas";
import { useDebugValue, useState } from "react";

const App = (props) => {
  const [Pizzas, setPizzas] = useState([
    { nom: 'Sauce', image: 1, state: false },
    { nom: 'Fromage', image: 2, state: false },
    { nom: 'Pepperonis', image: 3, state: false },
    { nom: 'Poivrons verts', image: 4, state: false },
    { nom: 'Oignon', image: 5, state: false },
    { nom: 'Olives noires', image: 6, state: false },
    { nom: 'Tomates cerises', image: 7, state: false },
    { nom: 'Basilic', image: 8, state: false },
    { nom: 'Piments forts', image: 9, state: false },
    { nom: 'Champignons', image: 10, state: false }
  ]);
  const [PizzasNommees, setPizzasNommees] = useState([
    {
      nomPizza: 'La Sauce',
      ingredientsUnePizza:
        [
          { nom: 'Sauce', image: 1 }
        ]
    },
    {
      nomPizza: 'La pepperoni',
      ingredientsUnePizza:
        [
          { nom: 'Sauce', image: 1 },
          { nom: 'Fromage', image: 2 },
          { nom: 'Pepperonis', image: 3 }
        ]
    },
    {
      nomPizza: 'La ALL dressed',
      ingredientsUnePizza:
        [
          { nom: 'Sauce', image: 1 },
          { nom: 'Fromage', image: 2 },
          { nom: 'Pepperonis', image: 3 },
          { nom: 'Poivrons verts', image: 4 },
          { nom: 'Oignon', image: 5 },
          { nom: 'Olives noires', image: 6 },
          { nom: 'Tomates cerises', image: 7 },
          { nom: 'Basilic', image: 8 },
          { nom: 'Piments forts', image: 9 },
          { nom: 'Champignons', image: 10 }
        ]
    },

  ]);


  const OnChangeHandler = (i) => {
    setPizzas(current => current.map((pizza, index) => {
      return index !== i ? pizza : {
        ...pizza,
        state: !pizza.state
      };
    }))
  };
  const [newPizza, setNewPizza] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);

  const OnChangeHandlerPizza = (e) => {
    setNewPizza(e.target.value);
    if (newPizza.trim() !== '' && ingredients !== null) setIsDisabled(true);
    else setIsDisabled(false);
    console.log(isDisabled);
  };

  
  let ingredients = [];
  const OnClickHandlerEnregistrer = () => {
    if (newPizza.trim() !== '') {
      ingredients = [];
      Pizzas.map((pizza) => {
        if (pizza.state) {
          ingredients.push(pizza);
          
        }
      });
      console.log(newPizza, ingredients);
      setPizzasNommees(current => ([{ nomPizza: newPizza, ingredientsUnePizza: ingredients }, ...current]));
      setNewPizza('');
    }
  };
  const OnClickHandlerAnnuler = () => {
    if (newPizza.trim() !== '') {
      setNewPizza('');
      Pizzas.map((pizza)=>{
        pizza.state = false;
      });
    }
  };



  return (

    <div>
      <h1>Les Pizzas</h1>
      <AffichagePizzas pizzas={PizzasNommees} />
      <h1>
        Créer ta pizza!
      </h1>
      <Checklist pizzas={Pizzas} OnChange={OnChangeHandler} ingredients={Pizzas} />
      {/* <Button/> */}
      <div>
        <input onChange={OnChangeHandlerPizza} value={newPizza} type="text" className="Input" placeholder="Nommer votre pizza" />
        <button onClick={OnClickHandlerEnregistrer} disabled={!isDisabled} >Enregistrer</button>
        <button onClick={OnClickHandlerAnnuler}>Annuler</button>
      </div>
      <Pizza ingredients={Pizzas} pizzas={Pizzas} />
    </div>

  );
};
export default App;