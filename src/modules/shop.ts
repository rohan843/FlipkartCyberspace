import { addShopBuilding } from "./building"
import { setSceneOrientation } from "./pivot"
import { addShopSocialLink } from "./socialLink"
import { addShopVideoScreen } from "./videoScreen"
import { addShopLogo } from "./logo"
import { addWearable } from "./wearable"

export function addShopAt(x: number, y: number, z: number, config: any) {
    const pivotScene = setSceneOrientation(x, y, z, config)
    addShopBuilding(pivotScene, config)
    addShopLogo(pivotScene, config)
    addShopSocialLink(pivotScene, config)
    addShopVideoScreen(pivotScene, config)
    addWearable(pivotScene, config)
}