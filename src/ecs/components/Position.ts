import { Point } from "../../types/Point"
import { Component } from "../_lib/Component"

export class Position extends Component {
	#point: Point

	constructor() {
		super()
		this.#point = { x: 0, y: 0 }
	}
}
