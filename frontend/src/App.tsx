import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { getMilks, milks } from './Services/api'
import { MilkGallery } from './Components/MilkGallery'

export const App = () => {
  const [data, setData] = useState<milks[]>([]);

  const getData = async () => {
    const getAllMilks = await getMilks();
    setData(getAllMilks);
  }

  useEffect(() => {
    getData();
  }, []); 
  // console.log(data)

  if(data.length == 0) {
    return
    (
      <h1>loading...</h1>
    )
  } 
  else {
    return (
      <>
        <MilkGallery data={data}/>
      </>
    )
  }
} 

export default App
