import { createWearableStore } from "src/store/index";

createWearableStore(new Transform({
    position: new Vector3(-0.5, 0, 104),
    rotation: Quaternion.Euler(0, 90.0, 0)
}), [
    "urn:decentraland:matic:collections-v2:0x0068f4b8e5d23f317151328bc0d9a82454ab29bc",
    "urn:decentraland:matic:collections-v2:0x66194b1abcbfbedd83841775404b245c8f9e4183",
]);

createWearableStore(new Transform({
    position: new Vector3(-0.5, 0, 8),
    rotation: Quaternion.Euler(0, 90, 0)
}));
