import React from 'react'

export const themes = {
  light: {
    beforeColor: '#1890ff',
    backgroundColor: '#fdfdfd',
    secondColor: 'rgba(243, 239, 239, 0.72)',
    backgroundText: '#000000'
  },
  dark: {
    beforeColor: '#1890ff',
    backgroundColor: '#001529',
    secondColor: 'rgba(0, 0, 0, 0.72)',
    backgroundText: '#FFFFFF'
  }
}

export const ThemeContext = React.createContext({
  theme: themes.dark,
  toggleTheme: () => {}
})
