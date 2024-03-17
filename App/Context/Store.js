import { View, Text } from 'react-native'
import React from 'react'
import Context from './Context'
const Store = ({child}) => {
    const [authAction, setAuthAction] = React.useState(0)
  return (
    <Context.Provider value={{
        authAction,
        setAuthAction
    }}>
        {child}
    </Context.Provider>
  )
}

export default Store