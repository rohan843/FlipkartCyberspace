import { _scene } from "./modules/furniture"

// fruit tables
const _tableScene = new Entity('_scene')
engine.addEntity(_tableScene)
_tableScene.setParent(_scene)
const transform = new Transform({
    position: new Vector3(-34.23, 0, -1.44),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
})
_tableScene.addComponentOrReplace(transform)

const entity = new Entity('entity')
engine.addEntity(entity)
entity.setParent(_tableScene)
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

const table = new Entity('table')
engine.addEntity(table)
table.setParent(_tableScene)
const transform3 = new Transform({
    position: new Vector3(8, 0, 8),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
})
table.addComponentOrReplace(transform3)
const gltfShape2 = new GLTFShape("models/66b972a1-9e20-4748-b8a5-b4637dc9a2a4/Table 1.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
table.addComponentOrReplace(gltfShape2)

const tableLamp = new Entity('tableLamp')
engine.addEntity(tableLamp)
tableLamp.setParent(_tableScene)
const transform4 = new Transform({
    position: new Vector3(7.5, 1, 7),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(-0.48, 0.51, 0.5)
})
tableLamp.addComponentOrReplace(transform4)
const gltfShape3 = new GLTFShape("models/43023e11-c3c0-4e66-81ae-5501f88f1527/Table Lamp.glb")
gltfShape3.withCollisions = true
gltfShape3.isPointerBlocker = true
gltfShape3.visible = true
tableLamp.addComponentOrReplace(gltfShape3)

const bananas = new Entity('bananas')
engine.addEntity(bananas)
bananas.setParent(_tableScene)
const transform5 = new Transform({
    position: new Vector3(8, 1, 7.5),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
})
bananas.addComponentOrReplace(transform5)
const gltfShape4 = new GLTFShape("models/adabf424-1469-4087-bb7d-5614c924ea12/Bananas_01/Bananas_01.glb")
gltfShape4.withCollisions = true
gltfShape4.isPointerBlocker = true
gltfShape4.visible = true
bananas.addComponentOrReplace(gltfShape4)

const bananas2 = new Entity('bananas2')
engine.addEntity(bananas2)
bananas2.setParent(_tableScene)
bananas2.addComponentOrReplace(gltfShape4)
const transform6 = new Transform({
    position: new Vector3(8, 1, 7),
    rotation: new Quaternion(0.02, -1, 0.1, -0.2),
    scale: new Vector3(1, 1, 1)
})
bananas2.addComponentOrReplace(transform6)

const pineapple = new Entity('pineapple')
engine.addEntity(pineapple)
pineapple.setParent(_tableScene)
const transform7 = new Transform({
    position: new Vector3(8, 1, 8),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
})
pineapple.addComponentOrReplace(transform7)
const gltfShape5 = new GLTFShape("models/5f23a6a6-a87c-4813-b52b-d35a07d41612/FoodPineapple_01/FoodPineapple_01.glb")
gltfShape5.withCollisions = true
gltfShape5.isPointerBlocker = true
gltfShape5.visible = true
pineapple.addComponentOrReplace(gltfShape5)

const bananas3 = new Entity('bananas3')
engine.addEntity(bananas3)
bananas3.setParent(_tableScene)
bananas3.addComponentOrReplace(gltfShape4)
const transform8 = new Transform({
    position: new Vector3(8, 1, 7),
    rotation: new Quaternion(-0.12255118787288666, -0.6563444137573242, 0.01539871096611023, -0.7442823648452759),
    scale: new Vector3(1.000000238418579, 1.0000001192092896, 1.0000003576278687)
})
bananas3.addComponentOrReplace(transform8)

const pineapple2 = new Entity('pineapple2')
engine.addEntity(pineapple2)
pineapple2.setParent(_tableScene)
pineapple2.addComponentOrReplace(gltfShape5)
const transform9 = new Transform({
    position: new Vector3(8, 1, 8.5),
    rotation: new Quaternion(0, 0, -0.6343929767608643, -0.7730107307434082),
    scale: new Vector3(1.0000001192092896, 1.0000001192092896, 1)
})
pineapple2.addComponentOrReplace(transform9)

const watermelon = new Entity('watermelon')
engine.addEntity(watermelon)
watermelon.setParent(_tableScene)
const transform10 = new Transform({
    position: new Vector3(6, 1, 8),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
})
watermelon.addComponentOrReplace(transform10)
const gltfShape6 = new GLTFShape("models/f01cf0d6-e860-4eb8-8c82-6fbc2a98a110/FoodWatermelon_01/FoodWatermelon_01.glb")
gltfShape6.withCollisions = true
gltfShape6.isPointerBlocker = true
gltfShape6.visible = true
watermelon.addComponentOrReplace(gltfShape6)

const table2 = new Entity('table2')
engine.addEntity(table2)
table2.setParent(_tableScene)
const transform11 = new Transform({
    position: new Vector3(6, 0, 8.5),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
})
table2.addComponentOrReplace(transform11)
const gltfShape7 = new GLTFShape("models/29c2d8e0-95f2-4111-bf8a-2309083b120d/Table 3.glb")
gltfShape7.withCollisions = true
gltfShape7.isPointerBlocker = true
gltfShape7.visible = true
table2.addComponentOrReplace(gltfShape7)

const watermelon2 = new Entity('watermelon2')
engine.addEntity(watermelon2)
watermelon2.setParent(_tableScene)
watermelon2.addComponentOrReplace(gltfShape6)
const transform12 = new Transform({
    position: new Vector3(6.5, 1, 8.5),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
})
watermelon2.addComponentOrReplace(transform12)

const apple = new Entity('apple')
engine.addEntity(apple)
apple.setParent(_tableScene)
const transform13 = new Transform({
    position: new Vector3(6, 1, 9),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
})
apple.addComponentOrReplace(transform13)
const gltfShape8 = new GLTFShape("models/efe88bc5-618c-4294-a5b5-4c64e95fafa3/FoodApple_01/FoodApple_01.glb")
gltfShape8.withCollisions = true
gltfShape8.isPointerBlocker = true
gltfShape8.visible = true
apple.addComponentOrReplace(gltfShape8)

const apple2 = new Entity('apple2')
engine.addEntity(apple2)
apple2.setParent(_tableScene)
apple2.addComponentOrReplace(gltfShape8)
const transform14 = new Transform({
    position: new Vector3(6, 1, 8.5),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
})
apple2.addComponentOrReplace(transform14)

const apple3 = new Entity('apple3')
engine.addEntity(apple3)
apple3.setParent(_tableScene)
apple3.addComponentOrReplace(gltfShape8)
const transform15 = new Transform({
    position: new Vector3(5.5, 1, 8.5),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
})
apple3.addComponentOrReplace(transform15)

const lemon = new Entity('lemon')
engine.addEntity(lemon)
lemon.setParent(_tableScene)
const transform16 = new Transform({
    position: new Vector3(5.5, 1, 9),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
})
lemon.addComponentOrReplace(transform16)
const gltfShape9 = new GLTFShape("models/38f22e83-4718-4788-9777-26ba847cff1a/FoodLemon_01/FoodLemon_01.glb")
gltfShape9.withCollisions = true
gltfShape9.isPointerBlocker = true
gltfShape9.visible = true
lemon.addComponentOrReplace(gltfShape9)

const lemon2 = new Entity('lemon2')
engine.addEntity(lemon2)
lemon2.setParent(_tableScene)
lemon2.addComponentOrReplace(gltfShape9)
const transform17 = new Transform({
    position: new Vector3(5.5, 1, 8),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
})
lemon2.addComponentOrReplace(transform17)

const lemon3 = new Entity('lemon3')
engine.addEntity(lemon3)
lemon3.setParent(_tableScene)
lemon3.addComponentOrReplace(gltfShape9)
const transform18 = new Transform({
    position: new Vector3(5, 1, 8),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
})
lemon3.addComponentOrReplace(transform18)

const coconut = new Entity('coconut')
engine.addEntity(coconut)
coconut.setParent(_tableScene)
const transform19 = new Transform({
    position: new Vector3(8.5, 1, 9),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
})
coconut.addComponentOrReplace(transform19)
const gltfShape10 = new GLTFShape("models/597981eb-2375-41cb-8db5-7e3e0f4347f4/Coco_01/Coco_01.glb")
gltfShape10.withCollisions = true
gltfShape10.isPointerBlocker = true
gltfShape10.visible = true
coconut.addComponentOrReplace(gltfShape10)

const halfCoconut = new Entity('halfCoconut')
engine.addEntity(halfCoconut)
halfCoconut.setParent(_tableScene)
const transform20 = new Transform({
    position: new Vector3(8, 1, 9),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
})
halfCoconut.addComponentOrReplace(transform20)
const gltfShape11 = new GLTFShape("models/0b710cd3-be50-4ac0-a340-d38fe2b6efe0/Coco_02/Coco_02.glb")
gltfShape11.withCollisions = true
gltfShape11.isPointerBlocker = true
gltfShape11.visible = true
halfCoconut.addComponentOrReplace(gltfShape11)

const tableLamp2 = new Entity('tableLamp2')
engine.addEntity(tableLamp2)
tableLamp2.setParent(_tableScene)
tableLamp2.addComponentOrReplace(gltfShape3)
const transform21 = new Transform({
    position: new Vector3(6.5, 1, 9),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(-0.480000376701355, 0.5099999904632568, 0.49999964237213135)
})
tableLamp2.addComponentOrReplace(transform21)

