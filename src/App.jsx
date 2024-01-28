import React, { useEffect } from 'react'
import { useState } from 'react';
import "./Global.css"

const App = () => {
  let [array, setArray] = useState([]);
  async function fetchApi(){
    let randomNumber = Math.floor(Math.random()*(0-100)+100)
    console.log(randomNumber)
    let data = await fetch(`https://dummyjson.com/products/${randomNumber}`)
    console.log(data)
    let response = await data.json()
    console.log(response)
    setArray([...array, response])
  }
  useEffect(()=>{
    fetchApi()
  },[])
  return (
    <div className='container'>
      <div id='push'><button onClick={fetchApi} >Push</button></div>
      <table cellPadding={40} cellSpacing={25} >
        <thead>
          <th>ID</th>
          <th>Title</th>
          <th>Description</th>
        </thead>
        <tbody>
          {array.map((m)=>{
            console.log(m)
            return(<>
            <tr>
              <td>{m.id}</td>
              <td>{m.title}</td>
              <td>{m.description}</td>
            </tr>
            </>)
          })}
        </tbody>
      </table>
    </div>
  )
}

export default App

