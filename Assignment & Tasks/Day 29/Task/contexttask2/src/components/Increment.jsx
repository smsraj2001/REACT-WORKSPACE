import React, { useContext } from 'react'
import { UserContext } from '../App'
const Increment = () => {

    const { counter, increment, decrement } = useContext(UserContext)

    return (
        <div>
            <button onClick={increment} className='btn btn-success'> Increment </button>
        </div>
    )
}

export default Increment