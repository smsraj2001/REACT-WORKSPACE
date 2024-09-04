import React, { useContext } from 'react'
import { UserContext } from '../App'
const Decrement = () => {

    const { counter, increment, decrement } = useContext(UserContext)
    return (
        <div>
            <button onClick={decrement} className='btn btn-danger'> Decrement </button>
        </div>

    )
}

export default Decrement