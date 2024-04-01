import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useTelegram } from './hooks/useTelegram'
import Header from './components/Header/Header'
import ProductList from './components/Product/ProductList'


function App() {
  const {onToggleButton,WebApp} = useTelegram();

  useEffect( () =>{
     WebApp.ready();
  },[])

  

  return (
    <>
      <div>
        <Header/>
        <ProductList/>
       </div> 
    </>
  )
}

export default App
