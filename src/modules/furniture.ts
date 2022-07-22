// import { createChannel } from '../../node_modules/decentraland-builder-scripts/channel'
// import { createInventory } from '../../node_modules/decentraland-builder-scripts/inventory'
// import Script1 from "../../models/a116b006-c177-4e39-ab7c-a8c64761a621/src/item"


export const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
    position: new Vector3(0, 0, 0),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

// const _scene2 = new Entity('_scene')
// engine.addEntity(_scene2)
// const transform200 = new Transform({
//     position: new Vector3(0, 0, 0),
//     rotation: new Quaternion(0, 0, 0, 1),
//     scale: new Vector3(1, 1, 1)
// })
// _scene2.addComponentOrReplace(transform200)

// export function base_floor(){
// const base_floor = new Entity('entity')
// engine.addEntity(base_floor)
// base_floor.setParent(_scene)
// const gltfShape = new GLTFShape("models/3bd7d322-f897-444e-99f1-e4e82fb2c035/FloorBaseConcrete_01/FloorBaseConcrete_01.glb")
// gltfShape.withCollisions = true
// gltfShape.isPointerBlocker = true
// gltfShape.visible = true
// base_floor.addComponentOrReplace(gltfShape)
// const transform2 = new Transform({
//   position: new Vector3(16, 0, 56),
//   rotation: new Quaternion(0, 0, 0, 1),
//   scale: new Vector3(8, 1, 9)
// })
// base_floor.addComponentOrReplace(transform2)
// }
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

export function addStainedGlassStoneBrickWindow(
    x: number,
    y: number,
    z: number,
    xRot: number = 0,
    yRot: number = 0,
    zRot: number = 0
) {
    const stoneBrickWindowWithStainedGlass = new Entity('stoneBrickWindowWithStainedGlass')
    engine.addEntity(stoneBrickWindowWithStainedGlass)
    stoneBrickWindowWithStainedGlass.setParent(_scene)
    const transform5 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    transform5.rotation.setEuler(xRot, yRot, zRot)
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

export function addStoneBrickThreshold(
    x: number,
    y: number,
    z: number,
    xRot: number = 0,
    yRot: number = 0,
    zRot: number = 0
) {
    const stoneBrickThreshold = new Entity('stoneBrickThreshold')
    engine.addEntity(stoneBrickThreshold)
    stoneBrickThreshold.setParent(_scene)
    const transform8 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    transform8.rotation.setEuler(xRot, yRot, zRot);
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

export function addWallCorrugatedMetal(
    x: number,
    y: number,
    z: number,
    xRot: number = 0,
    yRot: number = 0,
    zRot: number = 0
) {
    const wallCorrugatedMetal = new Entity('wallCorrugatedMetal')
    engine.addEntity(wallCorrugatedMetal)
    wallCorrugatedMetal.setParent(_scene)
    const transform18 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    transform18.rotation.setEuler(xRot, yRot, zRot)
    wallCorrugatedMetal.addComponentOrReplace(transform18)
    const gltfShape17 = new GLTFShape("models/ed5d1431-0172-4730-b81c-856fc44043f7/CorrugatedMetalWall.glb")
    gltfShape17.withCollisions = true
    gltfShape17.isPointerBlocker = true
    gltfShape17.visible = true
    wallCorrugatedMetal.addComponentOrReplace(gltfShape17)
}

export function addWallHexagonGrid(
    x: number,
    y: number,
    z: number,
    xRot: number = 0,
    yRot: number = 0,
    zRot: number = 0
) {
    const wallHexagonGrid = new Entity('wallHexagonGrid')
    engine.addEntity(wallHexagonGrid)
    wallHexagonGrid.setParent(_scene)
    const transform19 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    transform19.rotation.setEuler(xRot, yRot, zRot);
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

export function addWallcornerCyberpunk(
    x: number,
    y: number,
    z: number,
    xRot: number = 0,
    yRot: number = 0,
    zRot: number = 0
) {
    const wallcornerCyberpunk = new Entity('wallcornerCyberpunk')
    engine.addEntity(wallcornerCyberpunk)
    wallcornerCyberpunk.setParent(_scene)
    const transform23 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    transform23.rotation.setEuler(xRot, yRot, zRot);
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

export function addRoadCobbleStraight(x: number, y: number, z: number,
    xScale: number = 1,
    yScale: number = 1,
    zScale: number = 1,
    xRot: number = 0,
    yRot: number = 0,
    zRot: number = 0) {
    const roadCobbleStraight = new Entity('roadCobbleStraight')
    engine.addEntity(roadCobbleStraight)
    roadCobbleStraight.setParent(_scene)
    const transform7 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(xScale, yScale, zScale)
    })
    transform7.rotation.setEuler(xRot, yRot, zRot);
    roadCobbleStraight.addComponentOrReplace(transform7)
    const gltfShape3 = new GLTFShape("models/36c28c69-e943-416a-9f73-c1ab82944c23/Road Cobble Straight.glb")
    gltfShape3.withCollisions = true
    gltfShape3.isPointerBlocker = true
    gltfShape3.visible = true
    roadCobbleStraight.addComponentOrReplace(gltfShape3)
}

export function addRoadCobbleT(x: number, y: number, z: number,
    xScale: number = 1,
    yScale: number = 1,
    zScale: number = 1,
    xRot: number = 0,
    yRot: number = 0,
    zRot: number = 0) {
    const roadCobbleT = new Entity('roadCobbleT')
    engine.addEntity(roadCobbleT)
    roadCobbleT.setParent(_scene)
    const transform8 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(xScale,yScale,zScale)
    })
    transform8.rotation.setEuler(xRot, yRot, zRot);
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

export function addRoadCobbleAngled(x: number, y: number, z: number,
    xScale: number = 1,
    yScale: number = 1,
    zScale: number = 1,
    xRot: number = 0,
    yRot: number = 0,
    zRot: number = 0) {
    const roadCobbleAngled = new Entity('roadCobbleAngled')
    engine.addEntity(roadCobbleAngled)
    roadCobbleAngled.setParent(_scene)
    const transform20 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(xScale, yScale, zScale)
    })
    transform20.rotation.setEuler(xRot, yRot, zRot);
    roadCobbleAngled.addComponentOrReplace(transform20)
    const gltfShape15 = new GLTFShape("models/c3fe212d-f3c1-47e2-aa8b-707492866281/Road Cobble Angled.glb")
    gltfShape15.withCollisions = true
    gltfShape15.isPointerBlocker = true
    gltfShape15.visible = true
    roadCobbleAngled.addComponentOrReplace(gltfShape15)
}

