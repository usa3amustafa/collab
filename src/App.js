import React, { useState } from 'react'
import Home from './components/Home'
import Wallets from './components/Wallets'
import LoginForm from './components/LoginForm'
import './App.css'

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleClick = function () {
    setIsOpen(true)
    setIsLoading(true)
  }
  // setIsOpen(false)
  return (
    <div>
      <div className='container'>
        <Home />
        <div className='' onClick={handleClick}>
          <Wallets />
        </div>
        <LoginForm
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
        />
      </div>
    </div>
  )
}

export default App
