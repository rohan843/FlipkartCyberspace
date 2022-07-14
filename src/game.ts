import { createDispenser } from "./booth/dispenser"
import { addMuseumAt } from "./modules/museum"
import { addShopAt } from "./modules/shop"
import { museumConfig1, museumConfig2 } from "./museum_config"
import { shopConfig1 } from "./shop_config"

addMuseumAt(8, 0, 8, museumConfig1)
// addMuseumAt(24, 0, 8, museumConfig2)
addShopAt(24, 0, 8, shopConfig1)

// change the eventUUID to your event
// check following links about how to setup POAP event
// https://docs.decentraland.org/development-guide/poap-tokens/
// https://github.com/decentraland-scenes/POAP-Booth
createDispenser(
    {
        position: new Vector3(8 + 5.5, 7.32, 8),
        rotation: Quaternion.Euler(0, -90, 0)
    },
    'acd27e4b-24bd-4040-b715-c0e11e863fb0'
)


createDispenser(
    {
        position: new Vector3(28.61,0,8.70),
        rotation: Quaternion.Euler(0, -90, 0)
    },
    'acd27e4b-24bd-4040-b715-c0e11e863fb0'
)
