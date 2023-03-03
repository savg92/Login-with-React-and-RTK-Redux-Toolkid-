import React from 'react'
import Card from '../features//card//Card'
import Container from '@mui/material/Container';
import { useSelector } from 'react-redux'
import LoginAppBar from '../features/bar/LoginAppBar'

const UserInfo = () => {
    const { userId, username, avatar, email, birthdate, registeredAt } = useSelector((state) => state.user.userInfo)
    return (
        <>
            <LoginAppBar />
            <Container maxWidth="sm" 
            sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', pt: 25}}
            >
                <Card 
                    userId={userId}
                    userName={username}
                    avatar={avatar}
                    email={email}
                    birthdate={birthdate}
                    registeredAt={registeredAt}
                />
            </Container>
        </>
    )
}

export default UserInfo