import React, { useContext } from 'react'
import { UserContext } from '../App'
const Show = () => {
    const { counter, increment, decrement } = useContext(UserContext)
    return (
        <div>{counter}</div>
    )
}

export default Show