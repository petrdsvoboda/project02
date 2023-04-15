import { useAppSelector } from "../hooks"
import { Node } from "../Node"
import { selectNodes } from "../nodesSlice"
import { Path } from "../Path"

const p1 = { x: 100, y: 100 }
const p2 = { x: 200, y: 100 }
const p3 = { x: 100, y: 200 }
const p4 = { x: 300, y: 200 }
const p5 = { x: 300, y: 300 }
const p6 = { x: 200, y: 300 }

function Screen() {
	const nodes = useAppSelector(selectNodes)

	return (
		<svg className="w-[800px] h-[800px] bg-gray-100 border border-gray-200">
			<Path a={p1} b={p2} />
			<Path a={p1} b={p3} />
			<Path a={p2} b={p3} />
			<Path a={p4} b={p5} />
			<Path a={p4} b={p6} />
			<Path a={p5} b={p6} />
			<Path a={p2} b={p4} />
			<Path a={p3} b={p6} />
			{Object.values(nodes).map(node => (
				<Node key={node.id} data={node} />
			))}
		</svg>
	)
}

export { Screen }
