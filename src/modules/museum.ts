import { addMuseumBuilding } from "./building"
import { addNFTImage } from "./nftImage"
import { setSceneOrientation } from "./pivot"
import { addSculpture } from "./sculpture"
import { addMuseumSocialLink } from "./socialLink"
import { addMuseumVideoScreen } from "./videoScreen"
import { addElevator } from "./elevator"
import { addMuseumLogo } from "./logo"

export function addMuseumAt(x: number, y: number, z: number, config: any) {
    const pivotScene = setSceneOrientation(x, y, z, config)
    addMuseumBuilding(pivotScene)
    addElevator(pivotScene)
    addMuseumLogo(pivotScene, config)
    addSculpture(pivotScene, config)
    addNFTImage(pivotScene, config)
    addMuseumSocialLink(pivotScene, config)
    addMuseumVideoScreen(pivotScene, config)
}