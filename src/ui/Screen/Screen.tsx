import { Node } from "../Node"
import { Path } from "../Path"

const p1 = { x: 100, y: 100 }
const p2 = { x: 200, y: 100 }
const p3 = { x: 100, y: 200 }

function Screen() {
	return (
		<svg className="w-[800px] h-[800px] bg-gray-100 border border-gray-200">
			<Path a={p1} b={p2} />
			<Path a={p1} b={p3} />
			<Node point={p1} energy={12} />
			<Node point={p2} energy={4} />
			<Node point={p3} energy={24} />
		</svg>
	)
}

export { Screen }
