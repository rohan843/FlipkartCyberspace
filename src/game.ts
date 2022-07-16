import { createDispenser } from "./booth/dispenser"
import { addMuseumAt } from "./modules/museum"
import { addShopAt } from "./modules/shop"
import { museumConfig1, museumConfig2, museumConfig3 } from "./museum_config"
import { shopConfig1, shopConfig2 } from "./shop_config"
import { addBirdField } from "./modules/birdField"
import { addDoors } from "./modules/doors"
import { addProjectorScreen} from "./modules/addProjector"
import { addCaribeanWater, addGrassTile, addRockTile, addSandTile, addSideWalkTile, addTheFountainOfBrokenDreams, addTheFountainOfSpirits, addWoodTile } from "./modules/furniture"
// import { addtelephoneBooth } from "./modules/furniture"

addGrassTile(-7.60+15,0,64.08)
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
addProjectorScreen()
addTheFountainOfBrokenDreams(16,0,56)
addTheFountainOfSpirits(16,0,62)
// addCaribeanWater(8,-0.1,113)
// addRockTile(-7.60,0,64.08)
// addSandTile(-7.60+5,0,64.08)
// addWoodTile(-7.60+10,0,64.08)

// addSideWalkTile(-7.60+20,0,64.08)
// addCaribeanWater(16,0,120)
// addCaribeanWater(8,0,128)
// addCaribeanWater(16,0,128)
// addCaribeanWater(24,0,120)
// addCaribeanWater(32,0,120)
// addCaribeanWater(24,0,128)
// addCaribeanWater(32,0,128)
// addCaribeanWater(40,0,120)
// addCaribeanWater(48,0,120)
// addCaribeanWater(40,0,128)
// addCaribeanWater(48,0,128)
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
