import { useEffect } from 'react'
import { useState } from 'react'
import '../App.css'

export const Counter = ({i,obj,setObj}) => {

    const [count, setCount] = useState(1)

    useEffect(() => {
        setObj({ ...obj, [i] : count})
    },[])

    useEffect(() => {
        setObj({...obj, [i] : count})
    },[count])

    const Increment = () => {
        setCount(count+1)
    }
    
    const Decrement = () => {
        setCount(count-1)
    }
    
    return (
        <>
            <div className='counter-div'>
                <div className='counter-name'>counter {i+1}</div>
                <div className='counter-box'>
                    <button onClick={Decrement}>-</button>
                      <div className='count'>{count}</div>
                    <button onClick={Increment}>+</button>
                 </div>
            </div>
        </>
    )
}