import { milks } from "../Services/api"
import '../css/CardMilk.css'
import milkImage from '../images/milk.png';

type CardMilkProps = {
    data: milks
}

export const CardMilk = ({data}:CardMilkProps) => {
  
    return(
        <section className="card"> 
            <div>
                <img src={milkImage} alt="milk" />
            </div>
            <div className="card-info">
                <h4>{data.name}</h4>
                <div>{data.type}</div>
                <div>{data.storage} liter</div>      
            </div>       
        </section>
    )
}
