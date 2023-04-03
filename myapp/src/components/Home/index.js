import {Link} from 'react-router-dom'
import {Component} from 'react'

import DataContext from '../../context/DataContext'
import './index.css'

class Home extends Component {
  render() {
    return (
      <DataContext.Consumer>
        {value => {
          const {name, activeTabId} = value
          return (
            <div className="bg-container">
              <nav className="nav-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
                  alt="website logo"
                  className="website-logo"
                />
              </nav>
              <div className="main-container">
                {name.length === 0 ? (
                  <h1 className="heading">Welcome to Meetup</h1>
                ) : (
                  <h1 className="heading">{`Hello ${name}`}</h1>
                )}
                {activeTabId.length === 0 ? (
                  <p className="description">Please register for the topic</p>
                ) : (
                  <p className="description">{`Welcome to ${activeTabId}`}</p>
                )}
                {name.length === 0 && (
                  <Link to="/register">
                    <button className="button" type="button">
                      Register
                    </button>
                  </Link>
                )}
                <img
                  src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                  className="meetup-img"
                  alt="meetup"
                />
              </div>
            </div>
          )
        }}
      </DataContext.Consumer>
    )
  }
}

export default Home
