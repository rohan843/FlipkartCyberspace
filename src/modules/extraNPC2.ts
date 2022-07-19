import resources from "../NPCResources"
import { NPC, NPCDelay } from '@dcl/npc-scene-utils'
import { ExtraNPC2Dialog } from "./dialogData"

export const extraNPC2 = new NPC(
    {
        position: new Vector3(31.65,1.6,80.15),
        rotation: Quaternion.Euler(0, 30, 0),
        scale: new Vector3(1.7, 1.7, 1.7)
    },
    resources.models.robots.betty,
    () => {
        // animations
        extraNPC2.playAnimation('Hello', true, 2)

        const dummyent = new Entity()
        dummyent.addComponent(
            new NPCDelay(2, () => {
                extraNPC2.playAnimation('Talk')
            })
        )
        engine.addEntity(dummyent)

        // sound
        extraNPC2.addComponentOrReplace(new AudioSource(resources.sounds.betty))
        extraNPC2.getComponent(AudioSource).playOnce()

        // dialog UI
        extraNPC2.talk(ExtraNPC2Dialog)
    },
    {
        faceUser: true,
        portrait: {
            path: 'images/portraits/betty.png',
            height: 256,
            width: 256,
            section: {
                sourceHeight: 512,
                sourceWidth: 512
            }
        },
        onWalkAway: () => {
            extraNPC2.playAnimation('Goodbye', true, 2)
        }
    }
)

// const ringShape = resources.models.robots.rings

// const howToUseNPC1Rings = new Entity()
// howToUseNPC1Rings.addComponent(ringShape)
// howToUseNPC1Rings.addComponent(
//     new Transform({
//         position: new Vector3(0, -0.8, 0)
//     })
// )
// howToUseNPC1Rings.setParent(extraNPC2)
