import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useTelegram } from './hooks/useTelegram'
import Header from './components/Header/Header'
import ProductList from './components/Product/ProductList'
import UserPage from './components/UserPage/UserPage'
import userIcon from './images/webb_items_test_58.png'
import Button from './components/Button/Button'

function App() {
  const {onToggleButton,WebApp} = useTelegram();

  useEffect( () =>{
     WebApp.ready();
  },[])

  

  return (
    <>
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <Header userIcon={userIcon}/>
        {/* User icons */}
        <UserPage userIcon={userIcon}/>
        <div className={'btn-menu'}>
        <Button className={'main-add-btn'}>+</Button>
        </div>
       </div> 
    </>
  )
}

export default App
