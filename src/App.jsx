import { useState } from 'react'
import './App.css'
import { Counter } from './Components/Counter'
import { SubmitCounter } from './Components/SubmitCounter'

function App() {
  const [counter, setCounter] = useState([1])
  const [state, setState] = useState(false)
  const [obj, setObj] = useState({})
  
  const addCounter = () => {
    setState(false)
    setCounter([ ...counter, counter.length+1])
  }

  const handleSubmit = () => {
    setState(true)
  }
  console.log(obj)
  return (
    <div className="App">
      {counter.map((e,i) => {
        return (
            <Counter state={state} i={i} obj={obj} setObj={setObj}></Counter>
        )
      })}
      <div className='buttons'>
      <button onClick={addCounter}>add</button>
        <hr style={{border : "1px solid blue" , width : "100%"}}/>
      <button onClick={handleSubmit}>submit</button>
      </div>
      {counter.map((e,i) => {
        return (
          <div >
            {state ? <SubmitCounter state={state} i={i} obj={obj}></SubmitCounter> : null}
          </div>
        )
      })}
    </div>
  )
}

export default App
