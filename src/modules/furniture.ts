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

export function addSteampunkBench(x: number, y: number, z: number) {
    const steampunkBench = new Entity('steampunkBench')
    engine.addEntity(steampunkBench)
    steampunkBench.setParent(_scene)
    const transform24 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
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
        scale: new Vector3(1, 1, 1)
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

