import { Point } from "../../types/Point"

interface Props {
	point: Point
	energy: number
}

function Node(props: Props) {
	const { point } = props
	const radius = 24
	const sep = 6
	const lines = 12

	const getLine = (total: number, current: number) => {
		const part = current / total
		const x1 = point.x + radius * Math.cos(2 * Math.PI * part)
		const x2 = point.x + (radius - sep) * Math.cos(2 * Math.PI * part)
		const y1 = point.y + radius * Math.sin(2 * Math.PI * part)
		const y2 = point.y + (radius - sep) * Math.sin(2 * Math.PI * part)

		return (
			<line
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
				cx={point.x}
				cy={point.y}
				r={radius}
			/>
			<circle
				className="stroke-2 stroke-gray-500 fill-gray-200"
				cx={point.x}
				cy={point.y}
				r={radius - sep}
			/>
			{Array.from(Array(lines).keys()).map(x => getLine(lines, x))}
			<text
				className="fill-gray-900 font-semibold text-base select-none"
				x={point.x}
				y={point.y}
				textAnchor="middle"
				alignmentBaseline="central"
			>
				{props.energy}
			</text>
		</g>
	)
}

export { Node }
