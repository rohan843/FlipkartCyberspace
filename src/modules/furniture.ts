// import { createChannel } from '../../node_modules/decentraland-builder-scripts/channel'
// import { createInventory } from '../../node_modules/decentraland-builder-scripts/inventory'
// import Script1 from "../../models/a116b006-c177-4e39-ab7c-a8c64761a621/src/item"

const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
    position: new Vector3(0, 0, 0),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

export function addWallLight(
    x: number,
    y: number,
    z: number,
    xScale: number = 1,
    yScale: number = 1,
    zScale: number = 1,
    xRot: number = 0,
    yRot: number = 0,
    zRot: number = 0
) {
    const wallLight = new Entity('wallLight')
    engine.addEntity(wallLight)
    wallLight.setParent(_scene)
    const transform3 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(-1, 0, 0, 1),
        scale: new Vector3(xScale, yScale, zScale)
    })
    transform3.rotation.setEuler(xRot, yRot, zRot);
    wallLight.addComponentOrReplace(transform3)
    const gltfShape2 = new GLTFShape("models/d6cbb77a-a9c5-40a3-8eba-7bdf86fc3747/LightWall_01/LightWall_01.glb")
    gltfShape2.withCollisions = true
    gltfShape2.isPointerBlocker = true
    gltfShape2.visible = true
    wallLight.addComponentOrReplace(gltfShape2)
}

export function addConicalStonePillar(x: number, y: number, z: number) {
    const conicalStonePillar = new Entity('conicalStonePillar')
    engine.addEntity(conicalStonePillar)
    conicalStonePillar.setParent(_scene)
    const transform6 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    conicalStonePillar.addComponentOrReplace(transform6)
    const gltfShape2 = new GLTFShape("12db208d-b6a0-4256-9bc7-25c2e19006e0/Pillar_Cylinder_04/Pillar_Cylinder_04.glb")
    gltfShape2.withCollisions = true
    gltfShape2.isPointerBlocker = true
    gltfShape2.visible = true
    conicalStonePillar.addComponentOrReplace(gltfShape2)
}

export function addOrnamentalStonePillar(x: number, y: number, z: number) {
    const ornamentalStonePillar = new Entity('ornamentalStonePillar')
    engine.addEntity(ornamentalStonePillar)
    ornamentalStonePillar.setParent(_scene)
    const transform7 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    ornamentalStonePillar.addComponentOrReplace(transform7)
    const gltfShape3 = new GLTFShape("a483fe6d-be3d-4810-b00c-7998b3dd949b/Pillar_Cylinder_03/Pillar_Cylinder_03.glb")
    gltfShape3.withCollisions = true
    gltfShape3.isPointerBlocker = true
    gltfShape3.visible = true
    ornamentalStonePillar.addComponentOrReplace(gltfShape3)
}

export function addSmallStonePillar(x: number, y: number, z: number) {
    const smallStonePillar = new Entity('smallStonePillar')
    engine.addEntity(smallStonePillar)
    smallStonePillar.setParent(_scene)
    const transform8 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    smallStonePillar.addComponentOrReplace(transform8)
    const gltfShape4 = new GLTFShape("40f5aa21-8036-4147-b9a7-da48c0c8c06b/Pillar_Cylinder_02/Pillar_Cylinder_02.glb")
    gltfShape4.withCollisions = true
    gltfShape4.isPointerBlocker = true
    gltfShape4.visible = true
    smallStonePillar.addComponentOrReplace(gltfShape4)
}
export function addStraightBarrier(x: number, y: number, z: number) {
    const straightBarrier = new Entity('straightBarrier')
    engine.addEntity(straightBarrier)
    straightBarrier.setParent(_scene)
    const transform4 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    straightBarrier.addComponentOrReplace(transform4)
    const gltfShape3 = new GLTFShape("models/1a62ad73-f11e-4c5d-ab1b-a3328d4ab1f3/Fence_Straight_01/Fence_Straight_01.glb")
    gltfShape3.withCollisions = true
    gltfShape3.isPointerBlocker = true
    gltfShape3.visible = true
    straightBarrier.addComponentOrReplace(gltfShape3)
}

export function addStainedGlassStoneBrickWindow(x: number, y: number, z: number) {
    const stoneBrickWindowWithStainedGlass = new Entity('stoneBrickWindowWithStainedGlass')
    engine.addEntity(stoneBrickWindowWithStainedGlass)
    stoneBrickWindowWithStainedGlass.setParent(_scene)
    const transform5 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    stoneBrickWindowWithStainedGlass.addComponentOrReplace(transform5)
    const gltfShape4 = new GLTFShape("models/63b1ed7a-fd00-41f0-9eab-71e17873b491/Module_Stone_Straight_Window_02/Module_Stone_Straight_Window_02.glb")
    gltfShape4.withCollisions = true
    gltfShape4.isPointerBlocker = true
    gltfShape4.visible = true
    stoneBrickWindowWithStainedGlass.addComponentOrReplace(gltfShape4)
}

export function addLargeLowStoneWall(x: number, y: number, z: number) {
    const largeLowStoneWall = new Entity('largeLowStoneWall')
    engine.addEntity(largeLowStoneWall)
    largeLowStoneWall.setParent(_scene)
    const transform6 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    largeLowStoneWall.addComponentOrReplace(transform6)
    const gltfShape5 = new GLTFShape("models/0647e344-28de-4590-b5da-a476fe7dcf99/FenceStoneLarge_02/FenceStoneLarge_02.glb")
    gltfShape5.withCollisions = true
    gltfShape5.isPointerBlocker = true
    gltfShape5.visible = true
    largeLowStoneWall.addComponentOrReplace(gltfShape5)
}

export function addLowStonePillar(x: number, y: number, z: number) {
    const lowStonePillar = new Entity('lowStonePillar')
    engine.addEntity(lowStonePillar)
    lowStonePillar.setParent(_scene)
    const transform7 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    lowStonePillar.addComponentOrReplace(transform7)
    const gltfShape6 = new GLTFShape("models/29df1bf7-2421-4e42-aafd-b448aa1f17d1/FenceStonePillar_01/FenceStonePillar_01.glb")
    gltfShape6.withCollisions = true
    gltfShape6.isPointerBlocker = true
    gltfShape6.visible = true
    lowStonePillar.addComponentOrReplace(gltfShape6)
}

