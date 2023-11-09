import { Box } from '@chakra-ui/react'
import React from 'react'
import Chiqishlar from './components/chiqishlar/chiqishlar'

import Header from './components/header/header'
import Loiha from './components/loiha/loiha'
import Main from './components/main/main'
import Navbar from './components/navbar/navabr'
import Portfolio from './components/portfolio/portfolio'

const App = () => {
  return (
    <Box position={'relative'} >
      <Box>
        <Navbar />
      </Box>
      <Box>
        <Header />
          <Box>
            <Main />
            <Box display={'flex'}>
              <Portfolio />
              <Box>
                <Chiqishlar />
                <Loiha />
              </Box>
            </Box>
           
          </Box>
      </Box>
    </Box>

  )
}

export default App