import { createChannel } from '../node_modules/decentraland-builder-scripts/channel'
import { createInventory } from '../node_modules/decentraland-builder-scripts/inventory'
import Script1 from "../models/a91b2938-246c-4178-a869-588377ad4fb8/src/item"
import Script2 from "../models/6267507e-7b6c-49ef-be4c-cdab372e64cd/src/item"
import Script3 from "../models/66990dce-74ff-413a-933e-7212d9163c87/src/item"

const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
    position: new Vector3(89, 0, -13),
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

const streetClock = new Entity('streetClock')
engine.addEntity(streetClock)
streetClock.setParent(_scene)
const transform6 = new Transform({
  position: new Vector3(15.5, 0.1, 12),
  rotation: new Quaternion(-6.585832572041507e-16, -0.7071068286895752, 8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(1.0000004768371582, 1, 1.0000004768371582)
})
streetClock.addComponent(new OnPointerDown(() => {
  openExternalURL("https://www.flipkart.com/search?q=clocks&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off")
},
  {
      distance: 10
  }
))
streetClock.addComponentOrReplace(transform6)
const gltfShape2 = new GLTFShape("models/3e718ab8-14e9-4352-a972-620da3ae778c/StreetClock_01/StreetClock_01.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
streetClock.addComponentOrReplace(gltfShape2)

const clock = new Entity('clock')
engine.addEntity(clock)
clock.setParent(_scene)
const transform7 = new Transform({
  position: new Vector3(14.7, 0.1, 12),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
clock.addComponent(new OnPointerDown(() => {
  openExternalURL("https://www.flipkart.com/search?q=clocks&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off")
},
  {
      distance: 10
  }
))
clock.addComponentOrReplace(transform7)
const gltfShape3 = new GLTFShape("models/e6bb4e73-d06e-452a-88d2-dfd5463e59fe/Furnit 5 Clock.glb")
gltfShape3.withCollisions = true
gltfShape3.isPointerBlocker = true
gltfShape3.visible = true
clock.addComponentOrReplace(gltfShape3)

const wallClock = new Entity('wallClock')
engine.addEntity(wallClock)
wallClock.setParent(_scene)
const transform8 = new Transform({
  position: new Vector3(14.3, 4, 11.5),
  rotation: new Quaternion(0.7071068286895752, 2.412783938165715e-15, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1, 1.0000027418136597, 1.0000027418136597)
})
wallClock.addComponent(new OnPointerDown(() => {
  openExternalURL("https://www.flipkart.com/search?q=clocks&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off")
},
  {
      distance: 10
  }
))
wallClock.addComponentOrReplace(transform8)
const gltfShape4 = new GLTFShape("models/a0186d6a-2e78-410a-bb52-fb4d6c3289a9/Wall Clock.glb")
gltfShape4.withCollisions = true
gltfShape4.isPointerBlocker = true
gltfShape4.visible = true
wallClock.addComponentOrReplace(gltfShape4)

const countdownTimer = new Entity('countdownTimer')
engine.addEntity(countdownTimer)
countdownTimer.setParent(_scene)
const transform9 = new Transform({
  position: new Vector3(13.9, 2, 14.5),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.000001311302185, 1, 1.000001311302185)
})
countdownTimer.addComponent(new OnPointerDown(() => {
  openExternalURL("https://www.flipkart.com/search?q=clocks&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off")
},
  {
      distance: 10
  }
))
countdownTimer.addComponentOrReplace(transform9)

const countdownTimer2 = new Entity('countdownTimer2')
engine.addEntity(countdownTimer2)
countdownTimer2.setParent(_scene)
const transform10 = new Transform({
  position: new Vector3(16, 3.5, 12),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
countdownTimer2.addComponent(new OnPointerDown(() => {
  openExternalURL("https://www.flipkart.com/search?q=clocks&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off")
},
  {
      distance: 10
  }
))
countdownTimer2.addComponentOrReplace(transform10)

const countdownTimer3 = new Entity('countdownTimer3')
engine.addEntity(countdownTimer3)
countdownTimer3.setParent(_scene)
const transform11 = new Transform({
  position: new Vector3(17.5, 0.1, 18),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1/2, 1/2, 1/2)
})
countdownTimer3.addComponent(new OnPointerDown(() => {
  openExternalURL("https://www.flipkart.com/search?q=clocks&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off")
},
  {
      distance: 10
  }
))
countdownTimer3.addComponentOrReplace(transform11)

const shopEmissive = new Entity('shopEmissive')
engine.addEntity(shopEmissive)
shopEmissive.setParent(_scene)
const transform12 = new Transform({
  position: new Vector3(16, 0, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
shopEmissive.addComponentOrReplace(transform12)
const gltfShape5 = new GLTFShape("models/461bf97f-886b-47f7-89ce-16255f6a985f/Shop_Emissive.glb")
gltfShape5.withCollisions = true
gltfShape5.isPointerBlocker = true
gltfShape5.visible = true
shopEmissive.addComponentOrReplace(gltfShape5)

const streetClock2 = new Entity('streetClock2')
engine.addEntity(streetClock2)
streetClock2.setParent(_scene)
streetClock2.addComponentOrReplace(gltfShape2)
const transform13 = new Transform({
  position: new Vector3(16.5, 0.1, 12),
  rotation: new Quaternion(-6.585832572041507e-16, -0.7071068286895752, 8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(1.0000007152557373, 1, 1.0000007152557373)
})
streetClock2.addComponent(new OnPointerDown(() => {
  openExternalURL("https://www.flipkart.com/search?q=clocks&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off")
},
  {
      distance: 10
  }
))
streetClock2.addComponentOrReplace(transform13)

const clock2 = new Entity('clock2')
engine.addEntity(clock2)
clock2.setParent(_scene)
clock2.addComponentOrReplace(gltfShape3)
const transform14 = new Transform({
  position: new Vector3(18, 0.1, 12),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
clock2.addComponent(new OnPointerDown(() => {
  openExternalURL("https://www.flipkart.com/search?q=clocks&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off")
},
  {
      distance: 10
  }
))
clock2.addComponentOrReplace(transform14)

const countdownTimer4 = new Entity('countdownTimer4')
engine.addEntity(countdownTimer4)
countdownTimer4.setParent(_scene)
const transform15 = new Transform({
  position: new Vector3(18.1, 2, 14.5),
  rotation: new Quaternion(4.124569338414402e-15, -0.7071068286895752, 8.429370268459024e-8, 0.7071068286895752),
  scale: new Vector3(1.0000022649765015, 1, 1.0000022649765015)
})
countdownTimer4.addComponent(new OnPointerDown(() => {
  openExternalURL("https://www.flipkart.com/search?q=clocks&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off")
},
  {
      distance: 10
  }
))
countdownTimer4.addComponentOrReplace(transform15)

const wallClock2 = new Entity('wallClock2')
engine.addEntity(wallClock2)
wallClock2.setParent(_scene)
wallClock2.addComponentOrReplace(gltfShape4)
const transform16 = new Transform({
  position: new Vector3(17.7, 4, 12),
  rotation: new Quaternion(0.7071068286895752, 2.412783938165715e-15, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1, 1.0000029802322388, 1.0000029802322388)
})
wallClock2.addComponent(new OnPointerDown(() => {
  openExternalURL("https://www.flipkart.com/search?q=clocks&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off")
},
  {
      distance: 10
  }
))
wallClock2.addComponentOrReplace(transform16)

const channelId = Math.random().toString(16).slice(2)
const channelBus = new MessageBus()
const inventory = createInventory(UICanvas, UIContainerStack, UIImage)
const options = { inventory }

const script1 = new Script1()
const script2 = new Script2()
const script3 = new Script3()
script1.init()
script2.init()
script3.init()
script1.spawn(countdownTimer, {
    "totalTime": 60, "active": false,
    onThreshold: [],
    onTimeUp: []
}, createChannel(channelId, countdownTimer, channelBus))
script2.spawn(countdownTimer2, {
  "totalTime": 60, "active": false,
  onThreshold: [],
  onTimeUp: []
}, createChannel(channelId, countdownTimer2, channelBus))
script3.spawn(countdownTimer3, {
  "totalTime": 60, "active": true,
  onThreshold: [],
  onTimeUp: []
}, createChannel(channelId, countdownTimer3, channelBus))
script1.spawn(countdownTimer4, {
  "totalTime": 60, "active": false,
  onThreshold: [],
  onTimeUp: []
}, createChannel(channelId, countdownTimer4, channelBus))