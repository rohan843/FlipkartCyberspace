export function addSculpture(pivotScene: Entity, config: any) {
    const sculpture = new Entity()
    sculpture.addComponent(new GLTFShape(config.sculpture.modelSrc))
    sculpture.addComponent(new Transform({
        position: config.sculpture.position
    }))
    sculpture.setParent(pivotScene)
}