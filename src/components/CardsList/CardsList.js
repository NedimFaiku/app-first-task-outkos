import Cards from "../Cards/Cards";
import {cards} from "../../data";
import '../CardsList/cardlist.css';


function CardsList() {
    return(
        <div className="cl-list">
            {cards.map((prop) =>(
                <Cards key={prop.id} version={prop.version} label={prop.label}  name={prop.name} description={prop.description} button={prop.button} img={prop.img} />
            ))}
        </div>
    )
}


export default CardsList;