export function addStoneBrickThreshold(x: number, y: number, z: number) {
    const stoneBrickThreshold = new Entity('stoneBrickThreshold')
    engine.addEntity(stoneBrickThreshold)
    stoneBrickThreshold.setParent(_scene)
    const transform8 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    stoneBrickThreshold.addComponentOrReplace(transform8)
    const gltfShape7 = new GLTFShape("models/4e47bac9-96be-4b23-a40b-61306db54f13/Module_Stone_Straight_Door_01/Module_Stone_Straight_Door_01.glb")
    gltfShape7.withCollisions = true
    gltfShape7.isPointerBlocker = true
    gltfShape7.visible = true
    stoneBrickThreshold.addComponentOrReplace(gltfShape7)
}

export function addGrafittiWallShortF(x: number, y: number, z: number) {
    const grafittiWallShortF = new Entity('grafittiWallShortF')
    engine.addEntity(grafittiWallShortF)
    grafittiWallShortF.setParent(_scene)
    const transform9 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    grafittiWallShortF.addComponentOrReplace(transform9)
    const gltfShape8 = new GLTFShape("models/5ec928dc-1cc2-40d9-b132-5b71296e87af/Grafitti_Wall_Short_F.glb")
    gltfShape8.withCollisions = true
    gltfShape8.isPointerBlocker = true
    gltfShape8.visible = true
    grafittiWallShortF.addComponentOrReplace(gltfShape8)
}

export function addCurvedBarrierEnd(
    x: number,
    y: number,
    z: number,
    xRot: number = 0,
    yRot: number = 0,
    zRot: number = 0
) {
    const curvedBarrierEnd = new Entity('curvedBarrierEnd')
    engine.addEntity(curvedBarrierEnd)
    curvedBarrierEnd.setParent(_scene)
    const transform10 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    transform10.rotation.setEuler(xRot, yRot, zRot)
    curvedBarrierEnd.addComponentOrReplace(transform10)
    const gltfShape9 = new GLTFShape("models/a2feb0bb-a805-40ff-83fb-337785bf7eb3/Fence_End_01/Fence_End_01.glb")
    gltfShape9.withCollisions = true
    gltfShape9.isPointerBlocker = true
    gltfShape9.visible = true
    curvedBarrierEnd.addComponentOrReplace(gltfShape9)
}

export function addFullCurvedBarrier(x: number, y: number, z: number) {
    const fullCurvedBarrier = new Entity('fullCurvedBarrier')
    engine.addEntity(fullCurvedBarrier)
    fullCurvedBarrier.setParent(_scene)
    const transform11 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    fullCurvedBarrier.addComponentOrReplace(transform11)
    const gltfShape10 = new GLTFShape("models/368746f0-d50f-4228-88f8-bd199240b71a/Fence_Straight_02/Fence_Straight_02.glb")
    gltfShape10.withCollisions = true
    gltfShape10.isPointerBlocker = true
    gltfShape10.visible = true
    fullCurvedBarrier.addComponentOrReplace(gltfShape10)
}

export function addCornerStoneBrickWall(
    x: number,
    y: number,
    z: number,
    xRot: number = 0,
    yRot: number = 0,
    zRot: number = 0
) {
    const cornerStoneBrickWall = new Entity('cornerStoneBrickWall')
    engine.addEntity(cornerStoneBrickWall)
    cornerStoneBrickWall.setParent(_scene)
    const transform12 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    transform12.rotation.setEuler(xRot, yRot, zRot);
    cornerStoneBrickWall.addComponentOrReplace(transform12)
    const gltfShape11 = new GLTFShape("models/018773fa-dd9b-4924-a07c-c803fa36f9a5/Module_Stone_Curve_01/Module_Stone_Curve_01.glb")
    gltfShape11.withCollisions = true
    gltfShape11.isPointerBlocker = true
    gltfShape11.visible = true
    cornerStoneBrickWall.addComponentOrReplace(gltfShape11)
}

export function addCurvedStoneBrickWall(x: number, y: number, z: number) {
    const curvedStoneBrickWall = new Entity('curvedStoneBrickWall')
    engine.addEntity(curvedStoneBrickWall)
    curvedStoneBrickWall.setParent(_scene)
    const transform13 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    curvedStoneBrickWall.addComponentOrReplace(transform13)
    const gltfShape12 = new GLTFShape("models/0c52bf55-7b0f-4eca-9b3c-b1fbb81c7219/Module_Stone_Curve_02/Module_Stone_Curve_02.glb")
    gltfShape12.withCollisions = true
    gltfShape12.isPointerBlocker = true
    gltfShape12.visible = true
    curvedStoneBrickWall.addComponentOrReplace(gltfShape12)
}

export function addMediumStoneWall(x: number, y: number, z: number) {
    const mediumStoneWall = new Entity('mediumStoneWall')
    engine.addEntity(mediumStoneWall)
    mediumStoneWall.setParent(_scene)
    const transform14 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    mediumStoneWall.addComponentOrReplace(transform14)
    const gltfShape13 = new GLTFShape("models/09f6a01c-2ddc-4e13-a147-da50f5ca08ef/Wall_Stone_Medium/Wall_Stone_Medium.glb")
    gltfShape13.withCollisions = true
    gltfShape13.isPointerBlocker = true
    gltfShape13.visible = true
    mediumStoneWall.addComponentOrReplace(gltfShape13)
}

export function addStoneBrickWall(
    x: number,
    y: number,
    z: number,
    xRot: number = 0,
    yRot: number = 0,
    zRot: number = 0
) {
    const stoneBrickWall = new Entity('stoneBrickWall')
    engine.addEntity(stoneBrickWall)
    stoneBrickWall.setParent(_scene)
    const transform15 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    transform15.rotation.setEuler(xRot, yRot, zRot);
    stoneBrickWall.addComponentOrReplace(transform15)
    const gltfShape14 = new GLTFShape("models/5ed9c4c0-8a9c-4c0d-814c-d40354987f2b/Module_Stone_Straight_01/Module_Stone_Straight_01.glb")
    gltfShape14.withCollisions = true
    gltfShape14.isPointerBlocker = true
    gltfShape14.visible = true
    stoneBrickWall.addComponentOrReplace(gltfShape14)
}

export function addStreetBarrier(x: number, y: number, z: number) {
    const streetBarrier = new Entity('streetBarrier')
    engine.addEntity(streetBarrier)
    streetBarrier.setParent(_scene)
    const transform16 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    streetBarrier.addComponentOrReplace(transform16)
    const gltfShape15 = new GLTFShape("models/d433495e-cb00-4231-b46f-ceb077dbe435/StreetFence_01/StreetFence_01.glb")
    gltfShape15.withCollisions = true
    gltfShape15.isPointerBlocker = true
    gltfShape15.visible = true
    streetBarrier.addComponentOrReplace(gltfShape15)
}

