import Checkbox from "./Checkbox"
const Checklist = (props) => {
//console.log(props);
    return(
        <div>
            <ul>

                {props.pizzas.map((pizza, i) => (
                    <Checkbox key={pizza.nom} nom={pizza.nom} OnChange={props.OnChange} index={i} />
                ))}
            </ul>
        </div>
    );
};
export default Checklist;