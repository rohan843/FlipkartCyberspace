import { createDispenser } from "./booth/dispenser"
import { addMuseumAt } from "./modules/museum"
import { addShopAt } from "./modules/shop"
import { museumConfig1, museumConfig2, museumConfig3 } from "./museum_config"
import { shopConfig1, shopConfig2 } from "./shop_config"
import { addBirdField } from "./modules/birdField"
import { addDoors } from "./modules/doors"
import { addWallLight } from "./modules/furniture"

addWallLight(-4.00,0.88,53.66)
addMuseumAt(8, 0, 8, museumConfig1)
addMuseumAt(40, 0, 8, museumConfig1)
addMuseumAt(56, 0, 24, museumConfig2)
addMuseumAt(56, 0, 40, museumConfig2)
addMuseumAt(56, 0, 56, museumConfig2)
addMuseumAt(56, 0, 72, museumConfig2)
addMuseumAt(56, 0, 88, museumConfig2)
addMuseumAt(8, 0, 104, museumConfig3)
addMuseumAt(40, 0, 104, museumConfig3)
addShopAt(24, 0, 8, shopConfig1)
addShopAt(24, 0, 104, shopConfig2)
addBirdField()
addDoors()


createDispenser(
    {
        position: new Vector3(8 + 5.5, 7.32, 8),
        rotation: Quaternion.Euler(0, -90, 0)
    },
    'acd27e4b-24bd-4040-b715-c0e11e863fb0'
)


createDispenser(
    {
        position: new Vector3(28.61, 0, 8.70),
        rotation: Quaternion.Euler(0, -90, 0)
    },
    'acd27e4b-24bd-4040-b715-c0e11e863fb0'
)
