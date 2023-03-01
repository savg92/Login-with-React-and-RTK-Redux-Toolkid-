import React from 'react'
import LoginAppBar from '../features/bar/LoginAppBar'
import Card from '../features//card//Card'
import Container from '@mui/material/Container';
// import {USERS} from '..//data//users'
import { useSelector } from 'react-redux'

const UserInfo = () => {
    const user = useSelector((state) => state.user.userInfo)
    return (
        <>
            <LoginAppBar />
            <Container maxWidth="sm" 
            sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', pt: 25}}
            >
                <Card 
                    userId={user.userId}
                    userName={user.username}
                    avatar={user.avatar}
                    email={user.email}
                    birthdate={user.birthdate}
                    registeredAt={user.registeredAt}
                />
            </Container>
        </>
    )
}

export default UserInfo