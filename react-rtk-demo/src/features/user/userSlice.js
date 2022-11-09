import axios from "axios"
import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";


const initialState = {
    loading: false,
    users: [],
    errror: '',
}
// Generates isPending, fulfilled and rejected action types
export const fetchUsers = createAsyncThunk('user/fetchUsers', ()=>{
    return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.data)
        // console.log(response.data)
})

const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.loading = true
        })

        builder.addCase(fetchUsers.fulfilled, (state, action)=>{
            state.loading = false
            state.users = action.payload
            state.errror = ""
        })

        builder.addCase(fetchUsers.rejected, (state, action)=>{
            state.loading = false
            state.users = []
            state.errror = action.error.message
        })
    
    }
})

export default userSlice.reducer
