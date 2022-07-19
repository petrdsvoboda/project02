import clsx from "clsx"
import { Point } from "../../types/Point"

interface Props {
	a: Point
	b: Point
}

function Path(props: Props) {
	const { a, b } = props

	return (
		<g className="">
			<line
				className={clsx("stroke-[4] stroke-gray-300", {})}
				x1={a.x}
				y1={a.y}
				x2={b.x}
				y2={b.y}
			/>
		</g>
	)
}

export { Path }
