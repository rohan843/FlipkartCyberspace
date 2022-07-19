import resources from "../NPCResources"
import { NPC, NPCDelay } from '@dcl/npc-scene-utils'
import { MainIntroNPC1Dialog } from "./dialogData"

export const mainIntroNPC1 = new NPC(
    {
        position: new Vector3(14.20, 1.5, 52.05),
        rotation: Quaternion.Euler(0, 30, 0),
        scale: new Vector3(1.7, 1.7, 1.7)
    },
    resources.models.robots.bob,
    () => {
        // animations
        mainIntroNPC1.playAnimation('Hello', true, 2)

        const dummyent = new Entity()
        dummyent.addComponent(
            new NPCDelay(2, () => {
                mainIntroNPC1.playAnimation('Talk')
            })
        )
        engine.addEntity(dummyent)

        // sound
        mainIntroNPC1.addComponentOrReplace(new AudioSource(resources.sounds.bob))
        mainIntroNPC1.getComponent(AudioSource).playOnce()

        // dialog UI
        mainIntroNPC1.talk(MainIntroNPC1Dialog)
    },
    {
        faceUser: true,
        portrait: {
            path: 'images/portraits/bob.png',
            height: 256,
            width: 256,
            section: {
                sourceHeight: 512,
                sourceWidth: 512
            }
        },
        onWalkAway: () => {
            mainIntroNPC1.playAnimation('Goodbye', true, 2)
        }
    }
)

const ringShape = resources.models.robots.rings

const mainIntroNPC1Rings = new Entity()
mainIntroNPC1Rings.addComponent(ringShape)
mainIntroNPC1Rings.addComponent(
    new Transform({
        position: new Vector3(0, -0.65, 0)
    })
)
mainIntroNPC1Rings.setParent(mainIntroNPC1)
