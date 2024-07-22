// src/App.jsx
import React from 'react'
import Header from './components/Header'
import MainPage from './components/MainPage'
import { useState } from 'react'
import PlayerStats from './components/PlayerStats'
import { Box } from '@chakra-ui/react'

function App() {

  return (
    <>
      <Header />
      <Box>
      <PlayerStats />
      </Box>
    </>
  )
}

export default App
