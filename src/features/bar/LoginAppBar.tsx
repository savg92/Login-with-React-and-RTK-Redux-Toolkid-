import React from 'react';
// import { useAppSelector, useAppDispatch } from 'app/hooks';
import type { RootState } from '../../app/store';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import AdbIcon from '@mui/icons-material/Adb';
import { Box } from '@mui/system';
import { useSelector } from 'react-redux';
import LogOutButton from './LogOutButton';

interface LoginAppBarProps {
	children: React.ReactNode;
}

const LoginAppBar : React.FC<LoginAppBarProps> = ({ children }: LoginAppBarProps) : JSX.Element => {
	const isLogged = useSelector((state: RootState) => state.user.isLogged);
	return (
		<>
			<AppBar
				position='static'
				sx={{
					boxShadow: 0,
					position: 'fixed',
					mt: 0,
					p: 0,
					zIndex: 2,
				}}
			>
				<Box
					maxWidth='xl'
					sx={{ display: 'flex', justifyContent: 'space-between' }}
				>
					<Container maxWidth='xl'>
						<Toolbar disableGutters>
							{/* //* destop */}
							<AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
							<Typography
								variant='h6'
								noWrap
								component='a'
								href='/'
								sx={{
									mr: 2,
									display: { xs: 'none', md: 'flex' },
									fontFamily: 'monospace',
									fontWeight: 700,
									letterSpacing: '.3rem',
									color: 'inherit',
									textDecoration: 'none',
								}}
							>
								LOGO
							</Typography>

							{/* //* mobile menu */}
							<AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
							<Typography
								variant='h5'
								noWrap
								component='a'
								href=''
								sx={{
									mr: 2,
									display: { xs: 'flex', md: 'none' },
									flexGrow: 1,
									fontFamily: 'monospace',
									fontWeight: 700,
									letterSpacing: '.3rem',
									color: 'inherit',
									textDecoration: 'none',
								}}
							>
								LOGO
							</Typography>
						</Toolbar>
					</Container>
					<Container
						maxWidth='xs'
						sx={{ display: 'flex', justifyContent: 'flex-end' }}
					>
						{
							// condtional rendering, only when user has logged in
							isLogged ? <LogOutButton /> : null
						}
					</Container>
				</Box>
			</AppBar>
			{children}
		</>
	);
};

export default LoginAppBar;
