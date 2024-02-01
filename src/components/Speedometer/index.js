import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  onIncrment = () => {
    const {count} = this.state
    if (count < 200) {
      this.setState(prevState => ({count: prevState.count + 10}))
    }
  }

  onDecrement = () => {
    const {count} = this.state
    if (count > 0) {
      this.setState(prevState => ({count: prevState.count - 10}))
    }
  }
  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading" alt="speedometer">
          SPEEDOMETER
        </h1>
        <img
          src="
                  https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />

        <h1 className="min-heading">
          Speed is 0mph<span>{count}</span>mph
        </h1>
        <p className="paragraph">Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button className="button1" type="button" onClick={this.onIncrment}>
            Accelerate
          </button>
          <button className="button2" type="button" onClick={this.onDecrement}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}
export default Speedometer
