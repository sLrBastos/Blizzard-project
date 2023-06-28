import { configureStore } from "@reduxjs/toolkit";
import GameSlice from "../reducers/GameSlice";


export const store = configureStore({
    reducer:{
        Oauth: GameSlice
    }
})
