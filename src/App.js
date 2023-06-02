import {Component} from 'react'
import {AiOutlineBold} from 'react-icons/ai'
import {GoItalic} from 'react-icons/go'
import {FiUnderline} from 'react-icons/fi'

import './App.css'

// Replace your code here
class App extends Component {
  state = {italic: false, bold: false, decoration: false}

  clickToBold = () => {
    this.setState(prevState => ({bold: !prevState.bold}))
  }

  clickToDecoration = () => {
    this.setState(prevState => ({decoration: !prevState.decoration}))
  }

  clickToItalic = () => {
    this.setState(prevState => ({italic: !prevState.italic}))
  }

  render() {
    const {bold, decoration, italic} = this.state
    const boldClass = bold ? 'bold-btn' : ''
    const italicClass = italic ? 'italic-btn' : ''
    const decorationClass = decoration ? 'decoration-btn' : ''
    const afterClick = bold ? 'bolder' : ''
    const underline = decoration ? 'underline' : ''
    const intalick = italic ? 'italick' : ''
    return (
      <div className="bg-container">
        <div className="card-container">
          <div>
            <h1 className="heading">Text Editor</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
              width={350}
            />
          </div>
          <div className="right-container">
            <ul className="list-container">
              <li>
                <button
                  type="button"
                  className={`bold-btn ${afterClick}`}
                  onClick={this.clickToBold}
                  data-testid="bold"
                >
                  <AiOutlineBold />
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className={`italic-btn ${intalick}`}
                  onClick={this.clickToItalic}
                  data-testid="italic"
                >
                  <GoItalic />
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className={`decoration-btn ${underline}`}
                  onClick={this.clickToDecoration}
                  data-testid="underline"
                >
                  <FiUnderline />
                </button>
              </li>
            </ul>
            <hr />
            <textarea
              cols="10"
              rows="30"
              type="text"
              className={`input ${boldClass} ${italicClass} ${decorationClass}`}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App
