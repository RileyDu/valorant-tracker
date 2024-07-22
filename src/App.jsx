// src/App.jsx
import React from 'react'
import Header from './components/Header'
import MainPage from './components/MainPage'
import { useState } from 'react'
import PlayerStats from './components/PlayerStats'
import { Box, Text } from '@chakra-ui/react'

function App() {

  return (
    <>
      <Header />
      <Box padding={'2em'}>
        <Text fontWeight={'bolder'}>Search Match History by Riot ID</Text>
      <PlayerStats />
      </Box>
    </>
  )
}

export default App
