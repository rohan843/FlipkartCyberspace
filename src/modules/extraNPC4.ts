import resources from "../NPCResources"
import { NPC, NPCDelay } from '@dcl/npc-scene-utils'
import { ExtraNPC4Dialog } from "./dialogData"

export const extraNPC4 = new NPC(
    {
        position: new Vector3(72.50, 2.2, 97.32),
        rotation: Quaternion.Euler(0, 30, 0),
        scale: new Vector3(1.7, 1.7, 1.7)
    },
    resources.models.robots.ron,
    () => {
        // animations
        extraNPC4.playAnimation('Hello', true, 2)

        const dummyent = new Entity()
        dummyent.addComponent(
            new NPCDelay(2, () => {
                extraNPC4.playAnimation('Talk')
            })
        )
        engine.addEntity(dummyent)

        // sound
        extraNPC4.addComponentOrReplace(new AudioSource(resources.sounds.ron))
        extraNPC4.getComponent(AudioSource).playOnce()

        // dialog UI
        extraNPC4.talk(ExtraNPC4Dialog)
    },
    {
        faceUser: true,
        portrait: {
            path: 'images/portraits/ron.png',
            height: 256,
            width: 256,
            section: {
                sourceHeight: 512,
                sourceWidth: 512
            }
        },
        onWalkAway: () => {
            extraNPC4.playAnimation('Goodbye', true, 2)
        }
    }
)