export function addWallArrowBoard(x: number, y: number, z: number) {
    const wallArrowBoard = new Entity('wallArrowBoard')
    engine.addEntity(wallArrowBoard)
    wallArrowBoard.setParent(_scene)
    const transform17 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    wallArrowBoard.addComponentOrReplace(transform17)
    const gltfShape16 = new GLTFShape("models/ec5280d7-f106-48d8-b593-623ce6805afe/ArrowBoardWall.glb")
    gltfShape16.withCollisions = true
    gltfShape16.isPointerBlocker = true
    gltfShape16.visible = true
    wallArrowBoard.addComponentOrReplace(gltfShape16)
}

export function addWallCorrugatedMetal(x: number, y: number, z: number) {
    const wallCorrugatedMetal = new Entity('wallCorrugatedMetal')
    engine.addEntity(wallCorrugatedMetal)
    wallCorrugatedMetal.setParent(_scene)
    const transform18 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    wallCorrugatedMetal.addComponentOrReplace(transform18)
    const gltfShape17 = new GLTFShape("models/ed5d1431-0172-4730-b81c-856fc44043f7/CorrugatedMetalWall.glb")
    gltfShape17.withCollisions = true
    gltfShape17.isPointerBlocker = true
    gltfShape17.visible = true
    wallCorrugatedMetal.addComponentOrReplace(gltfShape17)
}

export function addWallHexagonGrid(x: number, y: number, z: number) {
    const wallHexagonGrid = new Entity('wallHexagonGrid')
    engine.addEntity(wallHexagonGrid)
    wallHexagonGrid.setParent(_scene)
    const transform19 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    wallHexagonGrid.addComponentOrReplace(transform19)
    const gltfShape18 = new GLTFShape("models/59fecc02-0949-4feb-9501-f4279744b57e/HexagonGridWall.glb")
    gltfShape18.withCollisions = true
    gltfShape18.isPointerBlocker = true
    gltfShape18.visible = true
    wallHexagonGrid.addComponentOrReplace(gltfShape18)
}

export function addWallMetalBolts(x: number, y: number, z: number) {
    const wallMetalBolts = new Entity('wallMetalBolts')
    engine.addEntity(wallMetalBolts)
    wallMetalBolts.setParent(_scene)
    const transform20 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    wallMetalBolts.addComponentOrReplace(transform20)
    const gltfShape19 = new GLTFShape("models/9a51cc2f-779d-4d10-92f8-9264f187dc30/MetalBoltsWall.glb")
    gltfShape19.withCollisions = true
    gltfShape19.isPointerBlocker = true
    gltfShape19.visible = true
    wallMetalBolts.addComponentOrReplace(gltfShape19)
}

export function addWallLEDGrid(x: number, y: number, z: number) {
    const wallLEDGrid = new Entity('wallLEDGrid')
    engine.addEntity(wallLEDGrid)
    wallLEDGrid.setParent(_scene)
    const transform21 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    wallLEDGrid.addComponentOrReplace(transform21)
    const gltfShape20 = new GLTFShape("models/bdd5671b-9c8f-43c7-8385-f0dd70257863/LEDGridWall.glb")
    gltfShape20.withCollisions = true
    gltfShape20.isPointerBlocker = true
    gltfShape20.visible = true
    wallLEDGrid.addComponentOrReplace(gltfShape20)
}

export function addWallClock(x: number, y: number, z: number) {
    const wallClock = new Entity('wallClock')
    engine.addEntity(wallClock)
    wallClock.setParent(_scene)
    const transform22 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(-0.7071068286895752, 1.5394153601527394e-15, 8.429369557916289e-8, 0.7071068286895752),
        scale: new Vector3(1, 1.0000004768371582, 1.0000004768371582)
    })
    wallClock.addComponentOrReplace(transform22)
    const gltfShape21 = new GLTFShape("models/a0186d6a-2e78-410a-bb52-fb4d6c3289a9/Wall Clock.glb")
    gltfShape21.withCollisions = true
    gltfShape21.isPointerBlocker = true
    gltfShape21.visible = true
    wallClock.addComponentOrReplace(gltfShape21)
}

export function addWallcornerCyberpunk(x: number, y: number, z: number) {
    const wallcornerCyberpunk = new Entity('wallcornerCyberpunk')
    engine.addEntity(wallcornerCyberpunk)
    wallcornerCyberpunk.setParent(_scene)
    const transform23 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    wallcornerCyberpunk.addComponentOrReplace(transform23)
    const gltfShape22 = new GLTFShape("models/f554c4c1-8a48-4808-aaa1-e60b1bfa908f/CyberpunkCorner.glb")
    gltfShape22.withCollisions = true
    gltfShape22.isPointerBlocker = true
    gltfShape22.visible = true
    wallcornerCyberpunk.addComponentOrReplace(gltfShape22)
}

export function addSteampunkBench(
    x: number, 
    y: number, 
    z: number,
    xRot: number = 0, 
    yRot: number = 0, 
    zRot: number = 0
) {
    const steampunkBench = new Entity('steampunkBench')
    engine.addEntity(steampunkBench)
    steampunkBench.setParent(_scene)
    const transform24 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    transform24.rotation.setEuler(xRot, yRot, zRot);
    steampunkBench.addComponentOrReplace(transform24)
    const gltfShape23 = new GLTFShape("models/c17db1de-1c8f-4e30-b8cf-d470d0ca7fcf/Steampunk Bench.glb")
    gltfShape23.withCollisions = true
    gltfShape23.isPointerBlocker = true
    gltfShape23.visible = true
    steampunkBench.addComponentOrReplace(gltfShape23)
}

export function addMoonlightWoodenBench(x: number, y: number, z: number) {
    const moonlightWoodenBench = new Entity('moonlightWoodenBench')
    engine.addEntity(moonlightWoodenBench)
    moonlightWoodenBench.setParent(_scene)
    const transform25 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    moonlightWoodenBench.addComponentOrReplace(transform25)
    const gltfShape24 = new GLTFShape("models/9f575179-e116-4a04-84d9-7700f665184a/Bench_01/Bench_01.glb")
    gltfShape24.withCollisions = true
    gltfShape24.isPointerBlocker = true
    gltfShape24.visible = true
    moonlightWoodenBench.addComponentOrReplace(gltfShape24)
}

export function addTheFountainOfBrokenDreams(x: number, y: number, z: number) {
    const theFountainOfBrokenDreams = new Entity('theFountainOfBrokenDreams')
    engine.addEntity(theFountainOfBrokenDreams)
    theFountainOfBrokenDreams.setParent(_scene)
    const transform26 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    theFountainOfBrokenDreams.addComponentOrReplace(transform26)
    const gltfShape25 = new GLTFShape("models/9a320bf3-e09f-48d7-a1a5-a8052535d1f2/Fountain_02/Fountain_02.glb")
    gltfShape25.withCollisions = true
    gltfShape25.isPointerBlocker = true
    gltfShape25.visible = true
    theFountainOfBrokenDreams.addComponentOrReplace(gltfShape25)
}

