// Write your code here
import './index.css'

import {Component} from 'react'

class ShowHide extends Component {
  state = {first: false, last: false}

  lastname = () => {
    this.setState(prev => {
      const isClicked2 = prev.last

      if (isClicked2) {
        return {first: prev.first, last: false}
      }
      return {first: prev.first, last: true}
    })
  }

  firstNme = () => {
    this.setState(pr => {
      const isclicked1 = pr.first

      if (isclicked1) {
        return {first: false, last: pr.last}
      }
      return {first: true, last: pr.last}
    })
  }

  render() {
    const {first, last} = this.state

    return (
      <div>
        <h1 className="heading">Show/Hide</h1>
        <div className="apps">
          <div className="app1">
            <button className="butt" type="button" onClick={this.firstNme}>
              Show/Hide firstName
            </button>
            {first && (
              <div className="first-name">
                <p className="name">Joe</p>
              </div>
            )}
          </div>
          <div className="app2">
            <button className="butt" type="button" onClick={this.lastname}>
              Show/Hide LastName
            </button>
            {last && (
              <div className="first-name">
                <p className="name">Jonas</p>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
