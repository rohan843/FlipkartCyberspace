import { Dialog } from '@dcl/npc-scene-utils'
import { fruitNPC1 } from './fruitNPC1'
import { mainIntroNPC1 } from './mainIntroNPC1'
import { howToUseNPC1 } from './howToUseNPC1'
import { extraNPC1 } from './extraNPC1'
import { extraNPC2 } from './extraNPC2'
import { extraNPC3 } from './extraNPC3'
import { extraNPC4 } from './extraNPC4'

export const FruitNPC1Dialog: Dialog[] = [
    {
        text: "Hi, I'm Eko - welcome to the groceries corner!"
    },
    {
        text: "Here you can buy fruits, vegetables, stationery, fish, frozen food, and even ice cream!"
    },
    {
        text: 'Would you like to know which stand provides what?',
        isQuestion: true,
        buttons: [
            { label: 'Yes', goToDialog: 4 },
            { label: 'No', goToDialog: 3 }
        ]
    },
    {
        text: "Okay, I'll be right here!",
        isEndOfDialog: true,
        triggeredByNext: () => {
            fruitNPC1.playAnimation('Goodbye', true, 2)
        }
    },
    {
        text: "The first stand from the right is the fish stand."
    },
    {
        text: "Right next to it is the ice cream stand, followed by 3 fruit stands."
    },
    {
        text: "After the fruit stand, there lie the 2 stationery stands, and after those is the frozen food stand."
    },
    {
        text: "All products are delivered fresh, right to your doorstep!"
    },
    {
        text: 'Would you like me to repeat?',
        isQuestion: true,
        buttons: [
            { label: 'Yes', goToDialog: 4 },
            { label: 'No', goToDialog: 9 }
        ]
    },
    {
        text: "Okay, Happy shopping!",
        isEndOfDialog: true,
        triggeredByNext: () => {
            fruitNPC1.playAnimation('Goodbye', true, 2)
        }
    }
]

export const MainIntroNPC1Dialog: Dialog[] = [
    {
        text: "Hi, I'm Flip - welcome to the Flipkart Cyberspace!"
    },
    {
        text: 'Would you like to learn more about this place?',
        isQuestion: true,
        buttons: [
            { label: 'Yes', goToDialog: 3 },
            { label: 'No', goToDialog: 2 }
        ]
    },
    {
        text: "Okay, I'll be around if you get curious!",
        isEndOfDialog: true,
        triggeredByNext: () => {
            mainIntroNPC1.playAnimation('Goodbye', true, 2)
        }
    },
    {
        text: 'Flipkart Cyberspace is a virtual shopping mall. It allows you to experience shopping in a real mall, from the comfort of your home.'
    },
    {
        text: 'Do you want me to talk about the rest of Flipkart Cyberspace?',
        isQuestion: true,
        buttons: [
            { label: 'Yes', goToDialog: 5 },
            { label: 'No', goToDialog: 10 }
        ]
    },
    {
        text: 'Great! There\'s a lot to see right here.'
    },
    {
        text: 'If you walk around you might run into my buddies and each will be happy to help you.'
    },
    {
        text: 'You can learn a lot from them about how Flipkart Cyberspace works and what makes it special.'
    },
    {
        text: 'I recommend you start at the shop right behind me!',
        offsetY: 18
    },
    {
        text: 'So what are you waiting for? Go and explore the Flipkart Cyberspace!',
        isEndOfDialog: true,
        triggeredByNext: () => {
            mainIntroNPC1.playAnimation('Goodbye', true, 2)
        }
    },
    {
        text: 'All right! I\'ll be right here.',
        isEndOfDialog: true,
        triggeredByNext: () => {
            mainIntroNPC1.playAnimation('Goodbye', true, 2)
        }
    }
]

export const HowToUseNPC1Dialog: Dialog[] = [
    {
        text: "Hi, I'm Tri - would you like to learn about how to move around? (Right click and choose the option)",
        isQuestion: true,
        buttons: [
            { label: 'Yes', goToDialog: 2 },
            { label: 'No', goToDialog: 1 }
        ]
    },
    {
        text: "Okay, Have a nice experience!",
        isEndOfDialog: true,
        triggeredByNext: () => {
            howToUseNPC1.playAnimation('Goodbye', true, 2)
        }
    },
    {
        text: 'The left click allows you to go to next text box. \nIt also allows you to lock the pointer position, to look around. To look around, simply point your mouse to the screen, do a left click, and move the mouse.'
    },
    {
        text: 'To be able to move, press either the arrow keys, or the WASD keys on the keyboard.'
    },
    {
        text: 'At any time, the right click undocks the mouse pointer, and you can use the pointer again.'
    },
    {
        text: "Some items (like me!) are interactive. To interact with them, go near them. Now, ensure that the pointer is locked, by doing a left click. After this, simply point the dot at the centre of the screen to the items, and click!"
    },
    {
        text: "Also, at the bottom left of the screen, there's an option to chat with other people, with a voice chat option coming soon!"
    },
    {
        text: 'Now that you know how to use the controlls, have fun at Flipkart Cyberspace! I would recommend to go to the fountain to meet Flip - he\'s really excited to tell you more. Also, if you go straight ahead, you\'ll meet Eko - she loves to show people around.',
        isEndOfDialog: true,
        triggeredByNext: () => {
            howToUseNPC1.playAnimation('Goodbye', true, 2)
        }
    }
]

export const ExtraNPC1Dialog: Dialog[] = [
    {
        text: "Hi! I'm Ririn"
    },
    {
        text: "These stores provide you with books, decorative clocks, and other decorative items."
    },
    {
        text: "Happy Shopping!",
        isEndOfDialog: true,
        triggeredByNext: () => {
            extraNPC4.playAnimation('Goodbye', true, 2)
        }
    }
]

export const ExtraNPC2Dialog: Dialog[] = [
    {
        text: "Hi! I'm Ita",
    },
    {
        text: "You can find shoes, beauty products and bags in these stores."
    },
    {
        text: "The 2 single - storey shops also provide you the option to see the products in 3D!"
    },
    {
        text: "They provide Gym Equipments and bags right now."
    },
    {
        text: "Just follow the sign boards, and enjoy shopping!",
        isEndOfDialog: true,
        triggeredByNext: () => {
            extraNPC2.playAnimation('Goodbye', true, 2)
        }
    }
]

export const ExtraNPC3Dialog: Dialog[] = [
    {
        text: "Hi! I'm Vanya"
    },
    {
        text: "Here you can find clothes, and shoes. Just look at the bill boards, and proceed."
    },
    {
        text: "You will also find 3 shops on both sides of this main complex, behind these buildings. They provide decorative items, games, books, and more!"
    },
    {
        text: "Happy Shopping!",
        isEndOfDialog: true,
        triggeredByNext: () => {
            extraNPC3.playAnimation('Goodbye', true, 2)
        }
    }
]

export const ExtraNPC4Dialog: Dialog[] = [
    {
        text: "Hi! I'm Rd"
    },
    {
        text: "These stores provide you with games, outdoor sports equipment, and antiques."
    },
    {
        text: "Feel free to browse, and buy your preferred items!",
        isEndOfDialog: true,
        triggeredByNext: () => {
            extraNPC4.playAnimation('Goodbye', true, 2)
        }
    }
]
