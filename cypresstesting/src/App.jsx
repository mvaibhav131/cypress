import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [count, setCount] = useState(0)
  const [dbvalue,setValue]=useState(0);

  const getData= () => {
    axios.get("http://localhost:8080/counter").then(({data})=> {
      setValue(data.value)
    });
  };

  useEffect(()=>{
    getData()
  },[])

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button 
        id='plus'
        onClick={() => setCount((count) => count + 1)}>
         +
        </button>
          <h3 className='counterHeader'>count is {count}</h3>
          <button 
          id='minus'
          onClick={()=> setCount((count)=> count-1)}>
          -
        </button>

  {/* function added */}
        <p>
         <button 
         className='dataValue'
         type='button'
         onClick={()=> {
          axios.post("http://localhost:8080/counter",{
            value:dbvalue+1,
          }).then(getData)
         }}
         >set db.json value : {dbvalue}</button>
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
