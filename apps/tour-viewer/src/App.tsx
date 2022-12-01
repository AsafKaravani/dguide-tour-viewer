import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { GlobalProviders } from '@core/GlobalProviders'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <GlobalProviders>

      </GlobalProviders>
    </div>
  )
}

export default App
