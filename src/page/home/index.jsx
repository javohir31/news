import React, { useContext, useMemo, useReducer } from 'react'
import { ThemeContext } from '../../contextx/useTheme';
import { LanguageContext } from '../../contextx/useLanguage';
import glogbalReducer from '../../store/slice';
import { DECREMENT, INCREMENT, RESET } from '../../store/type';
import axios from 'axios';
import { data } from 'react-router-dom';
import { useEffect } from 'react';


function Home() {
  const {them, changeThemHandler } = useContext(ThemeContext)
  const {language, changeLanguageHandler} = useContext(LanguageContext)
  console.log(them);
  console.log(language)

  const text = useMemo(() => {
    if (language == "uz") {
      return "Salom"
    } else {
      return "hello"
    }
  }, [language])

  const [state, dispatch] = useReducer(glogbalReducer, {count : 0})

  function increment() {
    dispatch({type: INCREMENT, payload: "salom bolajonlar"})
  }
  function decrement() {
    dispatch({type: DECREMENT, payload: "salom bolajonlar"})
  }

  async function getData() {
    const dataPlace = await axios.get("'https://jsonplaceholder.typicode.com/todos/1'")

    if (data.status !== 200) {
      console.log("Error");
      
    }
    
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <h2 className={`${them == 'light' ?  "text-light" : "text-dark"}`}>Home</h2>
      <button onClick={changeThemHandler}>Them</button>
      <button onClick={changeLanguageHandler}>til</button>
      {/* <h2>{language == "uz" ? "Salom" : "Hii"}</h2>
      bingam bir varianit */}
      <h2>{text}</h2>

      <div>
        {/* <button onClick={() => dispatch({type : INCREMENT})}>+</button> */}
        <button onClick={increment}>+</button>
        <span>{state.count}</span>
        <button onClick={decrement}>-</button>
        {/* <button onClick={() => dispatch({type : DECREMENT})}>-</button> */}
        <button onClick={() => dispatch({type : RESET})}>reset</button>
      </div>
    </>
  )
}

export default Home