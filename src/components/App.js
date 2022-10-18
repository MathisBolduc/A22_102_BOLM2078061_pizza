import Checklist from "./Checklist";
import Pizza from "./Pizza";
import Login from "./Login";
import Details from "./Details";
import Panier from "./Panier";
import Commandes from "./Commandes";
import AffichagePizzas from "./AffichagePizzas";
import { useDebugValue, useState } from "react";
import { RouterProvider, createBrowserRouter, Navigate, useNavigate } from 'react-router-dom';

const App = (props) => {

  // const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(true);


  const [Pizzas, setPizzas] = useState([
    { nom: 'Sauce', image: 1, state: false, prix: 0.75 },
    { nom: 'Fromage', image: 2, state: false, prix: 0.85 },
    { nom: 'Pepperonis', image: 3, state: false, prix: 1.00 },
    { nom: 'Poivrons verts', image: 4, state: false, prix: 0.60 },
    { nom: 'Oignon', image: 5, state: false, prix: 0.65 },
    { nom: 'Olives noires', image: 6, state: false, prix: 0.50 },
    { nom: 'Tomates cerises', image: 7, state: false, prix: 0.55 },
    { nom: 'Basilic', image: 8, state: false, prix: 0.80 },
    { nom: 'Piments forts', image: 9, state: false, prix: 1.25 },
    { nom: 'Champignons', image: 10, state: false, prix: 0.70 }
  ]);
  const [PizzasNommees, setPizzasNommees] = useState([
    {
      nomPizza: 'La Sauce',
      ingredientsUnePizza:
        [
          { nom: 'Sauce', image: 1 }
        ],
      cout: 10.75
    },
    {
      nomPizza: 'La pepperoni',
      ingredientsUnePizza:
        [
          { nom: 'Sauce', image: 1 },
          { nom: 'Fromage', image: 2 },
          { nom: 'Pepperonis', image: 3 }
        ],
      cout: 12.60
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
        ],
      cout: 17.65
    },

  ]);


  const [coutPizza, setCoutPizza] = useState(10.00);
  const OnChangeHandler = (i) => {
    setCoutPizza(10.00);
    setPizzas(current => current.map((pizza, index) => {
      return index !== i ? pizza : {
        ...pizza,
        state: !pizza.state
      };
    }))
    setPizzas(current => current.map((pizza) => {
      if (pizza.state === true) {
        CalculerCoutPizza(pizza.prix)
        return pizza;
      }
      else return pizza;
    }))
  };

  const CalculerCoutPizza = (prix) => {
    setCoutPizza(current => current += prix);
    //console.log(coutPizza);
  };
  const [newPizza, setNewPizza] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);

  let ingredients = [];
  const OnChangeHandlerPizza = (e) => {
    setNewPizza(e.target.value);
    if (newPizza.trim() === '' && ingredients === []) setIsDisabled(true);
    else setIsDisabled(false);
    //console.log(isDisabled);
  };
  const OnClickHandlerLogin = (nom) => {
    if (nom !== '') {
      setIsAuthenticated(true);
      console.log(isAuthenticated);
      // navigate('/pizza');
    }
  };


  const OnClickHandlerEnregistrer = (i) => {
    if (newPizza.trim() !== '') {
      ingredients = [];
      Pizzas.map((pizza) => {
        if (pizza.state) {
          ingredients.push(pizza);
          pizza.state = false;
        }
      });
      console.log(newPizza, ingredients);
      setPizzasNommees(current => ([{ nomPizza: newPizza, ingredientsUnePizza: ingredients, cout: coutPizza }, ...current]));
      //navigate('/pizza/0');
      setNewPizza('');
      setCoutPizza(10.00);
    }
  };
  const OnClickHandlerAnnuler = () => {
    Pizzas.map((pizza) => {
      pizza.state = false;
    });
    if (newPizza.trim() !== '') {
      setNewPizza('');
    }
  };

  const [commandes, setCommandes] = useState([]);

  const OnClickHandlerEnregistrerPanier = (cout) => {
    if (panier.length !== 0) {      
      setCommandes(current => ([...current,{panier: panier, coutTotal: cout}]));
      setPanier(current => []);
      //console.log("commande +1")
    }
  };

  const [panier, setPanier] = useState([]);
  const OnClickHandlerPanier = (i) => {
    setPanier(current => {
      if (current.find(pizza => pizza.nomPizza === PizzasNommees[i].nomPizza) == null)
      {
        return ([
          {nomPizza: PizzasNommees[i].nomPizza,
          qte: 1,
          cout: PizzasNommees[i].cout},
          ...current
        ])
      } else {
        return current.map((pizza) => {
          if (pizza.nomPizza === PizzasNommees[i].nomPizza) {
            return {...pizza, qte: pizza.qte + 1 }
          } else {
            return pizza;
          }
        })
      }
    })
  };

  const routes = !isAuthenticated ? [
    {
      path: '/login',
      element: <Login OnClick={OnClickHandlerLogin} />,
      // errorElement: <Navigate to="/login" replace />,
    },
    {
      path: '*',
      element: <Navigate to="/login" replace />
    }
  ] : [
    {
      path: '/pizza',
      element: <AffichagePizzas PizzasNommees={PizzasNommees} onClickPanier={OnClickHandlerPanier} />,
      errorElement: <Navigate to="/pizza" replace />,
      children: [
        {
          element: <Details />,
          path: ':pizzaIndex',
          errorElement: <Navigate to="/pizza" replace />,
          loader: (data) => {
            return (PizzasNommees[data.params.pizzaIndex])
          }
        },
        {
          element: <Panier panier={panier} 
          OnClickHandlerEnregistrerPanier={OnClickHandlerEnregistrerPanier}/>,
          path: 'panier',
          errorElement: <Navigate to="/pizza" replace />,
        },
        // {
        //   path:'*',
        //   element:<Navigate to="/pizza" replace/>
        // },
      ]
    },
    {
      element: <Pizza OnChangeHandler={OnChangeHandler}
        OnChangeHandlerPizza={OnChangeHandlerPizza}
        OnClickHandlerAnnuler={OnClickHandlerAnnuler}
        OnClickHandlerEnregistrer={OnClickHandlerEnregistrer}
        disabled={isDisabled}
        newPizza={newPizza}
        Pizzas={Pizzas}
        prix={coutPizza}
      />,
      path: '/pizza/creer',
      // errorElement: <Navigate to="/pizza" replace/>
    },
    {
      element: <Commandes commandes={commandes}
      OnClickHandlerAnnuler={OnClickHandlerAnnuler}/>,
      path: '/pizza/commandes'
    },
    {
      path: '/*',
      element: <Navigate to="/pizza" replace />
    }

  ]


  return (
    <RouterProvider router={createBrowserRouter(routes)} />
    // <div>
    //   <h1>Les Pizzas</h1>
    //   <AffichagePizzas pizzas={PizzasNommees} />
    //   <h1>
    //     Créer ta pizza!
    //   </h1>
    //   <Checklist pizzas={Pizzas} OnChange={OnChangeHandler} ingredients={Pizzas} />
    //   {/* <Button/> */}
    //   <div>
    //     <input onChange={OnChangeHandlerPizza} value={newPizza} type="text" className="Input" placeholder="Nommer votre pizza" />
    //     <button onClick={OnClickHandlerEnregistrer} disabled={!isDisabled} >Enregistrer</button>
    //     <button onClick={OnClickHandlerAnnuler}>Annuler</button>
    //   </div>
    //   <Pizza ingredients={Pizzas} pizzas={Pizzas} />
    // </div>

  );
};
export default App;