export function addTheFountainOfSpirits(x: number, y: number, z: number) {
    const theFountainOfSpirits = new Entity('theFountainOfSpirits')
    engine.addEntity(theFountainOfSpirits)
    theFountainOfSpirits.setParent(_scene)
    const transform27 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(2, 2, 2)
    })
    theFountainOfSpirits.addComponentOrReplace(transform27)
    const gltfShape26 = new GLTFShape("models/fca5ed25-573f-4792-ac64-3d5a48933dec/Fountain_01/Fountain_01.glb")
    gltfShape26.withCollisions = true
    gltfShape26.isPointerBlocker = true
    gltfShape26.visible = true
    theFountainOfSpirits.addComponentOrReplace(gltfShape26)
}

export function addRoadCobbleCrossLong(x: number, y: number, z: number) {
    const roadCobbleCrossLong = new Entity('roadCobbleCrossLong')
    engine.addEntity(roadCobbleCrossLong)
    roadCobbleCrossLong.setParent(_scene)
    const transform2 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    roadCobbleCrossLong.addComponentOrReplace(transform2)
    const gltfShape = new GLTFShape("models/bfff3e0c-3958-46ac-99d4-0724429a90d9/Road Cobble Cross Long.glb")
    gltfShape.withCollisions = true
    gltfShape.isPointerBlocker = true
    gltfShape.visible = true
    roadCobbleCrossLong.addComponentOrReplace(gltfShape)
}

export function addRoadCobbleStraight(x: number, y: number, z: number) {
    const roadCobbleStraight = new Entity('roadCobbleStraight')
    engine.addEntity(roadCobbleStraight)
    roadCobbleStraight.setParent(_scene)
    const transform7 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    roadCobbleStraight.addComponentOrReplace(transform7)
    const gltfShape3 = new GLTFShape("models/36c28c69-e943-416a-9f73-c1ab82944c23/Road Cobble Straight.glb")
    gltfShape3.withCollisions = true
    gltfShape3.isPointerBlocker = true
    gltfShape3.visible = true
    roadCobbleStraight.addComponentOrReplace(gltfShape3)
}

export function addRoadCobbleT(x: number, y: number, z: number) {
    const roadCobbleT = new Entity('roadCobbleT')
    engine.addEntity(roadCobbleT)
    roadCobbleT.setParent(_scene)
    const transform8 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    roadCobbleT.addComponentOrReplace(transform8)
    const gltfShape4 = new GLTFShape("models/4432e823-05c8-4a95-aaae-0fe2742765ef/Road Cobble T.glb")
    gltfShape4.withCollisions = true
    gltfShape4.isPointerBlocker = true
    gltfShape4.visible = true
    roadCobbleT.addComponentOrReplace(gltfShape4)
}

export function addRoadCobbleTShort(x: number, y: number, z: number) {
    const roadCobbleTShort = new Entity('roadCobbleTShort')
    engine.addEntity(roadCobbleTShort)
    roadCobbleTShort.setParent(_scene)
    const transform9 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    roadCobbleTShort.addComponentOrReplace(transform9)
    const gltfShape5 = new GLTFShape("models/c7015da9-0ffc-4359-997a-94b06d3654ac/Road Cobble T Short.glb")
    gltfShape5.withCollisions = true
    gltfShape5.isPointerBlocker = true
    gltfShape5.visible = true
    roadCobbleTShort.addComponentOrReplace(gltfShape5)
}

export function addRoadCross(x: number, y: number, z: number) {
    const roadCross = new Entity('roadCross')
    engine.addEntity(roadCross)
    roadCross.setParent(_scene)
    const transform10 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    roadCross.addComponentOrReplace(transform10)
    const gltfShape6 = new GLTFShape("models/efa7cf32-9129-45e9-b3ff-e9193c029dbf/Road Cross.glb")
    gltfShape6.withCollisions = true
    gltfShape6.isPointerBlocker = true
    gltfShape6.visible = true
    roadCross.addComponentOrReplace(gltfShape6)
}

export function addRoadCrossShort(x: number, y: number, z: number) {
    const roadCrossShort = new Entity('roadCrossShort')
    engine.addEntity(roadCrossShort)
    roadCrossShort.setParent(_scene)
    const transform11 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    roadCrossShort.addComponentOrReplace(transform11)
    const gltfShape7 = new GLTFShape("models/2d8c6889-2029-458b-a40a-b48e3e4ebcd8/Road Cross Short.glb")
    gltfShape7.withCollisions = true
    gltfShape7.isPointerBlocker = true
    gltfShape7.visible = true
    roadCrossShort.addComponentOrReplace(gltfShape7)
}

export function addRoadStraight(x: number, y: number, z: number) {
    const roadStraight = new Entity('roadStraight')
    engine.addEntity(roadStraight)
    roadStraight.setParent(_scene)
    const transform12 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    roadStraight.addComponentOrReplace(transform12)
    const gltfShape8 = new GLTFShape("models/1a60f177-c822-4d6a-b65a-983c90e05ad6/Road Straight.glb")
    gltfShape8.withCollisions = true
    gltfShape8.isPointerBlocker = true
    gltfShape8.visible = true
    roadStraight.addComponentOrReplace(gltfShape8)
}

export function addRockTile(x: number, y: number, z: number) {
    const rockTile = new Entity('rockTile')
    engine.addEntity(rockTile)
    rockTile.setParent(_scene)
    const transform13 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    rockTile.addComponentOrReplace(transform13)
    const gltfShape9 = new GLTFShape("models/5df296c5-f070-44dc-9ba2-8cafe7852037/FloorBlock_04/FloorBlock_04.glb")
    gltfShape9.withCollisions = true
    gltfShape9.isPointerBlocker = true
    gltfShape9.visible = true
    rockTile.addComponentOrReplace(gltfShape9)
}

export function addOverheadRoadSign(x: number, y: number, z: number) {
    const overheadRoadSign = new Entity('overheadRoadSign')
    engine.addEntity(overheadRoadSign)
    overheadRoadSign.setParent(_scene)
    const transform14 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    overheadRoadSign.addComponentOrReplace(transform14)
    const gltfShape10 = new GLTFShape("models/451e7f17-ec8d-4beb-a383-0ec634eb341e/Overhead_Road_Sign.glb")
    gltfShape10.withCollisions = true
    gltfShape10.isPointerBlocker = true
    gltfShape10.visible = true
    overheadRoadSign.addComponentOrReplace(gltfShape10)
}

