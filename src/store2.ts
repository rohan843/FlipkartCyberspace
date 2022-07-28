const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
    position: new Vector3(88.5, 0, 108.5-8.5),
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

const surfboard = new Entity('surfboard')
engine.addEntity(surfboard)
surfboard.setParent(_scene)
const transform6 = new Transform({
  position: new Vector3(14.5, 0.1, 12.5),
  rotation: new Quaternion(0.06930860877037048, -0.703701913356781, 0.06930867582559586, -0.7037018537521362),
  scale: new Vector3(1, 0.9999998807907104, 1.000000238418579)
})
surfboard.addComponent(new OnPointerDown(() => {
  openExternalURL("https://www.flipkart.com/search?q=sports%20equipments&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off")
},
  {
      distance: 10
  }
))
surfboard.addComponentOrReplace(transform6)
const gltfShape2 = new GLTFShape("models/87449055-9033-4ac4-8125-c78831f751d4/SurfBoard_01/SurfBoard_01.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
surfboard.addComponentOrReplace(gltfShape2)

const gamesConsole = new Entity('gamesConsole')
engine.addEntity(gamesConsole)
gamesConsole.setParent(_scene)
const transform7 = new Transform({
  position: new Vector3(15.5, 0.1, 12.5),
  rotation: new Quaternion(-7.478685131302818e-15, -1, 1.1920927533992653e-7, 0),
  scale: new Vector3(1.0000003576278687, 1, 1.0000003576278687)
})
gamesConsole.addComponent(new OnPointerDown(() => {
  openExternalURL("https://www.flipkart.com/search?q=sports%20equipments&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off")
},
  {
      distance: 10
  }
))
gamesConsole.addComponentOrReplace(transform7)
const gltfShape3 = new GLTFShape("models/9dadc7a7-0924-4eeb-b246-83565116826a/Games_Console.glb")
gltfShape3.withCollisions = true
gltfShape3.isPointerBlocker = true
gltfShape3.visible = true
gamesConsole.addComponentOrReplace(gltfShape3)

const basketballHoop = new Entity('basketballHoop')
engine.addEntity(basketballHoop)
basketballHoop.setParent(_scene)
const transform8 = new Transform({
  position: new Vector3(15, 2.5, 11.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
basketballHoop.addComponent(new OnPointerDown(() => {
  openExternalURL("https://www.flipkart.com/search?q=sports%20equipments&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off")
},
  {
      distance: 10
  }
))
basketballHoop.addComponentOrReplace(transform8)
const gltfShape4 = new GLTFShape("models/d21bb810-5777-42d7-bd07-c76fc4643fd0/Basketball_Hoop.glb")
gltfShape4.withCollisions = true
gltfShape4.isPointerBlocker = true
gltfShape4.visible = true
basketballHoop.addComponentOrReplace(gltfShape4)

const shopEmissive = new Entity('shopEmissive')
engine.addEntity(shopEmissive)
shopEmissive.setParent(_scene)
const transform9 = new Transform({
  position: new Vector3(16, 0, 15.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
shopEmissive.addComponentOrReplace(transform9)
const gltfShape5 = new GLTFShape("models/461bf97f-886b-47f7-89ce-16255f6a985f/Shop_Emissive.glb")
gltfShape5.withCollisions = true
gltfShape5.isPointerBlocker = true
gltfShape5.visible = true
shopEmissive.addComponentOrReplace(gltfShape5)

const soccerBall2 = new Entity('soccerBall2')
engine.addEntity(soccerBall2)
soccerBall2.setParent(_scene)
const gltfShape6 = new GLTFShape("models/44e7b413-1f33-43bc-bada-96659b75bd86/PlaygroundBall_01/PlaygroundBall_01.glb")
gltfShape6.withCollisions = true
gltfShape6.isPointerBlocker = true
gltfShape6.visible = true
soccerBall2.addComponent(new OnPointerDown(() => {
  openExternalURL("https://www.flipkart.com/search?q=sports%20equipments&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off")
},
  {
      distance: 10
  }
))
soccerBall2.addComponentOrReplace(gltfShape6)
const transform10 = new Transform({
  position: new Vector3(17.5, 0.1, 12),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
soccerBall2.addComponentOrReplace(transform10)

const soccerBall = new Entity('soccerBall')
engine.addEntity(soccerBall)
soccerBall.setParent(_scene)
soccerBall.addComponentOrReplace(gltfShape6)
soccerBall.addComponent(new OnPointerDown(() => {
  openExternalURL("https://www.flipkart.com/search?q=sports%20equipments&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off")
},
  {
      distance: 10
  }
))
const transform11 = new Transform({
  position: new Vector3(18, 0.1, 12),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
soccerBall.addComponentOrReplace(transform11)

const soccerBall3 = new Entity('soccerBall3')
engine.addEntity(soccerBall3)
soccerBall3.setParent(_scene)
soccerBall3.addComponentOrReplace(gltfShape6)
const transform12 = new Transform({
  position: new Vector3(17, 0.1, 12.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
soccerBall3.addComponent(new OnPointerDown(() => {
  openExternalURL("https://www.flipkart.com/search?q=sports%20equipments&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off")
},
  {
      distance: 10
  }
))
soccerBall3.addComponentOrReplace(transform12)

// const soccerBall7 = new Entity('soccerBall7')
// engine.addEntity(soccerBall7)
// soccerBall7.setParent(_scene)
// soccerBall7.addComponentOrReplace(gltfShape6)
// const transform23 = new Transform({
//   position: new Vector3(17, 1.1, 12.5),
//   rotation: new Quaternion(0, 0, 0, 1),
//   scale: new Vector3(1, 1, 1)
// })
// soccerBall7.addComponentOrReplace(transform23)

const soccerBall4 = new Entity('soccerBall4')
engine.addEntity(soccerBall4)
soccerBall4.setParent(_scene)
soccerBall4.addComponentOrReplace(gltfShape6)
const transform13 = new Transform({
  position: new Vector3(18.1, 0.1, 18.3),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
soccerBall4.addComponent(new OnPointerDown(() => {
  openExternalURL("https://www.flipkart.com/search?q=sports%20equipments&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off")
},
  {
      distance: 10
  }
))
soccerBall4.addComponentOrReplace(transform13)

const surfboard2 = new Entity('surfboard2')
engine.addEntity(surfboard2)
surfboard2.setParent(_scene)
surfboard2.addComponentOrReplace(gltfShape2)
const transform14 = new Transform({
  position: new Vector3(14.1, 0.1, 13),
  rotation: new Quaternion(0.09379658848047256, -0.9523324370384216, 0.02845299057662487, -0.2888869047164917),
  scale: new Vector3(1.0000019073486328, 1, 1.0000030994415283)
})
surfboard2.addComponent(new OnPointerDown(() => {
  openExternalURL("https://www.flipkart.com/search?q=sports%20equipments&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off")
},
  {
      distance: 10
  }
))
surfboard2.addComponentOrReplace(transform14)

const messageInABottle = new Entity('messageInABottle')
engine.addEntity(messageInABottle)
messageInABottle.setParent(_scene)
const transform15 = new Transform({
  position: new Vector3(18, 0.1, 15.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
messageInABottle.addComponent(new OnPointerDown(() => {
  openExternalURL("https://www.flipkart.com/search?q=sports%20equipments&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off")
},
  {
      distance: 10
  }
))
messageInABottle.addComponentOrReplace(transform15)
const gltfShape7 = new GLTFShape("models/4e6817e7-90ce-4b46-88b0-25df758ce90a/Bottle_11/Bottle_11.glb")
gltfShape7.withCollisions = true
gltfShape7.isPointerBlocker = true
gltfShape7.visible = true
messageInABottle.addComponentOrReplace(gltfShape7)

const paperBall = new Entity('paperBall')
engine.addEntity(paperBall)
paperBall.setParent(_scene)
const transform16 = new Transform({
  position: new Vector3(18, 0.1, 13),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
paperBall.addComponent(new OnPointerDown(() => {
  openExternalURL("https://www.flipkart.com/search?q=sports%20equipments&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off")
},
  {
      distance: 10
  }
))
paperBall.addComponentOrReplace(transform16)
const gltfShape8 = new GLTFShape("models/0b6fbff7-9541-47ff-a059-5fe2661d413d/Paper_Ball.glb")
gltfShape8.withCollisions = true
gltfShape8.isPointerBlocker = true
gltfShape8.visible = true
paperBall.addComponentOrReplace(gltfShape8)

const messageInABottle2 = new Entity('messageInABottle2')
engine.addEntity(messageInABottle2)
messageInABottle2.setParent(_scene)
const transform17 = new Transform({
  position: new Vector3(18, 0.1, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
messageInABottle2.addComponent(new OnPointerDown(() => {
  openExternalURL("https://www.flipkart.com/search?q=sports%20equipments&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off")
},
  {
      distance: 10
  }
))
messageInABottle2.addComponentOrReplace(transform17)
messageInABottle2.addComponentOrReplace(gltfShape7)

const gamesConsole2 = new Entity('gamesConsole2')
engine.addEntity(gamesConsole2)
gamesConsole2.setParent(_scene)
gamesConsole2.addComponentOrReplace(gltfShape3)
const transform18 = new Transform({
  position: new Vector3(15, 0.1, 12.5),
  rotation: new Quaternion(-7.478685131302818e-15, -1, 1.1920927533992653e-7, 0),
  scale: new Vector3(1.0000003576278687, 1, 1.0000003576278687)
})
gamesConsole2.addComponent(new OnPointerDown(() => {
  openExternalURL("https://www.flipkart.com/search?q=sports%20equipments&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off")
},
  {
      distance: 10
  }
))
gamesConsole2.addComponentOrReplace(transform18)

const paperBall2 = new Entity('paperBall2')
engine.addEntity(paperBall2)
paperBall2.setParent(_scene)
paperBall2.addComponentOrReplace(gltfShape8)
const transform19 = new Transform({
  position: new Vector3(17.5, 0.1, 13),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
paperBall2.addComponent(new OnPointerDown(() => {
  openExternalURL("https://www.flipkart.com/search?q=sports%20equipments&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off")
},
  {
      distance: 10
  }
))
paperBall2.addComponentOrReplace(transform19)

const soccerBall5 = new Entity('soccerBall5')
engine.addEntity(soccerBall5)
soccerBall5.setParent(_scene)
soccerBall5.addComponentOrReplace(gltfShape6)
const transform20 = new Transform({
  position: new Vector3(14, 0.1, 15),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
soccerBall5.addComponent(new OnPointerDown(() => {
  openExternalURL("https://www.flipkart.com/search?q=sports%20equipments&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off")
},
  {
      distance: 10
  }
))
soccerBall5.addComponentOrReplace(transform20)

const soccerBall6 = new Entity('soccerBall6')
engine.addEntity(soccerBall6)
soccerBall6.setParent(_scene)
soccerBall6.addComponentOrReplace(gltfShape6)
const transform21 = new Transform({
  position: new Vector3(14, 0.1, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
soccerBall6.addComponent(new OnPointerDown(() => {
  openExternalURL("https://www.flipkart.com/search?q=sports%20equipments&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off")
},
  {
      distance: 10
  }
))
soccerBall6.addComponentOrReplace(transform21)

const basketballHoop2 = new Entity('basketballHoop2')
engine.addEntity(basketballHoop2)
basketballHoop2.setParent(_scene)
basketballHoop2.addComponentOrReplace(gltfShape4)
const transform22 = new Transform({
  position: new Vector3(18, 2.5, 14),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000009536743164, 1, 1.0000009536743164)
})
basketballHoop2.addComponent(new OnPointerDown(() => {
  openExternalURL("https://www.flipkart.com/search?q=sports%20equipments&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off")
},
  {
      distance: 10
  }
))
basketballHoop2.addComponentOrReplace(transform22)
