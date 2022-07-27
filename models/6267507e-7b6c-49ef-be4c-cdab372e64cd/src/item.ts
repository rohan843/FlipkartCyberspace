import { CountdownTimerComponent, PirateCountdownTimerSystem } from './timer'

export type Props = {
  totalTime: number
  active: boolean
  onThreshold: Actions
  onTimeUp: Actions
}

type TimeValues = {
  seconds: number
}

type CountdownSync = {
  active: boolean
  currentTime: number
}

export default class Timer implements IScript<Props> {
  //activateClip = new AudioClip('sounds/NumpadPress.mp3')
  clip = new AudioClip('sounds/countdown.mp3')
  numberMaterial: Material

  init() {
    engine.addSystem(new PirateCountdownTimerSystem())
  }

  updateBoard(entity: Entity, newValue: number, playSound = true) {}

  spawn(host: Entity, props: Props, channel: IChannel) {
    const board = new Entity()
    board.setParent(host)
    board.addComponent(
      new Transform({
        position: new Vector3(0, 0, 0),
        scale: new Vector3(2, 2, 2)
      })
    )
    board.addComponent(new GLTFShape('6267507e-7b6c-49ef-be4c-cdab372e64cd/models/Countdown_Pirate_Board.glb'))

    const arrow = new Entity()
    arrow.setParent(host)
    arrow.addComponent(
      new Transform({
        rotation: Quaternion.Euler(90, 0, 0),
        position: new Vector3(0, 0.5, 0.01),
        scale: new Vector3(2, 2, 2)
      })
    )

    arrow.addComponent(new GLTFShape('6267507e-7b6c-49ef-be4c-cdab372e64cd/models/Countdown_Pirate_Arrow.glb'))

    let timeData = new CountdownTimerComponent(
      channel,
      props.totalTime,
      props.onTimeUp,
      props.onThreshold,
      props.active,
      arrow
    )

    board.addComponent(timeData)

    let audio = new AudioSource(this.clip)
    audio.loop = true
    board.addComponent(audio)

    if (props.active) {
      audio.playing = true
    }

    //this.updateBoard(board, props.initialVal, false)
    // handle actions
    const reset = () => {
      timeData.active = false
      timeData.currentTime = timeData.totalTime
      timeData.thresHoldReached = false
      timeData.endReached = false
      audio.playing = false
    }

    channel.handleAction<TimeValues>('addTime', e => {
      timeData.currentTime += e.values.seconds
      if (timeData.currentTime > timeData.totalTime / 3) {
        timeData.thresHoldReached = false
        timeData.endReached = false
      }
    })
    channel.handleAction<TimeValues>('subtractTime', e => {
      timeData.currentTime -= e.values.seconds
    })
    channel.handleAction('reset', () => reset())
    channel.handleAction('activate', () => {
      reset()
      timeData.active = true
      audio.playing = true
    })
    channel.handleAction('pause', () => {
      timeData.active = false
      audio.playing = false
    })
    channel.handleAction('toggleActivate', () => {
      timeData.active != timeData.active
      audio.playing = timeData.active
    })

    // sync initial values
    channel.request<CountdownSync>('countdown', count => {
      timeData.active = count.active
      timeData.currentTime = count.currentTime
      if (timeData.active) {
        audio.playing = true
      }
    })
    channel.reply<CountdownSync>('countdown', () => {
      const { active, currentTime } = board.getComponent(
        CountdownTimerComponent
      )
      return { active, currentTime }
    })

    if (props.active) {
    }
  }
}
