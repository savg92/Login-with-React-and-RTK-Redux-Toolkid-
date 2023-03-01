import { createAsyncThunk } from "@reduxjs/toolkit"
// import { USERS } from "../../data/users"
import axios from 'axios';



// create async thunk for login
const userLogin = createAsyncThunk('user/login', async ({ email, password }, { rejectWithValue }) => {
    try {
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      
      const { data } = await axios.post(
        '../../data/users',
        { email, password },
        config
      )
      // return data
      return data

    }
    catch (error) {
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  }
)


export { userLogin }
  