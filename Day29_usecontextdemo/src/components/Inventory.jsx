import React, { useContext } from 'react'
import { UserContext } from '../App'

const Inventory = () => {
    let u = useContext(UserContext)
  return (
    <div style={{backgroundColor: "yellow"}}>
        <h1> This is Inventory Component </h1>
        <p>Value of the user component is <mark color='lightblue'>{u}</mark></p>
    </div>
  )
}

export default Inventory