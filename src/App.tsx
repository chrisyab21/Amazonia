import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <section className="bg-AzulOscuro">
    <div className="h-[800px] flex flex-row justify-center items-center px-4 gap-4">
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"> La amazonia Boliviana alberga mas de 200 especias de fauna y flore animal que deben ser preservadas</p>
      <a href="#">
        <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">Mision</h5>
      </a>
    </div>
  </section>
  )
}

export default App
