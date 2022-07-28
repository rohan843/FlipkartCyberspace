const _scene2 = new Entity('_scene2')
engine.addEntity(_scene2)
const transform1 = new Transform({
  position: new Vector3(89, 0, -20),
  rotation: Quaternion.Euler(0, 270, 0),
  scale: new Vector3(1, 1, 1)
})
_scene2.addComponentOrReplace(transform1)

const entity5 = new Entity('entity')
engine.addEntity(entity5)
entity5.setParent(_scene2)
const gltfShape1 = new GLTFShape("models/c9b17021-765c-4d9a-9966-ce93a9c323d1/FloorBaseGrass_01/FloorBaseGrass_01.glb")
gltfShape1.withCollisions = true
gltfShape1.isPointerBlocker = true
gltfShape1.visible = true
entity5.addComponentOrReplace(gltfShape1)
const transform2122 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity5.addComponentOrReplace(transform2122)

const entity22 = new Entity('entity22')
engine.addEntity(entity22)
entity22.setParent(_scene2)
entity22.addComponentOrReplace(gltfShape1)
const transform32 = new Transform({
  position: new Vector3(24, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity22.addComponentOrReplace(transform32)

const entity31 = new Entity('entity3')
engine.addEntity(entity31)
entity31.setParent(_scene2)
entity31.addComponentOrReplace(gltfShape1)
const transform42 = new Transform({
  position: new Vector3(8, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity31.addComponentOrReplace(transform42)

const entity41 = new Entity('entity4')
engine.addEntity(entity41)
entity41.setParent(_scene2)
entity41.addComponentOrReplace(gltfShape1)
const transform52 = new Transform({
  position: new Vector3(24, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity41.addComponentOrReplace(transform52)

const hammer = new Entity('hammer')
engine.addEntity(hammer)
hammer.setParent(_scene2)
const transform61 = new Transform({
  position: new Vector3(14, 3, 16),
  rotation: new Quaternion(-0.5616251230239868, 0.4710691571235657, 0.42946162819862366, 0.5274786949157715),
  scale: new Vector3(1.0000004768371582, 1.0000017881393433, 1.0000027418136597)
})
hammer.addComponent(new OnPointerDown(() => {
  openExternalURL("https://www.flipkart.com/search?q=decor&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off")
},
  {
    distance: 10
  }
))
hammer.addComponentOrReplace(transform61)
const gltfShape21 = new GLTFShape("models/a15c48c1-0c12-4d5c-9be5-15c584991a99/Hammer_01/Hammer_01.glb")
gltfShape21.withCollisions = true
gltfShape21.isPointerBlocker = true
gltfShape21.visible = true
hammer.addComponentOrReplace(gltfShape21)

const axe = new Entity('axe')
engine.addEntity(axe)
axe.setParent(_scene2)
const transform71 = new Transform({
  position: new Vector3(14, 3, 17),
  rotation: new Quaternion(-2.262906487407191e-16, -0.6343932747840881, 7.562555737194998e-8, -0.7730104327201843),
  scale: new Vector3(0.9999999403953552, 1, 0.9999999403953552)
})
axe.addComponent(new OnPointerDown(() => {
  openExternalURL("https://www.flipkart.com/search?q=decor&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off")
},
  {
    distance: 10
  }
))
axe.addComponentOrReplace(transform71)
const gltfShape31 = new GLTFShape("models/f877cc59-f1f4-4e73-9f38-188109781007/Axe_01/Axe_01.glb")
gltfShape31.withCollisions = true
gltfShape31.isPointerBlocker = true
gltfShape31.visible = true
axe.addComponentOrReplace(gltfShape31)

const handHook = new Entity('handHook')
engine.addEntity(handHook)
handHook.setParent(_scene2)
const transform81 = new Transform({
  position: new Vector3(18, 0.1, 13.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
handHook.addComponent(new OnPointerDown(() => {
  openExternalURL("https://www.flipkart.com/search?q=decor&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off")
},
  {
    distance: 10
  }
))
handHook.addComponentOrReplace(transform81)
const gltfShape41 = new GLTFShape("models/609d2bea-408b-43b6-bd1e-1fbbf05bc73c/Hook_01/Hook_01.glb")
gltfShape41.withCollisions = true
gltfShape41.isPointerBlocker = true
gltfShape41.visible = true
handHook.addComponentOrReplace(gltfShape41)

const consoleStool = new Entity('consoleStool')
engine.addEntity(consoleStool)
consoleStool.setParent(_scene2)
const transform91 = new Transform({
  position: new Vector3(18, 0.1, 18),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
consoleStool.addComponent(new OnPointerDown(() => {
  openExternalURL("https://www.flipkart.com/search?q=decor&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off")
},
  {
    distance: 10
  }
))
consoleStool.addComponentOrReplace(transform91)
const gltfShape51 = new GLTFShape("models/a962d57d-ad5d-44f0-8868-f13aa4d59f48/ConsoleStool.glb")
gltfShape51.withCollisions = true
gltfShape51.isPointerBlocker = true
gltfShape51.visible = true
consoleStool.addComponentOrReplace(gltfShape51)

const wizardStaff = new Entity('wizardStaff')
engine.addEntity(wizardStaff)
wizardStaff.setParent(_scene2)
const transform101 = new Transform({
  position: new Vector3(16, 1.5, 12),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
wizardStaff.addComponent(new OnPointerDown(() => {
  openExternalURL("https://www.flipkart.com/search?q=decor&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off")
},
  {
    distance: 10
  }
))
wizardStaff.addComponentOrReplace(transform101)
const gltfShape61 = new GLTFShape("models/00e3adfa-d549-46e9-8c06-e706571c8272/WizardStaff_01/WizardStaff_01.glb")
gltfShape61.withCollisions = true
gltfShape61.isPointerBlocker = true
gltfShape61.visible = true
wizardStaff.addComponentOrReplace(gltfShape61)

const ritualPedestal = new Entity('ritualPedestal')
engine.addEntity(ritualPedestal)
ritualPedestal.setParent(_scene2)
const transform111 = new Transform({
  position: new Vector3(16, 0.1, 12),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.4999999403953552, 0.5, 0.4999999701976776)
})
ritualPedestal.addComponent(new OnPointerDown(() => {
  openExternalURL("https://www.flipkart.com/search?q=decor&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off")
},
  {
    distance: 10
  }
))
ritualPedestal.addComponentOrReplace(transform111)
const gltfShape71 = new GLTFShape("models/f43f78f7-cd7f-48ab-82cf-21796bf7822d/Pedestal_01/Pedestal_01.glb")
gltfShape71.withCollisions = true
gltfShape71.isPointerBlocker = true
gltfShape71.visible = true
ritualPedestal.addComponentOrReplace(gltfShape71)

const blueCrystal = new Entity('blueCrystal')
engine.addEntity(blueCrystal)
blueCrystal.setParent(_scene2)
const transform121 = new Transform({
  position: new Vector3(17.5, 0.1, 12),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
blueCrystal.addComponent(new OnPointerDown(() => {
  openExternalURL("https://www.flipkart.com/search?q=decor&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off")
},
  {
    distance: 10
  }
))
blueCrystal.addComponentOrReplace(transform121)
const gltfShape81 = new GLTFShape("models/add59455-719d-4fb6-adbc-72e020ff6a0a/Crystal_01/Crystal_01.glb")
gltfShape81.withCollisions = true
gltfShape81.isPointerBlocker = true
gltfShape81.visible = true
blueCrystal.addComponentOrReplace(gltfShape81)

// const smallRope = new Entity('smallRope')
// engine.addEntity(smallRope)
// smallRope.setParent(_scene2)
// const transform131 = new Transform({
//   position: new Vector3(22.5, 0.1, 21.5),
//   rotation: new Quaternion(0, 0, 0, 1),
//   scale: new Vector3(1, 1, 1)
// })
// smallRope.addComponentOrReplace(transform131)
// const gltfShape9 = new GLTFShape("models/8bff0afc-a55e-459f-9fc3-61f9d4261b20/ChineseLampRopeSmall_01/ChineseLampRopeSmall_01.glb")
// gltfShape9.withCollisions = true
// gltfShape9.isPointerBlocker = true
// gltfShape9.visible = true
// smallRope.addComponentOrReplace(gltfShape9)

const sack = new Entity('sack')
engine.addEntity(sack)
sack.setParent(_scene2)
const transform141 = new Transform({
  position: new Vector3(14, 0.1, 14),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sack.addComponent(new OnPointerDown(() => {
  openExternalURL("https://www.flipkart.com/search?q=decor&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off")
},
  {
    distance: 10
  }
))
sack.addComponentOrReplace(transform141)
const gltfShape10 = new GLTFShape("models/dc465c5e-cf7a-45ff-9415-f4ebe41ceab0/Sack_01/Sack_01.glb")
gltfShape10.withCollisions = true
gltfShape10.isPointerBlocker = true
gltfShape10.visible = true
sack.addComponentOrReplace(gltfShape10)

const aquamarineJewellery = new Entity('aquamarineJewellery')
engine.addEntity(aquamarineJewellery)
aquamarineJewellery.setParent(_scene2)
const transform151 = new Transform({
  position: new Vector3(16, 3, 12),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3, 3, 1)
})
aquamarineJewellery.addComponent(new OnPointerDown(() => {
  openExternalURL("https://www.flipkart.com/search?q=decor&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off")
},
  {
    distance: 10
  }
))
aquamarineJewellery.addComponentOrReplace(transform151)
const gltfShape11 = new GLTFShape("models/f8309235-61e9-48c2-8d8d-601199f7e66c/Gem_06/Gem_06.glb")
gltfShape11.withCollisions = true
gltfShape11.isPointerBlocker = true
gltfShape11.visible = true
aquamarineJewellery.addComponentOrReplace(gltfShape11)

const gemstoneOrnament = new Entity('gemstoneOrnament')
engine.addEntity(gemstoneOrnament)
gemstoneOrnament.setParent(_scene2)
const transform162 = new Transform({
  position: new Vector3(14.5, 0.1, 12.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
gemstoneOrnament.addComponent(new OnPointerDown(() => {
  openExternalURL("https://www.flipkart.com/search?q=decor&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off")
},
  {
    distance: 10
  }
))
gemstoneOrnament.addComponentOrReplace(transform162)
const gltfShape12 = new GLTFShape("models/e70ba92f-3ba2-4e3b-bf17-9c0591444baf/Ornament_Stone_01/Ornament_Stone_01.glb")
gltfShape12.withCollisions = true
gltfShape12.isPointerBlocker = true
gltfShape12.visible = true
gemstoneOrnament.addComponentOrReplace(gltfShape12)

const magicGemstoneTorch = new Entity('magicGemstoneTorch')
engine.addEntity(magicGemstoneTorch)
magicGemstoneTorch.setParent(_scene2)
const transform172 = new Transform({
  position: new Vector3(18, 3, 12),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
magicGemstoneTorch.addComponent(new OnPointerDown(() => {
  openExternalURL("https://www.flipkart.com/search?q=decor&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off")
},
  {
    distance: 10
  }
))
magicGemstoneTorch.addComponentOrReplace(transform172)
const gltfShape13 = new GLTFShape("models/e53ae6eb-9c7e-447d-a7fe-a95329a05233/Torch_01/Torch_01.glb")
gltfShape13.withCollisions = true
gltfShape13.isPointerBlocker = true
gltfShape13.visible = true
magicGemstoneTorch.addComponentOrReplace(gltfShape13)

const chestPlatesKey = new Entity('chestPlatesKey')
engine.addEntity(chestPlatesKey)
chestPlatesKey.setParent(_scene2)
const transform182 = new Transform({
  position: new Vector3(18.5, 3, 13.5),
  rotation: new Quaternion(-0.7056509256362915, 0.7083015441894531, 0.01478154119104147, 0.012130893766880035),
  scale: new Vector3(0.9999998807907104, 1.0000005960464478, 0.9999999403953552)
})
chestPlatesKey.addComponent(new OnPointerDown(() => {
  openExternalURL("https://www.flipkart.com/search?q=decor&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off")
},
  {
    distance: 10
  }
))
chestPlatesKey.addComponentOrReplace(transform182)
const gltfShape14 = new GLTFShape("models/1f249994-a5ab-450f-868e-d6625b1ed703/Chest Plates Key.glb")
gltfShape14.withCollisions = true
gltfShape14.isPointerBlocker = true
gltfShape14.visible = true
chestPlatesKey.addComponentOrReplace(gltfShape14)

const shopEmissive2 = new Entity('shopEmissive')
engine.addEntity(shopEmissive2)
shopEmissive2.setParent(_scene2)
const transform192 = new Transform({
  position: new Vector3(16, 0, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
shopEmissive2.addComponentOrReplace(transform192)
const gltfShape15 = new GLTFShape("models/461bf97f-886b-47f7-89ce-16255f6a985f/Shop_Emissive.glb")
gltfShape15.withCollisions = true
gltfShape15.isPointerBlocker = true
gltfShape15.visible = true
shopEmissive2.addComponentOrReplace(gltfShape15)

const consoleStool2 = new Entity('consoleStool2')
engine.addEntity(consoleStool2)
consoleStool2.setParent(_scene2)
consoleStool2.addComponentOrReplace(gltfShape51)
const transform202 = new Transform({
  position: new Vector3(18, 0.1, 17),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
consoleStool2.addComponent(new OnPointerDown(() => {
  openExternalURL("https://www.flipkart.com/search?q=decor&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off")
},
  {
    distance: 10
  }
))
consoleStool2.addComponentOrReplace(transform202)

const magicGemstoneTorch2 = new Entity('magicGemstoneTorch2')
engine.addEntity(magicGemstoneTorch2)
magicGemstoneTorch2.setParent(_scene2)
magicGemstoneTorch2.addComponentOrReplace(gltfShape13)
const transform212 = new Transform({
  position: new Vector3(14, 3, 12),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
magicGemstoneTorch2.addComponent(new OnPointerDown(() => {
  openExternalURL("https://www.flipkart.com/search?q=decor&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off")
},
  {
    distance: 10
  }
))
magicGemstoneTorch2.addComponentOrReplace(transform212)

const sack2 = new Entity('sack2')
engine.addEntity(sack2)
sack2.setParent(_scene2)
sack2.addComponentOrReplace(gltfShape10)
const transform222 = new Transform({
  position: new Vector3(14, 0.1, 14),
  rotation: new Quaternion(0, 0, 0.6343932747840881, 0.7730104327201843),
  scale: new Vector3(0.9999999403953552, 0.9999999403953552, 1)
})
sack2.addComponent(new OnPointerDown(() => {
  openExternalURL("https://www.flipkart.com/search?q=decor&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off")
},
  {
    distance: 10
  }
))
sack2.addComponentOrReplace(transform222)
