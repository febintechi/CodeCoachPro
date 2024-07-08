import { useState } from 'react'
import './App.css'
import 'animate.css';

import Navbar from './components/navbar/Navbar';
import Landingpage from './components/landingpage/landingpage';
import Footer from './components/footer/footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Landingpage/>
      <Footer/>
    </>
  )
}

export default App
