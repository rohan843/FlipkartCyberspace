import { createDispenser } from "./booth/dispenser"
import { addMuseumAt } from "./modules/museum"
import { addShopAt } from "./modules/shop"
import { museumConfig1, museumConfig2, museumConfig3 } from "./museum_config"
import { shopConfig1, shopConfig2 } from "./shop_config"
import { addBirdField } from "./modules/birdField"
import { addDoors } from "./modules/doors"
import { addProjectorScreen } from "./modules/addProjector"
import { addbalsamFlower, addbenchGrassFern, addBook1, addBush, addBush2, addCactus, addCactus2, addCactus3, addCaribeanWater, addEvergreenShrub, addFairKiosk, addFruitKiosk, addGrassSprout, addGrassTile, addIceCreamKiosk, addJungleFern, addJungleShrub, addornamentalFountain as addOrnamentalFountain, addOrnamentalStonePillar, addPlant, addRockTile, addrustickiosk, addSandTile, addShelf2, addShelf3, addShelf5, addShopBlack, addShopEmissive, addShrub, addShrubRow, addShushiBar, addSideWalkTile, addSteampunkBench, addStoneBrickThreshold, addTheFountainOfBrokenDreams, addTheFountainOfSpirits, addTriSpikeGrass, addWallPlainGlass, addWoodTile } from "./modules/furniture"
import { addApple, addBananas, addDustbin, addFruit, addFruit2, addFruit3, addFruit4, addFruit5, addFruit6, addPineapple, addRedFish, addShelf, addSucculentCrop } from "./modules/furniture"
import { addStraightBarrier, addCurvedBarrierEnd, addWallLight, addStoneBrickWall, addCornerStoneBrickWall, addStainedGlassStoneBrickWindow, addWallArrowBoard, addLowStonePillar, addSmallStonePillar, addConicalStonePillar } from "./modules/furniture"
import { addShelf4 } from "./modules/furniture"
import { addShopBuilding } from "./modules/building"
import { addRusticMerchantFishStand } from "./modules/furniture"


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
addProjectorScreen()

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
const fruitOff = 16, extraOff = 16, iceOff = 16, sushiOff = 16, fishOff = 16;
addFruitKiosk(-53.60 - 3 + fruitOff, 0, -11.5, 0, 90, 0)
addFruitKiosk(-53.60 + fruitOff, 0, -11.5, 0, 90, 0)
addFruitKiosk(-53.60 + 3 + fruitOff, 0, -11.5, 0, 90, 0)
addFairKiosk(-53.60 + 3 * 2 + extraOff, 0, -11.5, 0, 90, 0)
addFairKiosk(-53.60 + 3 * 3 + extraOff, 0, -11.5, 0, 90, 0)
addIceCreamKiosk(-60.8 + iceOff, 0, -11, 0, 30, 0)
addShushiBar(-41.91 + sushiOff, 0, -12.60, 0, 270, 0)
addRusticMerchantFishStand(-62.25 + fishOff, 0, -7.93, 0, 60, 0)



// Fountain
addTheFountainOfSpirits(19.32, 0, 56.14);

// Shops
addShopEmissive(73, 0, -11, 0, 270, 0)
addShopEmissive(73, 0, -11 + 7 * 1, 0, 270, 0)
addShopEmissive(73, 0, -11 + 7 * 2, 0, 270, 0)
addShelf2(75.14, 0, -11.89)
addShelf4(75.14, 0, -11.89 + 2)
addBook1(75.14, 2, -11.5)
// addShelf5(75.14,0,-11.89 + 2)
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

