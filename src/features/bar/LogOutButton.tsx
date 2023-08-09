import React from 'react';
import { useDispatch } from 'react-redux';
import { userLogout } from '../login/loginSlice';

import LogoutIcon from '@mui/icons-material/Logout';
import { IconButton, Typography } from '@mui/material';

const LogOutButton : React.FC = () : JSX.Element => {
	const dispatch = useDispatch();

	return (
		<>
			<IconButton
				size='large'
				edge='end'
				color='inherit'
				aria-label='menu'
				sx={{ mt: 1, mr: 2 }}
				title='Logout'
				onClick={() => {
					dispatch(userLogout());
				}}
			>
				<Typography>
					<LogoutIcon />
				</Typography>
			</IconButton>
		</>
	);
};

export default LogOutButton;
