import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/NavBar/Navbar'
import PriceOptions from './Components/PriceOptions/PriceOptions'
import LineChart from './Components/Charts/LineChart/BarChart/LineChart'
import Phone from './Components/Phone Api/Phone'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
      <Phone></Phone>
    </>
  )
}

export default App
