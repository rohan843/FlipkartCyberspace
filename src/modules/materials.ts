const myVideoClip1 = new VideoClip('textures/bb_days_add.mp4')
export const myVideoTexture = new VideoTexture(myVideoClip1)

export let uvMat = new Material()
uvMat.albedoTexture = myVideoTexture
uvMat.emissiveTexture = myVideoTexture
uvMat.transparencyMode = 2
uvMat.emissiveColor = Color3.White()
uvMat.roughness = 1
uvMat.specularIntensity = 0
uvMat.metallic = 0

const myVideoClip2 = new VideoClip('textures/flipkart.mp4')
export const myVideoTexture2 = new VideoTexture(myVideoClip1)

export let uvMat2 = new Material()
uvMat2.albedoTexture = myVideoTexture
uvMat2.emissiveTexture = myVideoTexture
uvMat2.transparencyMode = 2
uvMat2.emissiveColor = Color3.White()
uvMat2.roughness = 1
uvMat2.specularIntensity = 0
uvMat2.metallic = 0
