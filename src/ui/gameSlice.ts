import type { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"
import type { RootState } from "./store"

type GameState = "not_initialized" | "playing" | "stopped"

interface GameConfig {
	tickSpeed: number
}

interface PlayerConfig {
	id: string
	color: string
}

interface NodesState {
	state: GameState
	config: GameConfig
	players: Record<string, PlayerConfig>
}

// Define the initial state using that type
const initialState: NodesState = {
	state: "not_initialized",
	config: { tickSpeed: 1000 },
	players: {
		x: { id: "x", color: "#fca5a5" },
		y: { id: "y", color: "#93c5fd" },
	},
}

export const gameSlice = createSlice({
	name: "nodes",
	initialState,
	reducers: {
		setGameState: (state, action: PayloadAction<GameState>) => {
			state.state = action.payload
		},
	},
})

export const { setGameState } = gameSlice.actions

export const selectGameState = (state: RootState) => state.game.state
export const selectTickSpeed = (state: RootState) => state.game.config.tickSpeed
export const selectPlayer = (id?: string) => (state: RootState) =>
	id ? state.game.players[id] : undefined

export const gameReducer = gameSlice.reducer
