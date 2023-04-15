import { useEffect } from "react"
import "./App.css"
import { selectGameState, selectTickSpeed, setGameState } from "./gameSlice"
import { useAppDispatch, useAppSelector } from "./hooks"
import { tick } from "./nodesSlice"
import { Screen } from "./Screen"

function App() {
	const gameState = useAppSelector(selectGameState)
	const tickSpeed = useAppSelector(selectTickSpeed)
	const dispatch = useAppDispatch()

	useEffect(() => {
		if (gameState !== "playing") return

		const handler = setInterval(() => {
			dispatch(tick())
		}, tickSpeed)

		return () => {
			clearInterval(handler)
		}
	}, [gameState, tickSpeed])

	return (
		<div className="App">
			<h1>Project 02</h1>
			<div className="card">
				<button onClick={() => dispatch(setGameState("playing"))}>
					Play
				</button>
			</div>
			{gameState === "playing" && <Screen />}
		</div>
	)
}

export default App
