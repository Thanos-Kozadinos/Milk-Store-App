import { milks } from "../Services/api"
import { CardMilk } from "./CardMilk"
import '../css/MilkGallery.css'

type MilkGalleryProps = {
    data: milks[]
}

export const MilkGallery = ({data}:MilkGalleryProps) => {
    const milkCarton = data.map(mlk => <CardMilk data={mlk}/> ) 
    
    return (
        <>
        <div className="gallery">
            {milkCarton}
        </div>
        </>
      )
}