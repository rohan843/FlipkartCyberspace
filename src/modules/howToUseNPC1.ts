import resources from "../NPCResources"
import { NPC, NPCDelay } from '@dcl/npc-scene-utils'
import { HowToUseNPC1Dialog } from "./dialogData"
// -17.34,1.5,107.41
export const howToUseNPC1 = new NPC(
    {
        position: new Vector3(-17.34, 1.5, 107.41),
        rotation: Quaternion.Euler(0, 30, 0),
        scale: new Vector3(1.7, 1.7, 1.7)
    },
    resources.models.robots.charlie,
    () => {
        // animations
        howToUseNPC1.playAnimation('Hello', true, 2)

        const dummyent = new Entity()
        dummyent.addComponent(
            new NPCDelay(2, () => {
                howToUseNPC1.playAnimation('Talk')
            })
        )
        engine.addEntity(dummyent)

        // sound
        howToUseNPC1.addComponentOrReplace(new AudioSource(resources.sounds.charlie))
        howToUseNPC1.getComponent(AudioSource).playOnce()

        // dialog UI
        howToUseNPC1.talk(HowToUseNPC1Dialog)
    },
    {
        faceUser: true,
        portrait: {
            path: 'images/portraits/charlie.png',
            height: 256,
            width: 256,
            section: {
                sourceHeight: 512,
                sourceWidth: 512
            }
        },
        onWalkAway: () => {
            howToUseNPC1.playAnimation('Goodbye', true, 2)
        }
    }
)

const ringShape = resources.models.robots.rings

const howToUseNPC1Rings = new Entity()
howToUseNPC1Rings.addComponent(ringShape)
howToUseNPC1Rings.addComponent(
    new Transform({
        position: new Vector3(0, -0.65, 0)
    })
)
howToUseNPC1Rings.setParent(howToUseNPC1)
