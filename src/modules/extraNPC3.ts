import resources from "../NPCResources"
import { NPC, NPCDelay } from '@dcl/npc-scene-utils'
import { ExtraNPC3Dialog } from "./dialogData"

export const extraNPC3 = new NPC(
    {
        position: new Vector3(39.82, 2.2, 45.5),
        rotation: Quaternion.Euler(0, 30, 0),
        scale: new Vector3(1.7, 1.7, 1.7)
    },
    resources.models.robots.marsha,
    () => {
        // animations
        extraNPC3.playAnimation('Hello', true, 2)

        const dummyent = new Entity()
        dummyent.addComponent(
            new NPCDelay(2, () => {
                extraNPC3.playAnimation('Talk')
            })
        )
        engine.addEntity(dummyent)

        // sound
        extraNPC3.addComponentOrReplace(new AudioSource(resources.sounds.marsha))
        extraNPC3.getComponent(AudioSource).playOnce()

        // dialog UI
        extraNPC3.talk(ExtraNPC3Dialog)
    },
    {
        faceUser: true,
        portrait: {
            path: 'images/portraits/marsha.png',
            height: 256,
            width: 256,
            section: {
                sourceHeight: 512,
                sourceWidth: 512
            }
        },
        onWalkAway: () => {
            extraNPC3.playAnimation('Goodbye', true, 2)
        }
    }
)


