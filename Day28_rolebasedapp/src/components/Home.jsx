import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

  return (
    <div>
        <h1>Home Page</h1>
        <Link to = "/aboutus" >About Us</Link>
        <Link to = "contactus" >Contact Us</Link>
        <Link to = "/admin" >Admin Page</Link>
        <Link to = "/user" >User Page</Link>
    </div>
  )
}

export default Home