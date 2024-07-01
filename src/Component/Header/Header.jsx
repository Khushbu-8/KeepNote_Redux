import React from 'react'
import { SiGooglekeep } from "react-icons/si";

const Header = () => {
  return (
    <nav className="navbar navbar-light bg-warning py-2 position-sticky top-0">
    <div className="container">
       <h1 className='text-white fs-3'><span className="navbar-brand text-white fs-3 mb-5"><SiGooglekeep /></span>
         Google Keep</h1>
    </div>
</nav>
  )
}

export default Header
