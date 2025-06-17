import { useState } from 'react'
import Navbar from './component/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='w-full bg-zinc-900 text-white overflow-hidden'>
    <Navbar/>

   </div>
  )
}

export default App
