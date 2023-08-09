import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';
import { IUser } from '../../data/users';


//check if user is logged in from localstorage and set initial state
const initialState = () => {
  const authenticated = localStorage.getItem('authenticated') || JSON.stringify({ isLogged: false, userInfo: null });
  return JSON.parse(authenticated);
}

// loginSlice reducer, handles login and logout actions
const loginSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		// login user function
		userLogin: (state, action: PayloadAction<IUser>) => {
			state.userInfo = action.payload;
			state.isLogged = true;
		},

		//logout user function
		userLogout: (state) => {
			state.userInfo = null;
			state.isLogged = false;
		},
	},
});

export const { userLogin, userLogout } = loginSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.user.isLogged

export default loginSlice.reducer