import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import initialState from './initialState'

import ui from './ui'

const appReducer = combineReducers(
  {
    routing: routerReducer,
    ui,
  },
  initialState,
)

export default (state, action) => appReducer(state, action)
