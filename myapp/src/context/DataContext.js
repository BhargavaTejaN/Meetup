import React from 'react'

const DataContext = React.createContext({
  name: '',
  activeTabId: '',
  onChangeName: () => {},
  onChangeOption: () => {},
})

export default DataContext
