import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({
    name: "auth", initialState: {
        auth: false,
        userName: "",

    },
    reducers: {
        setName: (state, actions) => {
            state.userName = actions.payload
        },
        setAuth: (state, actions) => {
            state.auth = actions.payload
        }
    }
})
export const { setName, setAuth } = AuthSlice.actions
export default AuthSlice