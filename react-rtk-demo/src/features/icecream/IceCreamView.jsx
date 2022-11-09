import React from 'react'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ordered, restocked } from './icecreamSlice'

export function IceCreamView() 
{
  const [value, setValue] = useState(1)
  const dispatch = useDispatch()
  const numOficecreams = useSelector((state)=>state.icecream.numOfIcecreams)

  return (
    <div>
        <h2>Number of IceCreams - {numOficecreams}</h2>
        <button onClick={()=>dispatch(ordered())}>Order Ice Cream</button>
        <input type="number" 
        value={value} onChange={(e)=> setValue(parseInt(e.target.value))}/>
        <button onClick={()=>dispatch(restocked(value))}>Restock Ice Cream</button>
    </div>
  )
}