export function addRoadCobbleEnd(x: number, y: number, z: number,
    xScale: number = 1,
    yScale: number = 1,
    zScale: number = 1,
    xRot: number = 0,
    yRot: number = 0,
    zRot: number = 0) {
    const roadCobbleEnd = new Entity('roadCobbleEnd')
    engine.addEntity(roadCobbleEnd)
    roadCobbleEnd.setParent(_scene)
    const transform21 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(xScale,yScale,zScale)
    })
    transform21.rotation.setEuler(xRot, yRot, zRot);
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
        position: new Vector3(x, y, z),
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
export function addfencedoor(x: number, y: number, z: number) {
    const fenceDoor = new Entity('fenceDoor')
    engine.addEntity(fenceDoor)
    fenceDoor.setParent(_scene)
    const transform3 = new Transform({
        position: new Vector3(x, y, z),
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
export function addFruitKiosk(
    x: number,
    y: number,
    z: number,
    xRot: number = 0,
    yRot: number = 0,
    zRot: number = 0
) {
    const fruitKiosk = new Entity('fruitKiosk')

    fruitKiosk.addComponent(new OnPointerDown(() => {
        openExternalURL("https://www.flipkart.com/food-products/fruits/fresh-fruit/pr?sid=eat%2Cw2q%2Cb0g")
    },
        {
            distance: 10
        }
    ))

    engine.addEntity(fruitKiosk)
    fruitKiosk.setParent(_scene)
    const transform4 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    transform4.rotation.setEuler(xRot, yRot, zRot)
    fruitKiosk.addComponentOrReplace(transform4)
    const gltfShape3 = new GLTFShape("models/3bb3f823-e27a-4f4b-9a0f-fe046cb8a57d/Store_02/Store_02.glb")
    gltfShape3.withCollisions = true
    gltfShape3.isPointerBlocker = true
    gltfShape3.visible = true
    fruitKiosk.addComponentOrReplace(gltfShape3)
}

export function addFairKiosk(
    x: number,
    y: number,
    z: number,
    xRot: number = 0,
    yRot: number = 0,
    zRot: number = 0
) {
    const fairKiosk = new Entity('fairKiosk')
    engine.addEntity(fairKiosk)
    fairKiosk.setParent(_scene)
    const transform5 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })

    fairKiosk.addComponent(new OnPointerDown(() => {
        openExternalURL("https://www.flipkart.com/the-stationery-store")
    },
        {
            distance: 10
        }
    ))

    transform5.rotation.setEuler(xRot, yRot, zRot)
    fairKiosk.addComponentOrReplace(transform5)
    const gltfShape4 = new GLTFShape("models/b72478c3-f485-42b9-8dd4-94a4f34588f4/Store_01/Store_01.glb")
    gltfShape4.withCollisions = true
    gltfShape4.isPointerBlocker = true
    gltfShape4.visible = true
    fairKiosk.addComponentOrReplace(gltfShape4)

}

export function addIceCreamKiosk(
    x: number,
    y: number,
    z: number,
    xRot: number = 0,
    yRot: number = 0,
    zRot: number = 0
) {
    const iceCreamKiosk = new Entity('iceCreamKiosk')
    engine.addEntity(iceCreamKiosk)
    iceCreamKiosk.setParent(_scene)

    iceCreamKiosk.addComponent(new OnPointerDown(() => {
        openExternalURL("https://www.flipkart.com/search?q=ice%20cream&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off")
    },
        {
            distance: 10
        }
    ))

    const transform6 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    transform6.rotation.setEuler(xRot, yRot, zRot)
    iceCreamKiosk.addComponentOrReplace(transform6)
    const gltfShape5 = new GLTFShape("models/3a0dddfe-be84-4100-b36e-0fb1c6c15cb2/IceCreamTruck_01/IceCreamTruck_01.glb")
    gltfShape5.withCollisions = true
    gltfShape5.isPointerBlocker = true
    gltfShape5.visible = true
    iceCreamKiosk.addComponentOrReplace(gltfShape5)
}

export function addironFenceDoor(x: number, y: number, z: number) {
    const ironFenceDoor = new Entity('ironFenceDoor')
    engine.addEntity(ironFenceDoor)
    ironFenceDoor.setParent(_scene)
    const transform7 = new Transform({
        position: new Vector3(x, y, z),
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

export function addlargeFence(x: number, y: number, z: number) {
    const largeFence = new Entity('largeFence')
    engine.addEntity(largeFence)
    largeFence.setParent(_scene)
    const transform8 = new Transform({
        position: new Vector3(x, y, z),
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

export function addlargeOrnamentedStonedRail(x: number, y: number, z: number) {
    const largeOrnamentedStoneRail = new Entity('largeOrnamentedStoneRail')
    engine.addEntity(largeOrnamentedStoneRail)
    largeOrnamentedStoneRail.setParent(_scene)
    const transform9 = new Transform({
        position: new Vector3(x, y, z),
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

export function addlargeIronFence(x: number, y: number, z: number) {
    const largeIronFence = new Entity('largeIronFence')
    engine.addEntity(largeIronFence)
    largeIronFence.setParent(_scene)
    const transform10 = new Transform({
        position: new Vector3(x, y, z),
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
export function addslide(x: number, y: number, z: number) {
    const slide = new Entity('slide')
    engine.addEntity(slide)
    slide.setParent(_scene)
    const transform11 = new Transform({
        position: new Vector3(x, y, z),
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

export function addrusticLampPost(x: number, y: number, z: number) {
    const rusticLampPost = new Entity('rusticLampPost')
    engine.addEntity(rusticLampPost)
    rusticLampPost.setParent(_scene)
    const transform12 = new Transform({
        position: new Vector3(x, y, z),
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

export function addrustickiosk(x: number, y: number, z: number) {
    const rusticKiosk = new Entity('rusticKiosk')
    engine.addEntity(rusticKiosk)
    rusticKiosk.setParent(_scene)
    const transform13 = new Transform({
        position: new Vector3(x, y, z),
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

export function addornamentalFountain(x: number, y: number, z: number) {
    const ornamentalFountain = new Entity('ornamentalFountain')
    engine.addEntity(ornamentalFountain)
    ornamentalFountain.setParent(_scene)
    const transform14 = new Transform({
        position: new Vector3(x, y, z),
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

export function addbeachUmbrella(x: number, y: number, z: number) {
    const beachUmbrella = new Entity('beachUmbrella')
    engine.addEntity(beachUmbrella)
    beachUmbrella.setParent(_scene)
    const transform16 = new Transform({
        position: new Vector3(x, y, z),
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
export function addinformationTerminal(x: number, y: number, z: number) {
    const informationTerminal = new Entity('informationTerminal')
    engine.addEntity(informationTerminal)
    informationTerminal.setParent(_scene)
    const transform20 = new Transform({
        position: new Vector3(x, y, z),
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
) {
    const shopEmissive = new Entity('shopEmissive')
    engine.addEntity(shopEmissive)
    shopEmissive.setParent(_scene)
    const transform25 = new Transform({
        position: new Vector3(x, y, z),
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

export function addShopBlack(x: number, y: number, z: number) {
    const shopBlack = new Entity('shopBlack')
    engine.addEntity(shopBlack)
    shopBlack.setParent(_scene)
    const transform26 = new Transform({
        position: new Vector3(x, y, z),
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
export function addShushiBar(
    x: number,
    y: number,
    z: number,
    xRot: number = 0,
    yRot: number = 0,
    zRot: number = 0
) {
    const sushiBar = new Entity('sushiBar')
    engine.addEntity(sushiBar)
    sushiBar.setParent(_scene)
    const transform27 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })

    transform27.rotation.setEuler(xRot, yRot, zRot)

    sushiBar.addComponent(new OnPointerDown(() => {
        openExternalURL("https://www.flipkart.com/food-products/ready-meal-mixes/frozen-food/pr?sid=eat,xn7,zco&otracker=categorytree")
    },
        {
            distance: 10
        }
    ))

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
        position: new Vector3(x, y, z),
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
        position: new Vector3(x, y, z),
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


export function addplanetSurfaceCrimson(x: number, y: number, z: number) {
    const planetSurfaceCrimson = new Entity('planetSurfaceCrimson')
    engine.addEntity(planetSurfaceCrimson)
    planetSurfaceCrimson.setParent(_scene)
    const transform37 = new Transform({
        position: new Vector3(x, y, z),
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


//////////////////////////////////////////////////////////////////////////////
export function addDoorFrameGlass(x: number, y: number, z: number) {
    const doorframeGlass = new Entity('doorframeGlass')
    engine.addEntity(doorframeGlass)
    doorframeGlass.setParent(_scene)
    const transform6 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    doorframeGlass.addComponentOrReplace(transform6)
    const gltfShape2 = new GLTFShape("models/f38f0a83-881b-4080-abba-a6f7ffe671a4/GlassDoorframe.glb")
    gltfShape2.withCollisions = true
    gltfShape2.isPointerBlocker = true
    gltfShape2.visible = true
    doorframeGlass.addComponentOrReplace(gltfShape2)
}

// export function addGalleryInfoGlass(x: number, y: number, z: number) 
// {
//     const galleryInfoGlass = new Entity('galleryInfoGlass')
//     engine.addEntity(galleryInfoGlass)
//     galleryInfoGlass.setParent(_scene)
//     const transform7 = new Transform({
//       position: new Vector3(17.5, 0, 14.5),
//       rotation: new Quaternion(0, 0, 0, 1),
//       scale: new Vector3(1, 1, 1)
//     })
//     galleryInfoGlass.addComponentOrReplace(transform7)

//     const channelId = Math.random().toString(16).slice(2)
// const channelBus = new MessageBus()
// const inventory = createInventory(UICanvas, UIContainerStack, UIImage)
// const options = { inventory }

// const script1 = new Script1()
// script1.init(options)
// script1.spawn(galleryInfoGlass, {"text":"Some text","fontSize":5,"font":"SF","color":"#000000"}, createChannel(channelId, galleryInfoGlass, channelBus))
// }

export function addThickStainedGlassWindow(x: number, y: number, z: number) {
    const thickStainedGlassWindow = new Entity('thickStainedGlassWindow')
    engine.addEntity(thickStainedGlassWindow)
    thickStainedGlassWindow.setParent(_scene)
    const transform8 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    thickStainedGlassWindow.addComponentOrReplace(transform8)
    const gltfShape3 = new GLTFShape("models/123c6c11-1f73-44a7-a146-5bf7f0f3b0fa/Window_03/Window_03.glb")
    gltfShape3.withCollisions = true
    gltfShape3.isPointerBlocker = true
    gltfShape3.visible = true
    thickStainedGlassWindow.addComponentOrReplace(gltfShape3)
}

export function addWindowXGlassPanel(x: number, y: number, z: number) {
    const windowXGlassPanel = new Entity('windowXGlassPanel')
    engine.addEntity(windowXGlassPanel)
    windowXGlassPanel.setParent(_scene)
    const transform9 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    windowXGlassPanel.addComponentOrReplace(transform9)
    const gltfShape4 = new GLTFShape("models/35978cd5-66e3-445d-a2c6-539987f13ca1/Window 2x4 Glass Panel.glb")
    gltfShape4.withCollisions = true
    gltfShape4.isPointerBlocker = true
    gltfShape4.visible = true
    windowXGlassPanel.addComponentOrReplace(gltfShape4)
}

export function addWallcornerGlass(x: number, y: number, z: number) {
    const wallcornerGlass = new Entity('wallcornerGlass')
    engine.addEntity(wallcornerGlass)
    wallcornerGlass.setParent(_scene)
    const transform10 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    wallcornerGlass.addComponentOrReplace(transform10)
    const gltfShape5 = new GLTFShape("models/32049ed9-26e5-4fc2-965f-6e09e7084984/GlassCorner.glb")
    gltfShape5.withCollisions = true
    gltfShape5.isPointerBlocker = true
    gltfShape5.visible = true
    wallcornerGlass.addComponentOrReplace(gltfShape5)
}

export function addWallPlainGlass(
    x: number,
    y: number,
    z: number,
    xRot: number = 0,
    yRot: number = 0,
    zRot: number = 0,
    xScale: number = 1,
    yScale: number = 1,
    zScale: number = 1
) {
    const wallPlainGlass = new Entity('wallPlainGlass')
    engine.addEntity(wallPlainGlass)
    wallPlainGlass.setParent(_scene)
    const transform11 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(xScale, yScale, zScale)
    })
    transform11.rotation.setEuler(xRot, yRot, zRot);
    wallPlainGlass.addComponentOrReplace(transform11)
    const gltfShape6 = new GLTFShape("models/e28ea76e-fe21-4544-a001-a65867b11be0/PlainGlassWall.glb")
    gltfShape6.withCollisions = true
    gltfShape6.isPointerBlocker = true
    gltfShape6.visible = true
    wallPlainGlass.addComponentOrReplace(gltfShape6)
}

export function addFloorGlass(x: number, y: number, z: number) {
    const floorGlass = new Entity('floorGlass')
    engine.addEntity(floorGlass)
    floorGlass.setParent(_scene)
    const transform12 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    floorGlass.addComponentOrReplace(transform12)
    const gltfShape7 = new GLTFShape("models/f4a4956e-f60a-4108-82c7-41b5ebda6549/GlassFloor.glb")
    gltfShape7.withCollisions = true
    gltfShape7.isPointerBlocker = true
    gltfShape7.visible = true
    floorGlass.addComponentOrReplace(gltfShape7)
}

export function addGlass(x: number, y: number, z: number) {
    const glass = new Entity('glass')
    engine.addEntity(glass)
    glass.setParent(_scene)
    const transform13 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    glass.addComponentOrReplace(transform13)
    const gltfShape8 = new GLTFShape("models/2f83aea7-3f35-400f-8ca5-9fc95c4d99b2/glass.glb")
    gltfShape8.withCollisions = true
    gltfShape8.isPointerBlocker = true
    gltfShape8.visible = true
    glass.addComponentOrReplace(gltfShape8)
}

export function addGlassBlack(x: number, y: number, z: number) {
    const glassBlack = new Entity('glassBlack')
    engine.addEntity(glassBlack)
    glassBlack.setParent(_scene)
    const transform14 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    glassBlack.addComponentOrReplace(transform14)
    const gltfShape9 = new GLTFShape("models/c39c2bfa-efd9-40a6-b0be-fc0da138e1f7/glass_black.glb")
    gltfShape9.withCollisions = true
    gltfShape9.isPointerBlocker = true
    gltfShape9.visible = true
    glassBlack.addComponentOrReplace(gltfShape9)

}

export function addpond(x: number, y: number, z: number) {
    const pond = new Entity('pond')
    engine.addEntity(pond)
    pond.setParent(_scene)
    const transform6 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    pond.addComponentOrReplace(transform6)
    const gltfShape2 = new GLTFShape("models/2950ca19-cb51-422b-b80e-fc0765d6cf4b/Pond_01/Pond_01.glb")
    gltfShape2.withCollisions = true
    gltfShape2.isPointerBlocker = true
    gltfShape2.visible = true
    pond.addComponentOrReplace(gltfShape2)
}

export function addRedFish(x: number, y: number, z: number) {
    const redFish = new Entity('redFish')
    engine.addEntity(redFish)
    redFish.setParent(_scene)
    const transform7 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    redFish.addComponentOrReplace(transform7)
    const gltfShape3 = new GLTFShape("models/7b804637-e9d5-4a4b-a028-265e162453b2/Fish_02/Fish_02.glb")
    gltfShape3.withCollisions = true
    gltfShape3.isPointerBlocker = true
    gltfShape3.visible = true
    redFish.addComponentOrReplace(gltfShape3)
}

export function addRusticMerchantFishStand(
    x: number,
    y: number,
    z: number,
    xRot: number = 0,
    yRot: number = 0,
    zRot: number = 0
) {
    const rusticMerchantFishStand = new Entity('rusticMerchantFishStand')
    engine.addEntity(rusticMerchantFishStand)
    rusticMerchantFishStand.setParent(_scene)
    const transform8 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })

    transform8.rotation.setEuler(xRot, yRot, zRot);


    rusticMerchantFishStand.addComponent(new OnPointerDown(() => {
        openExternalURL("https://www.flipkart.com/food-products/seafood/pr?sid=eat%2Cwoo")
    },
        {
            distance: 10
        }
    ))

    rusticMerchantFishStand.addComponentOrReplace(transform8)
    const gltfShape4 = new GLTFShape("models/936e45c1-6fe5-441a-b4ec-17422465439e/SellingGoods_02/SellingGoods_02.glb")
    gltfShape4.withCollisions = true
    gltfShape4.isPointerBlocker = true
    gltfShape4.visible = true
    rusticMerchantFishStand.addComponentOrReplace(gltfShape4)
}

export function addExoticFish(x: number, y: number, z: number) {
    const exoticFish = new Entity('exoticFish')
    engine.addEntity(exoticFish)
    exoticFish.setParent(_scene)
    const transform9 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    exoticFish.addComponentOrReplace(transform9)
    const gltfShape5 = new GLTFShape("models/3c68ce69-6066-4b58-9417-f930fb8bb17d/Fish_04/Fish_04.glb")
    gltfShape5.withCollisions = true
    gltfShape5.isPointerBlocker = true
    gltfShape5.visible = true
    exoticFish.addComponentOrReplace(gltfShape5)
}

export function addGreenFish(x: number, y: number, z: number) {
    const greenFish = new Entity('greenFish')
    engine.addEntity(greenFish)
    greenFish.setParent(_scene)
    const transform10 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    greenFish.addComponentOrReplace(transform10)
    const gltfShape6 = new GLTFShape("models/d491889d-7721-4a5e-89be-180f1f96feaa/Fish_03/Fish_03.glb")
    gltfShape6.withCollisions = true
    gltfShape6.isPointerBlocker = true
    gltfShape6.visible = true
    greenFish.addComponentOrReplace(gltfShape6)
}

export function addTheFountainOfPurity(x: number, y: number, z: number) {
    const theFountainOfPurity = new Entity('theFountainOfPurity')
    engine.addEntity(theFountainOfPurity)
    theFountainOfPurity.setParent(_scene)
    const transform11 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    theFountainOfPurity.addComponentOrReplace(transform11)
    const gltfShape7 = new GLTFShape("models/b4c64a17-c3b8-45b6-bd60-6a90a79834ac/Fountain_02/Fountain_02.glb")
    gltfShape7.withCollisions = true
    gltfShape7.isPointerBlocker = true
    gltfShape7.visible = true
    theFountainOfPurity.addComponentOrReplace(gltfShape7)
}


export function addWater(x: number, y: number, z: number) {
    const water = new Entity('water')
    engine.addEntity(water)
    water.setParent(_scene)
    const transform12 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    water.addComponentOrReplace(transform12)
    const gltfShape8 = new GLTFShape("models/4608ec00-9775-4602-88a7-52c4d5e2357f/water.glb")
    gltfShape8.withCollisions = true
    gltfShape8.isPointerBlocker = true
    gltfShape8.visible = true
    water.addComponentOrReplace(gltfShape8)
}


export function addFairyFountain(x: number, y: number, z: number) {
    const fairyFountain = new Entity('fairyFountain')
    engine.addEntity(fairyFountain)
    fairyFountain.setParent(_scene)
    const transform13 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    fairyFountain.addComponentOrReplace(transform13)
    const gltfShape9 = new GLTFShape("models/52e8d663-9235-401d-88e3-764a4ff22202/Fountain_01/Fountain_01.glb")
    gltfShape9.withCollisions = true
    gltfShape9.isPointerBlocker = true
    gltfShape9.visible = true
    fairyFountain.addComponentOrReplace(gltfShape9)
}


export function addTemple(x: number, y: number, z: number) {
    const temple = new Entity('temple')
    engine.addEntity(temple)
    temple.setParent(_scene)
    const transform14 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    temple.addComponentOrReplace(transform14)
    const gltfShape10 = new GLTFShape("models/d6a75fd6-7adc-431c-913f-6d15156936cf/ChineseHouse_01/ChineseHouse_01.glb")
    gltfShape10.withCollisions = true
    gltfShape10.isPointerBlocker = true
    gltfShape10.visible = true
    temple.addComponentOrReplace(gltfShape10)
}

export function addFireWorksBox(x: number, y: number, z: number) {
    const fireworksBox = new Entity('fireworksBox')
    engine.addEntity(fireworksBox)
    fireworksBox.setParent(_scene)
    const transform15 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    fireworksBox.addComponentOrReplace(transform15)
    const gltfShape11 = new GLTFShape("models/8838315c-b7e6-4066-9388-b6aa08f29df8/ChineseFireworks_01/ChineseFireworks_01.glb")
    gltfShape11.withCollisions = true
    gltfShape11.isPointerBlocker = true
    gltfShape11.visible = true
    fireworksBox.addComponentOrReplace(gltfShape11)
}

export function addOutdoorBoxLamp(x: number, y: number, z: number) {
    const outdoorBoxLamp = new Entity('outdoorBoxLamp')
    engine.addEntity(outdoorBoxLamp)
    outdoorBoxLamp.setParent(_scene)
    const transform17 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    outdoorBoxLamp.addComponentOrReplace(transform17)
    const gltfShape13 = new GLTFShape("models/2e34764f-6c52-4dcb-beb7-19f0eb8c2cc3/Outdoor Box Lamp3.glb")
    gltfShape13.withCollisions = true
    gltfShape13.isPointerBlocker = true
    gltfShape13.visible = true
    outdoorBoxLamp.addComponentOrReplace(gltfShape13)
}

export function addBook1(x: number, y: number, z: number) {
    const dawnOfTheCagedMind = new Entity('dawnOfTheCagedMind')
    engine.addEntity(dawnOfTheCagedMind)
    dawnOfTheCagedMind.setParent(_scene)
    const transform6 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    dawnOfTheCagedMind.addComponentOrReplace(transform6)
    const gltfShape2 = new GLTFShape("models/9eeca876-94d9-4e89-8780-55586a7151ed/Book_04/Book_04.glb")
    gltfShape2.withCollisions = true
    gltfShape2.isPointerBlocker = true
    gltfShape2.visible = true
    dawnOfTheCagedMind.addComponentOrReplace(gltfShape2)
}

export function addOpenBook1(x: number, y: number, z: number) {
    const prophecyOfTheDead = new Entity('prophecyOfTheDead')
    engine.addEntity(prophecyOfTheDead)
    prophecyOfTheDead.setParent(_scene)
    const transform7 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    prophecyOfTheDead.addComponentOrReplace(transform7)
    const gltfShape3 = new GLTFShape("models/ccbbdbd7-3406-4f8d-a792-8d7c396925fd/Book_06/Book_06.glb")
    gltfShape3.withCollisions = true
    gltfShape3.isPointerBlocker = true
    gltfShape3.visible = true
    prophecyOfTheDead.addComponentOrReplace(gltfShape3)
}
export function addOpenBook2(x: number, y: number, z: number) {
    const dreamwhisperCodex = new Entity('dreamwhisperCodex')
    engine.addEntity(dreamwhisperCodex)
    dreamwhisperCodex.setParent(_scene)
    const transform8 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    dreamwhisperCodex.addComponentOrReplace(transform8)
    const gltfShape4 = new GLTFShape("models/0b129a3e-a9aa-422c-903e-5ad8f82156ef/Book_05/Book_05.glb")
    gltfShape4.withCollisions = true
    gltfShape4.isPointerBlocker = true
    gltfShape4.visible = true
    dreamwhisperCodex.addComponentOrReplace(gltfShape4)
}
export function addShelf5(x: number, y: number, z: number) {
    const sushiShelf = new Entity('sushiShelf')
    engine.addEntity(sushiShelf)
    sushiShelf.setParent(_scene)
    const transform9 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    sushiShelf.addComponentOrReplace(transform9)
    const gltfShape5 = new GLTFShape("models/7fae1525-9266-4ea3-adeb-8ad194b0241c/Sushi_Shelf.glb")
    gltfShape5.withCollisions = true
    gltfShape5.isPointerBlocker = true
    gltfShape5.visible = true
    sushiShelf.addComponentOrReplace(gltfShape5)
}

export function addontainerShelf(x: number, y: number, z: number) {
    const containerShelf = new Entity('containerShelf')
    engine.addEntity(containerShelf)
    containerShelf.setParent(_scene)
    const transform10 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    containerShelf.addComponentOrReplace(transform10)
    const gltfShape6 = new GLTFShape("models/a49f2519-65fd-4655-9739-6a5bf5daf04e/ContainerSmall_01/ContainerSmall_01.glb")
    gltfShape6.withCollisions = true
    gltfShape6.isPointerBlocker = true
    gltfShape6.visible = true
    containerShelf.addComponentOrReplace(gltfShape6)
}
export function addShelf4(
    x: number,
    y: number,
    z: number,
    xRot: number = 0,
    yRot: number = 0,
    zRot: number = 0
) {
    const bookshelf = new Entity('bookshelf')
    engine.addEntity(bookshelf)
    bookshelf.setParent(_scene)
    const transform11 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    transform11.rotation.setEuler(xRot, yRot, zRot)
    transform11.rotation.setEuler(0, 270, 0);
    bookshelf.addComponentOrReplace(transform11)
    const gltfShape7 = new GLTFShape("models/19c95897-1a48-4028-91ab-9b5016646ac3/Shelf_02/Shelf_02.glb")
    gltfShape7.withCollisions = true
    gltfShape7.isPointerBlocker = true
    gltfShape7.visible = true
    bookshelf.addComponentOrReplace(gltfShape7)
}

export function addShelf3(x: number, y: number, z: number) {
    const bookshelf2 = new Entity('bookshelf2')
    engine.addEntity(bookshelf2)
    bookshelf2.setParent(_scene)
    const transform12 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    transform12.rotation.setEuler(0, 270, 0);
    bookshelf2.addComponentOrReplace(transform12)
    const gltfShape8 = new GLTFShape("models/1c79c625-8eb0-4090-a7ee-df2e0b9d5db4/bookshelf.glb")
    gltfShape8.withCollisions = true
    gltfShape8.isPointerBlocker = true
    gltfShape8.visible = true
    bookshelf2.addComponentOrReplace(gltfShape8)
}
export function addBookShelfBench(x: number, y: number, z: number) {
    const bookshelfBench = new Entity('bookshelfBench')
    engine.addEntity(bookshelfBench)
    bookshelfBench.setParent(_scene)
    const transform13 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    bookshelfBench.addComponentOrReplace(transform13)
    const gltfShape9 = new GLTFShape("models/d4f3489d-e228-4145-9bd6-18d696779f6b/Shelf_03/Shelf_03.glb")
    gltfShape9.withCollisions = true
    gltfShape9.isPointerBlocker = true
    gltfShape9.visible = true
    bookshelfBench.addComponentOrReplace(gltfShape9)
}
export function addShelf2(x: number, y: number, z: number) {
    const bookshelfWithDrawers = new Entity('bookshelfWithDrawers')
    engine.addEntity(bookshelfWithDrawers)
    bookshelfWithDrawers.setParent(_scene)
    const transform14 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    transform14.rotation.setEuler(0, 270, 0);
    bookshelfWithDrawers.addComponentOrReplace(transform14)
    const gltfShape10 = new GLTFShape("models/42dac0a2-9d72-4b83-a607-cdae58ab1898/Shelf_01/Shelf_01.glb")
    gltfShape10.withCollisions = true
    gltfShape10.isPointerBlocker = true
    gltfShape10.visible = true
    bookshelfWithDrawers.addComponentOrReplace(gltfShape10)
}

export function addBook4(x: number, y: number, z: number) {
    const terrorOfTheWicked = new Entity('terrorOfTheWicked')
    engine.addEntity(terrorOfTheWicked)
    terrorOfTheWicked.setParent(_scene)
    const transform15 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    terrorOfTheWicked.addComponentOrReplace(transform15)
    const gltfShape11 = new GLTFShape("models/dc028b6e-19b1-40b3-802d-6bb42d89913f/Book_01/Book_01.glb")
    gltfShape11.withCollisions = true
    gltfShape11.isPointerBlocker = true
    gltfShape11.visible = true
    terrorOfTheWicked.addComponentOrReplace(gltfShape11)
}
export function addBook3(x: number, y: number, z: number) {
    const theStoryOfALife = new Entity('theStoryOfALife')
    engine.addEntity(theStoryOfALife)
    theStoryOfALife.setParent(_scene)
    const transform16 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    theStoryOfALife.addComponentOrReplace(transform16)
    const gltfShape12 = new GLTFShape("models/14a5cdac-a07c-4c4c-9733-e869eb2a8c6e/Book_02/Book_02.glb")
    gltfShape12.withCollisions = true
    gltfShape12.isPointerBlocker = true
    gltfShape12.visible = true
    theStoryOfALife.addComponentOrReplace(gltfShape12)
}
export function addShelf(x: number, y: number, z: number) {
    const sushiShelf2 = new Entity('sushiShelf2')
    engine.addEntity(sushiShelf2)
    sushiShelf2.setParent(_scene)
    const transform17 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    sushiShelf2.addComponentOrReplace(transform17)
    const gltfShape13 = new GLTFShape("models/45f97802-5b23-4e33-a150-44d250c570c0/Sushi_Shelf_2.glb")
    gltfShape13.withCollisions = true
    gltfShape13.isPointerBlocker = true
    gltfShape13.visible = true
    sushiShelf2.addComponentOrReplace(gltfShape13)

}
export function addBook2(x: number, y: number, z: number) {
    const vanquisherManuscript = new Entity('vanquisherManuscript')
    engine.addEntity(vanquisherManuscript)
    vanquisherManuscript.setParent(_scene)
    const transform18 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    vanquisherManuscript.addComponentOrReplace(transform18)
    const gltfShape14 = new GLTFShape("models/3a29e237-7096-4795-95b7-038c2d584a23/Book_03/Book_03.glb")
    gltfShape14.withCollisions = true
    gltfShape14.isPointerBlocker = true
    gltfShape14.visible = true
    vanquisherManuscript.addComponentOrReplace(gltfShape14)

}

export function addWallBookShelf(x: number, y: number, z: number) {
    const wallBookshelf = new Entity('wallBookshelf')
    engine.addEntity(wallBookshelf)
    wallBookshelf.setParent(_scene)
    const transform19 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    wallBookshelf.addComponentOrReplace(transform19)
    const gltfShape15 = new GLTFShape("models/b44ad9a1-d018-4152-ba5b-2fad3a66a872/Wall Bookshelf.glb")
    gltfShape15.withCollisions = true
    gltfShape15.isPointerBlocker = true
    gltfShape15.visible = true
    wallBookshelf.addComponentOrReplace(gltfShape15)
}

export function addBooks(x: number, y: number, z: number) {
    const books = new Entity('books')
    engine.addEntity(books)
    books.setParent(_scene)
    const transform20 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    books.addComponentOrReplace(transform20)
    const gltfShape16 = new GLTFShape("models/44bcc403-ae66-42db-ba5d-bd561040f607/Books.glb")
    gltfShape16.withCollisions = true
    gltfShape16.isPointerBlocker = true
    gltfShape16.visible = true
    books.addComponentOrReplace(gltfShape16)
}

export function addTomato(x: number, y: number, z: number) {
    const tomato = new Entity('tomato')
    engine.addEntity(tomato)
    tomato.setParent(_scene)
    const transform6 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    tomato.addComponentOrReplace(transform6)
    const gltfShape2 = new GLTFShape("models/001f544b-38c6-4a3b-a364-8e74b9662850/FoodTomato_01/FoodTomato_01.glb")
    gltfShape2.withCollisions = true
    gltfShape2.isPointerBlocker = true
    gltfShape2.visible = true
    tomato.addComponentOrReplace(gltfShape2)
}
export function addLettuceCrop(x: number, y: number, z: number) {
    const lettuceCrop = new Entity('lettuceCrop')
    engine.addEntity(lettuceCrop)
    lettuceCrop.setParent(_scene)
    const transform7 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    lettuceCrop.addComponentOrReplace(transform7)
    const gltfShape3 = new GLTFShape("models/30d789e8-783a-4e78-9dd3-400add3b6716/FarmVegetation_02/FarmVegetation_02.glb")
    gltfShape3.withCollisions = true
    gltfShape3.isPointerBlocker = true
    gltfShape3.visible = true
    lettuceCrop.addComponentOrReplace(gltfShape3)
}
export function addFlowerCrop(x: number, y: number, z: number) {
    const flowerCrop = new Entity('flowerCrop')
    engine.addEntity(flowerCrop)
    flowerCrop.setParent(_scene)
    const transform8 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    flowerCrop.addComponentOrReplace(transform8)
    const gltfShape4 = new GLTFShape("models/f0be2c8d-4fd5-4cc3-9ae6-21ff9752445c/FarmVegetation_03/FarmVegetation_03.glb")
    gltfShape4.withCollisions = true
    gltfShape4.isPointerBlocker = true
    gltfShape4.visible = true
    flowerCrop.addComponentOrReplace(gltfShape4)
}
export function addSucculentCrop(x: number, y: number, z: number) {
    const succulentCrop = new Entity('succulentCrop')
    engine.addEntity(succulentCrop)
    succulentCrop.setParent(_scene)
    const transform9 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    succulentCrop.addComponentOrReplace(transform9)
    const gltfShape5 = new GLTFShape("models/d8bf7ea7-a7a3-4d42-af28-10b3e9d6e603/FarmVegetation_04/FarmVegetation_04.glb")
    gltfShape5.withCollisions = true
    gltfShape5.isPointerBlocker = true
    gltfShape5.visible = true
    succulentCrop.addComponentOrReplace(gltfShape5)
}
export function addSweetPeaCrop(x: number, y: number, z: number) {
    const sweetPeaCrop = new Entity('sweetPeaCrop')
    engine.addEntity(sweetPeaCrop)
    sweetPeaCrop.setParent(_scene)
    const transform10 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    sweetPeaCrop.addComponentOrReplace(transform10)
    const gltfShape6 = new GLTFShape("models/ba63bfc0-f373-4c76-8363-48899aca87bf/FarmVegetation_01/FarmVegetation_01.glb")
    gltfShape6.withCollisions = true
    gltfShape6.isPointerBlocker = true
    gltfShape6.visible = true
    sweetPeaCrop.addComponentOrReplace(gltfShape6)
}
export function addApple(x: number, y: number, z: number) {
    const apple = new Entity('apple')
    engine.addEntity(apple)
    apple.setParent(_scene)
    const transform11 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    apple.addComponentOrReplace(transform11)
    const gltfShape7 = new GLTFShape("models/efe88bc5-618c-4294-a5b5-4c64e95fafa3/FoodApple_01/FoodApple_01.glb")
    gltfShape7.withCollisions = true
    gltfShape7.isPointerBlocker = true
    gltfShape7.visible = true
    apple.addComponentOrReplace(gltfShape7)
}
export function addBananas(
    x: number,
    y: number,
    z: number,
    xRot: number = 0,
    yRot: number = 0,
    zRot: number = 0
) {
    const bananas = new Entity('bananas')
    engine.addEntity(bananas)
    bananas.setParent(_scene)
    const transform12 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    transform12.rotation.setEuler(xRot, yRot, zRot)
    bananas.addComponentOrReplace(transform12)
    const gltfShape8 = new GLTFShape("models/adabf424-1469-4087-bb7d-5614c924ea12/Bananas_01/Bananas_01.glb")
    gltfShape8.withCollisions = true
    gltfShape8.isPointerBlocker = true
    gltfShape8.visible = true
    bananas.addComponentOrReplace(gltfShape8)
}
export function addCoconut(x: number, y: number, z: number) {
    const coconut = new Entity('coconut')
    engine.addEntity(coconut)
    coconut.setParent(_scene)
    const transform13 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    coconut.addComponentOrReplace(transform13)
    const gltfShape9 = new GLTFShape("models/597981eb-2375-41cb-8db5-7e3e0f4347f4/Coco_01/Coco_01.glb")
    gltfShape9.withCollisions = true
    gltfShape9.isPointerBlocker = true
    gltfShape9.visible = true
    coconut.addComponentOrReplace(gltfShape9)
}
export function addHalfCoconut(x: number, y: number, z: number) {
    const halfCoconut = new Entity('halfCoconut')
    engine.addEntity(halfCoconut)
    halfCoconut.setParent(_scene)
    const transform14 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    halfCoconut.addComponentOrReplace(transform14)
    const gltfShape10 = new GLTFShape("models/0b710cd3-be50-4ac0-a340-d38fe2b6efe0/Coco_02/Coco_02.glb")
    gltfShape10.withCollisions = true
    gltfShape10.isPointerBlocker = true
    gltfShape10.visible = true
    halfCoconut.addComponentOrReplace(gltfShape10)
}
export function addLemon(x: number, y: number, z: number) {
    const lemon = new Entity('lemon')
    engine.addEntity(lemon)
    lemon.setParent(_scene)
    const transform15 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    lemon.addComponentOrReplace(transform15)
    const gltfShape11 = new GLTFShape("models/38f22e83-4718-4788-9777-26ba847cff1a/FoodLemon_01/FoodLemon_01.glb")
    gltfShape11.withCollisions = true
    gltfShape11.isPointerBlocker = true
    gltfShape11.visible = true
    lemon.addComponentOrReplace(gltfShape11)
}
export function addPineapple(x: number, y: number, z: number) {
    const pineapple = new Entity('pineapple')
    engine.addEntity(pineapple)
    pineapple.setParent(_scene)
    const transform16 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    pineapple.addComponentOrReplace(transform16)
    const gltfShape12 = new GLTFShape("models/5f23a6a6-a87c-4813-b52b-d35a07d41612/FoodPineapple_01/FoodPineapple_01.glb")
    gltfShape12.withCollisions = true
    gltfShape12.isPointerBlocker = true
    gltfShape12.visible = true
    pineapple.addComponentOrReplace(gltfShape12)
}
export function addWatermelon(x: number, y: number, z: number) {
    const watermelon = new Entity('watermelon')
    engine.addEntity(watermelon)
    watermelon.setParent(_scene)
    const transform17 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    watermelon.addComponentOrReplace(transform17)
    const gltfShape13 = new GLTFShape("models/f01cf0d6-e860-4eb8-8c82-6fbc2a98a110/FoodWatermelon_01/FoodWatermelon_01.glb")
    gltfShape13.withCollisions = true
    gltfShape13.isPointerBlocker = true
    gltfShape13.visible = true
    watermelon.addComponentOrReplace(gltfShape13)
}
export function addFruit(x: number, y: number, z: number) {
    const fruit = new Entity('fruit')
    engine.addEntity(fruit)
    fruit.setParent(_scene)
    const transform18 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    fruit.addComponentOrReplace(transform18)
    const gltfShape14 = new GLTFShape("models/97635e13-2534-422a-a4a2-1465c268ba1d/Fruit 1.glb")
    gltfShape14.withCollisions = true
    gltfShape14.isPointerBlocker = true
    gltfShape14.visible = true
    fruit.addComponentOrReplace(gltfShape14)

}
export function addFruit2(x: number, y: number, z: number) {
    const fruit2 = new Entity('fruit2')
    engine.addEntity(fruit2)
    fruit2.setParent(_scene)
    const transform19 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    fruit2.addComponentOrReplace(transform19)
    const gltfShape15 = new GLTFShape("models/50c18ed7-ccb8-4b41-ad45-3502b43e07d0/Fruit 2.glb")
    gltfShape15.withCollisions = true
    gltfShape15.isPointerBlocker = true
    gltfShape15.visible = true
    fruit2.addComponentOrReplace(gltfShape15)
}
export function addFruit3(x: number, y: number, z: number) {
    const fruit3 = new Entity('fruit3')
    engine.addEntity(fruit3)
    fruit3.setParent(_scene)
    const transform20 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    fruit3.addComponentOrReplace(transform20)
    const gltfShape16 = new GLTFShape("models/cce63be5-5cff-4843-bc9d-f3c910bebea3/Fruit 3.glb")
    gltfShape16.withCollisions = true
    gltfShape16.isPointerBlocker = true
    gltfShape16.visible = true
    fruit3.addComponentOrReplace(gltfShape16)
}
export function addFruit4(
    x: number,
    y: number,
    z: number,
    xRot: number = 0,
    yRot: number = 0,
    zRot: number = 0
) {
    const fruit4 = new Entity('fruit4')
    engine.addEntity(fruit4)
    fruit4.setParent(_scene)
    const transform21 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    transform21.rotation.setEuler(xRot, yRot, zRot);
    fruit4.addComponentOrReplace(transform21)
    const gltfShape17 = new GLTFShape("models/2680e223-707f-4e95-8e53-b1c3a8a6e7b4/Fruit 6.glb")
    gltfShape17.withCollisions = true
    gltfShape17.isPointerBlocker = true
    gltfShape17.visible = true
    fruit4.addComponentOrReplace(gltfShape17)
}
export function addFruit5(x: number, y: number, z: number) {
    const fruit5 = new Entity('fruit5')
    engine.addEntity(fruit5)
    fruit5.setParent(_scene)
    const transform22 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    fruit5.addComponentOrReplace(transform22)
    const gltfShape18 = new GLTFShape("models/bbb40eb8-79ba-4442-a95e-b5454015a4b9/Fruit 5.glb")
    gltfShape18.withCollisions = true
    gltfShape18.isPointerBlocker = true
    gltfShape18.visible = true
    fruit5.addComponentOrReplace(gltfShape18)
}
export function addFruit6(x: number, y: number, z: number) {
    const fruit6 = new Entity('fruit6')
    engine.addEntity(fruit6)
    fruit6.setParent(_scene)
    const transform23 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    fruit6.addComponentOrReplace(transform23)
    const gltfShape19 = new GLTFShape("models/abf88b39-d0f1-433d-9dbe-beb619639a8b/Fruit 4.glb")
    gltfShape19.withCollisions = true
    gltfShape19.isPointerBlocker = true
    gltfShape19.visible = true
    fruit6.addComponentOrReplace(gltfShape19)
}
export function addPennants(x: number, y: number, z: number) {
    const pennants = new Entity('pennants')
    engine.addEntity(pennants)
    pennants.setParent(_scene)
    const transform24 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    pennants.addComponentOrReplace(transform24)
    const gltfShape20 = new GLTFShape("models/c64148e7-d84f-497c-8d67-b2955a158f77/HWN20_Pennants.glb")
    gltfShape20.withCollisions = true
    gltfShape20.isPointerBlocker = true
    gltfShape20.visible = true
    pennants.addComponentOrReplace(gltfShape20)

}
export function addFlags(x: number, y: number, z: number) {
    const flags = new Entity('flags')
    engine.addEntity(flags)
    flags.setParent(_scene)
    const transform25 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    flags.addComponentOrReplace(transform25)
    const gltfShape21 = new GLTFShape("models/0c8688e7-d8d5-4d74-b355-afa549ffba51/Flags_01.glb")
    gltfShape21.withCollisions = true
    gltfShape21.isPointerBlocker = true
    gltfShape21.visible = true
    flags.addComponentOrReplace(gltfShape21)
}
export function addDustbin(x: number, y: number, z: number) {
    const fliptopBin = new Entity('fliptopBin')
    engine.addEntity(fliptopBin)
    fliptopBin.setParent(_scene)
    const transform26 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    fliptopBin.addComponentOrReplace(transform26)
    const gltfShape22 = new GLTFShape("models/6050ddf0-75ca-43c1-8f24-cf439ebb4f00/Fliptop_Bin.glb")
    gltfShape22.withCollisions = true
    gltfShape22.isPointerBlocker = true
    gltfShape22.visible = true
    fliptopBin.addComponentOrReplace(gltfShape22)
}
export function addBarrel(x: number, y: number, z: number) {
    const barrelNoLid = new Entity('barrelNoLid')
    engine.addEntity(barrelNoLid)
    barrelNoLid.setParent(_scene)
    const transform27 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    barrelNoLid.addComponentOrReplace(transform27)
    const gltfShape23 = new GLTFShape("models/76280eb2-09bc-4ed4-abba-b1f847dcdf3c/Barrel_No_Lid.glb")
    gltfShape23.withCollisions = true
    gltfShape23.isPointerBlocker = true
    gltfShape23.visible = true
    barrelNoLid.addComponentOrReplace(gltfShape23)

}
export function addBarrelWithLid(x: number, y: number, z: number) {
    const barrelWithLid = new Entity('barrelWithLid')
    engine.addEntity(barrelWithLid)
    barrelWithLid.setParent(_scene)
    const transform28 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    barrelWithLid.addComponentOrReplace(transform28)
    const gltfShape24 = new GLTFShape("models/64cc9781-8595-4bb9-94f1-8ab3d6a86e5a/Barrel_Lid.glb")
    gltfShape24.withCollisions = true
    gltfShape24.isPointerBlocker = true
    gltfShape24.visible = true
    barrelWithLid.addComponentOrReplace(gltfShape24)
}
export function addBarrelSpilled(x: number, y: number, z: number) {
    const barrelSpilled = new Entity('barrelSpilled')
    engine.addEntity(barrelSpilled)
    barrelSpilled.setParent(_scene)
    const transform29 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    barrelSpilled.addComponentOrReplace(transform29)
    const gltfShape25 = new GLTFShape("models/be6d4ae2-d88b-4c7e-aaf1-42323e044ed6/Barrel_Spilled.glb")
    gltfShape25.withCollisions = true
    gltfShape25.isPointerBlocker = true
    gltfShape25.visible = true
    barrelSpilled.addComponentOrReplace(gltfShape25)
}

export function addGlassCup2(x: number, y: number, z: number) {
    const chaliceOfAbundance = new Entity('chaliceOfAbundance')
    engine.addEntity(chaliceOfAbundance)
    chaliceOfAbundance.setParent(_scene)
    const transform30 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    chaliceOfAbundance.addComponentOrReplace(transform30)
    const gltfShape26 = new GLTFShape("models/649367b8-82dc-4bba-bc4b-f7bfca0cad32/Chalice_01/Chalice_01.glb")
    gltfShape26.withCollisions = true
    gltfShape26.isPointerBlocker = true
    gltfShape26.visible = true
    chaliceOfAbundance.addComponentOrReplace(gltfShape26)
}
export function addGlassCup(x: number, y: number, z: number) {
    const chaliceOfVictory = new Entity('chaliceOfVictory')
    engine.addEntity(chaliceOfVictory)
    chaliceOfVictory.setParent(_scene)
    const transform31 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    chaliceOfVictory.addComponentOrReplace(transform31)
    const gltfShape27 = new GLTFShape("models/b3e238f7-8af9-4db0-939a-253263cd9af8/Chalice_02/Chalice_02.glb")
    gltfShape27.withCollisions = true
    gltfShape27.isPointerBlocker = true
    gltfShape27.visible = true
    chaliceOfVictory.addComponentOrReplace(gltfShape27)
}

export function addEvergreenShrub(x: number, y: number, z: number) {
    const evergreenShrub = new Entity('evergreenShrub')
    engine.addEntity(evergreenShrub)
    evergreenShrub.setParent(_scene)
    const transform6 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    evergreenShrub.addComponentOrReplace(transform6)
    const gltfShape2 = new GLTFShape("models/0d4f1e28-c9bd-4f3e-9605-c76c84702742/Bush_03/Bush_03.glb")
    gltfShape2.withCollisions = true
    gltfShape2.isPointerBlocker = true
    gltfShape2.visible = true
    evergreenShrub.addComponentOrReplace(gltfShape2)
}

export function addPlant(x: number, y: number, z: number) {
    const plant = new Entity('plant')
    engine.addEntity(plant)
    plant.setParent(_scene)
    const transform7 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    plant.addComponentOrReplace(transform7)
    const gltfShape3 = new GLTFShape("models/ec8b2557-4819-4a6c-a443-2fe15e7e980a/Plant 2.glb")
    gltfShape3.withCollisions = true
    gltfShape3.isPointerBlocker = true
    gltfShape3.visible = true
    plant.addComponentOrReplace(gltfShape3)
}

export function addTriSpikeGrass(x: number, y: number, z: number) {
    const triSpikeGrass = new Entity('triSpikeGrass')
    engine.addEntity(triSpikeGrass)
    triSpikeGrass.setParent(_scene)
    const transform8 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    triSpikeGrass.addComponentOrReplace(transform8)
    const gltfShape4 = new GLTFShape("models/40b603bd-9582-4100-8a5d-d09d0d82ba50/Grass_05/Grass05.glb")
    gltfShape4.withCollisions = true
    gltfShape4.isPointerBlocker = true
    gltfShape4.visible = true
    triSpikeGrass.addComponentOrReplace(gltfShape4)
}

export function addBush(x: number, y: number, z: number) {
    const bush = new Entity('bush')
    engine.addEntity(bush)
    bush.setParent(_scene)
    const transform9 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    bush.addComponentOrReplace(transform9)
    const gltfShape5 = new GLTFShape("models/b34ad4ca-db96-44fe-8fd6-86b4aa9f2218/HWN20_Bush.glb")
    gltfShape5.withCollisions = true
    gltfShape5.isPointerBlocker = true
    gltfShape5.visible = true
    bush.addComponentOrReplace(gltfShape5)
}

export function addShrub(x: number, y: number, z: number) {
    const shrub = new Entity('shrub')
    engine.addEntity(shrub)
    shrub.setParent(_scene)
    const transform10 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    shrub.addComponentOrReplace(transform10)
    const gltfShape6 = new GLTFShape("models/4db158c0-a44f-4f79-a9e6-c5d6a219d48d/Bush_01/Bush_01.glb")
    gltfShape6.withCollisions = true
    gltfShape6.isPointerBlocker = true
    gltfShape6.visible = true
    shrub.addComponentOrReplace(gltfShape6)
}

export function addBush2(x: number, y: number, z: number) {
    const bush2 = new Entity('bush2')
    engine.addEntity(bush2)
    bush2.setParent(_scene)
    const transform11 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    bush2.addComponentOrReplace(transform11)
    const gltfShape7 = new GLTFShape("models/3168d3fe-8f93-4a1a-81f4-689780f2a373/Bush_02/Bush_02.glb")
    gltfShape7.withCollisions = true
    gltfShape7.isPointerBlocker = true
    gltfShape7.visible = true
    bush2.addComponentOrReplace(gltfShape7)
}

export function addShrubRow(x: number, y: number, z: number) {
    const shrubRow = new Entity('shrubRow')
    engine.addEntity(shrubRow)
    shrubRow.setParent(_scene)
    const transform12 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    shrubRow.addComponentOrReplace(transform12)
    const gltfShape8 = new GLTFShape("models/fb7e1284-521b-477f-b255-4b986c8b131e/BushPatch_02/BushPatch_02.glb")
    gltfShape8.withCollisions = true
    gltfShape8.isPointerBlocker = true
    gltfShape8.visible = true
    shrubRow.addComponentOrReplace(gltfShape8)
}

export function addGrassSprout(x: number, y: number, z: number) {
    const grassSprout = new Entity('grassSprout')
    engine.addEntity(grassSprout)
    grassSprout.setParent(_scene)
    const transform13 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    grassSprout.addComponentOrReplace(transform13)
    const gltfShape9 = new GLTFShape("models/43ab9bc6-bc2a-4ee1-815a-e12f60a709ae/Grass_03/Grass_03.glb")
    gltfShape9.withCollisions = true
    gltfShape9.isPointerBlocker = true
    gltfShape9.visible = true
    grassSprout.addComponentOrReplace(gltfShape9)
}

export function addbenchGrassFern(x: number, y: number, z: number) {
    const beachgrassFern = new Entity('beachgrassFern')
    engine.addEntity(beachgrassFern)
    beachgrassFern.setParent(_scene)
    const transform14 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    beachgrassFern.addComponentOrReplace(transform14)
    const gltfShape10 = new GLTFShape("models/7ea57b9c-29ee-47a5-9ad2-c109101b72ac/JunglePlant_06/JunglePlant_06.glb")
    gltfShape10.withCollisions = true
    gltfShape10.isPointerBlocker = true
    gltfShape10.visible = true
    beachgrassFern.addComponentOrReplace(gltfShape10)
}

export function addPalm(x: number, y: number, z: number) {
    const arecaPalm = new Entity('arecaPalm')
    engine.addEntity(arecaPalm)
    arecaPalm.setParent(_scene)
    const transform15 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    arecaPalm.addComponentOrReplace(transform15)
    const gltfShape11 = new GLTFShape("models/b0f2c844-e0ba-443d-9f32-e8ad3c555c6c/JunglePlant_09/JunglePlant_09.glb")
    gltfShape11.withCollisions = true
    gltfShape11.isPointerBlocker = true
    gltfShape11.visible = true
    arecaPalm.addComponentOrReplace(gltfShape11)
}

export function addbalsamFlower(x: number, y: number, z: number) {
    const balsamFlower = new Entity('balsamFlower')
    engine.addEntity(balsamFlower)
    balsamFlower.setParent(_scene)
    const transform16 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    balsamFlower.addComponentOrReplace(transform16)
    const gltfShape12 = new GLTFShape("models/71806ca6-1a2b-4d8b-b919-ae96241f8c08/Plant_02/Plant_02.glb")
    gltfShape12.withCollisions = true
    gltfShape12.isPointerBlocker = true
    gltfShape12.visible = true
    balsamFlower.addComponentOrReplace(gltfShape12)
}

export function addCactus(x: number, y: number, z: number) {
    const cactus = new Entity('cactus')
    engine.addEntity(cactus)
    cactus.setParent(_scene)
    const transform17 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    cactus.addComponentOrReplace(transform17)
    const gltfShape13 = new GLTFShape("models/5962aecb-495f-4e09-a81e-c225d0eaee7c/Cactus 4.glb")
    gltfShape13.withCollisions = true
    gltfShape13.isPointerBlocker = true
    gltfShape13.visible = true
    cactus.addComponentOrReplace(gltfShape13)
}

export function addCactus2(x: number, y: number, z: number) {
    const cactus2 = new Entity('cactus2')
    engine.addEntity(cactus2)
    cactus2.setParent(_scene)
    const transform18 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    cactus2.addComponentOrReplace(transform18)
    const gltfShape14 = new GLTFShape("models/9b8e7c70-3f2f-4ec7-bac6-bd0b6c07a9a3/Cactus 3.glb")
    gltfShape14.withCollisions = true
    gltfShape14.isPointerBlocker = true
    gltfShape14.visible = true
    cactus2.addComponentOrReplace(gltfShape14)
}

export function addCactus3(x: number, y: number, z: number) {
    const cactus3 = new Entity('cactus3')
    engine.addEntity(cactus3)
    cactus3.setParent(_scene)
    const transform19 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    cactus3.addComponentOrReplace(transform19)
    const gltfShape15 = new GLTFShape("models/7fdd78fe-d81e-495e-8a57-2b92f37d77a9/Cactus 9.glb")
    gltfShape15.withCollisions = true
    gltfShape15.isPointerBlocker = true
    gltfShape15.visible = true
    cactus3.addComponentOrReplace(gltfShape15)
}

export function addJungleShrub(x: number, y: number, z: number) {
    const jungleShrub = new Entity('jungleShrub')
    engine.addEntity(jungleShrub)
    jungleShrub.setParent(_scene)
    const transform20 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(2, 2, 2)
    })
    jungleShrub.addComponentOrReplace(transform20)
    const gltfShape16 = new GLTFShape("models/d8b2cdd4-043a-4982-91c2-202d85677533/JunglePlant_02/JunglePlant_02.glb")
    gltfShape16.withCollisions = true
    gltfShape16.isPointerBlocker = true
    gltfShape16.visible = true
    jungleShrub.addComponentOrReplace(gltfShape16)
}

export function addJungleFern(x: number, y: number, z: number) {
    const jungleFern = new Entity('jungleFern')
    engine.addEntity(jungleFern)
    jungleFern.setParent(_scene)
    const transform21 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(2, 2, 2)
    })
    jungleFern.addComponentOrReplace(transform21)
    const gltfShape17 = new GLTFShape("models/3a4e677f-88c7-4616-bbf0-9a97055463d6/JunglePlant_01/JunglePlant_01.glb")
    gltfShape17.withCollisions = true
    gltfShape17.isPointerBlocker = true
    gltfShape17.visible = true
    jungleFern.addComponentOrReplace(gltfShape17)
    // engine.addEntity(chaliceOfVictory)
    // chaliceOfVictory.setParent(_scene)
    // const transform31 = new Transform({
    //     position: new Vector3(x, y, z),
    //     rotation: new Quaternion(0, 0, 0, 1),
    //     scale: new Vector3(1, 1, 1)
    // })
    // chaliceOfVictory.addComponentOrReplace(transform31)
    // const gltfShape27 = new GLTFShape("models/b3e238f7-8af9-4db0-939a-253263cd9af8/Chalice_02/Chalice_02.glb")
    // gltfShape27.withCollisions = true
    // gltfShape27.isPointerBlocker = true
    // gltfShape27.visible = true
    // chaliceOfVictory.addComponentOrReplace(gltfShape27)
}

export function addMarbleCheckersTile(x: number, y: number, z: number) {
    const marbleCheckersTile = new Entity('marbleCheckersTile')
    engine.addEntity(marbleCheckersTile)
    marbleCheckersTile.setParent(_scene)
    const transform2 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(16, 1, 16)
    })
    marbleCheckersTile.addComponentOrReplace(transform2)
    const gltfShape = new GLTFShape("models/81eb0547-ef35-4f8d-8cfe-16350b2a278b/Tile_Floor_01/Tile_Floor_01.glb")
    gltfShape.withCollisions = true
    gltfShape.isPointerBlocker = true
    gltfShape.visible = true
    marbleCheckersTile.addComponentOrReplace(gltfShape)
}

export function addStarMosaicTile(x: number, y: number, z: number) {
    const smallStarMosaicTile = new Entity('smallStarMosaicTile')
    engine.addEntity(smallStarMosaicTile)
    smallStarMosaicTile.setParent(_scene)
    const transform3 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(8, 1, 8)
    })
    smallStarMosaicTile.addComponentOrReplace(transform3)
    const gltfShape2 = new GLTFShape("models/be3eadca-dccd-41cd-8cf2-11c496ff504e/Floor_Tiles_2M_01/Floor_Tiles_2M_01.glb")
    gltfShape2.withCollisions = true
    gltfShape2.isPointerBlocker = true
    gltfShape2.visible = true
    smallStarMosaicTile.addComponentOrReplace(gltfShape2)
}

export function addLargeStarMosaicTile(x: number, y: number, z: number) {
    const largeStarMosaicTile = new Entity('largeStarMosaicTile')
    engine.addEntity(largeStarMosaicTile)
    largeStarMosaicTile.setParent(_scene)
    const transform4 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(4, 1, 4)
    })
    largeStarMosaicTile.addComponentOrReplace(transform4)
    const gltfShape3 = new GLTFShape("models/a4b6f5e5-e074-4870-bff5-edcb26d1bde2/Floor_Tiles_2M_05/Floor_Tiles_2M_05.glb")
    gltfShape3.withCollisions = true
    gltfShape3.isPointerBlocker = true
    gltfShape3.visible = true
    largeStarMosaicTile.addComponentOrReplace(gltfShape3)
}

export function addfloorHexagon(x: number, y: number, z: number) {
    const floorHexagon = new Entity('floorHexagon')
    engine.addEntity(floorHexagon)
    floorHexagon.setParent(_scene)
    const transform5 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(4, 1, 4)
    })
    floorHexagon.addComponentOrReplace(transform5)
    const gltfShape4 = new GLTFShape("models/c2f3bda2-7ffc-4873-8d2b-026d2a4abeb6/HexagonFloor.glb")
    gltfShape4.withCollisions = true
    gltfShape4.isPointerBlocker = true
    gltfShape4.visible = true
    floorHexagon.addComponentOrReplace(gltfShape4)
}

export function addGreenhouse(
    x: number,
    y: number,
    z: number,
    xRot: number = 0,
    yRot: number = 0,
    zRot: number = 0
) {
    const noIMAGE = new Entity('noIMAGE')
    engine.addEntity(noIMAGE)
    noIMAGE.setParent(_scene)
    const transform11 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    transform11.rotation.setEuler(xRot, yRot, zRot);
    noIMAGE.addComponentOrReplace(transform11)
    const gltfShape7 = new GLTFShape("models/ea601b6c-3d21-4c34-b4cb-620c7022d3a2/GreenHouse_02/GreenHouse_02.glb")
    gltfShape7.withCollisions = true
    gltfShape7.isPointerBlocker = true
    gltfShape7.visible = true
    noIMAGE.addComponentOrReplace(gltfShape7)
}
