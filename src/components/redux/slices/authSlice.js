import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import firebase from "firebase";


export const getUser = createAsyncThunk(
    "authSlice/getUser",
    async()=>{
        const googleProvider = new firebase.auth.GoogleAuthProvider();
		const google = await firebase.auth().signInWithPopup(googleProvider);
		return google.user.displayName
	    
    }
)

const authSlice = createSlice({
    name:"authSlice",
    initialState:{
        username: null
    },
    extraReducers:{
        [getUser.fulfilled]:(state,action)=>{
            state.username = action.payload
        }
    }
})

export default authSlice.reducer