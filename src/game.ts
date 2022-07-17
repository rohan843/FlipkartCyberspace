import { createDispenser } from "./booth/dispenser"
import { addMuseumAt } from "./modules/museum"
import { addShopAt } from "./modules/shop"
import { museumConfig1, museumConfig2, museumConfig3 } from "./museum_config"
import { shopConfig1, shopConfig2 } from "./shop_config"
import { addBirdField } from "./modules/birdField"
import { addDoors } from "./modules/doors"
import { addProjectorScreen } from "./modules/addProjector"
import { addCaribeanWater, addFairKiosk, addFruitKiosk, addGrassTile, addiceCreamKiosk, addornamentalFountain as addOrnamentalFountain, addRockTile, addrustickiosk, addSandTile, addShopBlack, addShopEmissive, addShushiBar, addSideWalkTile, addSteampunkBench, addStoneBrickThreshold, addTheFountainOfBrokenDreams, addTheFountainOfSpirits, addWoodTile } from "./modules/furniture"
import { addStraightBarrier, addCurvedBarrierEnd, addWallLight, addStoneBrickWall, addCornerStoneBrickWall, addStainedGlassStoneBrickWindow, addWallArrowBoard, addLowStonePillar, addSmallStonePillar, addConicalStonePillar } from "./modules/furniture"
import { addShopBuilding } from "./modules/building"

// addGrassTile(-7.60 + 15, 0, 64.08)
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
// addBirdField()
// addDoors()
// addProjectorScreen()
// addTheFountainOfBrokenDreams(16, 0, 56)
// addTheFountainOfSpirits(16, 0, 62)
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

// Kiosks
const fruitOff = 0, extraOff = 0;
addFruitKiosk(-53.60 - 3 + fruitOff, 0, -11.5, 0, 90, 0)
addFruitKiosk(-53.60 + fruitOff, 0, -11.5, 0, 90, 0)
addFruitKiosk(-53.60 + 3 + fruitOff, 0, -11.5, 0, 90, 0)
addFairKiosk(-53.60 + 3 * 2 + extraOff, 0, -11.5, 0, 90, 0)
addFairKiosk(-53.60 + 3 * 3 + extraOff, 0, -11.5, 0, 90, 0)
addiceCreamKiosk(-60.8, 0, -11, 0, 30, 0)

// Fountain
addTheFountainOfSpirits(19.32, 0, 56.14);

// Shops
addShopEmissive(73, 0, -11, 0, 270, 0)
addShopEmissive(73, 0, -11 + 7 * 1, 0, 270, 0)
addShopEmissive(73, 0, -11 + 7 * 2, 0, 270, 0)

addShopEmissive(73, 0, 123, 0, 270, 0)
addShopEmissive(73, 0, 123 - 7 * 1, 0, 270, 0)
addShopEmissive(73, 0, 123 - 7 * 2, 0, 270, 0)

// Benches
addSteampunkBench(78.29, 0, 35.01 + 10 * 3, 0, 270, 0);
addSteampunkBench(78.29, 0, 35.01 + 10 * 2, 0, 270, 0);
addSteampunkBench(78.29, 0, 35.01 + 10 * 1, 0, 270, 0);
addSteampunkBench(78.29, 0, 35.01, 0, 270, 0);
addSteampunkBench(78.29, 0, 35.01 - 1 * 10, 0, 270, 0);
addSteampunkBench(78.29, 0, 35.01 - 2 * 10, 0, 270, 0);

// Wall
addCurvedBarrierEnd(-31.45, 0, 127.5, 0, 180, 0);
addStraightBarrier(-1.45 + 2 * -13, 0, 127.5);
addStraightBarrier(-1.45 + 2 * -12, 0, 127.5);
addStraightBarrier(-1.45 + 2 * -11, 0, 127.5);
addStraightBarrier(-1.45 + 2 * -10, 0, 127.5);
addStraightBarrier(-1.45 + 2 * -9, 0, 127.5);
addStraightBarrier(-1.45 + 2 * -8, 0, 127.5);
addStraightBarrier(-1.45 + 2 * -7, 0, 127.5);
addStraightBarrier(-1.45 + 2 * -6, 0, 127.5);
addStraightBarrier(-1.45 + 2 * -5, 0, 127.5);
addStraightBarrier(-1.45 + 2 * -4, 0, 127.5);
addStraightBarrier(-1.45 + 2 * -3, 0, 127.5);
addStraightBarrier(-1.45 + 2 * -2, 0, 127.5);
addStraightBarrier(-1.45 + 2 * -1, 0, 127.5);
addStraightBarrier(-1.45 + 2 * 0, 0, 127.5);
addStraightBarrier(-1.45 + 2 * 1, 0, 127.5);
addStraightBarrier(-1.45 + 2 * 2, 0, 127.5);
addStraightBarrier(-1.45 + 2 * 3, 0, 127.5);
addStraightBarrier(-1.45 + 2 * 4, 0, 127.5);
addStraightBarrier(-1.45 + 2 * 5, 0, 127.5);
addStraightBarrier(-1.45 + 2 * 6, 0, 127.5);
addCurvedBarrierEnd(12.55, 0, 127.5);
addWallLight(13, 0, 127.5, 1, 1, 1, 0, 0, 0);

