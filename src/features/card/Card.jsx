import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';


export default function RecipeReviewCard({userId = 'No ID', userName = 'No Name', avatar, email = 'No Email', birthdate = 'No Birthdate', registeredAt = 'No Registered'}) {
  return (
    <Card sx={{ maxWidth: 445 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500], width: 56, height: 56  }} aria-label="recipe">
            <img src={avatar ? avatar : 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y'} alt="Avatar" />
          </Avatar>
        }
        title={userName}
        subheader={email}
      />

      <CardContent>
        <Typography variant="body2" color="text.secondary">
            Id de usuario: {userId}
            <br />
            Fecha de nacimiento: {birthdate}
            <br />
            Fecha de registro: {registeredAt}
        </Typography>
      </CardContent>
    </Card>
  );
}