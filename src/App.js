import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import './App.css'

class App extends Component {
  state = {
    userInputs: [],
    usertext: '',
  }

  changeUserText = event => {
    this.setState({usertext: event.target.value})
  }

  addCharacters = () => {
    const {usertext} = this.state
    if (usertext !== '') {
      this.setState(prevState => ({
        userInputs: [
          ...prevState.userInputs,
          {
            id: uuidv4(),
            text: usertext,
          },
        ],
        usertext: '',
      }))
    }
  }

  render() {
    const {userInputs, usertext} = this.state
    return (
      <div className="two-containers">
        <div className="container-1">
          <div className="paragraph-text">
            <h1>Count the characters like a Boss...</h1>
          </div>
          <div>
            {userInputs.length === 0 ? (
              <div>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                  alt="no user inputs"
                  className="imageStyling"
                />
              </div>
            ) : (
              <ul className="ul-container">
                {userInputs.map(each => (
                  <li key={each.id}>
                    <p>
                      {each.text} : {each.text.length}
                    </p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className="container-2">
          <h1 className="heading">Character Counter</h1>
          <form onSubmit={this.addCharacters}>
            <input
              type="text"
              placeholder="Enter the Characters here"
              className="input-element-styling"
              onChange={this.changeUserText}
              value={usertext}
            />
            <button type="submit" className="button-styling">
              Add
            </button>
          </form>
        </div>
      </div>
    )
  }
}
export default App
