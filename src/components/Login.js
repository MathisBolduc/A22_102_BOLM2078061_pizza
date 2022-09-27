import { useLoaderData, Link } from "react-router-dom";

const Login = props => {

    const OnClickHandler = useLoaderData();
return (
    <div>

        <h1>Login</h1>
        <div>
        <h2>Nom :</h2>
        <input type="text" className="Input" id="" placeholder="Entrez votre nom"/>
        <Link to='/pizza'><button  onClick={OnClickHandler}>Enregistrer</button></Link>
        </div>
    </div>
);
};
export default Login;