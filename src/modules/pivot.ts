import config from "../config"

export function setSceneOrientation(x: number, y: number, z: number) {

    const pivotScene = new Entity()

    let yRotation = 0

    switch (config.sceneOrientation) {
        case "NORTH":
            yRotation = 0
            break

        case "EAST":
            yRotation = 90
            break

        case "WEST":
            yRotation = -90
            break

        case "SOUTH":
            yRotation = 180
            break
    }

    pivotScene.addComponent(new Transform({
        position: new Vector3(x, y, z),
        rotation: Quaternion.Euler(0, yRotation, 0)
    }))
    engine.addEntity(pivotScene)

    return pivotScene;

}
