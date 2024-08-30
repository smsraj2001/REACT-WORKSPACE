import React, { useContext } from 'react'
import { UserContext } from '../App'

const Vehicle = () => {
    const u = useContext(UserContext)
  return (
    <div>
        <h1>This is Vehicle Component</h1>
        <p>Value of the user component is <mark>{u}</mark></p>
    </div>
  )
}

export default Vehicle