// TODO: See
// export function addtelephoneBooth(x: number, y: number, z: number) {
//     const telephoneBooth = new Entity('telephoneBooth')
//     engine.addEntity(telephoneBooth)
//     telephoneBooth.setParent(_scene)
//     const transform15 = new Transform({
//         position: new Vector3(x, y, z),
//         rotation: new Quaternion(0, 0, 0, 1),
//         scale: new Vector3(1, 1, 1)
//     })
//     const channelId = Math.random().toString(16).slice(2)
//     const channelBus = new MessageBus()
//     const inventory = createInventory(UICanvas, UIContainerStack, UIImage)
//     const options = { inventory }

//     const script1 = new Script1()
//     // script1.init(options)
//     script1.init()
//     script1.spawn(telephoneBooth, { "clickable": true }, createChannel(channelId, telephoneBooth, channelBus))

//     telephoneBooth.addComponentOrReplace(transform15)
// }

export function addGrassTile(x: number, y: number, z: number) {
    const grassTile = new Entity('grassTile')
    engine.addEntity(grassTile)
    grassTile.setParent(_scene)
    const transform16 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    grassTile.addComponentOrReplace(transform16)
    const gltfShape11 = new GLTFShape("models/7f2dbcb5-40f5-4e2f-9409-1886d26ce068/FloorBlock_05/FloorBlock_05.glb")
    gltfShape11.withCollisions = true
    gltfShape11.isPointerBlocker = true
    gltfShape11.visible = true
    grassTile.addComponentOrReplace(gltfShape11)
}

export function addSandTile(x: number, y: number, z: number) {
    const sandTile = new Entity('sandTile')
    engine.addEntity(sandTile)
    sandTile.setParent(_scene)
    const transform17 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    sandTile.addComponentOrReplace(transform17)
    const gltfShape12 = new GLTFShape("models/1874152b-dd3d-4890-960a-4e7719346326/FloorBlock_02/FloorBlock_02.glb")
    gltfShape12.withCollisions = true
    gltfShape12.isPointerBlocker = true
    gltfShape12.visible = true
    sandTile.addComponentOrReplace(gltfShape12)
}

export function addSideWalkTile(x: number, y: number, z: number) {
    const sidewalkTile = new Entity('sidewalkTile')
    engine.addEntity(sidewalkTile)
    sidewalkTile.setParent(_scene)
    const transform18 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    sidewalkTile.addComponentOrReplace(transform18)
    const gltfShape13 = new GLTFShape("models/9e52d29e-d70c-4dc2-9cff-80cfc2771b58/FloorBlock_01/FloorBlock_01.glb")
    gltfShape13.withCollisions = true
    gltfShape13.isPointerBlocker = true
    gltfShape13.visible = true
    sidewalkTile.addComponentOrReplace(gltfShape13)
}

export function addWoodTile(x: number, y: number, z: number) {
    const woodTile = new Entity('woodTile')
    engine.addEntity(woodTile)
    woodTile.setParent(_scene)
    const transform19 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    woodTile.addComponentOrReplace(transform19)
    const gltfShape14 = new GLTFShape("models/df6bc5c0-5989-4251-8d1f-38edcf9c9beb/FloorBlock_03/FloorBlock_03.glb")
    gltfShape14.withCollisions = true
    gltfShape14.isPointerBlocker = true
    gltfShape14.visible = true
    woodTile.addComponentOrReplace(gltfShape14)
}

export function addRoadCobbleAngled(x: number, y: number, z: number) {
    const roadCobbleAngled = new Entity('roadCobbleAngled')
    engine.addEntity(roadCobbleAngled)
    roadCobbleAngled.setParent(_scene)
    const transform20 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    roadCobbleAngled.addComponentOrReplace(transform20)
    const gltfShape15 = new GLTFShape("models/c3fe212d-f3c1-47e2-aa8b-707492866281/Road Cobble Angled.glb")
    gltfShape15.withCollisions = true
    gltfShape15.isPointerBlocker = true
    gltfShape15.visible = true
    roadCobbleAngled.addComponentOrReplace(gltfShape15)
}

export function addRoadCobbleEnd(x: number, y: number, z: number) {
    const roadCobbleEnd = new Entity('roadCobbleEnd')
    engine.addEntity(roadCobbleEnd)
    roadCobbleEnd.setParent(_scene)
    const transform21 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    roadCobbleEnd.addComponentOrReplace(transform21)
    const gltfShape16 = new GLTFShape("models/1ef4b5ec-c278-422e-b072-48c04dddce08/Road Cobble End.glb")
    gltfShape16.withCollisions = true
    gltfShape16.isPointerBlocker = true
    gltfShape16.visible = true
    roadCobbleEnd.addComponentOrReplace(gltfShape16)
}

export function addRoadAngle(x: number, y: number, z: number) {
    const roadAngle = new Entity('roadAngle')
    engine.addEntity(roadAngle)
    roadAngle.setParent(_scene)
    const transform22 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    roadAngle.addComponentOrReplace(transform22)
    const gltfShape17 = new GLTFShape("models/16f2ad21-56ab-4d28-bcce-f818cd390fcf/Road Angle.glb")
    gltfShape17.withCollisions = true
    gltfShape17.isPointerBlocker = true
    gltfShape17.visible = true
    roadAngle.addComponentOrReplace(gltfShape17)
}

export function addRoadT(x: number, y: number, z: number) {
    const roadT = new Entity('roadT')
    engine.addEntity(roadT)
    roadT.setParent(_scene)
    const transform23 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    roadT.addComponentOrReplace(transform23)
    const gltfShape18 = new GLTFShape("models/6497938f-280d-4956-9f3f-0cde1af7b1e1/Road T.glb")
    gltfShape18.withCollisions = true
    gltfShape18.isPointerBlocker = true
    gltfShape18.visible = true
    roadT.addComponentOrReplace(gltfShape18)
}

export function addRoadTShort(x: number, y: number, z: number) {
    const roadTShort = new Entity('roadTShort')
    engine.addEntity(roadTShort)
    roadTShort.setParent(_scene)
    const transform24 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    roadTShort.addComponentOrReplace(transform24)
    const gltfShape19 = new GLTFShape("models/22b22059-a866-4675-b2e4-d5c11b2c80aa/Road T Short.glb")
    gltfShape19.withCollisions = true
    gltfShape19.isPointerBlocker = true
    gltfShape19.visible = true
    roadTShort.addComponentOrReplace(gltfShape19)
}

