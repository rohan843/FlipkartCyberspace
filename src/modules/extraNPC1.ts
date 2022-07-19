import resources from "../NPCResources"
import { NPC, NPCDelay } from '@dcl/npc-scene-utils'
import { ExtraNPC1Dialog } from "./dialogData"

export const extraNPC1 = new NPC(
    {
        position: new Vector3(71.09, 2.2, 14),
        rotation: Quaternion.Euler(0, 30, 0),
        scale: new Vector3(1.7, 1.7, 1.7)
    },
    resources.models.robots.bela,
    () => {
        // animations
        extraNPC1.playAnimation('Hello', true, 2)

        const dummyent = new Entity()
        dummyent.addComponent(
            new NPCDelay(2, () => {
                extraNPC1.playAnimation('Talk')
            })
        )
        engine.addEntity(dummyent)

        // sound
        extraNPC1.addComponentOrReplace(new AudioSource(resources.sounds.bela))
        extraNPC1.getComponent(AudioSource).playOnce()

        // dialog UI
        extraNPC1.talk(ExtraNPC1Dialog)
    },
    {
        faceUser: true,
        portrait: {
            path: 'images/portraits/bela.png',
            height: 256,
            width: 256,
            section: {
                sourceHeight: 512,
                sourceWidth: 512
            }
        },
        onWalkAway: () => {
            extraNPC1.playAnimation('Goodbye', true, 2)
        }
    }
)


