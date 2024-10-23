import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import CreateProduct from './components/CreateProduct'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h2 className='bg-gray-500'>SHOP</h2>
      <CreateProduct/>
    </>
  )
}

export default App
