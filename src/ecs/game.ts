import { ECS } from "./_lib/ECS"

const test = () => {
	let ecs = new ECS()
	let entity = ecs.addEntity()
	ecs.removeEntity(entity) // Removed after next update()
	// Entity still here now.
	ecs.update()
	// Entity gone.
}
