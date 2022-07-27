import { createChannel } from '../node_modules/decentraland-builder-scripts/channel'
import { createInventory } from '../node_modules/decentraland-builder-scripts/inventory'
import Script1 from "../models/1746d432-ba19-4b2e-819f-d16cf5a64236/src/item"
import Script2 from "../models/5af1151e-9def-47ed-88f9-1f4e52caee28/src/item"
import Script3 from "../models/575bcf74-87b6-424f-8971-d4c83ab60e65/src/item"
import Script4 from "../models/84e3703b-d55b-426a-8078-d673bf306288/src/item"

const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(-56, 0, 98.23 + 18),
  rotation: Quaternion.Euler(0, 90, 0.0),
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

const noIMAGE = new Entity('noIMAGE')
engine.addEntity(noIMAGE)
noIMAGE.setParent(_scene)
const transform6 = new Transform({
  position: new Vector3(16, 0, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
noIMAGE.addComponentOrReplace(transform6)
const gltfShape2 = new GLTFShape("models/ea601b6c-3d21-4c34-b4cb-620c7022d3a2/GreenHouse_02/GreenHouse_02.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
noIMAGE.addComponentOrReplace(gltfShape2)
noIMAGE.addComponent(new OnPointerDown(() => {
  openExternalURL("https://www.flipkart.com/search?q=sofa&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off")
},
  {
    distance: 10
  }
))

const armchairC = new Entity('armchairC')
engine.addEntity(armchairC)
armchairC.setParent(_scene)
const transform7 = new Transform({
  position: new Vector3(9.5, 0, 13.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
armchairC.addComponentOrReplace(transform7)
const gltfShape3 = new GLTFShape("models/bf297f86-f4f6-4179-84a5-95690bf0f2c3/Armchair_C.glb")
gltfShape3.withCollisions = true
gltfShape3.isPointerBlocker = true
gltfShape3.visible = true
armchairC.addComponentOrReplace(gltfShape3)
armchairC.addComponent(new OnPointerDown(() => {
  openExternalURL("https://www.flipkart.com/search?q=sofa&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off")
},
  {
    distance: 10
  }
))

const armchairD = new Entity('armchairD')
engine.addEntity(armchairD)
armchairD.setParent(_scene)
const transform8 = new Transform({
  position: new Vector3(7, 0, 14),
  rotation: new Quaternion(2.8601403658515745e-15, 0.4713967740535736, -5.619486032060195e-8, 0.8819212913513184),
  scale: new Vector3(1.0000035762786865, 1, 1.0000035762786865)
})
armchairD.addComponentOrReplace(transform8)
const gltfShape4 = new GLTFShape("models/1bff6908-e888-4cc6-b2be-0b8656113fdd/Armchair_D.glb")
gltfShape4.withCollisions = true
gltfShape4.isPointerBlocker = true
gltfShape4.visible = true
armchairD.addComponentOrReplace(gltfShape4)
armchairD.addComponent(new OnPointerDown(() => {
  openExternalURL("https://www.flipkart.com/search?q=sofa&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off")
},
  {
    distance: 10
  }
))

const armchairA = new Entity('armchairA')
engine.addEntity(armchairA)
armchairA.setParent(_scene)
const transform9 = new Transform({
  position: new Vector3(6.5, 0, 16),
  rotation: new Quaternion(4.127578846475997e-15, -0.7071068286895752, 8.429370268459024e-8, -0.7071067690849304),
  scale: new Vector3(1, 1, 1)
})
armchairA.addComponentOrReplace(transform9)
const gltfShape5 = new GLTFShape("models/3692233b-6494-4f39-8e51-18029085dd15/Armchair_A.glb")
gltfShape5.withCollisions = true
gltfShape5.isPointerBlocker = true
gltfShape5.visible = true
armchairA.addComponentOrReplace(gltfShape5)
armchairA.addComponent(new OnPointerDown(() => {
  openExternalURL("https://www.flipkart.com/search?q=sofa&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off")
},
  {
    distance: 10
  }
))

const armchairC2 = new Entity('armchairC2')
engine.addEntity(armchairC2)
armchairC2.setParent(_scene)
armchairC2.addComponentOrReplace(gltfShape3)
const transform10 = new Transform({
  position: new Vector3(8, 0, 18.5),
  rotation: new Quaternion(-6.755432496762578e-15, 1, -1.1920927533992653e-7, 0),
  scale: new Vector3(1.000001072883606, 1, 1.000001072883606)
})
armchairC2.addComponentOrReplace(transform10)
armchairC2.addComponent(new OnPointerDown(() => {
  openExternalURL("https://www.flipkart.com/search?q=sofa&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off")
},
  {
    distance: 10
  }
))

const armchairD2 = new Entity('armchairD2')
engine.addEntity(armchairD2)
armchairD2.setParent(_scene)
armchairD2.addComponentOrReplace(gltfShape4)
const transform11 = new Transform({
  position: new Vector3(7, 0, 18),
  rotation: new Quaternion(-5.8459360019469386e-8, 0.9238796234130859, -9.850672455513632e-8, 0.3826833963394165),
  scale: new Vector3(1.0000061988830566, 1, 1.0000061988830566)
})
armchairD2.addComponentOrReplace(transform11)
armchairD2.addComponent(new OnPointerDown(() => {
  openExternalURL("https://www.flipkart.com/search?q=sofa&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off")
},
  {
    distance: 10
  }
))

const woodenTabernacleRoundTable = new Entity('woodenTabernacleRoundTable')
engine.addEntity(woodenTabernacleRoundTable)
woodenTabernacleRoundTable.setParent(_scene)
const transform12 = new Transform({
  position: new Vector3(9, 0, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodenTabernacleRoundTable.addComponentOrReplace(transform12)
const gltfShape6 = new GLTFShape("models/a4dddfe5-698d-41c4-bbb2-fcceabe88d7d/Table_01/Table_01.glb")
gltfShape6.withCollisions = true
gltfShape6.isPointerBlocker = true
gltfShape6.visible = true
woodenTabernacleRoundTable.addComponentOrReplace(gltfShape6)
woodenTabernacleRoundTable.addComponent(new OnPointerDown(() => {
  openExternalURL("https://www.flipkart.com/search?q=centre+table&sid=wwe%2Cki7%2Cot1&as=on&as-show=on&otracker=AS_QueryStore_OrganicAutoSuggest_1_7_na_na_na&otracker1=AS_QueryStore_OrganicAutoSuggest_1_7_na_na_na&as-pos=1&as-type=RECENT&suggestionId=centre+table%7CCoffee+Tables&requestId=b8104eac-3598-410e-84bf-d5205a76c6af&as-searchtext=centre%20")
},
  {
    distance: 10
  }
))

const videoScreenStanding = new Entity('videoScreenStanding')
engine.addEntity(videoScreenStanding)
videoScreenStanding.setParent(_scene)
const transform13 = new Transform({
  position: new Vector3(16, 0, 13),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.4999999403953552, 0.5199999809265137, 0.9999999403953552)
})
videoScreenStanding.addComponentOrReplace(transform13)
videoScreenStanding.addComponent(new OnPointerDown(() => {
  openExternalURL("https://www.flipkart.com/search?q=tv&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off")
},
  {
    distance: 10
  }
))

const sofaBlack = new Entity('sofaBlack')
engine.addEntity(sofaBlack)
sofaBlack.setParent(_scene)
const transform14 = new Transform({
  position: new Vector3(14.5, 0, 16),
  rotation: new Quaternion(-4.801690546943924e-16, -1, 1.1920926823449918e-7, -5.960463766996327e-8),
  scale: new Vector3(1.0000008344650269, 1, 1.0000008344650269)
})
sofaBlack.addComponentOrReplace(transform14)
const gltfShape7 = new GLTFShape("models/a9bb84fd-6556-4d92-bdd3-d66ffe963b3e/Sofa_Black.glb")
gltfShape7.withCollisions = true
gltfShape7.isPointerBlocker = true
gltfShape7.visible = true
sofaBlack.addComponentOrReplace(gltfShape7)
sofaBlack.addComponent(new OnPointerDown(() => {
  openExternalURL("https://www.flipkart.com/search?q=sofa&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off")
},
  {
    distance: 10
  }
))

const sofaRound = new Entity('sofaRound')
engine.addEntity(sofaRound)
sofaRound.setParent(_scene)
const transform15 = new Transform({
  position: new Vector3(25, 0, 18),
  rotation: new Quaternion(-6.303297850342139e-16, -0.5555701851844788, 6.622912707143769e-8, 0.8314695954322815),
  scale: new Vector3(1.0000008344650269, 1, 1.0000008344650269)
})
sofaRound.addComponentOrReplace(transform15)
const gltfShape8 = new GLTFShape("models/601d4a92-7b10-420e-858b-8c6c2358f3c8/RoundSofa.glb")
gltfShape8.withCollisions = true
gltfShape8.isPointerBlocker = true
gltfShape8.visible = true
sofaRound.addComponentOrReplace(gltfShape8)
sofaRound.addComponent(new OnPointerDown(() => {
  openExternalURL("https://www.flipkart.com/search?q=long%20corner%20sofa%20set&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off")
},
  {
    distance: 10
  }
))

const imageCubeA = new Entity('imageCubeA')
engine.addEntity(imageCubeA)
imageCubeA.setParent(_scene)
const transform16 = new Transform({
  position: new Vector3(25, 0, 19),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
imageCubeA.addComponentOrReplace(transform16)
imageCubeA.addComponent(new OnPointerDown(() => {
  openExternalURL("https://www.flipkart.com/search?q=speaker&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off")
},
  {
    distance: 10
  }
))

const imageCubeD = new Entity('imageCubeD')
engine.addEntity(imageCubeD)
imageCubeD.setParent(_scene)
const transform17 = new Transform({
  position: new Vector3(19, 0, 12.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
imageCubeD.addComponentOrReplace(transform17)
imageCubeD.addComponent(new OnPointerDown(() => {
  openExternalURL("https://www.flipkart.com/search?q=speaker&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off")
},
  {
    distance: 10
  }
))

const imageCubeD2 = new Entity('imageCubeD2')
engine.addEntity(imageCubeD2)
imageCubeD2.setParent(_scene)
const transform18 = new Transform({
  position: new Vector3(14, 0, 13),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
imageCubeD2.addComponentOrReplace(transform18)
imageCubeD2.addComponent(new OnPointerDown(() => {
  openExternalURL("https://www.flipkart.com/search?q=speaker&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off")
},
  {
    distance: 10
  }
))

const videoBillboardWhite = new Entity('videoBillboardWhite')
engine.addEntity(videoBillboardWhite)
videoBillboardWhite.setParent(_scene)
const transform19 = new Transform({
  position: new Vector3(27, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
videoBillboardWhite.addComponentOrReplace(transform19)
// videoBillboardWhite.addComponent(new OnPointerDown(() => {
//   if (img.link !== null) openExternalURL(img.link)
// },
//   {
//       distance: 10
//   }
// ))

const spaceshipChair = new Entity('spaceshipChair')
engine.addEntity(spaceshipChair)
spaceshipChair.setParent(_scene)
const transform20 = new Transform({
  position: new Vector3(23, 0, 19.5),
  rotation: new Quaternion(-5.6317873880552295e-15, -1, 1.1920928955078125e-7, 0),
  scale: new Vector3(1.0000005960464478, 1, 1.0000005960464478)
})
spaceshipChair.addComponentOrReplace(transform20)
const gltfShape9 = new GLTFShape("models/3624d83f-5084-4ed0-9568-0ae7d9e82441/ChairShip_01/ChairShip_01.glb")
gltfShape9.withCollisions = true
gltfShape9.isPointerBlocker = true
gltfShape9.visible = true
spaceshipChair.addComponentOrReplace(gltfShape9)
spaceshipChair.addComponent(new OnPointerDown(() => {
  openExternalURL("https://www.flipkart.com/search?q=gaming+chair&sid=4rr%2Ckm5%2C7uj&as=on&as-show=on&otracker=AS_QueryStore_OrganicAutoSuggest_1_10_na_na_ps&otracker1=AS_QueryStore_OrganicAutoSuggest_1_10_na_na_ps&as-pos=1&as-type=RECENT&suggestionId=gaming+chair%7CGaming+Chairs&requestId=92308a3f-58dd-4b06-a092-4ce891236e4e&as-searchtext=gaming%20cha")
},
  {
    distance: 10
  }
))

const spaceshipChair2 = new Entity('spaceshipChair2')
engine.addEntity(spaceshipChair2)
spaceshipChair2.setParent(_scene)
spaceshipChair2.addComponentOrReplace(gltfShape9)
const transform21 = new Transform({
  position: new Vector3(21, 0, 19.5),
  rotation: new Quaternion(-5.6317873880552295e-15, -1, 1.1920928955078125e-7, 0),
  scale: new Vector3(1.0000005960464478, 1, 1.0000005960464478)
})
spaceshipChair2.addComponentOrReplace(transform21)
spaceshipChair2.addComponent(new OnPointerDown(() => {
  openExternalURL("https://www.flipkart.com/search?q=chair&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off")
},
  {
    distance: 10
  }
))

const channelId = Math.random().toString(16).slice(2)
const channelBus = new MessageBus()
const inventory = createInventory(UICanvas, UIContainerStack, UIImage)
const options = { inventory }

const script1 = new Script1()
const script2 = new Script2()
const script3 = new Script3()
const script4 = new Script4()
// script1.init(options)
// script2.init(options)
// script3.init(options)
// script4.init(options)
script1.init()
script2.init()
script3.init()
script4.init()
script1.spawn(videoScreenStanding, { "startOn": true, "onClickText": "Play video", "volume": 0.2, "onClick": [{ "entityName": "videoScreenStanding", "actionId": "toggle", "values": {} }], "station": "https://theuniverse.club/live/genesisplaza/index.m3u8", "image": "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" }, createChannel(channelId, videoScreenStanding, channelBus))
script2.spawn(imageCubeA, { "image": "https://i.imgur.com/d25gO61.jpg" }, createChannel(channelId, imageCubeA, channelBus))
script3.spawn(imageCubeD, { "image": "https://i.imgur.com/d25gO61.jpg" }, createChannel(channelId, imageCubeD, channelBus))
script3.spawn(imageCubeD2, { "image": "https://i.imgur.com/d25gO61.jpg" }, createChannel(channelId, imageCubeD2, channelBus))
script4.spawn(videoBillboardWhite, { "startOn": false, "onClickText": "Play video", "volume": 1, "onClick": [{ "entityName": "videoBillboardWhite", "actionId": "toggle", "values": {} }], "station": "https://theuniverse.club/live/consensys/index.m3u8" }, createChannel(channelId, videoBillboardWhite, channelBus))