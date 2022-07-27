import { createChannel } from '../node_modules/decentraland-builder-scripts/channel'
import { createInventory } from '../node_modules/decentraland-builder-scripts/inventory'
import Script1 from "../models/b8755ec2-a4a1-4b3d-be0a-db5a2185d3b7/src/item"

const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
    position: new Vector3(89.5, 0, 92.2),
    rotation: Quaternion.Euler(0, 270, 0),
    scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

const entity = new Entity('entity')
engine.addEntity(entity)
entity.setParent(_scene)
const gltfShape = new GLTFShape("models/c9b17021-765c-4d9a-9966-ce93a9c323d1/FloorBaseGrass_01/FloorBaseGrass_01.glb")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
entity.addComponentOrReplace(gltfShape)
const transform2 = new Transform({
    position: new Vector3(8, 0, 8),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
})
entity.addComponentOrReplace(transform2)

const entity2 = new Entity('entity2')
engine.addEntity(entity2)
entity2.setParent(_scene)
entity2.addComponentOrReplace(gltfShape)
const transform3 = new Transform({
    position: new Vector3(24, 0, 8),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
})
entity2.addComponentOrReplace(transform3)

const entity3 = new Entity('entity3')
engine.addEntity(entity3)
entity3.setParent(_scene)
entity3.addComponentOrReplace(gltfShape)
const transform4 = new Transform({
    position: new Vector3(8, 0, 24),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
})
entity3.addComponentOrReplace(transform4)

const entity4 = new Entity('entity4')
engine.addEntity(entity4)
entity4.setParent(_scene)
entity4.addComponentOrReplace(gltfShape)
const transform5 = new Transform({
    position: new Vector3(24, 0, 24),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
})
entity4.addComponentOrReplace(transform5)

const shopEmissive = new Entity('shopEmissive')
engine.addEntity(shopEmissive)
shopEmissive.setParent(_scene)
const transform6 = new Transform({
    position: new Vector3(16.5, 0, 16.5),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
})
shopEmissive.addComponentOrReplace(transform6)
const gltfShape2 = new GLTFShape("models/461bf97f-886b-47f7-89ce-16255f6a985f/Shop_Emissive.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
shopEmissive.addComponentOrReplace(gltfShape2)

const keyboard = new Entity('keyboard')
engine.addEntity(keyboard)
keyboard.setParent(_scene)
const transform7 = new Transform({
    position: new Vector3(14.03, 3, 16),
    rotation: new Quaternion(-0.5, -0.5, 0.5, -0.5),
    scale: new Vector3(1.0000003576278687, 1.0000009536743164, 1.0000008344650269)
})
keyboard.addComponentOrReplace(transform7)

const bedGamer = new Entity('bedGamer')
engine.addEntity(bedGamer)
bedGamer.setParent(_scene)
const transform8 = new Transform({
    position: new Vector3(18, 0, 18.5),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
})
bedGamer.addComponentOrReplace(transform8)
const gltfShape3 = new GLTFShape("models/591af8a8-b871-429e-9c90-0c744c9cb7be/Bed_Gamer.glb")
gltfShape3.withCollisions = true
gltfShape3.isPointerBlocker = true
gltfShape3.visible = true
bedGamer.addComponentOrReplace(gltfShape3)

const game = new Entity('game')
engine.addEntity(game)
game.setParent(_scene)
const transform9 = new Transform({
    position: new Vector3(16, 3.5, 20),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
})
game.addComponentOrReplace(transform9)
const gltfShape4 = new GLTFShape("models/6c876c44-8018-4a53-8779-0d7a052d2b3b/Game.glb")
gltfShape4.withCollisions = true
gltfShape4.isPointerBlocker = true
gltfShape4.visible = true
game.addComponentOrReplace(gltfShape4)

const gamesConsole = new Entity('gamesConsole')
engine.addEntity(gamesConsole)
gamesConsole.setParent(_scene)
const transform10 = new Transform({
    position: new Vector3(14.5, 0, 18.5),
    rotation: new Quaternion(-1.5805062147933313e-8, -0.7071067690849304, 1.000987666088804e-7, -0.7071068286895752),
    scale: new Vector3(1, 1, 1)
})
gamesConsole.addComponentOrReplace(transform10)
const gltfShape5 = new GLTFShape("models/9dadc7a7-0924-4eeb-b246-83565116826a/Games_Console.glb")
gltfShape5.withCollisions = true
gltfShape5.isPointerBlocker = true
gltfShape5.visible = true
gamesConsole.addComponentOrReplace(gltfShape5)

const arcadeMachineBlack = new Entity('arcadeMachineBlack')
engine.addEntity(arcadeMachineBlack)
arcadeMachineBlack.setParent(_scene)
const transform11 = new Transform({
    position: new Vector3(15, 0, 13),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
})
arcadeMachineBlack.addComponentOrReplace(transform11)
const gltfShape6 = new GLTFShape("models/7dc89fda-c062-4bf2-aa97-7d6748c8d2f4/Arcade_Machine_Black.glb")
gltfShape6.withCollisions = true
gltfShape6.isPointerBlocker = true
gltfShape6.visible = true
arcadeMachineBlack.addComponentOrReplace(gltfShape6)

const arcadeMachineBlue = new Entity('arcadeMachineBlue')
engine.addEntity(arcadeMachineBlue)
arcadeMachineBlue.setParent(_scene)
const transform12 = new Transform({
    position: new Vector3(17, 0, 13),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
})
arcadeMachineBlue.addComponentOrReplace(transform12)
const gltfShape7 = new GLTFShape("models/5ff589ff-58c7-44df-a896-5807aad1c9be/Arcade_Machine_Blue.glb")
gltfShape7.withCollisions = true
gltfShape7.isPointerBlocker = true
gltfShape7.visible = true
arcadeMachineBlue.addComponentOrReplace(gltfShape7)

const arcadeMachineGreen = new Entity('arcadeMachineGreen')
engine.addEntity(arcadeMachineGreen)
arcadeMachineGreen.setParent(_scene)
const transform13 = new Transform({
    position: new Vector3(18, 0, 14.5),
    rotation: new Quaternion(4.2146840684154085e-8, -0.7071068286895752, 4.2146840684154085e-8, 0.7071068286895752),
    scale: new Vector3(1.0000016689300537, 1, 1.0000016689300537)
})
arcadeMachineGreen.addComponentOrReplace(transform13)
const gltfShape8 = new GLTFShape("models/77683fc3-021a-4d5c-8a7a-f6db84b8c819/Arcade_Machine_Green.glb")
gltfShape8.withCollisions = true
gltfShape8.isPointerBlocker = true
gltfShape8.visible = true
arcadeMachineGreen.addComponentOrReplace(gltfShape8)

const channelId = Math.random().toString(16).slice(2)
const channelBus = new MessageBus()
const inventory = createInventory(UICanvas, UIContainerStack, UIImage)
const options = { inventory }

const script1 = new Script1()
// script1.init(options)
script1.init()
script1.spawn(keyboard, {}, createChannel(channelId, keyboard, channelBus))