export function addCaribeanWaterWithRocksPatch(x: number, y: number, z: number) {
    const caribbeanShoreWithRocksPatch = new Entity('caribbeanShoreWithRocksPatch')
    engine.addEntity(caribbeanShoreWithRocksPatch)
    caribbeanShoreWithRocksPatch.setParent(_scene)
    const transform25 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    caribbeanShoreWithRocksPatch.addComponentOrReplace(transform25)
    const gltfShape20 = new GLTFShape("models/fd9eb4ee-2caa-4fc5-8bd3-bc34288b515e/WaterPatchCurve_01/WaterPatchCurve_01.glb")
    gltfShape20.withCollisions = true
    gltfShape20.isPointerBlocker = true
    gltfShape20.visible = true
    caribbeanShoreWithRocksPatch.addComponentOrReplace(gltfShape20)
}

export function addCaribeanWaterWithTwoSideRocks(x: number, y: number, z: number) {
    const caribbeanWaterWithTwoSideRocks = new Entity('caribbeanWaterWithTwoSideRocks')
    engine.addEntity(caribbeanWaterWithTwoSideRocks)
    caribbeanWaterWithTwoSideRocks.setParent(_scene)
    const transform26 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    caribbeanWaterWithTwoSideRocks.addComponentOrReplace(transform26)
    const gltfShape21 = new GLTFShape("models/01d15783-7d05-42d6-a010-3db4b60c63dd/WaterPatchCornerOutside_01/WaterPatchCornerOutside_01.glb")
    gltfShape21.withCollisions = true
    gltfShape21.isPointerBlocker = true
    gltfShape21.visible = true
    caribbeanWaterWithTwoSideRocks.addComponentOrReplace(gltfShape21)
}

export function addCaribeanWaterWithCornerRocks(x: number, y: number, z: number) {
    const caribbeanWaterWithCornerRocks = new Entity('caribbeanWaterWithCornerRocks')
    engine.addEntity(caribbeanWaterWithCornerRocks)
    caribbeanWaterWithCornerRocks.setParent(_scene)
    const transform27 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    caribbeanWaterWithCornerRocks.addComponentOrReplace(transform27)
    const gltfShape22 = new GLTFShape("models/fc559a0b-41b9-4d53-b24c-1713ad9c161c/WaterPatchCornerInside_01/WaterPatchCornerInside_01.glb")
    gltfShape22.withCollisions = true
    gltfShape22.isPointerBlocker = true
    gltfShape22.visible = true
    caribbeanWaterWithCornerRocks.addComponentOrReplace(gltfShape22)
}

export function addCaribeanWaterWithSideRocks(x: number, y: number, z: number) {
    const caribbeanWaterWithSideRocks = new Entity('caribbeanWaterWithSideRocks')
    engine.addEntity(caribbeanWaterWithSideRocks)
    caribbeanWaterWithSideRocks.setParent(_scene)
    const transform28 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    caribbeanWaterWithSideRocks.addComponentOrReplace(transform28)
    const gltfShape23 = new GLTFShape("models/52850b6b-49b5-40f6-8b1b-c5ee95de159b/WaterPatchSide_01/WaterPatchSide_01.glb")
    gltfShape23.withCollisions = true
    gltfShape23.isPointerBlocker = true
    gltfShape23.visible = true
    caribbeanWaterWithSideRocks.addComponentOrReplace(gltfShape23)
}

export function addCaribeanWater(x: number, y: number, z: number) {
    const caribbeanWater = new Entity('caribbeanWater')
    engine.addEntity(caribbeanWater)
    caribbeanWater.setParent(_scene)
    const transform29 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    caribbeanWater.addComponentOrReplace(transform29)
    const gltfShape24 = new GLTFShape("models/390b876e-4b3a-4e78-bd03-5be21b1ecc67/WaterPatchFull_01/WaterPatchFull_01.glb")
    gltfShape24.withCollisions = true
    gltfShape24.isPointerBlocker = true
    gltfShape24.visible = true
    caribbeanWater.addComponentOrReplace(gltfShape24)
}



