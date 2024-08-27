import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <h1> Home Component </h1>

        <Link to = "aboutus">About Us</Link>
        <br />
        <Link to = "contactus">Contact Us</Link>

    </div>
  )
}

export default Home