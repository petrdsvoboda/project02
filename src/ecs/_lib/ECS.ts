import { v4 as uuid } from "uuid"
import { Entity } from "./Entity"
import { System } from "./System"

/**
 * The ECS is the main driver; it's the backbone of the engine that
 * coordinates Entities, Components, and Systems. You could have a single
 * one for your game, or make a different one for every level, or have
 * multiple for different purposes.
 */
export class ECS {
	// Main state
	#entities = new Map<string, Entity>()
	#entitiesToDestroy = new Set<string>()

	#systems = new Map<number, System>()

	// API: Entities

	registerEntity(
		builder: (entity: Entity) => Entity | void,
		name?: string
	): ECS {
		const id = uuid()

		const entity = new Entity(id, name)
		builder(entity)

		this.#entities.set(id, entity)
		return this
	}

	// API: Game loop

	/**
	 * This is ordinarily called once per tick (e.g., every frame). It
	 * updates all Systems, then destroys any Entities that were marked
	 * for removal.
	 */
	update(): void {
		// Update all systems. (Later, we'll add a way to specify the
		// update order.)
		for (const system of this.#systems.values()) {
			system.update()
		}
	}
}
