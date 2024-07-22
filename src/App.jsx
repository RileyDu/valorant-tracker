// src/App.jsx
import React from 'react'
import Header from './components/Header'
import MainPage from './components/MainPage'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <MainPage />
    </>
  )
}

export default App
