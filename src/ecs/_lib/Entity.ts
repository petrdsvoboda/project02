import { ComponentContainer } from "./ComponentContainer"

/**
 * An entity is just an ID. This is used to look up its associated
 * Components.
 */
export class Entity extends ComponentContainer {
	#id!: string
	#name: string

	constructor(id: string, name?: string) {
		super()

		this.#id = id
		this.#name = `${name ?? Entity}(${id})`
	}

	toString() {
		return this.#name
	}
}
