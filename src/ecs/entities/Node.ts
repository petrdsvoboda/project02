import { Energy } from "../components/Energy"
import { Position } from "../components/Position"
import { Entity } from "../_lib/Entity"

export class Node extends Entity {
	#position: Position
	#energy: Energy
}
