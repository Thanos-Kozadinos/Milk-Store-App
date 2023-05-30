import milkImage from '../images/milk.png';
import { useNavigate, useParams,  } from 'react-router-dom';
import { milks } from '../Services/api';
import '../css/MilkDetails.css';

type MilkDetailsParams = {
  id: string;
}

type MilkDetailsProps = {
    data: milks[]
  }

export const MilkDetails = ({data}:MilkDetailsProps) => {
    const { id } = useParams<MilkDetailsParams>();
    const history = useNavigate();
    
    const goBack = () => {
        history(-1)
      };

    if(id != undefined)
    {
        const milky = data.filter(d => d.id == +id)
        return(
            <>
            <button onClick={goBack}>Back</button>
            <div>
                <img className='milkDetails_image' src={milkImage} alt="milk" />
            </div>
            <h3>{milky[0].name}</h3>
            <p>{milky[0].type}</p>
            <p>{milky[0].storage}</p>
            </>
        )
    }
    return
    (
        <>
          <h1>loading...</h1>
        </>
    )

    }
