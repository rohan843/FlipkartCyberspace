import * as utils from '@dcl/ecs-scene-utils'

export function addDoors() {
    const x: number = 10
    const y: number = 3

    // Define fixed walls
    const wall1 = new Entity()
    wall1.addComponent(
        new Transform({
            position: new Vector3(5.75 - x, 1, 127.5),
            scale: new Vector3(1.5, 2 * y, 0.1)
        })
    )
    wall1.addComponent(new BoxShape())
    engine.addEntity(wall1)

    const wall2 = new Entity()
    wall2.addComponent(
        new Transform({
            position: new Vector3(2.25 - x, 1, 127.5),
            scale: new Vector3(1.5, 2 * y, 0.1)
        })
    )
    wall2.addComponent(new BoxShape())
    engine.addEntity(wall2)

    // Add the two sides to the door
    const doorL = new Entity()
    doorL.addComponent(
        new Transform({
            position: new Vector3(0.5, 0, 0),
            scale: new Vector3(1.1, 2, 0.05)
        })
    )
    doorL.addComponent(new BoxShape())
    engine.addEntity(doorL)

    const doorR = new Entity()
    doorR.addComponent(
        new Transform({
            position: new Vector3(-0.5, 0, 0),
            scale: new Vector3(1.1, 2, 0.05)
        })
    )
    doorR.addComponent(new BoxShape())
    engine.addEntity(doorR)

    // Define a material to color the door sides red
    const doorMaterial = new Material()
    doorMaterial.albedoColor = Color3.Red()
    doorMaterial.metallic = 0.9
    doorMaterial.roughness = 0.1
    doorMaterial.transparencyMode = 2

    // Assign the material to both door sides
    doorL.addComponent(doorMaterial)
    doorR.addComponent(doorMaterial)

    // Define open and closed positions for both door sides
    const doorLClosed = new Vector3(0.5, 0, 0)
    const doorLOpen = new Vector3(1.25, 0, 0)
    const doorRClosed = new Vector3(-0.5, 0, 0)
    const doorROpen = new Vector3(-1.25, 0, 0)

    // This parent entity holds the state for both door sides
    const doorParent = new Entity()
    doorParent.addComponent(
        new Transform({
            position: new Vector3(4 - x, 1, 127.5),
            scale: new Vector3(1, 1 * y, 1)
        })
    )

    //toggle behavior for doorParent
    doorParent.addComponent(
        new utils.ToggleComponent(utils.ToggleState.Off, (value) => {
            if (value === utils.ToggleState.On) {
                // open doors
                doorL.addComponentOrReplace(
                    new utils.MoveTransformComponent(doorLClosed, doorLOpen, 1)
                )
                doorR.addComponentOrReplace(
                    new utils.MoveTransformComponent(doorRClosed, doorROpen, 1)
                )
            } else {
                // close doors
                doorL.addComponentOrReplace(
                    new utils.MoveTransformComponent(doorLOpen, doorLClosed, 1)
                )
                doorR.addComponentOrReplace(
                    new utils.MoveTransformComponent(doorROpen, doorRClosed, 1)
                )
            }
        })
    )

    engine.addEntity(doorParent)

    // Set the doorParent as a parent of both door sides
    doorL.setParent(doorParent)
    doorR.setParent(doorParent)

    // Set the click behavior for both door sides
    doorL.addComponent(
        new OnPointerDown(
            (e) => {
                doorParent.getComponent(utils.ToggleComponent).toggle()
            },
            { button: ActionButton.POINTER, hoverText: 'Open/Close' }
        )
    )

    doorR.addComponent(
        new OnPointerDown(
            (e) => {
                doorParent.getComponent(utils.ToggleComponent).toggle()
            },
            { button: ActionButton.POINTER, hoverText: 'Open/Close' }
        )
    )
}