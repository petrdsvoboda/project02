import { Component } from "../_lib/Component"

export class Energy extends Component {
	#value: number
	#rate: number

	constructor() {
		super()
		this.#value = 0
		this.#rate = 1
	}

	generate() {
		this.#value += this.#rate
	}
}
