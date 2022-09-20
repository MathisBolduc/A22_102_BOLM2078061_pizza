const Checkbox = (props) => {

//console.log(props.index);
    return(
        <li>
            {props.nom}
            <input onChange={() => props.OnChange(props.index)} type="checkbox" name="" id=""/>
        </li>
    );
};
export default Checkbox;