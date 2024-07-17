import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hnav from './Hnav'
import { Content_card } from './Content_card'
import Footer from './Footer'



function App() {
  const [count, setCount] = useState(0)
 

  return (
    <>
    <Hnav/>
    
    <Content_card/>
    
    
    </>
    
    
   
  )
}

export default App
