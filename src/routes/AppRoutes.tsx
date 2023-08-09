import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { Routes, Route, Navigate } from 'react-router-dom';

import PublicRoutes from './PublicRoutes';
import ProtectedRoutes from './ProtectedRoutes';
import UserInfo from '../views/UserInfo';
import Login from '../views/Login';
import LoginAppBar from '../features/bar/LoginAppBar';

export const AppRoutes: React.FC = (): JSX.Element => {
	const state = useSelector((state: RootState) => state.user);

	// useEffect, it will be executed when the state changes, if the user is logged in, it will save the state in the local storage, if not, it will remove the state from the local storage
	useEffect(() => {
		state.isLogged
			? localStorage.setItem('authenticated', JSON.stringify(state))
			: localStorage.removeItem('authenticated');
	}, [state]);

	// returns the general routes of the app, if the user is logged in, it will redirect to the user page, if not, it will redirect to the login page
	return (
		<LoginAppBar>
			<Routes>
				<Route
					path='*'
					element={<Navigate to='/login' />}
				/>
				<Route
					path='/login'
					element={
						<PublicRoutes>
							<Login />
						</PublicRoutes>
					}
				/>
				<Route
					path='/user'
					element={
						<ProtectedRoutes>
							<UserInfo />
						</ProtectedRoutes>
					}
				/>
			</Routes>
		</LoginAppBar>
	);
};

export default AppRoutes;
