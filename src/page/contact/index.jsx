import React, {useReducer} from 'react'
import glogbalReducer from '../../store/slice'
import { DECREMENT, INCREMENT, RESET } from '../../store/type'


const Contact = () => {
  const [state, dispatch] = useReducer(glogbalReducer, {count: 0})
  return (
    <>
      <h2>Contact</h2>

      <div>
        <button onClick={() => dispatch({type : INCREMENT})}>+</button>
        <span>{state.count}</span>
        <button onClick={() => dispatch({type : DECREMENT})}>-</button>
        <button onClick={() => dispatch({type : RESET})}>reset</button>
      </div>
    </>
  )
}

export default Contact