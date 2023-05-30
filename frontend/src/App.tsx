import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { getMilks, milks } from './Services/api'
import { MilkGallery } from './Components/MilkGallery'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from './Components/Header'
import { MilkDetails } from './Components/MilkDetails'

export const App = () => {
  const [data, setData] = useState<milks[]>([]);

  const getData = async () => {
    const getAllMilks = await getMilks();
    setData(getAllMilks);
  }

  useEffect(() => {
    getData();
  }, []); 


  if(data.length == 0) {
    return
    (
      <h1>loading...</h1>
    )
  } 
  else {
    return (
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<MilkGallery data={data}/>}/>
          <Route path="/milk/:id" element={<MilkDetails data={data}/>} />
        </Routes>   
      </Router>
    )
  }
} 

export default App
