import { addNFTImage } from "./nftImage"

export function addMuseumBuilding(pivotScene: Entity) {
    const building = new Entity()
    building.addComponent(new GLTFShape("models/museum/building.glb"))
    building.setParent(pivotScene)
}

export function addShopBuilding(pivotScene: Entity, config: any) {
    const building = new Entity()
    building.addComponent(new GLTFShape("models/store/store.glb"))
    building.setParent(pivotScene)


    let photoMachine = new Entity()
    photoMachine.addComponent(new GLTFShape("models/store/photo_machine.glb"))
    photoMachine.setParent(pivotScene)

    addNFTImage(pivotScene, config);

    //PHOTO MACHINE ANIMATION
    // photoMachine.addComponent(new Animator())
    // let photoAnim1 = new AnimationState("textures/bb_days_add.mp4")
    // let photoAnim2 = new AnimationState("pmPlay_2")

    // photoMachine.getComponent(Animator).addClip(photoAnim1)
    // photoMachine.getComponent(Animator).addClip(photoAnim2)

    // photoAnim1.playing = true
    // photoAnim2.playing = true
}