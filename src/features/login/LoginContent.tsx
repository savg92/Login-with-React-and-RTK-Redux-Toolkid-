import React from 'react';
import {
	Box,
	Button,
	Container,
	Grid,
	TextField,
	FormControl,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userLogin } from './loginSlice';

import { USERS } from '../../data/users';

const LoginContent : React.FC = () : JSX.Element => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	// auth function, checks if user exists in database users.js
	// replace this function with your own auth function, fetching data from your database and returning true if user exists and false if not
	const auth = ({ email, password }: { email: string; password: string }) => {
		const data = USERS.find(({ email: userEmail }) => userEmail === email);
		if (data?.password === password) {
			dispatch(userLogin(data));
			return true;
		} else {
			return false;
		}
	};

	// handle submit function, gets data from form and sends it to auth function redirecting to user page if auth is true
	const handleSubmit = (event) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		const object = {
			email: data.get('email') as string,
			password: data.get('password') as string,
		};
		data.forEach(function (value, key) {
			object[key] = value;
		});
		auth(object)
			? navigate('/user')
			: alert('Usuario o contraseña incorrectos');
	};

	return (
		<>
			<Container
				maxWidth='sm'
				sx={{
					paddingtop: '2rem',
					justifyContent: 'center',
					alignItems: 'center',
					display: 'flex',
					flexDirection: 'column',
					height: '100vh',
				}}
			>
				<Box
					component='form'
					onSubmit={handleSubmit}
					// onSubmit={handleSubmit(submitForm)}
					border={1}
					borderColor='primary.main'
					borderRadius={8}
					padding={1}
				>
					<Box borderColor='primary.main'>
						<FormControl>
							<Grid
								container
								spacing={3}
								padding={5}
							>
								<Grid
									item
									xs={12}
								>
									<h2>Login</h2>
								</Grid>
								<Grid
									item
									xs={12}
								>
									<TextField
										id='email'
										name='email'
										label='E-mail'
										variant='outlined'
										fullWidth
										required
									/>
								</Grid>
								<Grid
									item
									xs={12}
								>
									<TextField
										id='password'
										name='password'
										label='Password'
										variant='outlined'
										type='password'
										fullWidth
										required
									/>
								</Grid>
								<Grid
									item
									xs={12}
								>
									<Button
										type='submit'
										variant='contained'
										color='primary'
									>
										Log in
									</Button>
								</Grid>
							</Grid>
						</FormControl>
					</Box>
				</Box>
			</Container>
		</>
	);
};

export default LoginContent;
