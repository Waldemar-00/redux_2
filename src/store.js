import { createStore, bindActionCreators } from 'redux'
import reducer from './reducer'
import * as actions from './actions'
export const store = createStore(reducer)
export const actionsDispatch = bindActionCreators(actions, store.dispatch)
