import { createChannel } from '../node_modules/decentraland-builder-scripts/channel'
import { createInventory } from '../node_modules/decentraland-builder-scripts/inventory'
import Script1 from "../models/0d3f124a-901f-4895-a045-a4c80c05ea26/src/item"
import Script2 from "../models/3e3df11c-8e39-4494-ac4e-d6faab495f13/src/item"
// import { Props } from '../models/0d3f124a-901f-4895-a045-a4c80c05ea26/src/item'

const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
    position: new Vector3(88.5, 0, 108.5),
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

const ancientStonePagodaLantern = new Entity('ancientStonePagodaLantern')
engine.addEntity(ancientStonePagodaLantern)
ancientStonePagodaLantern.setParent(_scene)
const transform6 = new Transform({
    position: new Vector3(16, 0.1, 12),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
})
ancientStonePagodaLantern.addComponentOrReplace(transform6)
const gltfShape2 = new GLTFShape("models/a8f0b74e-8331-4897-9ba9-fe12ef701388/ChineseFountain_01/ChineseFountain_01.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
ancientStonePagodaLantern.addComponentOrReplace(gltfShape2)

const redMelonGauzeLantern = new Entity('redMelonGauzeLantern')
engine.addEntity(redMelonGauzeLantern)
redMelonGauzeLantern.setParent(_scene)
const transform7 = new Transform({
    position: new Vector3(12.38, 2.9, 16),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
})
redMelonGauzeLantern.addComponentOrReplace(transform7)
const gltfShape3 = new GLTFShape("models/5dc7fd31-fe40-4548-aafe-8ccaa124a218/ChineseLantern_01/ChineseLantern_01.glb")
gltfShape3.withCollisions = true
gltfShape3.isPointerBlocker = true
gltfShape3.visible = true
redMelonGauzeLantern.addComponentOrReplace(gltfShape3)

const orangeMelonGauzeLantern = new Entity('orangeMelonGauzeLantern')
engine.addEntity(orangeMelonGauzeLantern)
orangeMelonGauzeLantern.setParent(_scene)
const transform8 = new Transform({
    position: new Vector3(12.38, 2.9, 15.5),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
})
orangeMelonGauzeLantern.addComponentOrReplace(transform8)
const gltfShape4 = new GLTFShape("models/755087fc-72c4-43b8-b371-b0df932f31eb/ChineseLantern_02/ChineseLantern_02.glb")
gltfShape4.withCollisions = true
gltfShape4.isPointerBlocker = true
gltfShape4.visible = true
orangeMelonGauzeLantern.addComponentOrReplace(gltfShape4)

const traditionalRoundGauzeLantern = new Entity('traditionalRoundGauzeLantern')
engine.addEntity(traditionalRoundGauzeLantern)
traditionalRoundGauzeLantern.setParent(_scene)
const transform9 = new Transform({
    position: new Vector3(13, 3.7, 13.5),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
})
traditionalRoundGauzeLantern.addComponentOrReplace(transform9)
const gltfShape5 = new GLTFShape("models/33a6078d-b432-439b-82fd-8e4a1c405186/ChineseLantern_04/ChineseLantern_04.glb")
gltfShape5.withCollisions = true
gltfShape5.isPointerBlocker = true
gltfShape5.visible = true
traditionalRoundGauzeLantern.addComponentOrReplace(gltfShape5)

const shopEmissive = new Entity('shopEmissive')
engine.addEntity(shopEmissive)
shopEmissive.setParent(_scene)
const transform10 = new Transform({
  position: new Vector3(14.5, 0, 15.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
shopEmissive.addComponentOrReplace(transform10)
const gltfShape6 = new GLTFShape("models/461bf97f-886b-47f7-89ce-16255f6a985f/Shop_Emissive.glb")
gltfShape6.withCollisions = true
gltfShape6.isPointerBlocker = true
gltfShape6.visible = true
shopEmissive.addComponentOrReplace(gltfShape6)



const smallCandleGauzeLantern = new Entity('smallCandleGauzeLantern')
engine.addEntity(smallCandleGauzeLantern)
smallCandleGauzeLantern.setParent(_scene)
const transform12 = new Transform({
    position: new Vector3(14, 3.7, 16),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
})
smallCandleGauzeLantern.addComponentOrReplace(transform12)
const gltfShape8 = new GLTFShape("models/3ea31ee2-9a60-4846-a1f5-c8b14419d8af/ChineseLantern_05/ChineseLantern_05.glb")
gltfShape8.withCollisions = true
gltfShape8.isPointerBlocker = true
gltfShape8.visible = true
smallCandleGauzeLantern.addComponentOrReplace(gltfShape8)

const traditionalStonePagodaLantern = new Entity('traditionalStonePagodaLantern')
engine.addEntity(traditionalStonePagodaLantern)
traditionalStonePagodaLantern.setParent(_scene)
const transform13 = new Transform({
    position: new Vector3(16.5, 0.1, 18),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
})
traditionalStonePagodaLantern.addComponentOrReplace(transform13)
const gltfShape9 = new GLTFShape("models/2fab56bd-6a6e-4418-84e4-72d0528c7646/ChineseFountain_02/ChineseFountain_02.glb")
gltfShape9.withCollisions = true
gltfShape9.isPointerBlocker = true
gltfShape9.visible = true
traditionalStonePagodaLantern.addComponentOrReplace(gltfShape9)

const yearOfThePigBanner = new Entity('yearOfThePigBanner')
engine.addEntity(yearOfThePigBanner)
yearOfThePigBanner.setParent(_scene)
const transform14 = new Transform({
    position: new Vector3(16.85, 1.5, 16.5),
    rotation: new Quaternion(0, 0.7730104923248291, 0, -0.6343933343887329),
    scale: new Vector3(1.000002384185791, 1, 1.000002384185791)
})
yearOfThePigBanner.addComponentOrReplace(transform14)
const gltfShape10 = new GLTFShape("models/57d2eb7f-2671-47b3-9af9-fdfa84ceca1f/ChineseFlag_01/ChineseFlag_01.glb")
gltfShape10.withCollisions = true
gltfShape10.isPointerBlocker = true
gltfShape10.visible = true
yearOfThePigBanner.addComponentOrReplace(gltfShape10)

const chest = new Entity('chest')
engine.addEntity(chest)
chest.setParent(_scene)
const transform15 = new Transform({
    position: new Vector3(13, 0.1, 12),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
})
chest.addComponentOrReplace(transform15)

const atomicLight = new Entity('atomicLight')
engine.addEntity(atomicLight)
atomicLight.setParent(_scene)
const transform16 = new Transform({
    position: new Vector3(16, 0.1, 16),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
})
atomicLight.addComponentOrReplace(transform16)

const channelId = Math.random().toString(16).slice(2)
const channelBus = new MessageBus()
const inventory = createInventory(UICanvas, UIContainerStack, UIImage)
const options = { inventory }

const script1 = new Script1()
const script2 = new Script2()
// script1.init(options)
// script2.init(options)

script1.init()
script2.init()
script1.spawn(chest, { "onClickText": "Open/Close", "onClick": [{ "entityName": "chest", "actionId": "toggle", "values": {} }] }, createChannel(channelId, chest, channelBus))
script2.spawn(atomicLight, { "startOn": true, "clickable": true, "onActivate": [] }, createChannel(channelId, atomicLight, channelBus))