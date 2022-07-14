export function addMuseumSocialLink(pivotScene: Entity, config: any) {
    for (let linkData of config.socialMedia) {
        let clickableLink = new Entity()
        clickableLink.setParent(pivotScene)

        clickableLink.addComponent(new GLTFShape(linkData.model))
        clickableLink.addComponent(new Transform({
            position: linkData.position
        }))

        clickableLink.addComponent(new OnPointerDown(() => {
            openExternalURL(linkData.link)
        },
            {
                hoverText: linkData.name,
                distance: 10
            }))
    }
}

export function addShopSocialLink(pivotScene: Entity, config: any) {
    for (let linkData of config.socialMedia) {
        let clickableLink = new Entity()
        clickableLink.setParent(pivotScene)

        clickableLink.addComponent(new GLTFShape(linkData.model))
        clickableLink.addComponent(new Transform({
            position: linkData.position,
            rotation: Quaternion.Euler(0, 90, 0)
        }))

        clickableLink.addComponent(new OnPointerDown(() => {
            openExternalURL(linkData.link)
        },
            {
                hoverText: linkData.name,
                distance: 10
            }))
    }
}