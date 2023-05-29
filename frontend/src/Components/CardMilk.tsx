import { milks } from "../Services/api"
import '../css/CardMilk.css'

type CardMilkProps = {
    data: milks
}

export const CardMilk = ({data}:CardMilkProps) => {
  
    return(
        <section className="card">        
            <div>{data.name}</div>
            <div>{data.type}</div>
            <div>{data.storage}</div>      
        </section>
    )
}
