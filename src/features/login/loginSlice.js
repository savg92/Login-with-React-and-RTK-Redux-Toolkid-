import { createSlice } from '@reduxjs/toolkit'

//check if user is logged in from localstorage and set initial state
const initialState = () => {
  return localStorage.getItem('authenticated')
    ? JSON.parse(localStorage.getItem('authenticated'))
    : { isLogged: false, userInfo: null }
}

// loginSlice reducer, handles login and logout actions
const loginSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // login user function
    userLogin: (state, action) => {
      state.userInfo = action.payload
      state.isLogged = true
    },
    
    //logout user function
    userLogout: (state, action) => {
      state.userInfo = null
      state.isLogged = false
    },
  },
})

export const { userLogin, userLogout } = loginSlice.actions

export default loginSlice.reducer