import type { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"
import { Point } from "../types/Point"
import type { RootState } from "./store"

export interface INode {
	id: string
	position: Point
	energy: number
	player?: string
}

// Define a type for the slice state
interface NodesState {
	data: Record<string, INode>
}

// Define the initial state using that type
const initialState: NodesState = {
	data: {
		"1": { id: "1", position: { x: 100, y: 100 }, energy: 16, player: "x" },
		"2": { id: "2", position: { x: 200, y: 100 }, energy: 4 },
		"3": { id: "3", position: { x: 100, y: 200 }, energy: 1 },
		"4": { id: "4", position: { x: 300, y: 200 }, energy: 1 },
		"5": { id: "5", position: { x: 300, y: 300 }, energy: 12, player: "y" },
		"6": { id: "6", position: { x: 200, y: 300 }, energy: 2 },
	},
}

export const nodesSlice = createSlice({
	name: "nodes",
	// `createSlice` will infer the state type from the `initialState` argument
	initialState,
	reducers: {
		// Use the PayloadAction type to declare the contents of `action.payload`
		addNode: (state, action: PayloadAction<INode>) => {
			state.data[action.payload.id] = action.payload
		},
		deleteNode: (state, action: PayloadAction<string>) => {
			delete state.data[action.payload]
		},
		updateNodeEnergy: (
			state,
			action: PayloadAction<{ id: string; value: number }>
		) => {
			state.data[action.payload.id].energy += action.payload.value
		},
		tick: state => {
			for (const id in state.data) {
				state.data[id].energy += 1
			}
		},
	},
})

export const { addNode, deleteNode, updateNodeEnergy, tick } =
	nodesSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectNodes = (state: RootState) => state.nodes.data

export const nodesReducer = nodesSlice.reducer
