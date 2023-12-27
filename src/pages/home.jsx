import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {

  return (
    <>
    <div>
      <h1>HOME PAGE</h1>
      <button><Link to="/">LOG-IN</Link></button>
      </div>
    </>
  )
}

export default Home