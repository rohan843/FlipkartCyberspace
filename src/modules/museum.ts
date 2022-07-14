import { addBuilding } from "./building"
import { addNFTImage } from "./nftImage"
import { setSceneOrientation } from "./pivot"
import { addSculpture } from "./sculpture"
import { addSocialLink } from "./socialLink"
import { addVideoScreen } from "./videoScreen"
import { addElevator } from "./elevator"
import { addLogo } from "./logo"

export function addMuseumAt(x: number, y: number, z: number, config: any) {
    const pivotScene = setSceneOrientation(x, y, z, config)
    addBuilding(pivotScene)
    addElevator(pivotScene)
    addLogo(pivotScene, config)
    addSculpture(pivotScene, config)
    addNFTImage(pivotScene, config)
    addSocialLink(pivotScene, config)
    addVideoScreen(pivotScene, config)
}