// Write your code here
import {Component} from 'react'
import './index.css'

class DigitalTimer extends Component {
  state = {
    Timer: new Date(),
    stopTime: false,
    text: 25,
    seconds: 59,
    reset: 25,
    xxx: '',
  }

  componentDidMount = () => {
    this.TimerId = setInterval(this.timer, 1000)
  }

  timer = () => {
    const {seconds, text} = this.state

    this.setState({Timer: new Date()})
    this.setState(prevState => ({seconds: prevState.seconds - 1}))
    if (seconds < 0) {
      this.setState(prevState => ({text: prevState.text - 1, seconds: 59}))
    }
    const xxx = seconds < 10 ? 0 : seconds
    this.setState({xxx})
  }

  letStartTime = () => {
    clearInterval(this.TimerId)
    this.setState(prevState => ({stopTime: !prevState.stopTime}))
  }

  plusButton = () => {
    this.setState(prevState => ({text: prevState.text + 1}))
  }

  minusButton = () => {
    this.setState(prevState => ({text: prevState.text - 1}))
  }

  StopTime = () => {
    const {reset} = this.state
    this.setState({text: reset, seconds: 0})
  }

  render() {
    const {Timer, seconds, stopTime, text, reset, xxx} = this.state

    const letStop = stopTime
      ? 'https://assets.ccbp.in/frontend/react-js/play-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/pause-icon-img.png'

    const hidingName = stopTime ? 'Start' : 'Paused'

    const xx = stopTime ? 'Paused' : 'Running'

    return (
      <div className="bg-color">
        <h1 className="h">Digital Timer</h1>
        <div className="xx">
          <div className="bg-img">
            <div className="white-clock">
              <h1>
                {text}:{xxx < 10 ? `0${xxx}` : xxx}
              </h1>
              <p>{xx}</p>
            </div>
          </div>
          <div className="start-reset-imgs">
            <img onClick={this.letStartTime} src={letStop} alt="play icon" />
            <h1 className="start">{hidingName}</h1>
            <img
              onClick={this.StopTime}
              src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
              alt="reset icon"
            />
            <h1 className="start">Reset</h1>
          </div>
        </div>
        <div className="zz">
          <h1>Set Timer limit</h1>
          <div className="Buttons">
            <button onClick={this.plusButton} type="button">
              +
            </button>
            <p className="qq"> {text}</p>
            <button onClick={this.minusButton} type="button">
              -
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default DigitalTimer
