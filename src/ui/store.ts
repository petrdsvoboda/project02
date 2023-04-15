import { configureStore } from "@reduxjs/toolkit"
import { gameReducer } from "./gameSlice"
import { nodesReducer } from "./nodesSlice"

export const store = configureStore({
	reducer: {
		nodes: nodesReducer,
		game: gameReducer,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
