import { useState } from 'react'
import '../App.css'

export const SubmitCounter = ({i,obj}) => {

    return (
        <>
            <div className='counter-div'>
                <div className='counter-name'>counter {i + 1}</div>
                <div className='counter-box'>
                   <div style={{borderRadius : "5px", marginLeft: "30px"}} className='count'>{obj[i]}</div>
                </div>
            </div>
        </>
    )
}