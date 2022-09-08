import React from 'react'
import './styles/LogOut.css'


const LogOut = ({isLogged, setIsLooged}) => {

  const handleClick = () => {
    setIsLooged()
    localStorage.removeItem('token')
  }
    console.log(isLogged)
  return (
    <article className='form-logout'>
      <i className='form-logout__icon bx bxs-user-check'></i>
      <h2 className='form-logout__username'>
       Logged in
      </h2>
      <button onClick={handleClick} className='form-logout__btn'>Logout</button>
    </article>
  )
}

export default LogOut