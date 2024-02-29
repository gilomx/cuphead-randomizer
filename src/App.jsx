import { useState, useEffect  } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { bosses } from './data'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [settings, setSettings] = useState({
    withBosses: true
  })

  useEffect(() => {
    // Configurar un temporizador para cambiar el boss actual cada 2 segundos
    const timer = setInterval(() => {
      setCount((prevCount) => (prevCount + 1) % bosses.length); // Esto asegura que el índice vuelva a 0 después del último boss
    }, 50); // Cambia este valor para hacer la transición más rápida o más lenta

    // Limpiar el temporizador cuando el componente se desmonte o antes de la próxima ejecución de useEffect
    return () => clearInterval(timer);
  }, []); // Pasar un arreglo vacío asegura que useEffect se ejecute solo una vez al montar el componente


  return (
    <>
      <div className='randomizer'>
        <div className='boss'>
          <h1>Cuphead Randomizer</h1>
          {/* <h2>Jefe</h2> */}
          <img src={bosses[count].img} alt={bosses[count].name} />
          <h2>{bosses[count].character_name}</h2>
          <h3>{bosses[count].name}</h3>
        </div>
      </div>
    </>
  )
}

export default App
