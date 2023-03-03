import React from 'react'
const LoginAppBar = React.lazy(() => import ('../features/bar/LoginAppBar'))
const LoginContent = React.lazy(() => import ('../features/login/LoginContent'))

const Login = () => {    
    return (
    <>
        <LoginAppBar />
        <LoginContent />
    </>
    )
}

export default Login