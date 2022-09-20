import Checklist from "./Checklist";
import Pizza from "./Pizza";
import AffichagePizzas from "./AffichagePizzas";
import { useDebugValue, useState } from "react";

const App = (props) => {
  const Pizzas = [
    { nom: 'Sauce', image: 1 },
    { nom: 'Fromage', image: 2 },
    { nom: 'Pepperonis', image: 3 },
    { nom: 'Poivrons verts', image: 4 },
    { nom: 'Oignon', image: 5 },
    { nom: 'Olives noires', image: 6 },
    { nom: 'Tomates cerises', image: 7 },
    { nom: 'Basilic', image: 8 },
    { nom: 'Piments forts', image: 9 },
    { nom: 'Champignons', image: 10 },
  ];
  const [PizzasNommees, setPizzasNommees] = useState ([
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

  ])
  console.log(PizzasNommees[0]);
  const [sauce, setSauce] = useState(false);
  const [fromage, setFromage] = useState(false);
  const [pepperonis, setPepperonis] = useState(false);
  const [poivrons, setPoivrons] = useState(false);
  const [oignon, setOignon] = useState(false);
  const [olives, setOlives] = useState(false);
  const [tomates, setTomates] = useState(false);
  const [basilic, setBasilic] = useState(false);
  const [piments, setPiments] = useState(false);
  const [champignons, setChampignons] = useState(false);
  const ingredients = [sauce, fromage, pepperonis, poivrons, oignon, olives, tomates, basilic, piments, champignons]


  const OnChangeHandler = (i) => {
    switch (i) {
      case 0:
        setSauce(!sauce);
        break;
      case 1:
        setFromage(!fromage)
        break;
      case 2:
        setPepperonis(!pepperonis)
        break;
      case 3:
        setPoivrons(!poivrons)
        break;
      case 4:
        setOignon(!oignon)
        break;
      case 5:
        setOlives(!olives)
        break;
      case 6:
        setTomates(!tomates)
        break;
      case 7:
        setBasilic(!basilic)
        break;
      case 8:
        setPiments(!piments)
        break;
      case 9:
        setChampignons(!champignons)
        break;

      default:
        break;
    }
    //i === 0 ? setSauce(!sauce) : setSauce(!sauce);
    // i === 1 ? setFromage(!fromage) : setFromage(!fromage);
    // i === 2 ? setPepperonis(!pepperonis) : setPepperonis(!pepperonis);
    // i === 3 ? setPoivrons(!poivrons) : setPoivrons(!poivrons);
    // i === 4 ? setOignon(!oignon) : setOignon(!oignon);
    // i === 5 ? setOlives(!olives) : setOlives(!olives);
    // i === 6 ? setTomates(!tomates) : setTomates(!tomates);
    // i === 7 ? setBasilic(!basilic) : setBasilic(!basilic);
    // i === 8 ? setPiments(!piments) : setPiments(!piments);
    // i === 9 ? setChampignons(!champignons) : setChampignons(!champignons);
    //setSauce(!ingredients[i]);
    //console.log(ingredients);
  };
  const [newPizza, setNewPizza] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);

  const OnChangeHandlerPizza = (e) => {
    setNewPizza(e.target.value);
    if (newPizza.trim() !== '' && ingredientsPizza !== null) setIsDisabled(true);
    else setIsDisabled(false);
    console.log(isDisabled);
  };
  const [ingredientsPizza, setIngredientsPizza] = useState([]);
  const OnClickHandlerEnregistrer = () => {
    if (newPizza.trim() !== '') {
      setIngredientsPizza([]);
      if (sauce === true) setIngredientsPizza(current => ([...current, Pizzas[0] ]));
      if (fromage === true) setIngredientsPizza(current => ([...current, Pizzas[1] ]));
      if (pepperonis === true) setIngredientsPizza(current => ([...current, Pizzas[2] ]));
      if (poivrons === true) setIngredientsPizza(current => ([...current, Pizzas[3] ]));
      if (oignon === true) setIngredientsPizza(current => ([...current, Pizzas[4] ]));
      if (olives === true) setIngredientsPizza(current => ([...current, Pizzas[5] ]));
      if (tomates === true) setIngredientsPizza(current => ([...current, Pizzas[6] ]));
      if (basilic === true) setIngredientsPizza(current => ([...current, Pizzas[7] ]));
      if (piments === true) setIngredientsPizza(current => ([...current, Pizzas[8] ]));
      if (champignons === true) setIngredientsPizza(current => ([...current, Pizzas[9] ]));
      console.log(newPizza, ingredientsPizza);
      setPizzasNommees(current =>([{nomPizza:newPizza, ingredientsUnePizza:ingredientsPizza}, ...current]));
      //console.log(ingredientsPizza);
      setNewPizza('');
    }
  };
  const OnClickHandlerAnnuler = () => {
    // setSauce(false);
    // setFromage(false);
    // setPepperonis(false);
    // setPoivrons(false);
    // setOignon(false);
    // setOlives(false);
    // setTomates(false);
    // setBasilic(false);
    // setChampignons(false);
    if (newPizza.trim() !== '') {
      setNewPizza('');
    }
  };



  return (

    <div>
      <h1>Les Pizzas</h1>
      <AffichagePizzas pizzas={PizzasNommees}/>
      <h1>
        Créer ta pizza!
      </h1>
      <Checklist pizzas={Pizzas} OnChange={OnChangeHandler} ingredients={ingredients} />
      {/* <Button/> */}
      <div>
        <input onChange={OnChangeHandlerPizza} value={newPizza} type="text" className="Input" placeholder="Nommer votre pizza" />
        <button onClick={OnClickHandlerEnregistrer} disabled={!isDisabled} >Enregistrer</button>
        <button onClick={OnClickHandlerAnnuler}>Annuler</button>
      </div>
      <Pizza ingredients={ingredients} pizzas={Pizzas} />
    </div>

  );
};
export default App;