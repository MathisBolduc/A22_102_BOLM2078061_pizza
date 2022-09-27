import { useLoaderData, Link } from "react-router-dom";
import { useState } from 'react';

const Login = (props) => {
    const [nom, setNom] = useState('');
return (
    <div>

        <h1>Login</h1>
        <div>
        <h2>Nom :</h2>
        <input type="text" className="" value={nom} onChange={e => setNom(e.target.value)} id="" placeholder="Entrez votre nom"/>
        <button  onClick={() => props.OnClick(nom)}>Enregistrer</button>
        </div>
    </div>
);
};
export default Login;