const pillarOff = 16;
addLowStonePillar(-62 + 1.5 * 8 + pillarOff, 0, -15.54);
addLowStonePillar(-62 + 1.5 * 7 + pillarOff, 0, -15.54);
addLowStonePillar(-62 + 1.5 * 6 + pillarOff, 0, -15.54);
addLowStonePillar(-62 + 1.5 * 5 + pillarOff, 0, -15.54);
addLowStonePillar(-62 + 1.5 * 4 + pillarOff, 0, -15.54);
addLowStonePillar(-62 + 1.5 * 3 + pillarOff, 0, -15.54);
addLowStonePillar(-62 + 1.5 * 2 + pillarOff, 0, -15.54);
addLowStonePillar(-62 + 1.5 * 1 + pillarOff, 0, -15.54);
addLowStonePillar(-62 + pillarOff, 0, -15.54);
addLowStonePillar(-62 - 1.5 * 1 + pillarOff, 0, -15.54);
// addWallPlainGlass(-62, 0, -15.7, 0, 0, 0, -10, 1, 1)
// addStoneBrickWall(76 - 4 * 34, 0, -15.9, 0, 0, 0);
// addStoneBrickWall(76 - 4 * 33, 0, -15.9, 0, 0, 0);
// addStoneBrickWall(76 - 4 * 32, 0, -15.9, 0, 0, 0);
// addStoneBrickWall(76 - 4 * 31, 0, -15.9, 0, 0, 0);
// addStoneBrickWall(76 - 4 * 30, 0, -15.9, 0, 0, 0);
// addStoneBrickWall(76 - 4 * 29, 0, -15.9, 0, 0, 0);
// addStoneBrickWall(76 - 4 * 28, 0, -15.9, 0, 0, 0);
// addStoneBrickWall(76 - 4 * 27, 0, -15.9, 0, 0, 0);
// addStoneBrickWall(76 - 4 * 26, 0, -15.9, 0, 0, 0);
// addStoneBrickWall(76 - 4 * 25, 0, -15.9, 0, 0, 0);
// addStoneBrickWall(76 - 4 * 24, 0, -15.9, 0, 0, 0);
// addStoneBrickThreshold(76 - 4 * 23, 0, -15.9, 0, 0, 0);
// addStoneBrickThreshold(76 - 4 * 22, 0, -15.9, 0, 0, 0);
// addStoneBrickThreshold(76 - 4 * 21, 0, -15.9, 0, 0, 0);
// addStoneBrickThreshold(76 - 4 * 20, 0, -15.9, 0, 0, 0);
// addStoneBrickThreshold(76 - 4 * 19, 0, -15.9, 0, 0, 0);
// addStoneBrickThreshold(76 - 4 * 18, 0, -15.9, 0, 0, 0);
// addStoneBrickThreshold(76 - 4 * 17, 0, -15.9, 0, 0, 0);
addStoneBrickWall(76 - 4 * 16, 0, -15.9, 0, 0, 0);
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

//Bushes
addBush2(71.9-2*35,0,13.5-2*7)
addShrub(71.9-2*34,0,13.5-2*7)
addEvergreenShrub(71.4-2*33,0,13.5-2*7)
addBush2(71.2-2*32,0,13.5-2*7)
addShrub(71.2-2*31,0,13.5-2*7)
addEvergreenShrub(70.7-2*30,0,13.5-2*7)
addBush2(70.5-2*29,0,13.5-2*7)
addShrub(70.5-2*28,0,13.5-2*7)
addEvergreenShrub(70-2*27,0,13.5-2*7)
addBush2(69.8-2*26,0,13.5-2*7)
addShrub(69.8-2*25,0,13.5-2*7)
addEvergreenShrub(69.3-2*24,0,13.5-2*7)
addBush2(69.1-2*23,0,13.5-2*7)
addShrub(69.1-2*22,0,13.5-2*7)
addEvergreenShrub(68.6-2*21,0,13.5-2*7)
addBush2(68.4-2*20,0,13.5-2*7)
addShrub(68.4-2*19,0,13.5-2*7)
addEvergreenShrub(67.9-2*18,0,13.5-2*7)
addBush2(67.7-2*17,0,13.5-2*7)
addShrub(67.7-2*16,0,13.5-2*7)
addEvergreenShrub(67.2-2*15,0,13.5-2*7)
addBush2(67-2*14,0,13.5-2*7)
addShrub(67-2*13,0,13.5-2*7)
addEvergreenShrub(66.7-2*12,0,13.5-2*7)
addBush2(66.5-2*11,0,13.5-2*7)
addShrub(66.5-2*10,0,13.5-2*7)

addEvergreenShrub(66.5-2*9,0,14-2*7)
addBush2(66.5-2*9,0,14-2*6)
addShrub(66.5-2*9,0,14-2*5)
addEvergreenShrub(66.5-2*9,0,14-2*4)
addBush2(66.5-2*9,0,14-2*3)
addShrub(66.5-2*9,0,14-2*2)
addEvergreenShrub(66.5-2*9,0,14-2*1)
addBush2(66.5-2*9,0,14)

addShrub(66-2*8,0,15.5)
addEvergreenShrub(66-2*7,0,15.5)
addBush2(65.5-2*6,0,15.5)
addShrub(65.5-2*5,0,15.5)
addEvergreenShrub(65.5-2*4,0,15.5)
addBush2(65-2*3,0,15.5)
addShrub(65-2*2,0,15.5)
addEvergreenShrub(65-2*1,0,15.5)