addStoneBrickWall(76 - 4 * 34, 0, -15.9, 0, 0, 0);
addStoneBrickWall(76 - 4 * 33, 0, -15.9, 0, 0, 0);
addStoneBrickWall(76 - 4 * 32, 0, -15.9, 0, 0, 0);
addStoneBrickWall(76 - 4 * 31, 0, -15.9, 0, 0, 0);
addStoneBrickWall(76 - 4 * 30, 0, -15.9, 0, 0, 0);
addStoneBrickWall(76 - 4 * 29, 0, -15.9, 0, 0, 0);
addStoneBrickWall(76 - 4 * 28, 0, -15.9, 0, 0, 0);
addStoneBrickWall(76 - 4 * 27, 0, -15.9, 0, 0, 0);
addStoneBrickThreshold(76 - 4 * 26, 0, -15.9, 0, 0, 0);
addStoneBrickWall(76 - 4 * 25, 0, -15.9, 0, 0, 0);
addStoneBrickWall(76 - 4 * 24, 0, -15.9, 0, 0, 0);
addStoneBrickWall(76 - 4 * 23, 0, -15.9, 0, 0, 0);
addStainedGlassStoneBrickWindow(76 - 4 * 22, 0, -15.9, 0, 0, 0);
addStoneBrickWall(76 - 4 * 21, 0, -15.9, 0, 0, 0);
addStoneBrickWall(76 - 4 * 20, 0, -15.9, 0, 0, 0);
addStoneBrickWall(76 - 4 * 19, 0, -15.9, 0, 0, 0);
addStoneBrickWall(76 - 4 * 18, 0, -15.9, 0, 0, 0);
addStoneBrickWall(76 - 4 * 17, 0, -15.9, 0, 0, 0);
addStainedGlassStoneBrickWindow(76 - 4 * 16, 0, -15.9, 0, 0, 0);
addStoneBrickWall(76 - 4 * 15, 0, -15.9, 0, 0, 0);
addStoneBrickWall(76 - 4 * 14, 0, -15.9, 0, 0, 0);
addStoneBrickWall(76 - 4 * 13, 0, -15.9, 0, 0, 0);
addStoneBrickWall(76 - 4 * 12, 0, -15.9, 0, 0, 0);
addStoneBrickWall(76 - 4 * 11, 0, -15.9, 0, 0, 0);
addStoneBrickWall(76 - 4 * 10, 0, -15.9, 0, 0, 0);
addStainedGlassStoneBrickWindow(76 - 4 * 9, 0, -15.9, 0, 0, 0);
addStoneBrickWall(76 - 4 * 8, 0, -15.9, 0, 0, 0);
addStoneBrickWall(76 - 4 * 7, 0, -15.9, 0, 0, 0);
addStoneBrickWall(76 - 4 * 6, 0, -15.9, 0, 0, 0);
addStoneBrickWall(76 - 4 * 5, 0, -15.9, 0, 0, 0);
addStoneBrickWall(76 - 4 * 4, 0, -15.9, 0, 0, 0);
addStoneBrickWall(76 - 4 * 3, 0, -15.9, 0, 0, 0);
addStainedGlassStoneBrickWindow(76 - 4 * 2, 0, -15.9, 0, 0, 0);
addStoneBrickWall(76 - 4 * 1, 0, -15.9, 0, 0, 0);
addStoneBrickWall(76, 0, -15.9, 0, 0, 0);
addCornerStoneBrickWall(79.9, 0, -15.9, 0, 0, 0);
addStoneBrickWall(79.9, 0, 123.85 - 4 * 33, 0, 270, 0);
addStoneBrickWall(79.9, 0, 123.85 - 4 * 32, 0, 270, 0);
addStoneBrickWall(79.9, 0, 123.85 - 4 * 31, 0, 270, 0);
addStoneBrickWall(79.9, 0, 123.85 - 4 * 30, 0, 270, 0);
addStoneBrickWall(79.9, 0, 123.85 - 4 * 29, 0, 270, 0);
addStoneBrickWall(79.9, 0, 123.85 - 4 * 28, 0, 270, 0);
addStoneBrickWall(79.9, 0, 123.85 - 4 * 27, 0, 270, 0);
addStoneBrickWall(79.9, 0, 123.85 - 4 * 26, 0, 270, 0);
addStoneBrickWall(79.9, 0, 123.85 - 4 * 25, 0, 270, 0);
addStoneBrickWall(79.9, 0, 123.85 - 4 * 24, 0, 270, 0);
addStoneBrickWall(79.9, 0, 123.85 - 4 * 23, 0, 270, 0);
addStoneBrickWall(79.9, 0, 123.85 - 4 * 22, 0, 270, 0);
addStoneBrickWall(79.9, 0, 123.85 - 4 * 21, 0, 270, 0);
addStoneBrickWall(79.9, 0, 123.85 - 4 * 20, 0, 270, 0);
addStoneBrickWall(79.9, 0, 123.85 - 4 * 19, 0, 270, 0);
addStoneBrickWall(79.9, 0, 123.85 - 4 * 18, 0, 270, 0);
addStoneBrickWall(79.9, 0, 123.85 - 4 * 17, 0, 270, 0);
addStoneBrickWall(79.9, 0, 123.85 - 4 * 16, 0, 270, 0);
addStoneBrickWall(79.9, 0, 123.85 - 4 * 15, 0, 270, 0);
addStoneBrickWall(79.9, 0, 123.85 - 4 * 14, 0, 270, 0);
addStoneBrickWall(79.9, 0, 123.85 - 4 * 13, 0, 270, 0);
addStoneBrickWall(79.9, 0, 123.85 - 4 * 12, 0, 270, 0);
addStoneBrickWall(79.9, 0, 123.85 - 4 * 11, 0, 270, 0);
addStoneBrickWall(79.9, 0, 123.85 - 4 * 10, 0, 270, 0);
addStoneBrickWall(79.9, 0, 123.85 - 4 * 9, 0, 270, 0);
addStoneBrickWall(79.9, 0, 123.85 - 4 * 8, 0, 270, 0);
addStoneBrickWall(79.9, 0, 123.85 - 4 * 7, 0, 270, 0);
addStoneBrickWall(79.9, 0, 123.85 - 4 * 6, 0, 270, 0);
addStoneBrickWall(79.9, 0, 123.85 - 4 * 5, 0, 270, 0);
addStoneBrickWall(79.9, 0, 123.85 - 4 * 4, 0, 270, 0);
addStoneBrickWall(79.9, 0, 123.85 - 4 * 3, 0, 270, 0);
addStoneBrickWall(79.9, 0, 123.85 - 4 * 2, 0, 270, 0);
addStoneBrickWall(79.9, 0, 123.85 - 4 * 1, 0, 270, 0);
addStoneBrickWall(79.9, 0, 123.85, 0, 270, 0);
addCornerStoneBrickWall(79.9, 0, 127.85, 0, 270, 0);
addStoneBrickWall(76, 0, 127.2);
addStoneBrickWall(76 - 4, 0, 127.2);
addStoneBrickWall(76 - 4 * 1, 0, 127.2);
addStoneBrickWall(76 - 4 * 2, 0, 127.2);
addStoneBrickWall(76 - 4 * 3, 0, 127.2);
addStoneBrickWall(76 - 4 * 4, 0, 127.2);
addStoneBrickWall(76 - 4 * 5, 0, 127.2);
addStoneBrickWall(76 - 4 * 6, 0, 127.2);
addStainedGlassStoneBrickWindow(76 - 4 * 7, 0, 127.2);
addStoneBrickWall(76 - 4 * 8, 0, 127.2);
addStoneBrickWall(76 - 4 * 9, 0, 127.2);
addStoneBrickWall(76 - 4 * 10, 0, 127.2);
addStoneBrickWall(76 - 4 * 11, 0, 127.2);
addStoneBrickWall(76 - 4 * 12, 0, 127.2);
addConicalStonePillar(76 - 4 * 13, 0, 127.2);


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
