export function addBuilding(pivotScene: Entity) {
    const building = new Entity()
    building.addComponent(new GLTFShape("models/museum/building.glb"))
    building.setParent(pivotScene)
}