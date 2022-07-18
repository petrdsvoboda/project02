import { System } from "../_lib/System"

export class EnergyGeneration extends System {
	constructor() {
		super()
	}

	componentsRequired: Set<Function> = new Set()

	update(): void {}
}
