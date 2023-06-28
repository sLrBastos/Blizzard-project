import { createSlice } from "@reduxjs/toolkit";

export const GameSlice = createSlice({

    name:"accessToken",
    initialState: {
        accessToken:"",
        mounts: {}
    },

    reducers: {
        getAccessToken: {
            reducer(state, action) {
                return {...state, accessToken: action.payload}
            }
        },

        getMounts: {
            reducer(state, action) {
                return {...state, mounts: [state.mounts, action.payload]}
            }
        }
    }

})


export const {getAccessToken, getMounts} = GameSlice.actions

export default GameSlice.reducer