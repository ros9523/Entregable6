import React, { useEffect, useState } from 'react'
import LogOut from '../login/LogOut'
import FormLogin from '../login/FormLogin'



const Login = () => {

  const [isLogged, setIsLooged] = useState()

  useEffect(() => {
    setIsLooged(localStorage.getItem('token'))
  }, [])

  return (
    <main className='login'>
      {
        isLogged ?
          <LogOut setIsLooged={setIsLooged} isLogged={isLogged} />
        :
          <FormLogin setIsLooged={setIsLooged} />
      }
    </main>
  )
}

export default Login