export async function addWearable(pivotScene: Entity, config: any) {
    for (let item of config.wearable) {
        let wearableItem = new Entity()
        wearableItem.addComponent(new GLTFShape(item.model))
        wearableItem.addComponent(new Transform({
            position: item.position,
            rotation: item.rotation,
            scale: new Vector3(1.1, 1.1, 1.1)
        }))
        wearableItem.setParent(pivotScene)

        wearableItem.addComponent(new OnPointerDown(() => {},
            {
                hoverText: item.name
            }))

        if (item.link === null) {
            wearableItem.getComponent(OnPointerDown).hoverText = "INFO N/A"
        }
        else {
            //wearableItem.getComponent(OnPointerDown).hoverText = "INFO"
            wearableItem.getComponent(OnPointerDown).callback = () => {
                if (typeof(item.link) === 'string') openExternalURL(item.link as unknown as string)
            }
        }
    }
}
