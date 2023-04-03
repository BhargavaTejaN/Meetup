import {Switch, Route, Redirect} from 'react-router-dom'
import {Component} from 'react'

import Home from './components/Home'
import Register from './components/Register'
import NotFound from './components/NotFound'
import DataContext from './context/DataContext'

import './App.css'

class App extends Component {
  state = {
    name: '',
    activeTabId: '',
  }

  onChangeOption = activeTabId => {
    this.setState({activeTabId})
  }

  onChangeName = name => {
    this.setState({name})
  }

  render() {
    const {name, activeTabId} = this.state
    return (
      <DataContext.Provider
        value={{
          name,
          activeTabId,
          onChangeOption: this.onChangeOption,
          onChangeName: this.onChangeName,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </DataContext.Provider>
    )
  }
}

export default App
