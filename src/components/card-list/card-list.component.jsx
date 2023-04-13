import './card-list.style.css'
import  { Card } from "../card/card.component";

export const CardList = props =>(

    <div className="card-list">
        {props.listMonsters.map(monster=>(
        <Card key={monster.id} item={monster}/> 
        ))}
    </div>
);
    
    
 