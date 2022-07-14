import { addBuilding } from "./building"
import { addNFTImage } from "./nftImage"
import { setSceneOrientation } from "./pivot"
import { addSculpture } from "./sculpture"
import { addSocialLink } from "./socialLink"
import { addVideoScreen } from "./videoScreen"
import { addElevator } from "./elevator"
import { addLogo } from "./logo"

export function addMuseumAt(x: number, y: number, z: number, config: any) {
    const pivotScene = setSceneOrientation(x, y, z)
    addBuilding(pivotScene)
    addElevator(pivotScene)
    addLogo(pivotScene)
    addSculpture(pivotScene)
    addNFTImage(pivotScene, config)
    addSocialLink(pivotScene)
    addVideoScreen(pivotScene)
}