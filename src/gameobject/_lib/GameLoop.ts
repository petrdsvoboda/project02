import { GameObject } from "./GameObject"

export class GameLoop {
	#running: boolean = false
	#objects: Array<GameObject> = new Array<GameObject>()

	start() {
		this.#running = true

		for (const go of this.#objects) {
			go.initialize()
		}

		this.loop()
	}

	loop() {
		while (this.#running) {
			for (const go of this.#objects) {
				go.update()
			}
		}
	}
}
