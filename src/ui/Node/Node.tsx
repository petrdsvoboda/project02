import { selectPlayer } from "../gameSlice"
import { useAppSelector } from "../hooks"
import { INode } from "../nodesSlice"

interface Props {
	data: INode
}

function Node(props: Props) {
	const { data } = props
	const { position, energy, player: playerId } = data
	const player = useAppSelector(selectPlayer(playerId))
	const radius = 24
	const sep = 6
	const lines = 12

	const getLine = (total: number, current: number) => {
		const part = current / total
		const x1 = position.x + radius * Math.cos(2 * Math.PI * part)
		const x2 = position.x + (radius - sep) * Math.cos(2 * Math.PI * part)
		const y1 = position.y + radius * Math.sin(2 * Math.PI * part)
		const y2 = position.y + (radius - sep) * Math.sin(2 * Math.PI * part)

		return (
			<line
				key={current}
				className="stroke-2 stroke-gray-500"
				x1={x1}
				y1={y1}
				x2={x2}
				y2={y2}
			/>
		)
	}

	return (
		<g className="cursor-pointer drop-shadow hover:drop-shadow-lg">
			<circle
				className="stroke-2 stroke-gray-500 fill-white"
				cx={position.x}
				cy={position.y}
				r={radius}
			/>
			<circle
				className="stroke-2 stroke-gray-500"
				fill={player?.color ?? "#e5e7eb"}
				cx={position.x}
				cy={position.y}
				r={radius - sep}
			/>
			{Array.from(Array(lines).keys()).map(x => getLine(lines, x))}
			<text
				className="fill-gray-900 font-semibold text-base select-none"
				x={position.x}
				y={position.y}
				textAnchor="middle"
				alignmentBaseline="central"
			>
				{energy}
			</text>
		</g>
	)
}

export { Node }
