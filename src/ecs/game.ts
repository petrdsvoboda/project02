import { Energy } from "./components/Energy"
import { Position } from "./components/Position"
import { ECS } from "./_lib/ECS"

const test = () => {
	const ecs = new ECS()

	ecs.registerEntity(e => {
		e.addComponent(new Position())
		e.addComponent(new Energy())
	}, "Node")
}
