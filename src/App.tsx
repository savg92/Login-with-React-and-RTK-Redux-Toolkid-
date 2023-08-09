import React from 'react'
import { useEffect } from 'react'
import { USERS } from './data/users'
import  {AppRoutes}  from './routes/AppRoutes'

const App : React.FC = () : JSX.Element => {
  useEffect(() => {
    if (USERS.length > 0) {
      console.log(USERS)
    }
  }, [])
  // console.log(USERS[0])
  return (
    <AppRoutes />
  )
}

export default App