// addBush(64.59,0.88,16.10)
addBush2(64.59,0,16.10)
addShrub(64.59,0,16.10+2)
// addShrubRow(64.59,0,16.10+2*2)
addJungleShrub(64.59,0,16.10+2*2)
addEvergreenShrub(64.59,0,16.10+2*2)
// addPlant(64.59,0,16.10+2*5)
// addTriSpikeGrass(64.59,0,16.10+2*6)
// addbenchGrassFern(64.59,0,16.10+2*7)
// addGrassSprout(64.59,0,16.10+2*8)
// addbalsamFlower(64.59,0,16.10+2*9)
addJungleFern(64.59,0,16.10+2*10)
// addCactus(64.59,0,16.10+2*11)
// addCactus2(64.59,0,16.10+2*12)
// addCactus3(64.59,0,16.10+2*13)
addBush2(64.59,0,16.10+2*3)
addShrub(64.59,0,16.10+2*4)
addEvergreenShrub(64.59,0,16.10+2*5)
addBush2(64.59,0,16.10+2*6)
addShrub(64.59,0,16.10+2*7)
addEvergreenShrub(64.59,0,16.10+2*8)
addBush2(64.59,0,16.10+2*9)
addShrub(64.59,0,16.10+2*10)
addEvergreenShrub(64.59,0,16.10+2*11)
addBush2(64.59,0,16.10+2*12)
addShrub(64.59,0,16.10+2*13)
addEvergreenShrub(64.59,0,16.10+2*14)
addBush2(64.59,0,16.10+2*15)
addShrub(64.59,0,16.10+2*16)
addEvergreenShrub(64.59,0,16.10+2*17)
addBush2(64.59,0,16.10+2*18)
addShrub(64.59,0,16.10+2*19)
addEvergreenShrub(64.59,0,16.10+2*20)
addBush2(64.59,0,16.10+2*21)
addShrub(64.59,0,16.10+2*22)
addEvergreenShrub(64.59,0,16.10+2*23)
addBush2(64.59,0,16.10+2*24)
addShrub(64.59,0,16.10+2*25)
addEvergreenShrub(64.59,0,16.10+2*26)
addBush2(64.59,0,16.10+2*27)
addShrub(64.59,0,16.10+2*28)
addEvergreenShrub(64.59,0,16.10+2*29)
addBush2(64.59,0,16.10+2*30)
addShrub(64.59,0,16.10+2*31)
addEvergreenShrub(64.59,0,16.10+2*32)
addBush2(64.59,0,16.10+2*33)
addShrub(64.59,0,16.10+2*34)
addEvergreenShrub(64.59,0,16.10+2*35)
addBush2(64.59,0,16.10+2*36)
addShrub(64.59,0,16.10+2*37)
addEvergreenShrub(64.59,0,16.10+2*38)
addBush2(64.59,0,16.10+2*39)
addShrub(64.59,0,16.10+2*40)

addEvergreenShrub(65-2*1,0,16.50+2*40)
addBush2(65-2*2,0,16.50+2*40)
addShrub(65-2*3,0,16.50+2*40)
addEvergreenShrub(65.5-2*4,0,16.50+2*40)
addBush2(65.5-2*5,0,16.50+2*40)
addShrub(65.5-2*6,0,16.50+2*40)
addEvergreenShrub(66-2*7,0,16.50+2*40)
addBush2(66-2*8,0,16.50+2*40)

addShrub(66.5-2*9,0,16+2*41)
addEvergreenShrub(66.5-2*9,0,16+2*42)
addBush2(66.5-2*9,0,16+2*43)
addShrub(66.5-2*9,0,16+2*44)
addEvergreenShrub(66.5-2*9,0,16+2*45)
addBush2(66.5-2*9,0,16+2*46)
addShrub(66.5-2*9,0,16+2*47)
addEvergreenShrub(66.5-2*9,0,16+2*48)

addBush2(67-2*10,0,16.5+2*48)
addShrub(67-2*11,0,16.5+2*48)
addEvergreenShrub(67.5-2*12,0,16.5+2*48)
addBush2(67.5-2*13,0,16.5+2*48)
addShrub(67.5-2*14,0,16.5+2*48)
addEvergreenShrub(68-2*15,0,16.5+2*48)
addBush2(68-2*16,0,16.5+2*48)
addShrub(68-2*17,0,16.5+2*48)
addEvergreenShrub(68.5-2*18,0,16.5+2*48)
addBush2(68.5-2*19,0,16.5+2*48)
addShrub(68.5-2*20,0,16.5+2*48)
addEvergreenShrub(69-2*21,0,16.5+2*48)
addBush2(69-2*22,0,16.5+2*48)
addShrub(69-2*23,0,16.5+2*48)
addEvergreenShrub(69.5-2*24,0,16.5+2*48)
addBush2(69.5-2*25,0,16.5+2*48)
addShrub(69.5-2*26,0,16.5+2*48)
addEvergreenShrub(70-2*27,0,16.5+2*48)
addBush2(70-2*28,0,16.5+2*48)
addShrub(70-2*29,0,16.5+2*48)
addEvergreenShrub(70.5-2*30,0,16.5+2*48)
addBush2(70.5-2*31,0,16.5+2*48)
addShrub(70.5-2*32,0,16.5+2*48)
addEvergreenShrub(71-2*33,0,16.5+2*48)
addBush2(71-2*34,0,16.5+2*48)
addShrub(71-2*35,0,16.5+2*48)
// addEvergreenShrub(71.5-2*36,0,16.5+2*48)


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
