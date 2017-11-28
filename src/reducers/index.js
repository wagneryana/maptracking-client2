import { combineReducers } from 'redux'
import { authReducer as auth } from 'redux-oauth2-frontend'

import categoria from './categoria-reducer'
import facultad from './facultad-reducer'
import theme from './theme-reducer'

let reducer = combineReducers({
    auth: auth,
    theme: theme,
    categoria: categoria,
    facultad: facultad,
})

export default reducer