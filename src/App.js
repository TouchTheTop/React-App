import React from 'react'
import './App.scss'
import './assets/iconfont/iconfont.css'
import Left from './frame/left'
import Right from './frame/right'
import { ThemeContext, themes } from './context/themes'
import '../node_modules/react-highlight/node_modules/highlight.js/styles/solarized-light.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.toggleTheme = () => {
      this.setState(state => ({
        theme: state.theme === themes.dark ? themes.light : themes.dark
      }))
    }
    this.state = {
      theme: themes.dark,
      toggleTheme: this.toggleTheme
    }
  }
  render() {
    return (
      <div className="App flex-row">
        <ThemeContext.Provider value={this.state}>
          <Left />
          <Right />
        </ThemeContext.Provider>
      </div>
    )
  }
}
export default App
