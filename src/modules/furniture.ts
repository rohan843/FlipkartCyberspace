const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
    position: new Vector3(0, 0, 0),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

export function addWallLight(x: number, y: number, z: number) {
    const wallLight = new Entity('wallLight')
    engine.addEntity(wallLight)
    wallLight.setParent(_scene)
    const transform3 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
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

export function addCurvedBarrierEnd(x: number, y: number, z: number) {
    const curvedBarrierEnd = new Entity('curvedBarrierEnd')
    engine.addEntity(curvedBarrierEnd)
    curvedBarrierEnd.setParent(_scene)
    const transform10 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
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

export function addCornerStoneBrickWall(x: number, y: number, z: number) {
    const cornerStoneBrickWall = new Entity('cornerStoneBrickWall')
    engine.addEntity(cornerStoneBrickWall)
    cornerStoneBrickWall.setParent(_scene)
    const transform12 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
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

export function addStoneBrickWall(x: number, y: number, z: number) {
    const stoneBrickWall = new Entity('stoneBrickWall')
    engine.addEntity(stoneBrickWall)
    stoneBrickWall.setParent(_scene)
    const transform15 = new Transform({
        position: new Vector3(x, y, z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
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