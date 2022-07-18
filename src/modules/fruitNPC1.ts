import resources from "../NPCResources"
import { NPC, NPCDelay } from '@dcl/npc-scene-utils'
import { FruitNPC1Dialog } from "./dialogData"

export const fruitNPC1 = new NPC(
    {
        position: new Vector3(16.09, 1.5, 52.74),
        rotation: Quaternion.Euler(0, 270, 0),
        scale: new Vector3(1.7, 1.7, 1.7)
    },
    resources.models.robots.alice,
    () => {
        // animations
        fruitNPC1.playAnimation('Hello', true, 2)

        const dummyent = new Entity()
        dummyent.addComponent(
            new NPCDelay(2, () => {
                fruitNPC1.playAnimation('Talk')
            })
        )
        engine.addEntity(dummyent)

        // sound
        fruitNPC1.addComponentOrReplace(new AudioSource(resources.sounds.alice))
        fruitNPC1.getComponent(AudioSource).playOnce()

        // dialog UI
        fruitNPC1.talk(FruitNPC1Dialog)
    },
    {
        faceUser: true,
        portrait: {
            path: 'images/portraits/alice.png',
            height: 256,
            width: 256,
            section: {
                sourceHeight: 512,
                sourceWidth: 512
            }
        },
        onWalkAway: () => {
            fruitNPC1.playAnimation('Goodbye', true, 2)
        }
    }
)

const ringShape = resources.models.robots.rings

const fruitNPC2Rings = new Entity()
fruitNPC2Rings.addComponent(ringShape)
fruitNPC2Rings.addComponent(
    new Transform({
        position: new Vector3(0, -0.65, 0)
    })
)
fruitNPC2Rings.setParent(fruitNPC1)
