import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { GlobalProviders } from '@core/GlobalProviders'
import { Button, Typography } from '@mui/material'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <GlobalProviders>
        <Button variant='contained' color='error'> asd</Button>
        <Button variant='contained' > asd</Button>
        <Typography variant='body1'>
          asd
        </Typography>
        <Typography variant='caption'>
          asd
        </Typography>
      </GlobalProviders>
    </div >
  )
}

export default App
