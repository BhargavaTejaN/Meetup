import {Component} from 'react'
import {withRouter} from 'react-router-dom'

import DataContext from '../../context/DataContext'
import './index.css'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

class Register extends Component {
  state = {
    showSubmitError: false,
  }

  onClickRegister = () => {
    const {history} = this.props
    history.replace('/')
  }

  render() {
    const {showSubmitError} = this.state
    return (
      <DataContext.Consumer>
        {value => {
          const {name, activeTabId, onChangeOption, onChangeName} = value

          const changeOption = event => {
            onChangeOption(event.target.value)
          }

          const changeName = event => {
            onChangeName(event.target.value)
          }

          const submitForm = event => {
            event.preventDefault()
            if (name === '') {
              this.setState({showSubmitError: true})
            } else {
              this.setState({showSubmitError: false})
            }
          }

          return (
            <div className="bg-container-2">
              <nav className="nav-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
                  alt="website logo"
                  className="website-logo"
                />
              </nav>
              <div className="main-container-2">
                <img
                  className="website-register"
                  alt="website register"
                  src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                />
                <form onSubmit={submitForm} className="form-container">
                  <h1 className="form-heading">Let us join</h1>
                  <label className="label" htmlFor="name">
                    NAME
                  </label>
                  <input
                    id="name"
                    placeholder="Your name"
                    type="text"
                    className="form-input"
                    value={name}
                    onChange={changeName}
                  />
                  <label className="label" htmlFor="topics">
                    TOPICS
                  </label>
                  <select
                    onChange={changeOption}
                    className="form-input"
                    id="topics"
                    value={activeTabId}
                  >
                    {topicsList.map(each => (
                      <option key={each.id} value={each.displayText}>
                        {each.displayText}
                      </option>
                    ))}
                  </select>
                  {name.length === 0 ? (
                    <button type="submit" className="button-register">
                      Register Now
                    </button>
                  ) : (
                    <button
                      onClick={this.onClickRegister}
                      type="submit"
                      className="button-register"
                    >
                      Register Now
                    </button>
                  )}
                  {showSubmitError && (
                    <p className="error-msg">Please enter your name</p>
                  )}
                </form>
              </div>
            </div>
          )
        }}
      </DataContext.Consumer>
    )
  }
}

export default withRouter(Register)