export function addContructionMetalFence(x: number, y: number, z: number) {
    const constructionMetalFence = new Entity('constructionMetalFence')
    engine.addEntity(constructionMetalFence)
    constructionMetalFence.setParent(_scene)
    const transform2 = new Transform({
        position: new Vector3(x,y,z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    constructionMetalFence.addComponentOrReplace(transform2)
    const gltfShape = new GLTFShape("models/a66ffa82-0161-4a32-93b0-66626d72e87e/ConstructionFence_02/ConstructionFence_02.glb")
    gltfShape.withCollisions = true
    gltfShape.isPointerBlocker = true
    gltfShape.visible = true
    constructionMetalFence.addComponentOrReplace(gltfShape)
}
export function addfencedoor(x: number, y: number, z: number){
    const fenceDoor = new Entity('fenceDoor')
    engine.addEntity(fenceDoor)
    fenceDoor.setParent(_scene)
    const transform3 = new Transform({
      position: new Vector3(x,y,z),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1)
    })
    fenceDoor.addComponentOrReplace(transform3)
    const gltfShape2 = new GLTFShape("models/d7fa26cb-8cfe-41bf-83b0-71e627a94897/FencePicketDoor_01/FencePicketDoor_01.glb")
    gltfShape2.withCollisions = true
    gltfShape2.isPointerBlocker = true
    gltfShape2.visible = true
    fenceDoor.addComponentOrReplace(gltfShape2)
}
export function addFruitKiosk(x: number, y: number, z: number){
    const fruitKiosk = new Entity('fruitKiosk')
engine.addEntity(fruitKiosk)
fruitKiosk.setParent(_scene)
const transform4 = new Transform({
  position: new Vector3(x,y,z),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
fruitKiosk.addComponentOrReplace(transform4)
const gltfShape3 = new GLTFShape("models/3bb3f823-e27a-4f4b-9a0f-fe046cb8a57d/Store_02/Store_02.glb")
gltfShape3.withCollisions = true
gltfShape3.isPointerBlocker = true
gltfShape3.visible = true
fruitKiosk.addComponentOrReplace(gltfShape3)
}

export function addFairKiosk(x: number, y: number, z: number)
{
    const fairKiosk = new Entity('fairKiosk')
engine.addEntity(fairKiosk)
fairKiosk.setParent(_scene)
const transform5 = new Transform({
  position: new Vector3(x,y,z),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
fairKiosk.addComponentOrReplace(transform5)
const gltfShape4 = new GLTFShape("models/b72478c3-f485-42b9-8dd4-94a4f34588f4/Store_01/Store_01.glb")
gltfShape4.withCollisions = true
gltfShape4.isPointerBlocker = true
gltfShape4.visible = true
fairKiosk.addComponentOrReplace(gltfShape4)

}

export function addiceCreamKiosk(x: number, y: number, z: number){
    const iceCreamKiosk = new Entity('iceCreamKiosk')
engine.addEntity(iceCreamKiosk)
iceCreamKiosk.setParent(_scene)
const transform6 = new Transform({
  position: new Vector3(x,y,z),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
iceCreamKiosk.addComponentOrReplace(transform6)
const gltfShape5 = new GLTFShape("models/3a0dddfe-be84-4100-b36e-0fb1c6c15cb2/IceCreamTruck_01/IceCreamTruck_01.glb")
gltfShape5.withCollisions = true
gltfShape5.isPointerBlocker = true
gltfShape5.visible = true
iceCreamKiosk.addComponentOrReplace(gltfShape5)
}

export function addironFenceDoor(x: number, y: number, z: number)
{
    const ironFenceDoor = new Entity('ironFenceDoor')
    engine.addEntity(ironFenceDoor)
    ironFenceDoor.setParent(_scene)
    const transform7 = new Transform({
      position: new Vector3(x,y,z),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1)
    })
    ironFenceDoor.addComponentOrReplace(transform7)
    const gltfShape6 = new GLTFShape("models/3c1b0a40-3225-49e0-b3ff-de947afe8306/FenceIronDoor_01/FenceIronDoor_01.glb")
    gltfShape6.withCollisions = true
    gltfShape6.isPointerBlocker = true
    gltfShape6.visible = true
    ironFenceDoor.addComponentOrReplace(gltfShape6)
}

export function addlargeFence(x: number, y: number, z: number)
{
    const largeFence = new Entity('largeFence')
engine.addEntity(largeFence)
largeFence.setParent(_scene)
const transform8 = new Transform({
  position: new Vector3(x,y,z),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
largeFence.addComponentOrReplace(transform8)
const gltfShape7 = new GLTFShape("models/6018e89d-e995-476a-ae26-deab3628cf29/FencePicketLarge_01/FencePicketLarge_01.glb")
gltfShape7.withCollisions = true
gltfShape7.isPointerBlocker = true
gltfShape7.visible = true
largeFence.addComponentOrReplace(gltfShape7)
}

export function addlargeOrnamentedStonedRail(x: number, y: number, z: number)
{
    const largeOrnamentedStoneRail = new Entity('largeOrnamentedStoneRail')
engine.addEntity(largeOrnamentedStoneRail)
largeOrnamentedStoneRail.setParent(_scene)
const transform9 = new Transform({
  position: new Vector3(x,y,z),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
largeOrnamentedStoneRail.addComponentOrReplace(transform9)
const gltfShape8 = new GLTFShape("models/e7f7a10a-995d-48a7-bc32-68a357f7dfe9/FenceStoneLarge_01/FenceStoneLarge_01.glb")
gltfShape8.withCollisions = true
gltfShape8.isPointerBlocker = true
gltfShape8.visible = true
largeOrnamentedStoneRail.addComponentOrReplace(gltfShape8)
}

export function addlargeIronFence(x: number, y: number, z: number)
{
    const largeIronFence = new Entity('largeIronFence')
engine.addEntity(largeIronFence)
largeIronFence.setParent(_scene)
const transform10 = new Transform({
  position: new Vector3(x,y,z),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
largeIronFence.addComponentOrReplace(transform10)
const gltfShape9 = new GLTFShape("models/1bea49b5-528b-48cf-8d97-8aef8c86bbd0/FenceIronLarge_01/FenceIronLarge_01.glb")
gltfShape9.withCollisions = true
gltfShape9.isPointerBlocker = true
gltfShape9.visible = true
largeIronFence.addComponentOrReplace(gltfShape9)
}
export function addslide(x: number, y: number, z: number)
{
    const slide = new Entity('slide')
engine.addEntity(slide)
slide.setParent(_scene)
const transform11 = new Transform({
  position: new Vector3(x,y,z),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
slide.addComponentOrReplace(transform11)
const gltfShape10 = new GLTFShape("models/34e36e9f-1cc5-49a1-8143-fcf04999e0b7/PlaygroundSlide_01/PlaygroundSlide_01.glb")
gltfShape10.withCollisions = true
gltfShape10.isPointerBlocker = true
gltfShape10.visible = true
slide.addComponentOrReplace(gltfShape10)
} 

export function addrusticLampPost(x: number, y: number, z: number)
{
    const rusticLampPost = new Entity('rusticLampPost')
engine.addEntity(rusticLampPost)
rusticLampPost.setParent(_scene)
const transform12 = new Transform({
  position: new Vector3(x,y,z),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
rusticLampPost.addComponentOrReplace(transform12)
const gltfShape11 = new GLTFShape("models/6560eb7a-bd9e-45cd-9124-5d2fe0187575/LampPost_04/LampPost_04.glb")
gltfShape11.withCollisions = true
gltfShape11.isPointerBlocker = true
gltfShape11.visible = true
rusticLampPost.addComponentOrReplace(gltfShape11)
}

export function addrustickiosk(x: number, y: number, z: number)
{
    const rusticKiosk = new Entity('rusticKiosk')
    engine.addEntity(rusticKiosk)
    rusticKiosk.setParent(_scene)
    const transform13 = new Transform({
      position: new Vector3(x,y,z),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1)
    })
    rusticKiosk.addComponentOrReplace(transform13)
    const gltfShape12 = new GLTFShape("models/5bac22be-63d7-43b9-a400-ca10623119b2/Store_03/Store_03.glb")
    gltfShape12.withCollisions = true
    gltfShape12.isPointerBlocker = true
    gltfShape12.visible = true
    rusticKiosk.addComponentOrReplace(gltfShape12)
} 

export function addornamentalFountain(x: number, y: number, z: number)
{
    const ornamentalFountain = new Entity('ornamentalFountain')
engine.addEntity(ornamentalFountain)
ornamentalFountain.setParent(_scene)
const transform14 = new Transform({
  position: new Vector3(x,y,z),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
ornamentalFountain.addComponentOrReplace(transform14)
const gltfShape13 = new GLTFShape("models/afeef180-da7d-4cc9-9703-6c24f229ac6c/Fountain_02/Fountain_02.glb")
gltfShape13.withCollisions = true
gltfShape13.isPointerBlocker = true
gltfShape13.visible = true
ornamentalFountain.addComponentOrReplace(gltfShape13)
}

export function addbeachUmbrella(x: number, y: number, z: number)
{
    const beachUmbrella = new Entity('beachUmbrella')
engine.addEntity(beachUmbrella)
beachUmbrella.setParent(_scene)
const transform16 = new Transform({
  position: new Vector3(x,y,z),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
beachUmbrella.addComponentOrReplace(transform16)
const gltfShape15 = new GLTFShape("models/0be9abea-83ae-4a9c-b24d-8a5ce1b9580f/Umbrella_01/Umbrella_01.glb")
gltfShape15.withCollisions = true
gltfShape15.isPointerBlocker = true
gltfShape15.visible = true
beachUmbrella.addComponentOrReplace(gltfShape15)
}
export function addinformationTerminal(x: number, y: number, z: number)
{
    const informationTerminal = new Entity('informationTerminal')
engine.addEntity(informationTerminal)
informationTerminal.setParent(_scene)
const transform20 = new Transform({
  position: new Vector3(x,y,z),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
informationTerminal.addComponentOrReplace(transform20)
const gltfShape19 = new GLTFShape("models/5e4a922e-50f1-40aa-a1a3-bee660371499/Terminal_01/Terminal_01.glb")
gltfShape19.withCollisions = true
gltfShape19.isPointerBlocker = true
gltfShape19.visible = true
informationTerminal.addComponentOrReplace(gltfShape19)
}

export function addShopEmissive(
    x: number, 
    y: number, 
    z: number,
    xRot: number = 0, 
    yRot: number = 0, 
    zRot: number = 0
)
{
    const shopEmissive = new Entity('shopEmissive')
engine.addEntity(shopEmissive)
shopEmissive.setParent(_scene)
const transform25 = new Transform({
  position: new Vector3(x,y,z),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
transform25.rotation.setEuler(xRot, yRot, zRot);
shopEmissive.addComponentOrReplace(transform25)
const gltfShape21 = new GLTFShape("models/461bf97f-886b-47f7-89ce-16255f6a985f/Shop_Emissive.glb")
gltfShape21.withCollisions = true
gltfShape21.isPointerBlocker = true
gltfShape21.visible = true
shopEmissive.addComponentOrReplace(gltfShape21)
}

export function addShopBlack(x: number, y: number, z: number){
    const shopBlack = new Entity('shopBlack')
engine.addEntity(shopBlack)
shopBlack.setParent(_scene)
const transform26 = new Transform({
  position: new Vector3(x,y,z),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
shopBlack.addComponentOrReplace(transform26)
const gltfShape22 = new GLTFShape("models/d3419855-54da-41a8-9267-656eb844ed91/Shop_Black.glb")
gltfShape22.withCollisions = true
gltfShape22.isPointerBlocker = true
gltfShape22.visible = true
shopBlack.addComponentOrReplace(gltfShape22)
} 
export function addShushiBar(x: number, y: number, z: number) {
    const sushiBar = new Entity('sushiBar')
engine.addEntity(sushiBar)
sushiBar.setParent(_scene)
const transform27 = new Transform({
  position: new Vector3(x,y,z),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sushiBar.addComponentOrReplace(transform27)
const gltfShape23 = new GLTFShape("models/e20782b4-2b4c-4046-a5ee-41e60912c620/Sushi_Bar.glb")
gltfShape23.withCollisions = true
gltfShape23.isPointerBlocker = true
gltfShape23.visible = true
sushiBar.addComponentOrReplace(gltfShape23)
}
// export function addvideoBillDesk(x: number, y: number, z: number) {
//     const videoBillboardBlack = new Entity('videoBillboardBlack')
// engine.addEntity(videoBillboardBlack)
// videoBillboardBlack.setParent(_scene)
// const transform28 = new Transform({
//   position: new Vector3(x,y,z),
//   rotation: new Quaternion(0, 0, 0, 1),
//   scale: new Vector3(1, 1, 1)
// })
// videoBillboardBlack.addComponentOrReplace(transform28)

// }

// export function addcomputerscreen(x: number, y: number, z: number) {
//     const imageComputerScreen = new Entity('imageComputerScreen')
//     engine.addEntity(imageComputerScreen)
//     imageComputerScreen.setParent(_scene)
//     const transform29 = new Transform({
//       position: new Vector3(x,y,z),
//       rotation: new Quaternion(0, 0, 0, 1),
//       scale: new Vector3(1, 1, 1)
//     })
//     imageComputerScreen.addComponentOrReplace(transform29)
// }

export function addplanetSurfaceViolet(x: number, y: number, z: number) {
    const planetSurfaceViolet = new Entity('planetSurfaceViolet')
    engine.addEntity(planetSurfaceViolet)
    planetSurfaceViolet.setParent(_scene)
    const transform35 = new Transform({
      position: new Vector3(x,y,z),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1)
    })
    planetSurfaceViolet.addComponentOrReplace(transform35)
    const gltfShape24 = new GLTFShape("models/d49a7cc6-15e4-47c8-94f9-f81b178314d1/PlanetFloorViolet_01/PlanetFloorViolet_01.glb")
    gltfShape24.withCollisions = true
    gltfShape24.isPointerBlocker = true
    gltfShape24.visible = true
    planetSurfaceViolet.addComponentOrReplace(gltfShape24)
}

export function addorangefloorpanel(x: number, y: number, z: number) {
    const orangeFloorPanel = new Entity('orangeFloorPanel')
engine.addEntity(orangeFloorPanel)
orangeFloorPanel.setParent(_scene)
const transform36 = new Transform({
  position: new Vector3(x,y,z),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
orangeFloorPanel.addComponentOrReplace(transform36)
const gltfShape25 = new GLTFShape("models/30a5ce08-2b42-40ae-9f6d-1b3b5c96bfea/Floor_Module_06/Floor_Module_06.glb")
gltfShape25.withCollisions = true
gltfShape25.isPointerBlocker = true
gltfShape25.visible = true
orangeFloorPanel.addComponentOrReplace(gltfShape25)
}


export function addplanetSurfaceCrimson(x: number, y: number, z: number){
    const planetSurfaceCrimson = new Entity('planetSurfaceCrimson')
engine.addEntity(planetSurfaceCrimson)
planetSurfaceCrimson.setParent(_scene)
const transform37 = new Transform({
  position: new Vector3(x,y,z),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
planetSurfaceCrimson.addComponentOrReplace(transform37)
const gltfShape26 = new GLTFShape("models/1ac5eebf-24e9-43b4-a4b3-d20c5ff49c6f/PlanetFloorRed_02/PlanetFloorRed_02.glb")
gltfShape26.withCollisions = true
gltfShape26.isPointerBlocker = true
gltfShape26.visible = true
planetSurfaceCrimson.addComponentOrReplace(gltfShape26)
} 
// export function addShopEmissive(x: number, y: number, z: number) 
// export function addShopEmissive(x: number, y: number, z: number) 
// export function addShopEmissive(x: number, y: number, z: number) 
// export function addShopEmissive(x: number, y: number, z: number) 
// export function addShopEmissive(x: number, y: number, z: number) 