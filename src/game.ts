import { createDispenser } from "./booth/dispenser"
import { addMuseumAt } from "./modules/museum"
import { config1 } from "./config"

addMuseumAt(8, 0, 8, config1)
addMuseumAt(24, 0, 8, config1)

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

